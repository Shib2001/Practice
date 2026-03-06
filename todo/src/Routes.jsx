
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Buy from "./Pages/Buy";
import Account from "./Pages/Account";

const Routis=()=>{
    return (
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout/>}>
                   <Route index element={<Home/>}/>
                   <Route path="about" element={<About/>}/>
                   <Route path="account" element={<Account/>} />
                   <Route path="buy" element={<Buy/>}/>
                </Route>
              </Routes>
        </BrowserRouter>
    )
}
export default Routis;