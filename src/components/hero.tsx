import styles from "./hero.module.css";

interface HeroProps {
  badge: string,
  title: string,
  highlight: string,
  description?: string,
  image: string,
}


const HeroSection = ({
  badge,
  title,
  highlight,
  description,
  image
}: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            {/* AMFI REGISTERED DISTRIBUTOR */}
            {badge}
          </div>

          <h1 className={styles.title}>
            {/* Secure Your Future with Expert
            <span>Mutual Fund</span> Distribution */}
            {title}
          </h1>

          <p className={styles.description}>
            {/* Empowering your financial journey with data-driven insights and
            personalized mutual fund strategies tailored to your long-term
            wealth goals. */}
            {highlight}
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Start Investing Now →
            </button>
            <button className={styles.secondaryBtn}>
              View Performance
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageCard}>
            {/* Replace with your image later */}
            <img
              // src="/hero-img.jpg"
              src={image}

              alt="team"
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;