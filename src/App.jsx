import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from 'store/slices/count';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.num);
  return (
    <div>
      {count}
      <button type="button" onClick={() => dispatch(increase())}>increase</button>
      <button type="button" onClick={() => dispatch(decrease())}>decrease</button>
    </div>
  );
}

export default App;
