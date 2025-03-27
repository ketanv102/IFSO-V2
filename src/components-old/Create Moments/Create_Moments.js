// import React, { useState } from "react";
// import { Container, Button, Form } from "react-bootstrap";
// import Rectangle4 from "../Create Audio Align 1/Images/Rectangle 4.png";
// import Frame1 from "../Create Audio Align 1/Images/Frame1.png";
// import Frame2 from "../Create Audio Align 1/Images/Frame2.png";
// import Frame3 from "../Create Audio Align 1/Images/Frame3.png";
// import Rectangle from "../Create Audio Align 1/Images/Rectangle.png";
// import {
//   ArrowLeft2,
//   PlayCircle,
//   Text,
//   Music,
//   Gallery,
//   TextUnderline,
//   TextBold,
//   TextBlock,
//   TextalignLeft,
// } from "iconsax-react";
// import Image1 from "../Create Audio/Images/image.png";

// const Create_Moments = () => {
//   const [isEditingText, setIsEditingText] = useState(false);
//   const [userText, setUserText] = useState("");
//   const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

//   return (
//     <Container
//       fluid
//       className="p-0 text-dark d-flex flex-column"
//       style={{ maxWidth: "425px" }}
//     >
//       <div className="position-relative vh-100">
//         <img
//           src={Rectangle4}
//           alt="Background"
//           className="img-fluid top-0 start-0 w-100 h-100 object-fit-cover"
//         />
//         <div
//           className="position-absolute top-0 start-0 w-100 d-flex align-items-center p-3"
//           style={{
//             zIndex: 10,
//             background:
//               "linear-gradient(to bottom,rgb(0 0 0 / 83%) ,rgb(84 84 84 / 0%))",
//           }}
//         ></div>
//         <div className="position-absolute w-100 d-flex justify-content-between p-3 top-0 mt-3">
//           {!isEditingText && (
//             <Button
//               variant=""
//               className="text-light border-0 rounded-circle d-flex align-items-center justify-content-center"
//               style={{
//                 width: "34px",
//                 height: "34px",
//                 backgroundColor: "rgb(12 13 14 / 76%)",
//               }}
//               onClick={() => setIsEditingText(true)}
//             >
//               <ArrowLeft2 size="32" color="#fff" />
//             </Button>
//           )}
//           <Button
//             variant="light"
//             size="sm"
//             className="fw-bold rounded-3 text-primary"
//             style={isEditingText ? { marginLeft: "21rem" } : {}}
//           >
//             {isEditingText ? "Done" : "Post"}
//           </Button>
//         </div>
//         {!isEditingText ? (
//           <>
//             <div
//               className="position-fixed bottom-0 start-50 translate-middle-x d-flex gap-2 pb-4 p-2"
//               style={{ width: "23rem" }}
//             >
//               <Button
//                 className="d-flex bg-secondary align-items-center p-3 gap-3 rounded-pill border border-0"
//                 style={{ width: "148px", height: "46px" }}
//                 onClick={() => setIsEditingText(true)}
//               >
//                 <Text
//                   size="20"
//                   color="#fff"
//                   variant="Broken"
//                   className="ms-2"
//                 />
//                 <label className="">Text</label>
//               </Button>
//               <Button
//                 className="d-flex bg-secondary align-items-center p-3 gap-3 ms-1 rounded-pill border border-0"
//                 style={{ width: "148px", height: "46px" }}
//               >
//                 <Music
//                   size="20"
//                   color="#fff"
//                   variant="Broken"
//                   className="ms-2"
//                 />
//                 <label className="">Music</label>
//               </Button>
//               <Button
//                 className="d-flex bg-secondary align-items-center p-3 gap-3 ms-1 rounded-pill border border-0"
//                 style={{ width: "148px", height: "46px" }}
//               >
//                 <Gallery
//                   size="20"
//                   color="#fff"
//                   variant="Broken"
//                   className="ms-2"
//                 />
//                 <label className="">Add</label>
//               </Button>
//             </div>
//           </>
//         ) : (
//           <div
//             className={
//               "position-absolute w-100 d-flex flex-column align-items-center p-5 bottom-0  ${isKeyboardOpen ? 'bottom-toolbar-above-keyboard' : 'bottom-toolbar'}"
//             }
//           >
//             <Form.Control
//               type="text"
//               value={userText}
//               onChange={(e) => setUserText(e.target.value)}
//               placeholder=""
//               className="bg-transparent text-primary border-0 fs-4 text-center"
//               style={{
//                 outline: "none",
//                 boxShadow: "none",
//                 bottom: isKeyboardOpen ? "100vh" : "0",
//                 marginBottom: "4rem",
//               }}
//               onFocus={() => setIsKeyboardOpen(true)}
//               onBlur={() => setIsKeyboardOpen(false)}
//             />

//             <div
//               className="d-flex justify-content-center gap-2 bg-black rounded-pill"
//               style={{ width: "21rem" }}
//             >
//               <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0 w-3">
//                 <Text color="#fff" />
//               </Button>
//               <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
//                 <TextUnderline color="#fff" />
//               </Button>
//               <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
//                 <TextBold color="#fff" />
//               </Button>
//               <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
//                 <TextBlock color="#fff" variant="Bold" />
//               </Button>
//               <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
//                 <img src={Image1} />
//               </Button>
//               <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
//                 <TextalignLeft color="#fff" />
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Create_Moments;

import React, {useState} from "react";
import { Container, Button, Form } from "react-bootstrap";
import Rectangle4 from "../Create Audio Align 1/Images/Rectangle 4.png";
import Frame1 from "../Create Audio Align 1/Images/Frame1.png";
import Frame2 from "../Create Audio Align 1/Images/Frame2.png";
import Frame3 from "../Create Audio Align 1/Images/Frame3.png";
import Rectangle from "../Create Audio Align 1/Images/Rectangle.png";
import {
  ArrowLeft2,
  PlayCircle,
  Text,
  Music,
  Gallery,
  TextUnderline,
  TextBold,
  TextBlock,
  TextalignLeft,
} from "iconsax-react";
import Image1 from "../Create Audio/Images/image.png";


const Create_Moments = () => {
  const [isEditingText, setIsEditingText] = useState(false);
  const [userText, setUserText] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  
  // Text formatting states
  const [isBold, setIsBold] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [fontSize, setFontSize] = useState("24px");
  const [textAlign, setTextAlign] = useState("center");
  const [textBlockStyle, setTextBlockStyle] = useState("");
  
  // Function to handle Done button click
  const handleDoneClick = () => {
    // Save the current text for display
    setDisplayedText(userText);
    // Exit editing mode
    setIsEditingText(false);
  };
  
  // Function to toggle text size
  const handleTextSizeToggle = () => {
    setFontSize(prev => prev === "24px" ? "36px" : prev === "36px" ? "48px" : "24px");
  };
  
  // Function to toggle text alignment
  const handleTextAlignToggle = () => {
    setTextAlign(prev => prev === "center" ? "left" : prev === "left" ? "right" : "center");
  };
  
  // Function to toggle text block style
  const handleTextBlockToggle = () => {
    setTextBlockStyle(prev => prev === "" ? "uppercase" : prev === "uppercase" ? "italic" : "");
  };
  
  // Generate text style object based on current formatting states
  const getTextStyles = () => {
    return {
      position: "absolute",
      left: "22rem",  // Centers the text
      top: "15vh",  // Positions text based on viewport height
      transform: "translateX(-50%)", // Ensures proper centering
      color: "#fff",
      fontSize: "13px",
      fontWeight: isBold ? "bold" : "normal",
      textDecoration: isUnderlined ? "underline" : "none",
      textAlign: "center",
      textTransform: textBlockStyle === "uppercase" ? "uppercase" : "none",
      fontStyle: textBlockStyle === "italic" ? "italic" : "normal",
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    //   maxWidth: "80%", // Ensures text fits on smaller screens
      wordWrap: "break-word",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
      borderRadius: "15px",
      padding: "8px 12px",
      lineHeight: "1.3",
      display: "inline-block",
      width: "7rem"
    };
  };
  

  return (
    <Container
      fluid
      className="p-0 text-dark d-flex flex-column"
      style={{ maxWidth: "425px" }}
    >
      <div className="position-relative vh-100">
        <img
          src={Rectangle4}
          alt="Background"
          className="img-fluid top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div
          className="position-absolute top-0 start-0 w-100 d-flex align-items-center p-3"
          style={{
            zIndex: 10,
            background:
              "linear-gradient(to bottom,rgb(0 0 0 / 83%) ,rgb(84 84 84 / 0%))",
          }}
        ></div>
        <div className="position-absolute w-100 d-flex justify-content-between p-3 top-0 mt-3">
          {!isEditingText && (
            <Button
              variant=""
              className="text-light border-0 rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "rgb(12 13 14 / 76%)",
              }}
              onClick={() => setIsEditingText(true)}
            >
              <ArrowLeft2 size="32" color="#fff" />
            </Button>
          )}
          <Button
            variant="light"
            size="sm"
            className="fw-bold rounded-3 text-primary"
            style={isEditingText ? { marginLeft: "21rem" } : {}}
            onClick={isEditingText ? handleDoneClick : undefined}
          >
            {isEditingText ? "Done" : "Post"}
          </Button>
        </div>

        {/* Display the saved text with applied styling */}
        {!isEditingText && displayedText && (
          <div 
            className="position-absolute p-3" 
            style={getTextStyles()}
          >
            {displayedText}
          </div>
        )}
        
        {!isEditingText ? (
          <>
        <div
          className="position-fixed bottom-0 start-50 translate-middle-x d-flex gap-2 pb-4 p-2"
          style={{ width: "23rem" }}
        >
          <Button
            className="d-flex bg-secondary align-items-center p-3 gap-3 rounded-pill border border-0"
            style={{ width: "148px", height: "46px" }}
            onClick={() => setIsEditingText(true)}
          >
            <Text size="20" color="#fff" variant="Broken" className="ms-2" />
            <label className="">Text</label>
          </Button>
          <Button
            className="d-flex bg-secondary align-items-center p-3 gap-3 ms-1 rounded-pill border border-0"
            style={{ width: "148px", height: "46px" }}
          >
            <Music size="20" color="#fff" variant="Broken" className="ms-2" />
            <label className="">Music</label>
          </Button>
          <Button
            className="d-flex bg-secondary align-items-center p-3 gap-3 ms-1 rounded-pill border border-0"
            style={{ width: "148px", height: "46px" }}
          >
            <Gallery size="20" color="#fff" variant="Broken" className="ms-2" />
            <label className="">Add</label>
          </Button>
        </div>
      </>
    ) : (
        <div
          className={
            `position-absolute w-100 d-flex flex-column align-items-center p-5 bottom-0 ${isKeyboardOpen ? 'bottom-toolbar-above-keyboard' : 'bottom-toolbar'}`
          }
        >
          <Form.Control
            type="text"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder=""
            className="bg-transparent text-primary border-0 fs-4 text-center"
            style={{
              outline: "none",
              boxShadow: "none",
              bottom: isKeyboardOpen ? "100vh" : "0",
              marginBottom: "4rem",
              fontWeight: isBold ? "bold" : "normal",
              textDecoration: isUnderlined ? "underline" : "none",
              textAlign: textAlign,
              textTransform: textBlockStyle === "uppercase" ? "uppercase" : "none",
              fontStyle: textBlockStyle === "italic" ? "italic" : "normal",
              fontSize: fontSize
            }}
            onFocus={() => setIsKeyboardOpen(true)}
            onBlur={() => setIsKeyboardOpen(false)}
          />

          <div
            className="d-flex justify-content-center gap-2 bg-black rounded-pill"
            style={{ width: "21rem" }}
          >
            <Button 
              className={`mt-2 mb-2 rounded-4 ${fontSize !== "24px" ? "bg-primary" : "bg-secondary"} border border-0 w-3`}
              onClick={handleTextSizeToggle}
            >
              <Text color="#fff" />
            </Button>
            <Button 
              className={`mt-2 mb-2 rounded-4 ${isUnderlined ? "bg-primary" : "bg-secondary"} border border-0`}
              onClick={() => setIsUnderlined(!isUnderlined)}
            >
              <TextUnderline color="#fff" />
            </Button>
            <Button 
              className={`mt-2 mb-2 rounded-4 ${isBold ? "bg-primary" : "bg-secondary"} border border-0`}
              onClick={() => setIsBold(!isBold)}
            >
              <TextBold color="#fff" />
            </Button>
            <Button 
              className={`mt-2 mb-2 rounded-4 ${textBlockStyle !== "" ? "bg-primary" : "bg-secondary"} border border-0`}
              onClick={handleTextBlockToggle}
            >
              <TextBlock color="#fff" variant="Bold" />
            </Button>
            <Button className="mt-2 mb-2 rounded-4 bg-secondary border border-0">
              <img src={Image1} />
            </Button>
            <Button 
              className={`mt-2 mb-2 rounded-4 ${textAlign !== "center" ? "bg-primary" : "bg-secondary"} border border-0`}
              onClick={handleTextAlignToggle}
            >
              <TextalignLeft color="#fff" />
            </Button>
          </div>
        </div>
      )}
    </div>
  </Container>
);
};


export default Create_Moments;
