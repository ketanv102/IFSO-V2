import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaComment, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const DatingOldprofile = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden"
        style={{
          width: "386px",
          minHeight: "550px",
          background: "#121212",
          color: "#fff",
        }}
      >
        <div className="position-relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/ae91/8942/fb4ec57c1eff2e8eb5bdd1943c4db625?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sa4qkYeYWxRIyObD~P7ilpvpbIEUo1yggU3Z~lRRh84fMDDQrmbCg3Gj8WdLwBq06leV~Z6Joo8ai6ukRv2-e4K4aNv4KRH5DqdVrBhEOToFsnIDqDdEuyA2v3oEyq-Z43FEH2ZE-ixSi~Vvq0s4aZl6gfyRnS0h3Sm04yWTSxSrcSs5RL-s6TKTsp4X66dzhpxJ6-Op0dGQOz5en1ryiOF2Y~v9l6cE4qA6-CS39Yu-7FfHQ4Fu1WK6bzHVfug8SkHbGnjNsGpQboPeNUl~aVshsqLtaY~5~bEmInonD7k-nj~dLi-be7rQyE6GZayVcEI9iV~7svflujGPcaF8Bg__"
            alt="Profile"
            className="w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
            }}
          ></div>
        </div>

        <div className="px-3 position-relative mt-n5">
          <h5 className="fw-bold text-start">Kristin Watson, 25</h5>

          <p
            className="text-muted small mb-2 d-flex align-items-center"
            color="white"
          >
            <MdLocationOn color="red" className="me-1" /> Pune, 2.5km
          </p>

          <div className="d-flex flex-wrap mb-3">
            {["Music", "Travelling", "Pets", "Books"].map((tag, index) => (
              <span
                key={index}
                className="badge bg-dark text-light me-2 mb-2 px-3 py-2"
              >
                {tag}
              </span>
            ))}
            <span className="badge bg-secondary text-light px-3 py-2">+3</span>
          </div>

          <p className="small text-light text-start">
            Lorem ipsum triplasöskade sade nettokrati. Pöpena syopt. Du kan vara
            drabbad.
          </p>

          <div className="d-flex justify-content-around pb-3">
            <button className="btn btn-dark rounded-circle p-3">
              <FaTimes size={20} />
            </button>
            <button className="btn btn-secondary rounded-circle p-3">
              <FaComment size={20} />
            </button>
            <button className="btn btn-danger rounded-circle p-3">
              <FaHeart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingOldprofile;
