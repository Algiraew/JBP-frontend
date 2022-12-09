import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import styles from "./App.module.scss"
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";
import Category from "./components/categories/Category";
import Footer from "./components/footer/Footer";
import { Routes, Route, } from 'react-router-dom';
import About from "./components/about/About";
import BlankPage from './components/blankPage/BlankPage';
// import Category from "./components/categories/Category";
// import Cart from "./components/Cart/Cart";
// import ComparePhone from "./components/Phone/Compare/ComparePhone";
import CarouselBox from "./components/Carousel/Carousel.box";
import YandexMap from "./components/about/YandexMap";
import Cart from "./components/Cart/Cart";
import ComparePhone from "./components/Phone/Compare/ComparePhone";
import PhoneCard from "./components/Phone/phoneCards/PhoneCard";
import NewsPage from "./components/NewsPage/NewsPage";
import { useSelector } from "react-redux";


function App() {
const {token} = useSelector((state) => state.auth)
 
  return (
    <div className={styles.App}>
      <Header />
      <Routes>

      < Route path="/card" element = {<Cart/>}/>
       <Route path="/ComparePhone" element ={<ComparePhone/>}/> 
       <Route path="/phoneCards" element = {<PhoneCards/>}/>
        <Route path="/comparison" element = {< BlankPage/>} />
        <Route path='/products' element = {<Category/>}/>
        <Route path='/about' element = {<About/>} />
        <Route path='/noPage' element = {<BlankPage/>} />
        <Route path="/news" element = {<NewsPage/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
