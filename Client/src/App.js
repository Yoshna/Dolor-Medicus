import "./App.css";
import Landing from "./pages/Landing";
import Logout from "./pages/Logout";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import AddPatient from "./pages/AddPatient";
import Patients from "./pages/Patients";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const App = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    axios.get("/auth/login").then((res) => {
      // console.log(res);
      // console.log("fvvf");
      if (res.data) {
        setIsLogin(true);
      }
    });
  }, []);

  let routes = (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
  if (isLogin) {
    routes = (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    );
  }
  return <div className="App">{routes}</div>;
};

export default App;
