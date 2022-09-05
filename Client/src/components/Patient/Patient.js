import { useState, useEffect } from "react";
import "../../assets/css/patients.css";
const Patient = (props) => {
  // const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [patientCaseId, setPatientCaseId] = useState("");

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
    setPatientCaseId(props.patientCaseId);
  }, []);

  return (
    <div>
      <div className="patient">
        <div className="patient-right" style={{ width: "100%" }}>
          <div className="patient-box">
            <div className="patient-content">
              <p>
                <span>Name: </span>
                {name}
              </p>
              <p>
                <span>Email Id: </span>
                {email}
              </p>
              <p>
                <span>Patient Case Id: </span>
                {patientCaseId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Patient;
