// function StudentInfo(props) {
//   console.log(props);

//   const cardStyle = {
//     border: "2px solid tomato",
//     borderRadius: "20px",
//     padding: "20px",
//   };

//   return (
//     <div style={cardStyle}>
//       <h3>Student Information</h3>
//       <p
//         style={{
//           fontSize: "20px",
//         }}
//       >
//         my name: {props.name}
//       </p>
//       <p>my age: {props.age}</p>
//     </div>
//   );
// }


function StudentInfo({ name, age, isMale }) {
   
  
    const cardStyle = {
      border: "2px solid tomato",
      borderRadius: "20px",
      padding: "20px",
    };
  
    return (
      <div style={cardStyle}>
        <h3>Student Information</h3>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          my name: {name}
        </p>
        <p>my age: {age}</p>
          {
            isMale === true ? <div> Boy </div> : <div>Girl</div>
          }
      </div>
    );
  }

  export default StudentInfo;
