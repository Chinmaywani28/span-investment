import styles from "./about.module.css";

const cardsData = [
  {
    title: "Our Mission",
    desc: "Accessible financial growth for all.",
    icon: "/signal-cellular-1-fill.svg",
  },
  {
    title: "Our Vision",
    desc: "The most trusted local distributor.",
    icon: "/focus-2-line.svg",
  },
  {
    title: "Our Values",
    desc: "Integrity and client-first approach.",
    icon: "/shake-hands-line.svg",
  },
];

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <h2>About WealthGuard</h2>
          <p>
            With over two decades of experience, we are committed to client
            wealth creation through disciplined investment strategies and
            unwavering integrity. Our mission is to provide accessible financial
            growth for everyone, ensuring that every investor can achieve their
            dreams with confidence.
          </p>

          <div className={styles.stats}>
            <div>
              <h3>20+</h3>
              <span>YEARS EXPERIENCE</span>
            </div>
            <div>
              <h3>5k+</h3>
              <span>HAPPY CLIENTS</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {cardsData.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.icon} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}