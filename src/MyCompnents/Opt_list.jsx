import React from 'react';

function Opt_list({ count, setCount }) {
  return (
    <div>
      <h1>hello, count in list: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click 
      </button>
    </div>
  );
}

export default Opt_list;

