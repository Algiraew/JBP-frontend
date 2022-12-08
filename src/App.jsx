import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./App.module.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RegistrationForm } from "./components/auth/RegistrationForm";
import { LoginForm } from "./components/auth/LoginForm";
import { MainPage } from "./components/MainPage";
import About from "./pages/About";
import { useSelector } from "react-redux";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Support from "./pages/Support";

function App() {
  const { token } = useSelector((state) => state.auth);
  console.log(token);
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
