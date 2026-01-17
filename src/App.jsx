import { useState } from 'react';
import Opt_list from './MyCompnents/Opt_list';
import Cal from './MyCompnents/Cal';

      
function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <h1>count in app: {count}</h1>
      <Opt_list count={count} setCount={setCount} />
      
      
      <Cal />

    </>
  );
}

export default App;
