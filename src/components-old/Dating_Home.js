import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dating_home = () => {
  return (
    <div className="container mt-3" style={{ maxWidth: "400px" }}>
      <div className="d-flex overflow-auto mb-3">
        <div className="story active">You</div>
        <div className="story">Family</div>
        <div className="story">Friends</div>
      </div>

      <div className="card post-card">
        <div className="card-header d-flex align-items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/9ae3/6b3d/afdfbe660b37f32a11ae33f828cdefb2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UMDD~i73WAOEpXXeaWCC1h10Rlt3OIJL-iJbocu7-UwsV5abVOnVAE60KD40rsNOrtIRUHn7LXm0ObpoqYTJwotfHng6Pl7ezjDMjI8vRv73TCGWBqJLcpcP8xGEeJWQ0NajbAO2uuXgumqnvFwOBK8Kmw51JRS4-DHjk3drlD7HVF44j0JGtXbL3XjGUSECxM3qvOAM7~diHns4cY6tCQdJiDnSVYztMJTdiWnJw1Hlc7TCiK7Epgxw5lIzxOzPDx-r0aWqQk3uGTPpjUw636~FP4HQwdAU60E06Iiw7AeQh2uNO8TxAorG6mVdSusaUzElNZwauI4fv7sZ6gYQjQ__"
            className="rounded-circle me-2"
            alt="profile"
          />
          <span className="fw-bold">Kathryn Murphy</span>
          <span className="ms-auto">...</span>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/1092/3865/d6a3eeab9cb48076af0b97aaecd3c3fb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dCifCe6eBgpmqqWV-oN3tQys5vHW-25SuCtRynCfigFMOrXbwn86HYRTPi~sAB-BNJJLsMvB7yC6roZRlB-JyZC1BY1NhrFm1TXnEXpBS25SM~O9CmAh-OZNDioYnPVjFT7jRpL6WFDp2o4r0nRhMCUfFgJem~6V1kPq4shQQT995i0YonZ2pGgn8u0yKbviMum3QscchX1vqYwEvYqbStULToTsIldI-6jIEAjlmG8mu1~dx6S6GlCrK546QyV8~4qGmlIQ3yTwoOh45qzyceZZPl5alw5VwbpoyhNpMfiUmqa2uh2BDnbrVpHk-DAseOknnmF25qsj-kAqiYAJ3w__"
          className="card-img-top"
          alt="Post"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            <span className="me-2">❤️ 1.2k</span>
            <span className="me-2">💬 123</span>
            <span>🔁 5</span>
          </div>
          <p className="m-0">
            <strong>Annette Black</strong> Living life in the fast lane.✨
          </p>
          <a href="#" className="text-muted small">
            see all comments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dating_home;
