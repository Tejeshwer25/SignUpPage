import styles from "./SocialLogin.module.css";
import facebookIcon from "../../Assets/facebook.svg";
import googleIcon from "../../Assets/google.svg";
import twitterIcon from "../../Assets/twitter.svg";
import githubIcon from "../../Assets/github.svg";

const SocialLogin = () => {
  return (
    <div className={styles.socialLogin}>
      <p>or sign up with: </p>
      <div className={styles.socialLogin__action}>
        <img src={facebookIcon} alt="facebook" />
        <img src={googleIcon} alt="google" />
        <img src={twitterIcon} alt="twitter" />
        <img src={githubIcon} alt="github" />
      </div>
    </div>
  );
};

export default SocialLogin;
