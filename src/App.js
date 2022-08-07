import Nav from "./pages/home/Nav";
import styles from "./styles/Home.module.css"
function App() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainNavigation}>

      </div>
      <div className={styles.dalhe}>

        <Nav />
      </div>
    </div>
  );
}

export default App;
