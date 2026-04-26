import styles from "./investment-strategies.module.css";

type Strategy = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

const strategies: Strategy[] = [
  {
    title: "Equity Funds",
    description:
      "Growth-oriented investments focusing on stock market appreciation for long-term wealth creation.",
    image: "/equity-mutual-fund.jpg",
    icon: "📈",
  },
  {
    title: "Debt Funds",
    description:
      "Stable returns with lower risk profiles, ideal for capital preservation and regular income streams.",
    image: "/debt-funds.png",
    icon: "🏦",
  },
  {
    title: "Hybrid Funds",
    description:
      "Balanced portfolios mixing equity and debt to match diverse risk appetites and goal timelines.",
    image: "/hybrid-funds.jpeg",
    icon: "⚖️",
  },
];

export default function InvestmentStrategies() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Investment Strategies</h2>
        <p className={styles.subheading}>
          Diverse mutual fund categories to match your risk profile and financial objectives.
        </p>

        <div className={styles.grid}>
          {strategies.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.icon}>{item.icon}</div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a href="#" className={styles.link}>
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}