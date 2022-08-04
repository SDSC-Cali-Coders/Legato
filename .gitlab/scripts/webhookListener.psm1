# X-Gitlab-Token sent in header to validate recieved payloads
# Will be injected in pipeline, manually set for local terminal testing
if (-not $env:X_GITLAB_TOKEN) {
    $tokenFilePath      = "$(git rev-parse --show-toplevel)/.gitlab/scripts/token2.txt";
    $env:X_GITLAB_TOKEN = Get-Content $tokenFilePath;
}

function Start-Listener {
    Param (
        [string[]]
        $Prefixes = 'http://localhost:5000/'
    )

    # Write callbacks to handle each endpoint
    Begin {
        # Call generic callback w/ {message='Goodbye!'} as the message
        $endCallback = {
            Param (
                [Parameter(Mandatory)]
                [System.Net.HttpListenerResponse]
                $response
            )

            $generalCallBack.Invoke($response, (@{message='Goodbye!'} | ConvertTo-Json));
        };

        # Generates and encodes a response from a JSON respBody
        $generalCallBack = {
            Param (
                [Parameter(Mandatory)]
                [System.Net.HttpListenerResponse]
                $response,

                [Parameter(Mandatory)]
                [string]
                $respBody = (@{message='Hello World'} | ConvertTo-Json)
            )

            # Set StatusCode and ContentType to 200 (Success) and application/json respectively
            $response.StatusCode    = 200;
            $response.ContentType   = 'application/json';

            # Encode JSON response in bytes and write to output stream (w/ proper length settings etc.)
            [byte[]] $respBuffer    = [System.Text.Encoding]::UTF8.GetBytes($respBody);

            $response.ContentLength64 = $respBuffer.Length;
            $response.OutputStream.Write($respBuffer, 0, $respBuffer.Length);

            # Close the output stream afterwards
            $response.OutputStream.Close();
        };

        # Call the generic callback w/ the request header (JSON) as the message
        $headerCallback = {
            Param (
                [Parameter(Mandatory)]
                [System.Net.HttpListenerResponse]
                $response,

                [Parameter(Mandatory)]
                [System.Net.HttpListenerRequest]
                $request
            )

            $Headers = @{};
            $request.Headers.AllKeys | ForEach-Object { 
                $Headers.Add($_, $request.Headers.Get($_));
            }

            $generalCallBack.Invoke($response, ($Headers | ConvertTo-Json))
        }

        # Callback to handle Gitlab webhooks triggered by events
        $webhookCallback = {
            Param (
                [Parameter(Mandatory)]
                [System.Net.HttpListenerResponse]
                $response,

                [Parameter(Mandatory)]
                [System.Net.HttpListenerRequest]
                $request
            )

            # Validate payload by checking X-Gitlab-Token in the HTTP Headers

            # Parse the payload and 
        }
    }

    Process {
        # Instantiate a listener on provided prefixes
        $httpListener = [System.Net.HttpListener]::new();

        # Process and add all provided prefixes to listener
        $Prefixes | ForEach-Object { 
            $prefix = $_;
            if ($prefix.Length -and -not $prefix.EndsWith('/')){
                $prefix += '/';
            }
            $httpListener.Prefixes.Add($prefix);
        }

        $httpListener.Start()

        while ($httpListener.IsListening) {
            # Synchronously wait for a request with BeginGetContext
            [System.Net.HttpListenerContext]$context    = $httpListener.GetContext();

            # Obtain request (to perform parsing on)
            # Construct a response (usually with logic involving parsed request)
            [System.Net.HttpListenerRequest]$request    = $context.Request;
            [System.Net.HttpListenerResponse]$response  = $context.Response;

            # Log request info + body to console
            [System.IO.StreamReader]$requestBodyReader  = [System.IO.StreamReader]::new($request.InputStream);
            Write-Output ("{0} - {1}:`n{2}`n" -f
                            $request.HttpMethod,
                            $request.Url,
                            $requestBodyReader.ReadToEnd());

            # Handle stopping the listener with an "/end" endpoint w/ regex matching
            switch -Regex ($request.Url) {
                '/end$' {
                    $endCallback.Invoke($response);
                    $httpListener.Stop();
                }
                '/comment-webhook$' {
                    $webhookCallback.Invoke($response, $request);
                }
                Default {
                    $headerCallback.Invoke($response, $request);
                }
            }
        }
    }
}

Export-ModuleMember -Function Start-Listener;