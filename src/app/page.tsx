import Hero from "./component/Hero";
import styles from "./Home.module.css"; // Import your CSS file

export default function Home() {
  return (
    <div className={styles.background}>
      <Hero />
    </div>
  );
}
