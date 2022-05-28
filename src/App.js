import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import BusinessSummary from './Pages/BusinessSummary/BusinessSummary';
import Product from './Pages/Product/Product';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/My Portfolio/Portfolio';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer';
import Software from './Pages/Home/Software';
import Hardware from './Pages/Home/Hardware';
import Home from './Pages/Home/Home';
import Service from './Pages/Product/Service';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Section from './Pages/Section/Section';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Review/Review';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/product" element={<Product />} />
        <Route path="/review" element={<Review />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Service/:Serviceid" element={<Section />} />
        <Route path="/review:/dashboard/review" element={<Review />} />
        <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>
        } >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/businessSummary" element={<BusinessSummary />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
