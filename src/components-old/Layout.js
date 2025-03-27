import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";
import Notifications_FollowRequest from "./Notifications_FollowRequest";
import Chat_More_Details from "../components/Chat More Details/Chat_More_Details";
import Create_Post_Single from "./Create Post Single/Create_Post_Single";
import Short_Posted from "./Short Posted/Short_Posted";
import Content_Selection from "./Content Selection/Content_Selection";
import ProfileFeedProduct from "./ProfileFeed_Product";
import ProfileFeed from "./ProfileFeed";
import { ContrastIcon } from "lucide-react";
import Profile_SingleFullPost from "./Profile_SingleFullPost";
import LoginPage from "./LoginPage";
import Existing from "./Existing";
import Create_Post from "./Create_Post";
import CreatePost_Preview from "./CreatePost_Preview";
import Notifications from "./Notifications";
import RoamSearch from "./RoamSearch";
import NewAccount_UserName from "./NewAccount_UserName";
import NewAccount_CreatePassword from "./NewAccount_CreatePassword";
import  CreateProductPost from "./CreateProductPost";
import Datinghome from "./Dating_Home";
import Create_Audio from "./Create Audio/Create_Audio";
import BrandWall from "./BrandWall";

const Layout = () => {
  return (
    <Container fluid className="bg-black">
      <Row>
        <Col md={3} className="p-0 d-none d-md-block">
          <SideBar />
        </Col>

        <Col md={9} className="p-0">
          <Container fluid>
            <Row className="">
              <Col
                md={5}
                className="m-auto p-0  Layout_custom-scrollbar"
                style={{ height: "100vh", overflowY: "scroll" }}
              >
                <CreateProductPost/>
                {/* <BrandWall/> */}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
