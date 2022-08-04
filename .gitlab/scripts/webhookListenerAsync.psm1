function Start-Listener {
    Param (
        [string[]]
        $Prefixes
    )

    Begin {
        # Define an AsyncCallback For BeginGetContext here
        $listenerCallback = [System.AsyncCallback]{
            Param (
                [System.IAsyncResult]
                $result
            )

            # Get listener from result
            [System.Net.HttpListener]$listener          = $result.AsyncState;

            # Call EndGetContext to complete the asynchronous operation
            [System.Net.HttpListenerContext]$context    = $listener.EndGetContext();

            # Obtain request (and perform parsing)
            [System.Net.HttpListenerRequest]$request    = $context.Request;

            # Log request info + body to console
            [System.IO.StreamReader]$requestBodyReader  = [System.IO.StreamReader]::new($request.InputStream);
            Write-Output ("{0] - {1} [{2}]:`n{3}" -f
                            $request.HttpMethod,
                            $request.Url,
                            $request.Headers.ToString(),
                            $requestBodyReader.ReadToEnd());

            # Handle stopping the listener with an "/end" endpoint w/ regex matching
            if ($request.Url -match '/end$') {
                $listener.Stop();
                break;
            }

            # Construct a response (usually with logic involving parsed request)
            [System.Net.HttpListenerResponse]$response  = $context.Response;

            # Set StatusCode and ContentType to 200 (Success) and application/json respectively
            $response.StatusCode    = 200;
            $response.ContentType   = 'application/json';

            # Encode JSON response in bytes and write to output stream (w/ proper length settings etc.)
            [string] $respBodyJson  = (@{
                message='Hello World';
            } | ConvertTo-Json);
            [byte[]] $respBuffer    = [System.Text.Encoding]::UTF8.GetBytes($respBodyJson);

            $response.ContentLength64 = $respBuffer.Length;
            $response.OutputStream.Write($respBuffer, 0, $respBuffer.Length);

            # Close the output stream afterwards
            $response.OutputStream.Close();
        };
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
            # Asynchronously wait for a request with BeginGetContext
            [System.IAsyncResult] $result = $httpListener.BeginGetContext($listenerCallback, $httpListener);

            # Other work can be done whilst waiting
            # However, a wait handle can be used if data from a request is needed
            Write-Output "Waiting for request to be processed asynchronously";
            $result.AsyncWaitHandle.WaitOne();

            Write-Output "Request finished asynchronous processing";
        }
    }
}

Export-ModuleMember -Function Start-Listener;