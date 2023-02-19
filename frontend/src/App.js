import { useEffect, useState } from "react";
import "./App.css";
import Student from "./Student";

function App() {
  const [studentData, setStudentData] = useState([]);
  const fetchStudent = async () => {
    const data = await fetch("http://127.0.0.1:4000/api/student/all").then(
      (value) => value.json()
      .then((row)=>row.Students)
      ,
      () => {
        console.log("Not done");
      }
    );
    console.log(`type of ${typeof data} and ${data[0].name}`)
    setStudentData(data);
  };

  useEffect(() => {
    fetchStudent();
    // console.log(studentData)
  }, []);
  return (
    <div className="App text-dark row ">
      <div className="container">
        <h1 className="text-light">Student Data</h1>
      </div>
      {
        studentData.map((student,id)=><Student data={student} key={id} />)
      }
    </div>
  );
}

export default App;
