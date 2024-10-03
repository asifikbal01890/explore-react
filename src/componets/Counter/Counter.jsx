import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
//   const [a, setA] = useState('')
//   const [raju, setRaju] = useState('')
  
  const handleUp = () =>{
    const upCount = count + 1
    setCount(upCount)
  }

// const handleClickMe = () =>{
//     alert('button is clicked')
// }

// const handleNumber = (num) =>{
//     alert(num + 5)
// }
// const handleNumber = (num1, num2) =>{
//     alert(num1 + num2)
// }

    return (
        <div style={{marginBottom: "40px", border: "2px solid green", borderRadius:"10px", padding: "40px"}}>
            {/* <button onClick={handleClickMe}>Click Me</button> */}
            {/* <button onClick={() => { alert('thanks')}}>Click Me 2</button> */}
            {/* <button onClick={() => handleNumber(5)}>some</button> */}
            {/* <button onClick={() => handleNumber(5, 2)}>some</button> */}

<div>
    <h1>Count: {count}</h1>
    <button onClick={handleUp} style={{marginRight: '20px'}}>Up</button>
    <button onClick={() => {setCount(count-1)}}>Down</button>
</div>

        </div>
    );
};

export default Counter;