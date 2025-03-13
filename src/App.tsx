import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contacts" element={<div>Contacts Page</div>} />
      </Routes>
    </>
  );
}

export default App;
