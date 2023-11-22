
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const dispatch = useDispatch();
  const myState = useSelector(function (s) {
    return s.cash
  });

  console.log(myState)



  return (
    <div className="App">
        this-App
      <hr/>

      <div/></div>
  );
}

export default App;
