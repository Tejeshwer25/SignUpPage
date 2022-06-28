import styles from "./Modal.module.css";

const Modal = ({ data, setData, setUserSignedUp }) => {
  function logoutUser() {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      newsletter: false,
    });
    setUserSignedUp(false);
  }

  return (
    <div className={styles.modal}>
      <h2>You are signed Up...</h2>
      <h3>Here are your details: </h3>

      <p>
        First Name: <span>{data.firstName}</span>
      </p>
      <p>
        Last Name: <span>{data.lastName}</span>
      </p>
      <p>
        Email: <span>{data.email}</span>
      </p>
      <p>
        Password: <span>{data.password}</span>
      </p>
      <p>
        Newsletter subscription: <span>{data.newsletter ? "Yes" : "No"}</span>
      </p>

      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Modal;
