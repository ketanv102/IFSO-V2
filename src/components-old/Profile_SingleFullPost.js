import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import SinglPost from '../Resourceas/Images/SinglPost.png'
import SinglFullPost from '../Resourceas/Images/SinglFullPost.png'
import { Location, Like1, Messages2, Send2, Bookmark2, Music , UserTag} from 'iconsax-react';
import "../CSS/App.css";


const posts = [
  {
    id: 1,
    name: "Kathryn Murphy",
    location: "Portland, Illinois",
    likes: "12k",
    comments: "123",
    shares: "5",
    time: "12m ago",
    caption: "living life in the fast lane.",
    userImg: SinglPost,
    postImg: SinglFullPost
  },
  {
    id: 2,
    name: "Annette Black",
    location: "New York, USA",
    likes: "8.5k",
    comments: "89",
    shares: "3",
    time: "1h ago",
    caption: "Enjoying the city vibes!",
    userImg: SinglPost,
    postImg: SinglFullPost
  },
];





const Profile_SingleFullPost = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-center m-0">
        <div className="col-12 px-0"> 
          {posts.map((post) => (
            <div key={post.id} className="bg-black text-white rounded-lg mb-4">
              
              <div className="d-flex flex-column">
               
                <div className="d-flex align-items-start justify-content-between w-100 mb-3 p-3">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <div className="gradient-border-container">
                        <div className="rounded-circle overflow-hidden gradient-border-inner" style={{ width: '32px', height: '32px' }}>
                          <img src={post.userImg} alt="Profile" className="w-100 h-100 object-fit-cover" />
                        </div>
                      </div>
                      <h5 className="fw-semibold" style={{ fontSize: "14px", marginLeft: "2px" }}>{post.name}</h5>
                    </div>
                    <div className="d-flex align-items-center gap-1" style={{ marginLeft: "44px", marginTop: "-13px" }}>
                      <Location size="16" color="#FF8A65" variant="Broken" />
                      <p className="text-secondary mb-0 small">{post.location}</p>
                    </div>
                  </div>
                  <button className="border-0 bg-black fs-5 fw-bold text-white">•••</button>
                </div>

            
                <div className="position-relative rounded mb-3">
                  <img src={post.postImg} alt="Post content" className="w-100" style={{ objectFit: "cover" }} />
                </div>

                <div className="d-flex justify-content-between align-items-center p-3">
                  <div className="d-flex gap-3">
                    <button className="border-0 bg-transparent d-flex align-items-center gap-2">
                      <Like1 size="32" color="White" variant="Bold" className="FullPost_Button" />
                      <span className="text-white">{post.likes}</span>
                    </button>
                    <button className="border-0 bg-transparent d-flex align-items-center gap-2">
                      <Messages2 size="32" color="White" variant="Broken" className="FullPost_Button" />
                      <span className="text-white">{post.comments}</span>
                    </button>
                    <button className="border-0 bg-transparent d-flex align-items-center gap-2">
                      <Send2 size="32" color="White" variant="Broken" className="FullPost_Button" />
                      <span className="text-white">{post.shares}</span>
                    </button>
                  </div>
                  <button className="border-0 bg-transparent">
                    <Bookmark2 size="32" color="White" variant="Broken" className="Bookmark_Button" />
                  </button>
                </div>

             
                <div className="text-white text-start ms-3">
                  <p className="mb-1">
                    <span className="fw-semibold" >{post.name}</span> {post.caption}
                  </p>
                  <p className="text-secondary small mb-0">
                    <span className="cursor-pointer">see all comments</span>
                  </p>
                  <p className="text-secondary small mb-0">
                    <span className="cursor-pointer">{post.time}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile_SingleFullPost 