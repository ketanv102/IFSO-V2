import { useEffect, Fragment } from "react";

// libraries import
import "../src/CSS/App.css";
import "vuesax/dist/vuesax.css";
import Vuesax from "vuesax";
import Vue from "vue";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setToken } from "./features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { connect } from 'react-redux'


// components import
// import Basic from "./components/primaryComponents/basic";
import LoginPage from "./pages/Login/LoginPage";
import OtpVerification from "./pages/Login/OtpVerification";
import StartPage from "./pages/Registration/StartPage";
// import Existing from "./components/Existing";
// import Existing_Fresh from "./components-old/Existing_Fresh";
// import NameInput from "./components-old/ExistingFresher_Name";
import AddName from "./pages/Registration/AddName";
import AddUsername from "./pages/Registration/AddUsername";
import AddDob from "./pages/Registration/AddDob";
// import ExistingFresher_DOB from "./components/ExistingFresher_DOB";
// import ExistingFresher_CreatePassword from "./components/ExistingFresher_CreatePassword";
// import New_Account from "./components/New_Account";
// import NewAccount_AddName from "./components/NewAccount_AddName";
// import NewAccount_UserName from "./components/NewAccount_UserName";
// import NewAccount_DOB from "./components/NewAccount_DOB";
// import NewAccount_CreatePassword from "./components/NewAccount_CreatePassword";
import NotificationsPage from "./components-old/Notifications_FollowRequest";
import FollowRequests from "./pages/Notification/NotificationFollowRequest";
import Notifications from "./components-old/Notifications";
import AllNotifications from "./pages/Notification/AllNotifications";
// import SideBar from "./components/SideBar";
// import Layout from "./components/Layout";
// import Profile_SingleFullPost from "./components/Profile_SingleFullPost";
import Chat from "./components-old/Chat/Chat";
import ChatRoom from "./pages/Chat/ChatRoom";
// import Chat_More_Details from "./components/Chat More Details/Chat_More_Details";
// import Chat_Video from "./components/Chat Video/Chat_Video";
// import Chat_Audio from "./components/Chat Audio/Chat_Audio";
// import Create_Post_Single from "./components/Create Post Single/Create_Post_Single";
import ChatList from "./pages/Chat/ChatList";
// import Messages from "./components-old/Messages";
// import RoamSearch from "./components/RoamSearch";
// import Short_Posted from "./components/Short Posted/Short_Posted";
// import Content_Selection from "./components/Content Selection/Content_Selection";
// import Profile_Feed_Multiple_Account_Arrow from "./components/Profile Feed(Multiple Account)/Profile_Feed_Multiple_Account_Arrow";
// import Create_Post from "./components/Create_Post";
// import CreatePost_Preview from "./components/CreatePost_Preview";
// import CreateProduct from "./components/CreateProduct";
// import ProfileFeed from './components/ProfileFeed';
// import Dating_home from "./components/Dating_Home";
// import Dating_View from "./components/Dating_View";
// import DatingProfile from "./components/Dating_CreateProfile";
// import DatingOldprofile from "./components/Dating_OldProfile";
// import ProfileFeed_Product from "./components/ProfileFeed_Product";
// import DatingcreateAccount from "./components/Dating_CreateAccount";
// import Dating_AddBio from "./components/Dating_AddBio";
// import Dating_ProfileCreated_Sucess from "./components/Dating_ProfileCreated_Sucess";
// import Dating_MenuModal from "./components/Dating_MenuModal";
// import Create_Audio_Align_1 from "./components/Create Audio Align 1/Create_Audio_Align_1";
// import Create_Audio from "./components/Create Audio/Create_Audio";
// // import { useEffect } from "react";
// import Create_Moments from "./components/Create Moments/Create_Moments";
// import BrandWall from "./components/BrandWall";
// import CreateProductPost from "./components/CreateProductPost";
// import Profile_CreatorPanel from "./components/Profile_CreatorPanel";


Vue.use(Vuesax);
function App({ authToken, setToken, role, registrationStep, tokenData }) {
  console.log('role: ', role)
  console.log('authToken: ', authToken)
  const validateToken = () => {
    if (authToken) {
      console.log("authtoken is not available from store.");
      return true
    }
    else {
      console.log("getting token from local storage");

      const token = localStorage.getItem('token')
      console.log('token: ', token)
      const tokenData = token ? jwtDecode(token) : false
      console.log('tokenData: ', tokenData)
      if (tokenData && new Date(tokenData.exp * 1000) > new Date()) {
        if (
          tokenData?.userInfo?.hasOwnProperty("ID") &&
          tokenData?.userInfo?.hasOwnProperty("RoleID")
        ) {
          setToken({ authToken: token });
          console.log("success");
          return true;
        } else {
          console.log("something went wrong in token !!!");
          return false;
        }
      } else {
        console.log("token data is missing or token might be expired !!");
        return false;
      }
    }
  };

  const userLoggedIn = validateToken();
  console.log("userLogged In: ", userLoggedIn);

  useEffect(() => {
    console.log("show registration step: ", registrationStep);
    if (registrationStep !== null) {
      console.log("registratin step is not null !!");
    }
  }, [registrationStep]);

  return (
    // <div className="App">
    <>
      <BrowserRouter>
        <Routes>
          {!userLoggedIn && (
            <>
              {console.log("! userLoggedIn")}
              <Route path="*" element={<LoginPage />} />
              {/* <Route path="/basic" element={<Auth />} /> */}
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/OtpVerification" element={<OtpVerification />} />
              <Route path="/Existing" element={<StartPage />} />
              {/* <Route path="/Existing" element={<Existing />} /> */}
              {/* <Route path="/Existing_Fresh" element={<Existing_Fresh />} /> */}
              {/* <Route path="/ExistingFresher_Name" element={<NameInput />} /> */}
              <Route path="/ExistingFresher_Name" element={<AddName />} />
              <Route path="/ExistingFresher_UserName" element={<AddUsername />} />
              <Route path="/ExistingFresher_DOB" element={<AddDob />} />
              {/* <Route path="/ExistingFresher_CreatePassword" element={<ExistingFresher_CreatePassword />} /> */}
              {/* <Route path="/New_Account" element={<New_Account />} /> */}
              {/* <Route path="/NewAccount_AddName" element={<NewAccount_AddName />} /> */}
              {/* <Route path="/NewAccount_UserName" element={<NewAccount_UserName />} /> */}
              {/* <Route path="/NewAccount_DOB" element={<NewAccount_DOB />} /> */}
              {/* <Route path="/NewAccount_CreatePassword" element={<NewAccount_CreatePassword />} /> */}
              <Route path="/Notifications_FollowRequest" element={<NotificationsPage />} />
              <Route path="/notification-follow-request" element={<FollowRequests />} />
              <Route path="/Notifications-old" element={<Notifications />} />
              <Route path="/Notifications" element={<AllNotifications />} />
              {/* <Route path="/SideBar" element={<SideBar />} /> */}
              {/* <Route path="/Layout" element={<Layout />} /> */}
              {/* <Route path="/Profile_SingleFullPost" element={<Profile_SingleFullPost />} /> */}
              <Route path="/Chat" element={<Chat />} />
              <Route path="/chat-room" element={<ChatRoom />} />
              {/* <Route path="/Dating_View" element={<Dating_View />} /> */}
              {/* <Route path="/Dating_Profile" element={<DatingProfile />} /> */}
              {/* <Route path="/DatingOldprofile" element={<DatingOldprofile />} /> */}
              {/* <Route path="/DatingcreateAccount" element={<DatingcreateAccount />} /> */}
              {/* <Route path="/Dating_AddBio" element={<Dating_AddBio />} /> */}
              {/* <Route path="/Dating_ProfileCreated_Sucess" element={<Dating_ProfileCreated_Sucess />} /> */}
              {/* <Route path="/Dating_MenuModal" element={<Dating_MenuModal />} /> */}
              {/* <Route path='/basic' element={<Auth />} /> */}
              {/* <Route path='/chat_more_details' element={<Chat_More_Details />} /> */}
              {/* <Route path='/chat_video' element={<Chat_Video />} /> */}
              {/* <Route path='/Chat_Audio' element={<Chat_Audio />} /> */}
              {/* <Route path='/create_post_single' element={<Create_Post_Single />} /> */}
              {/* <Route path="/Messages" element={<Messages />} /> */}
              <Route path="/Messages" element={<ChatList />} />
              {/* <Route path="/RoamSearch" element={<RoamSearch />} /> */}
              {/* <Route path="/short_posted" element={<Short_Posted />} /> */}
              {/* <Route path='/chat_more_details' element={<Chat_More_Details />} /> */}
              {/* <Route path='/create_product' element={<CreateProduct />} /> */}
              {/* <Route path='/profile_feed_multiple_account_arrow' element={<Profile_Feed_Multiple_Account_Arrow />} /> */}
              {/* <Route path="/create_audio_align_1" element={<Create_Audio_Align_1 />} /> */}
              {/* <Route path="/create_audio" element={<Create_Audio />} /> */}
              {/* <Route path="/create_moments" element={<Create_Moments />} /> */}
              {/* <Route path='/ProfileFeed' element={<ProfileFeed />} /> */}
              {/* <Route path='/ProfileFeed_Product' element={<ProfileFeed_Product />} /> */}
              {/* <Route path='/Dating_Home' element={<Dating_home />} /> */}
              {/* <Route path='/Create_Post' element={<Create_Post />} /> */}
              {/* <Route path='/CreatePost_Preview' element={<CreatePost_Preview />} /> */}
              {/* <Route path='/CreateProductPost' element={<CreateProductPost />} /> */}
              {/* <Route path='/CreateProduct' element={<CreateProduct />} /> */}
              {/* <Route path='/BrandWall' element={<BrandWall />} /> */}
              {/* <Route path='/Profile_CreatorPanel' element={<Profile_CreatorPanel />} /> */}
            </>
          )}
          {/* if user is logged in  */}
          {userLoggedIn && (
            <Fragment>
              {console.log("userLoggedIn")}

              {role === "Candidate" ||
                (tokenData?.userInfo?.RoleID === "Candidate" && (
                  <>
                    {console.log("userLoggedIn and role is Candidate")}
                  </>
                ))}
              {role === "ifsoBrand" && (
                <>{console.log("userLoggedIn and role is ifsoBrand")}</>
              )}
            </Fragment>
          )}
        </Routes>
      </BrowserRouter>
    </>
    // </div>
  );
}

// function Auth() {
//   return (
//     <div className="">
//       {/* <Basic /> */}
//     </div>
//   );
// }

const mapStateToProp = ({ auth }) => {
  const { authToken, role, registationStep, tokenData } = auth;

  return {
    authToken,
    role,
    registationStep,
    tokenData,
  };
};

const mapDispatchToProp = {
  setToken,
};

export default connect(mapStateToProp, mapDispatchToProp)(App);
