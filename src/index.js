import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);

const el2 = <Counter />;
ReactDOM.render(
  el2,
  document.getElementById("root")
);

// code with class component
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
export default Counter
//  same code with function component
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Number of clicks: " + counter);
  });
  function increment() {
    setCount(count + 1);
  }
  return <div>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
  </div>
    ;
}

function SayHello() {
  const [name, setName] = useState("Beby");
  return <h1>Hello {name}</h1>;
}


function Counter2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Number of clicks: " + counter);
  });

  function increment() {
    setCounter(counter + 1);
  }
  return <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
  </div>;
}

const el = <Counter2 />;
ReactDOM.render(
  el,
  document.getElementById('root')
);


class Counter2 extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el3 = <Counter2 />;
ReactDOM.render(
  el3,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <h1>Hello Bonevy, React!</h1>,
  document.getElementById('root')
);*/


function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km / 1.609).toFixed(2);
  }

  return <div>
    <input type="text" value={km} onChange={handleChange} />
    <p> {km} km is {convert(km)} miles </p>
  </div>;
}

const el5 = <Converter />;
ReactDOM.render(
  el5,
  document.getElementById('root')
);

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
    <input type="number" value={num} onChange={handleChange} />
    <input type="submit" value="Add" />
    <p> Sum is {sum} </p>
  </form>;
}


function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) =>
    <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el6 = <MyList data={arr} />;

ReactDOM.render(
  el6,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
