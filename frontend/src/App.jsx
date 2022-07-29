import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import { accessToken} from './api/spotify';
import AppRouter from './AppRouter';
const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);

function App(props) {

  /* CODE FOR US TO USE LATER TO CONNECT TO DB DO NOT DELETE
  useEffect(() => {
   async function fetchUser() {
     // when used on settings page, we wouldnt hardcode the profile.id
     //const id = params.id.toString();

     axios.get(`http://localhost:27017/user/${profile.id}`)
       .then(function (response) {
         // can access specific parts of data by doing ".{DATA}"
         console.log(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })
       .then(function () {
         console.log("always executed")
       })
   }
   if (!effectTriggeredRef.current && profile) {
     fetchUser();
     effectTriggeredRef.current = true;
   }
 }, [profile]);

 useEffect(() => {
   async function fetchNotifications() {
     // when used on notifications page, we wouldnt hardcode the profile.id
     //const id = params.id.toString();

     axios.get(`http://localhost:27017/notification/${profile.id}`)
       .then(function (response) {
         // can access specific parts of data by doing "[{# notification}.{DATA}"
         console.log(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })
       .then(function () {
         console.log("always executed")
       })
   }
   if (!effectTriggeredRef.current && profile) {
     fetchNotifications();
     effectTriggeredRef.current = true;
   }
 }, [profile]);

 */

  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          <AppRouter />
        </>
      ) : (
        <>
          <Login />
        </>
      )}

    </>
  );
}
export default App;