import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>
        The best offer <span>for your business</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc odio,
        malesuada sit amet tincidunt et, mattis ut nisl. Aliquam erat volutpat.
        Suspendisse dapibus lacinia tellus, a consequat urna venenatis id.
      </p>
    </div>
  );
};

export default Hero;
