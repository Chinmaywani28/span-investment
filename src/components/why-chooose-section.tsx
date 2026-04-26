import styles from './why-choose-section.module.css';

export default function WhyChooseSection() {
  return (
    <section className={styles.container}>
      {/* LEFT */}
      <div className={styles.left}>
        <h2 className={styles.heading}>Why Choose Span Investment?</h2>
        <p className={styles.subtext}>
          We differentiate ourselves by putting your needs at the core of our investment philosophy.
        </p>

        <div className={styles.feature}>
          <div className={styles.icon}>★</div>
          <div>
            <h4>Expertise</h4>
            <p>
              Certified financial advisors with deep market insights and regulatory knowledge.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.icon}>🛡️</div>
          <div>
            <h4>Transparency</h4>
            <p>
              Full disclosure of all portfolio details. No hidden fees or complex structures.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.icon}>👤</div>
          <div>
            <h4>Personalized</h4>
            <p>
              Portfolios customized to your specific life goals, risk tolerance, and time horizon.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.card}>
          <h3>Ready to take the first step?</h3>
          <p>
            Join thousands of investors who have already started their wealth-building journey with our expert guidance.
          </p>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />

          <button>Schedule a Consultation</button>
        </div>
      </div>
    </section>
  );
}