import logo from './logo.svg';
import './App.css';

function App() {

  let ob = {
    a: 111,
    b: 222,
  }

  let ob2 = {...ob, c: (ob.a + ob.b), a: ob.a - ob.b}


  const f = (ob) => {
    let ar = [];
    for(let key in ob) {
      ar.push(key + ' : ' + ob[key]);
    }
    return ar
  }



  return (
    <div className="App">
        this-App
      <hr/>
      {f(ob2).map(el => <div>{el}</div>)}
    </div>
  );
}

export default App;
