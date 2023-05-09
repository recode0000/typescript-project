import React from 'react';
import logo from './logo.svg';
import './App.css';

let userName = "hi";
let dummyNum = 1122
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, false, true];

interface Name {
  first: string;
  last?: string | null;
}

let name: Name = {first: "yamada"};

const func01 = (x: number, y: number): number => {
  return x + y;
}

// Intersction Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: 'xxx',
  password: "yyy"
}


// union Types
let value: boolean | number
value = true
value = 100;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];


let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
