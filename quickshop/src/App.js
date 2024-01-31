import { Routes,BrowserRouter as Router,Route } from "react-router-dom";

import AdminLoginInterface from "./administrator/adminlogin/AdminLoginInterface"
import Dashboard from "./administrator/adminlogin/Dashboard";
import Home from "./userinterface/screens/Home"
import BannerComponants from "./userinterface/componenat/BannerComponants";
import ProductViewWithCategory from "./userinterface/screens/ProductViewWithCategory";
import SelectProduct from "./userinterface/screens/SelectProduct";
import Card1 from "./userinterface/screens/cards/Card1";
import MakePayment from "./userinterface/screens/MakePayment";
function App() {
  return (
    <div> 
     <Router>
      <Routes>
      <Route element={<AdminLoginInterface/>} path="adminlogininterface"/>
        <Route element={<Dashboard/>} path="/dashboard/*"/> 
        <Route element={<Home/>} path="home"/>
        <Route element={<BannerComponants/>} path="bannercomponants"/>
        <Route element={<ProductViewWithCategory/>} path="productviewwithcategory"/>
        <Route element={<SelectProduct/>} path="selectproduct"/>
        <Route element={<Card1/>} path="card1"/>
        <Route element={<MakePayment/>} path="makepayment"/>
      </Routes>
      </Router> 
       
      
    </div>
  );
}

export default App;
