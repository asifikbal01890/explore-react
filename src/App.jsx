import "./App.css";
import Person from "./componets/Person/Person";
import StudentInfo from "./componets/StudentInfo/StudentInfo";

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="mb-6">
        <StudentInfo name="Sajib" age="24" isMale={true}></StudentInfo>
      </div>
      <div className="mb-6">
        <StudentInfo name="Raju" age="20" isMale={true}></StudentInfo>
      </div>
      <div className="mb-6">
        <StudentInfo name="Asif" age="26" isMale={false}></StudentInfo>
      </div>
      <Person></Person>
    </>
  );
}


export default App;
