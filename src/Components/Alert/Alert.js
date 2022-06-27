const Alert = ({ error, setError }) => {
  return (
    <div
      style={{
        backgroundColor: "#d40000",
        color: "white",
        padding: "0.25rem 0rem",
        borderRadius: "5px",
      }}
    >
      <p>{error.errorMessage}</p>
      <button
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={() => setError({ errorMessage: "", errorStatus: false })} // closes the error message
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
