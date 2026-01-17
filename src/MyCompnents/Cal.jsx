import { useState } from "react"
const res=()=>{
        const x="hi";
        print(x);
    } 
function Cal(){
    const [a,setA]=useState(' ');
    const [b,setB]=useState(' ');
    const [result,setResult]=useState(null);
    const handleSum = () => {
    setResult(Number(a) + Number(b));
    };

    return(
        <div>
            <label>
                enter 1st :
                <input type="number" value={a} onChange={(e)=>setA(e.target.value)}/>
            </label>

            <br/>
            <label>
                enter 2nd :
                <input type="number" value={b} onChange={(e)=>setB(e.target.value)}/>
            </label>
            <br/>
            <button type="submit" onClick={handleSum}>sum </button>
            {result !== null && <h2>Result: {result}</h2>}
                
        </div>
        
    );
}
export default Cal;
// import { useState } from 'react';

// function Cal() {
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');

//   return (
//     <div>
//       <label>
//         A:
//         <input
//           type="number"
//           value={a}
//           onChange={(e) => setA(e.target.value)}
//         />
//       </label>

//       <br />

//       <label>
//         B:
//         <input
//           type="number"
//           value={b}
//           onChange={(e) => setB(e.target.value)}
//         />
//       </label>

//       <h2>Sum: {Number(a) + Number(b)}</h2>
//     </div>
//   );
// }

// export default Cal;
