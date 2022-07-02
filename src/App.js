import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Logout from "./Components/Logout";
import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
function App() {
  const user_token = localStorage.getItem("Token");
  // const user_token = "";
  return (
    <div className="App"id="outer-container">
      
   
      <>
      <Header />
      
      </>
      <>
        {user_token ? (
          <>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          
          <div id="page-wrap">
      {/* <h1>User Dashboard</h1>
      <h2>Check out our Newest User's!</h2> */}
    </div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/header" element={<Header />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </>
        )}
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default App;
