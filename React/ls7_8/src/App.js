import './App.css';
import ClassCounter from './components/ClassCount';

import MyEvents from './components/Event';
import FunkCounter from './components/FunkCount';
import Loop from './components/Loop';

function App() {
  return (
    <div>
      <MyEvents/>
      <hr/>
      <FunkCounter/>
      <hr/>
      <ClassCounter/>
      <hr/>
      <Loop/>
    </div>
  );
}

export default App;
