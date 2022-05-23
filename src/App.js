import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import BusinessSummary from './Pages/BusinessSummary/BusinessSummary';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/My Portfolio/Portfolio';
import Reviews from './Pages/Reviews/Reviews';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer';
import Software from './Pages/Home/Software';
import Hardware from './Pages/Home/Hardware';
import Home from './Pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/businessSummary" element={<BusinessSummary />} />
        <Route path="/portfolio" element={<RequireAuth>
          <Portfolio />
        </RequireAuth>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
