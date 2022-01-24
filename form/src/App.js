import FormInfoPersonnelle from "./components/FormInfoPersonnelle";
import LeftSide from "./components/LeftSide";

import styles from "./components/Wrapper.module.css";

import "./App.css";

const App = () => {
  return (
    <section className={styles.wrapper}>
      <LeftSide />
      <FormInfoPersonnelle />
    </section>
  );
};

export default App;
