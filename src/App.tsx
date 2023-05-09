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


//typeof
let msg: string = "Hi";
let msg2: typeof msg;

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS;

//typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
}

let keySports: keyof typeof SPORTS;


//enum
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}

const PC2: PC = {
  id: 2,
  OSType: OS.Mac
}

const PC3: PC = {
  id: 3,
  OSType: OS.Linux
}

// 方の互換性
// できる
const comp1 = "test";
let comp2: string = comp1;

// できない
let comp3: string = "test"
const comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

//ジェネリックス
interface GEN<T>{
  item: T;
}

const gen0: GEN<string> = { item: "hello" };
const gen1: GEN = {item: "hello"};
const gen2: GEN<number> = {item: 10};

interface GEN1<T=string>{
  item: T;
}

const gen3: GEN1 = {item: "Heloo"};

interface GEN2<T extends string | number>{
  item: T;
}

const gen4: GEN2<string> = { item: "hello"};
const gen5: GEN2<number> = { item: 444 };
const gen6: GEN2<number> = { item: true };

function funcGen<T>(props: T) {
  return { item: props};
}


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
