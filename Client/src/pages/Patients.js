import { useState, useEffect } from "react";
import Patient from "../components/Patient/Patient";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

const Patients = (props) => {
  const [patientArr, setPatientArr] = useState([]);

  useEffect(() => {
    axios.get("/patients").then((res) => {
      let newPatientArr = [];
      console.log("elknc");
      console.log(res.data);
      res.data.map((data) => {
        const patient = {
          name: data.name,
          id: data._id,
          email: data.emailId,
          pci: data.caseId,
        };
        newPatientArr = newPatientArr.concat([patient]);
      });
      setPatientArr(newPatientArr);
    });
  }, []);

  //   const doneHandler = (id) => {
  //     // console.log(id);
  //     axios.put(`/tasks/${id}`).then((res) => {
  //       const newTaskArr = taskArr.filter((task) => task.id !== id);
  //       setTaskArr(newTaskArr);
  //     });
  //   };
  //   const deleteHandler = (id) => {
  //     // console.log(id);
  //     axios.delete(`/tasks/${id}`).then((res) => {
  //       const newTaskArr = taskArr.filter((task) => task.id !== id);
  //       setTaskArr(newTaskArr);
  //     });
  //   };

  let patients = [];

  if (patientArr.length > 0) {
    patients = patientArr.map((patient) => (
      <Patient
        name={patient.name}
        email={patient.email}
        patientCaseId={patient.pci}
      ></Patient>
    ));
  }

  return (
    <div>
      <Navbar />
      <h1>All Patients</h1>
      {patients}
    </div>
  );
};
export default Patients;
