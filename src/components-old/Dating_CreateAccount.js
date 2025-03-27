export default function Dating_CreateAccount() {
  return (
    <div
      className="d-flex flex-column align-items-center vh-100 w-100"
      style={{ padding: "5vh 0", color: "black" }}
    >
      <div className="w-75">
        <div
          className="progress mb-3 w-100"
          style={{ height: "4px", background: "#333" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: "100%",
              background: "linear-gradient(to right, #EA5050, #AC28A8)",
            }}
          ></div>
        </div>
        <label
          className="fw-light text-start w-100 d-block mb-1"
          style={{ color: "black" }}
        >
          Use a different Username
        </label>
      </div>

      <div className="w-75">
        <input
          type="text"
          placeholder="Username"
          className="form-control bg-dark text-light border-0 p-3 rounded-3"
          style={{ fontSize: "16px", color: "white" }}
        />
      </div>

      <div
        className="d-flex justify-content-between  mt-auto "
        style={{ width: "22rem", height: "4rem" }}
      >
        <button className="btn btn-dark px-4 py-2 rounded-4 fw-bold w-50 me-2">
          Same As Profile
        </button>
        <button
          className="btn btn-primary px-4 py-2 w-50 rounded-4"
          style={{
            background: "linear-gradient(to right, #EA5050, #AC28A8)",
            border: "none",

            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
