import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  Offcanvas,
  ListGroup,
  InputGroup,
} from "react-bootstrap";
import Rectangle4 from "../Create Audio/Images/Rectangle 4.png";
import Rectangle from "../Create Audio/Images/Rectangle.png";
import {
  ArrowLeft2,
  PlayCircle,
  Text,
  Music,
  Gallery,
  SearchNormal1,
  TextUnderline,
  TextBold,
  TextBlock,
  TextalignLeft,
  CloseCircle,
  Trash,
  Save2,
  Setting2,
  Send2,
  Flash,
  Camera,
  Home2,
  Add,
  FlashSlash,
  Refresh2,
  Home,
  HeartAdd
} from "iconsax-react";
import Frame1 from "../Create Audio Align 1/Images/Frame1.png";
import Frame2 from "../Create Audio Align 1/Images/Frame2.png";
import Frame3 from "../Create Audio Align 1/Images/Frame3.png";
import Image1 from "../Create Audio/Images/image.png";
import Post1 from "../Chat More Details/Image/Post 1.png";
import Post2 from "../Chat More Details/Image/Post 2.png";
import Post3 from "../Chat More Details/Image/Post 3.png";
import Post4 from "../Chat More Details/Image/Post 4.png";
import Post5 from "../Chat More Details/Image/Post 5.png";
import Post6 from "../Chat More Details/Image/Post 6.png";
import Post7 from "../Chat More Details/Image/Post 7.png";
import Post8 from "../Chat More Details/Image/Post 8.png";
import Post9 from "../Chat More Details/Image/Post 9.png";
import Post10 from "../Create Audio/Images/Post 4.png";
import ProfilePic from "../Create Audio/Images/ProfilePic.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Rectangle1 from "../Create Audio/Images/Rectangle1.png"

const savedAudios = [
  {
    title: "BEST GUARD CREATION GEN @NBA2K",
    duration: "0.24 S",
    artist: "Cody Fisher",
    image:  Rectangle ,
  },
  {
    title: "Loukas Scouting 2021 | View All Episode #2",
    duration: "0.24 S",
    artist: "Kristin Watson",
    image:  Rectangle ,
  },
  {
    title: "NBA 2K update April 11, 2022 @NBA 2K Fan",
    duration: "0.24 S",
    artist: "Bessie Cooper",
    image:  Rectangle ,
  },
  {
    title: "NBA 2K update April 11, 2022 @NBA 2K Fan",
    duration: "0.24 S",
    artist: "Bessie Cooper",
    image:  Rectangle ,
  },
];

const audioList = [
  {
    title: "[FREE FOR PROFIT] Lonely Type Beat",
    duration: "0.24 S",
    artist: "Esther Howard",
    image:  Rectangle ,
  },
  {
    title: "Live ARK + Début, Best Music Mix Remixes",
    duration: "0.24 S",
    artist: "Courtney Henry",
    image:  Rectangle ,
  },
  {
    title: "[FREE FOR PROFIT] Lonely Type Beat",
    duration: "0.24 S",
    artist: "Esther Howard",
    image:  Rectangle ,
  },
  {
    title: "Live ARK + Début, Best Music Mix Remixes",
    duration: "0.24 S",
    artist: "Courtney Henry",
    image:  Rectangle ,
  },
];

const Posts = [
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post10,
  Post7,
  Post8,
  Post9,
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
];
const Create_Audio = () => {
  const [isEditingText, setIsEditingText] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [userText, setUserText] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isEditingMusic, setIsEditingMusic] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState(1);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPosted, setIsPosted] = useState(false);
  const [startCreating, setStartCreating] = useState(false);

  const showSuccessToast = () => {
    toast.success("Moment posted Successfully", {
      position: "top-center",
      // autoClose: 2000,
      hideProgressBar: true,
      // closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
      icon: "✅", 
      style: {
        background: "#5D5D5D",
        color: "#fff",
        borderRadius: "10px",
        padding: "8px 15px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "none",
        width: "16rem",
        minHeight: "42px",
        left: "1rem"
      },
    });
  };

  // Handle Text Done Click
  const handleDoneText = () => {
    setDisplayedText(userText);
    setIsEditingText(false);
  };

  // Handle Music Selection
  const handleAudioSelect = (audio) => {
    setSelectedAudio(audio);
    setIsEditingMusic(true);
    setShowOffcanvas(false);
  };

  // Handle Music Done Click
  const handleDoneMusic = () => {
    setIsEditingMusic(false);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowGallery(false);
  };

  const handlePost = () => {
    if (displayedText || selectedAudio || selectedImage) {
      setIsPosted(true);
      showSuccessToast();
    } else {
      console.log("Nothing to post");
    }
  };

  return (
    <Container
      fluid
      className="p-0 text-dark position-relative d-flex flex-column"
    >
      <div className="position-relative w-100 vh-100">
        <img
          src={Rectangle4}
          alt="Background"
          className="img-fluid w-100 h-100 object-fit-fill"
        />

      {
      !startCreating ? (
        // First screen with camera UI
        <>
          <div className="position-absolute top-0 p-3 text-white">
            <h5>Create Shorts</h5>
          </div>

          <div className="position-absolute bottom-0 w-100 d-flex flex-column align-items-center p-4" style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgb(0 0 0 / 81%), rgba(0, 0, 0, 0))"}}>
            {/* Camera buttons */}
            <div className="d-flex gap-4 mb-3">
            <Button variant="" className="rounded-circle p-2 border-0">
            <Gallery size="32" color="#fff" variant="Broken"/>              
            </Button>
              <Button variant="" className="rounded-circle p-2 border-0">
                <FlashSlash size="32" color="#fff" />
              </Button>
              <div className="rounded-circle" style={{ width: " 4.3rem", height: "4.3rem", backgroundColor: "#343a4085"
                }}>
              <Button
                variant="light"
                className="rounded-circle p-4 "
                onClick={() => setStartCreating(true)} 
                style={{marginTop: "0.5rem", marginLeft: "0.6rem"}}
               
              />
              </div>
              <Button variant="" className="rounded-circle p-2 border-0">
              <Refresh2 size="32" color="#fff"/>              
              </Button>
              <Button  variant="" className="rounded-circle p-2 border-0">
              <CloseCircle size="32" color="#fff" variant="Broken"/>
              </Button>
              
            </div>

            {/* Bottom Navigation */}
            <div className="d-flex justify-content-center gap-2">
              <Button variant="dark"  className="rounded-pill"  style={{width: "90px", height: "45px", backgroundColor: "black"}}>
                Moments
              </Button>
              <Button variant="" className="rounded-pill  text-white" style={{backgroundColor: "#676767", width: "90px", height: "45px"}}  >
                Post
              </Button>
              <Button variant="" className="rounded-pill  text-white" style={{backgroundColor: "#676767", width: "90px", height: "45px"}}>
                Shorts
              </Button>
              <Button variant="" className="rounded-pill  text-white" style={{backgroundColor: "#676767", width: "90px", height: "45px"}}>
                Products
              </Button>
            </div>

            {/* Bottom Icons */}
            <div className="d-flex justify-content-between w-100 p-3">
              <Home variant="Broken" size="28" color="#9B9B9B" />
              <SearchNormal1 variant="Broken" size="28" color="#9B9B9B" />
              <Add variant="Bold" size="28" color="#fff" />
              <HeartAdd size="28" color="#9B9B9B" variant="Broken"/>      
               <img
                        src={Rectangle1}
                        alt="User"
                        style={{
                          height: "1.8rem",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />      
              </div>
          </div>
        </>
      ) : isPosted ? (
          // UI for posted moment
          <div className="position-absolute top-0 w-100 vh-100">
            <img
              src={Rectangle4}
              alt="Background"
              className="img-fluid w-100 h-100 object-fit-fill"
            />
            <div className="position-absolute top-0 start-0 w-100 p-3 d-flex justify-content-between align-items-center mt-4">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="rounded-circle me-2"
                  width="40"
                />
                <h6 className="mb-0 text-white">You</h6>
                <small className="text-light">18h</small>
              </div>

              <div className="me-2">
                <CloseCircle size="32" color="#fff" />
              </div>
            </div>

            <div
              className="position-absolute top-0 end-0 p-3"
              style={{ width: "100%", height: "100%", pointerEvents: "none" }}
            >
              {displayedText && !isEditingText && (
                <div
                  className="p-3 rounded-4 text-white"
                  style={{
                    backgroundColor: "black",
                    fontSize: "12px",
                    display: "inline-block",
                    maxWidth: "7rem",
                    position: "absolute",
                    top: "15%",
                    right: "3%",
                    textAlign: "center",
                  }}
                >
                  {displayedText}
                </div>
              )}

              {/* Display Selected Music */}
              {selectedAudio && !isEditingMusic && (
                <div
                  className="d-flex flex-column align-items-end text-white"
                  style={{
                    position: "absolute",
                    top: "24%",
                    right: "4%",
                    textAlign: "center",
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={Rectangle}
                      alt="Audio"
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <PlayCircle size="16" variant="Bold" color="#fff" />
                    </div>
                  </div>
                  <h6
                    className="mt-1"
                    style={{ fontSize: "5px", fontWeight: "bold" }}
                  >
                    {selectedAudio.title}
                  </h6>
                  <p style={{ fontSize: "6px", opacity: "0.8" }}>
                    {selectedAudio.artist}
                  </p>
                </div>
              )}
            </div>

            <div
              className="position-absolute  p-3"
              style={{ width: "100%", height: "100%", pointerEvents: "none" }}
            >
              {selectedImage &&
                !showGallery && ( // Ensure showGallery is properly checked
                  <div
                    className="rounded-4 "
                    style={{
                      display: "inline-block",
                      maxWidth: "7rem",
                      position: "absolute",
                      top: "-34%",
                    }}
                  >
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </div>
                )}
            </div>
            <div
              className="position-absolute bottom-0 w-100 p-5 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "black", height: "6rem" }}
            >
              <div className="d-flex gap-3 ms-auto mb-3">
              <Trash variant="Broken" size="32" color="#fff" />
              <Save2 size="32" color="#fff" />
              <Setting2 variant="Broken" size="32" color="#fff" />
              <Send2 variant="Broken" size="32" color="#fff" />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header Section */}
            <div className="position-absolute w-100 d-flex justify-content-between p-3 top-0 mt-3">
              {/* Left Side Buttons */}
              {isEditingMusic ? (
                // Show "Change Audio" button when editing music
                <Button
                  variant=""
                  size="sm"
                  className="fw-bold rounded-3 text-white "
                  onClick={() => setShowOffcanvas(true)}
                >
                  Change Audio
                </Button>
              ) : isEditingText ? null : (
                // Show "ArrowLeft" button in default view
                <Button
                  variant=""
                  className="text-light border-0 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "34px",
                    height: "34px",
                    backgroundColor: "rgb(12 13 14 / 76%)",
                  }}
                >
                  <ArrowLeft2 size="32" color="#fff" />
                </Button>
              )}

              {/* Right Side Buttons */}
              {isEditingText || isEditingMusic ? (
                // Show "Done" button when editing text or music
                <Button
                  variant="light"
                  size="sm"
                  className="fw-bold rounded-3 text-black position-absolute end-0 me-4"
                  onClick={isEditingText ? handleDoneText : handleDoneMusic}
                >
                  Done
                </Button>
              ) : (
                // Show "Post" button in default view
                <Button
                  variant="light"
                  size="sm"
                  className="fw-bold rounded-3 text-black"
                  onClick={handlePost}
                >
                  Post
                </Button>
              )}
            </div>

            <div
              className="position-absolute top-0 end-0 p-3"
              style={{ width: "100%", height: "100%", pointerEvents: "none" }}
            >
              {displayedText && !isEditingText && (
                <div
                  className="p-3 rounded-4 text-white"
                  style={{
                    backgroundColor: "black",
                    fontSize: "12px",
                    display: "inline-block",
                    maxWidth: "7rem",
                    position: "absolute",
                    top: "12%",
                    right: "4%",
                    textAlign: "center",
                  }}
                >
                  {displayedText}
                </div>
              )}

              {/* Display Selected Music */}
              {selectedAudio && !isEditingMusic && (
                <div
                  className="d-flex flex-column align-items-end text-white"
                  style={{
                    position: "absolute",
                    top: "20%",
                    right: "4%",
                    textAlign: "center",
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={Rectangle}
                      alt="Audio"
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <PlayCircle size="16" variant="Bold" color="#fff" />
                    </div>
                  </div>
                  <h6
                    className="mt-1"
                    style={{ fontSize: "5px", fontWeight: "bold" }}
                  >
                    {selectedAudio.title}
                  </h6>
                  <p style={{ fontSize: "6px", opacity: "0.8" }}>
                    {selectedAudio.artist}
                  </p>
                </div>
              )}
            </div>

            <div
              className="position-absolute  p-3"
              style={{ width: "100%", height: "100%", pointerEvents: "none" }}
            >
              {selectedImage &&
                !showGallery && ( 
                  <div
                    className="rounded-4 "
                    style={{
                      display: "inline-block",
                      maxWidth: "7rem",
                      position: "absolute",
                      top: "-30%",
                    }}
                  >
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </div>
                )}
            </div>

            {/* Bottom Buttons */}
            {!isEditingText && !isEditingMusic && (
              <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 pb-5 mb-5 p-2">
                <Button
                  className="d-flex bg-secondary align-items-center p-3 gap-3 rounded-pill border border-0"
                  onClick={() => setIsEditingText(true)}
                >
                  <Text size="20" color="#fff" />
                  <label className="">Text</label>
                </Button>
                <Button
                  className="d-flex bg-secondary align-items-center p-3 gap-3 ms-1 rounded-pill border border-0"
                  onClick={() => setShowOffcanvas(true)}
                >
                  <Music size="20" color="#fff" />
                  <label className="">Music</label>
                </Button>
                <Button
                  className="d-flex bg-secondary align-items-center p-3 gap-3 ms-1 rounded-pill border border-0"
                  onClick={() => setShowGallery(true)}
                >
                  <Gallery size="20" color="#fff" />
                  <label className="">Add</label>
                </Button>
              </div>
            )}

            {/* Text Input Field */}
            {isEditingText && (
              <div className="position-absolute w-100 d-flex flex-column align-items-center pb-5 mb-5 bottom-0 ${isKeyboardOpen ? 'bottom-toolbar-above-keyboard' : 'bottom-toolbar'}">
                <Form.Control
                  type="text"
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  className="bg-transparent text-primary border-0 fs-4 text-center"
                  placeholder="Enter text..."
                  onFocus={() => setIsKeyboardOpen(true)}
                  onBlur={() => setIsKeyboardOpen(false)}
                />
                <div
                  className="d-flex justify-content-center gap-2 bg-black rounded-pill "
                  style={{ width: "21rem" }}
                >
                  <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0 w-3">
                    <Text color="#fff" />
                  </Button>
                  <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
                    <TextUnderline color="#fff" />
                  </Button>
                  <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
                    <TextBold color="#fff" />
                  </Button>
                  <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
                    <TextBlock color="#fff" variant="Bold" />
                  </Button>
                  <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
                    <img src={Image1} />
                  </Button>
                  <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
                    <TextalignLeft color="#fff" />
                  </Button>
                </div>
              </div>
            )}

            <div className="position-absolute bottom-0 d-flex flex-column align-items-center">
              {selectedAudio && isEditingMusic && (
                <div
                  className="position-absolute bottom-0 d-flex flex-column align-items-center"
                  style={{ marginBottom: "6rem", marginLeft: "9rem" }}
                >
                  <div
                    className="d-flex gap-2 justify-content-center mb-3"
                    style={{ marginLeft: "17rem" }}
                  >
                    <img
                      src={Frame1}
                      alt="Frame1"
                      className=""
                      onClick={() => setSelectedFrame(1)}
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={Frame2}
                      alt="Frame2"
                      className=""
                      onClick={() => setSelectedFrame(2)}
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={Frame3}
                      alt="Frame3"
                      className=""
                      onClick={() => setSelectedFrame(3)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  {/* Conditional Rendering */}
                  {selectedFrame === 1 && (
                    <div style={{ marginLeft: "17rem" }}>
                      <div>
                        <img
                          src={Rectangle}
                          alt="Default Display"
                          className="img-fluid"
                        />
                        <div
                          className="position-absolute d-flex justify-content-center align-items-center "
                          style={{
                            top: "46%",
                            left: "84%",
                            transform: "translate(-50%, -50%)",
                            width: "38",
                            height: "18px",

                            borderRadius: "50%",
                          }}
                        >
                          <PlayCircle size="24" variant="Bold" color="#fff" />
                        </div>
                      </div>
                      <h5
                        className="mt-2 text-white ms-2"
                        style={{ fontSize: "12px" }}
                      >
                        {selectedAudio.title}
                      </h5>
                      <p
                        className="text-center text-white me-3"
                        style={{ fontSize: "13px" }}
                      >
                        {selectedAudio.artist}
                      </p>
                    </div>
                  )}

                  {selectedFrame === 2 && (
                    <div
                      className="p-2 bg-dark text-white rounded d-flex align-items-center"
                      style={{
                        width: "382px",
                        height: "70px",
                        marginLeft: "17rem",
                      }}
                    >
                      <div>
                        <img
                          src={Rectangle}
                          alt="Rectangle Display"
                          className="rounded"
                          style={{
                            width: "40px",
                            height: "40px",
                            marginRight: "10px",
                          }}
                        />
                        <div
                          className="position-absolute d-flex justify-content-center align-items-center "
                          style={{
                            top: "73%",
                            left: "46%",
                            transform: "translate(-50%, -50%)",
                            width: "18px",
                            height: "18px",

                            borderRadius: "50%",
                          }}
                        >
                          <PlayCircle size="24" variant="Bold" color="#fff" />
                        </div>
                      </div>
                      <div className="text-start">
                        <h6
                          className="m-0"
                          style={{
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                            maxWidth: "230px",
                          }}
                        >
                          {selectedAudio.title}
                        </h6>
                        <p
                          className="m-0"
                          style={{ fontSize: "12px", color: "#bbb" }}
                        >
                          {selectedAudio.artist}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedFrame === 3 && (
                    <div className="text-center ">
                      <div className="position-relative">
                        <img
                          src={Rectangle}
                          alt="Circle Display"
                          className="rounded-circle"
                          style={{
                            width: "128px",
                            height: "128px",
                            marginLeft: "17rem",
                          }}
                        />
                        <div
                          className="position-absolute d-flex justify-content-center align-items-center top-50"
                          style={{
                            left: "74%",
                            transform: "translate(-50%, -50%)",
                            width: "40px",
                            height: "40px",

                            borderRadius: "50%",
                          }}
                        >
                          <PlayCircle size="24" variant="Bold" color="#fff" />
                        </div>
                      </div>
                      <h5
                        className="mt-2 text-white"
                        style={{
                          fontSize: "16px",
                          whiteSpace: "nowrap",
                          marginLeft: "16rem",
                        }}
                      >
                        {selectedAudio.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#fff",
                          marginLeft: "17rem",
                        }}
                      >
                        {selectedAudio.artist}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {showGallery && (
              <div
                className="position-absolute bottom-0 w-100 bg-dark text-white p-0"
                style={{ height: "50vh", overflowY: "auto" }}
              >
                <div className="d-flex flex-wrap flex-row">
                  {Posts.map((image, index) => (
                    <div
                      key={index}
                      class="col-4 mb-0 p-0"
                      style={{ width: "25%" }}
                    >
                      <img
                        src={image}
                        alt={`image ${index + 1}`}
                        width="100%"
                        onClick={() => handleImageSelect(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Music Selection Offcanvas */}
            <Offcanvas
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              placement="bottom"
              className="h-75 bg-dark"
            >
              <Offcanvas.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="bg-black border-0">
                    <SearchNormal1 size="18" color="#fff" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search Audio"
                    className="bg-black text-light border-0"
                  />
                </InputGroup>
                <h6 className="text-secondary">Saved Audios</h6>
                <ListGroup variant="flush">
                  {savedAudios.map((audio, index) => (
                    <ListGroup.Item
                      key={index}
                      onClick={() => handleAudioSelect(audio)}
                      className="d-flex align-items-center bg-transparent border-0 text-light"
                    >
                      <div className="position-relative">
                      <img
                        src={Rectangle}
                        alt="Thumbnail"
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                        <div className="position-absolute top-50 start-50" style={{transform: "translate(-98%, -50%)" }}>
                      <PlayCircle size="16" variant="Bold" color="#fff" />
                    </div>
                    </div>

                      <div className="flex-grow-1">
                        <p className="mb-0 fw-bold">{audio.title}</p>
                        <small className="text-secondary">
                          {audio.duration} | {audio.artist}
                        </small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="d-flex justify-content-between mt-3">
                  <h6 className="text-secondary">Audios</h6>
                  <Button variant="" className="p-0 text-white">
                    See More
                  </Button>
                </div>
                <ListGroup variant="flush">
                  {audioList.map((audio, index) => (
                    <ListGroup.Item
                      key={index}
                      onClick={() => handleAudioSelect(audio)}
                      className="d-flex align-items-center bg-transparent border-0 text-light"
                    >
                     <div className="position-relative">
                      <img
                        src={Rectangle}
                        alt="Thumbnail"
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                        <div className="position-absolute top-50 start-50" style={{transform: "translate(-98%, -50%"}}>
                      <PlayCircle size="16" variant="Bold" color="#fff" />
                    </div>
                    </div>

                      <div className="flex-grow-1">
                        <p className="mb-0 fw-bold">{audio.title}</p>
                        <small className="text-secondary">
                          {audio.duration} | {audio.artist}
                        </small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )
        }
       
        <ToastContainer />
      </div>

    </Container>
  );
};

export default Create_Audio;
