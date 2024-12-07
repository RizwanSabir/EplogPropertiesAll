import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/AboutUs/About";
import ServiceIndex from "./Pages/Services/ServiceIndex";
import BlogIndex from "./Pages/Blogs/BlogIndex";
import CareerIndex from "./Pages/Career/CareerIndex";
import ContactIndex from "./Pages/ContactUs/ContactIndex";
import Properties from "./Pages/Properties/Properties";
import SearchProperties from "./Pages/Properties/SearchProperties";
import NewProperty from "./Pages/Property/NewProperty";
import BuyProperty from "./Pages/Property/BuyProperty";
import RentProperty from "./Pages/Property/RentProperty";
import WhatsappLink from "./Components/WhatsappLink/WhatsappLink";
import ViewBlog from "./Pages/Blogs/ViewBlog";



export default function App() {
    return (
        <>
            <div className="max-w-[1580px] mx-auto">

                <WhatsappLink />
                <Router>
                    <Routes>
                        <Route path="/" element={<Properties />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/services" element={<ServiceIndex />} />
                        <Route path="/blogs" element={<BlogIndex />} />
                        <Route path="/viewblog" element={<ViewBlog />} />
                        <Route path="/career/" element={<CareerIndex />} />
                        <Route path="/contact-us" element={<ContactIndex />} />
                        <Route path="/properties" element={<SearchProperties />} />
                        <Route path="/property/new" element={<NewProperty />} />
                        <Route path="/property/buy" element={<BuyProperty />} />
                        <Route path="/property/rent" element={<RentProperty />} />
                        <Route path="/viewblog" element={<ViewBlog />} />
                       
                    </Routes>
                </Router>


            </div></>
    );
}
