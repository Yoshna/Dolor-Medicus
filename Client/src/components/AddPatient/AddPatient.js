import { useState, useEffect } from "react";
import "../../assets/css/addpatient.css";
import axios from "axios";
import { useNavigate } from "react-router";
const AddTask = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [caseId, setCaseId] = useState("");
  const [gender, setGender] = useState("");
  const [wt, setWt] = useState("");
  const [ht, setHt] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const caseIdHandler = (event) => {
    // console.log(event.target.value);
    setCaseId(event.target.value);
  };
  const wtHandler = (event) => {
    // console.log(event.target.value);
    setWt(event.target.value);
  };
  const htHandler = (event) => {
    // console.log(event.target.value);
    setHt(event.target.value);
  };
  const genderHandler = (event) => {
    // console.log(event.target.value);
    setGender(event.target.value);
  };

  //   let errorLine = null;

  const addPatientHAndler = async (event) => {
    event.preventDefault();
    const res = await axios.get("/auth/login");
    // console.log(res);
    // console.log(taskDeadline);
    const patient = {
      name: name,
      emailId: email,
      caseId: caseId,
      userId: res.data._id,
      doctorId: res.data._id,
    };

    if (name.trim() === "") {
      const errorLine = (
        <p
          style={{
            color: "red",
          }}
        >
          Enter Patient Name
        </p>
      );
      setError(errorLine);
    }
    if (email.trim() === "") {
      const errorLine = (
        <p
          style={{
            color: "red",
          }}
        >
          Enter Patient Email Id
        </p>
      );
      setError(errorLine);
    }
    if (caseId.trim() === "") {
      const errorLine = (
        <p
          style={{
            color: "red",
          }}
        >
          Enter Case Id
        </p>
      );
      setError(errorLine);
    } else {
      console.log(123);
      axios.post("http://localhost:5000/patients", patient).then((res) => {
        navigate("/");
      });
    }
    // setTimeout(() => {
    //   setError(null);
    // }, 5000);
  };

  return (
    <div className="addpatient">
      {error}
      <div className="addpatient-right">
        <div className="addpatient-box">
          <div className="addpatient-content">
            <h1>Add Patient Details</h1>
            <form className="form">
              <input
                className="forminput"
                placeholder="Name"
                type="text"
                value={name}
                onChange={nameHandler}
              ></input>

              <input
                className="forminput"
                placeholder="Email Id"
                type="text"
                value={email}
                onChange={emailHandler}
              ></input>
              <input
                className="forminput"
                placeholder="Gender"
                type="text"
                value={gender}
                onChange={genderHandler}
              ></input>
              <input
                className="forminput"
                placeholder="Weight"
                type="text"
                value={wt}
                onChange={wtHandler}
              ></input>
              <input
                className="forminput"
                placeholder="Height"
                type="text"
                value={ht}
                onChange={htHandler}
              ></input>

              <input
                className="forminput"
                placeholder="Patient Case Id"
                type="text"
                value={caseId}
                onChange={caseIdHandler}
              ></input>
              <button className="addpatientbtn" onClick={addPatientHAndler}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
