import React from 'react';
import ReactDOM from 'react-dom/client';
import MyFunComp from "./MyFunComp";
import MyHooksTest from "./MyHooksTest";
import ClassComponent from "./ClassComponent";
import App from './App';
import Controlled from "./controlled";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



// const div = document.createElement('div', {}, `${a}`)

// root.render(d1)
const com = <MyFunComp number={12}></MyFunComp>

// react 中 d1 所有有的 属性 是冻结的 ，原理是frezz，每一个 d1 是 不可变的
root.render(
  <div>
    <div>
      {com }
    </div>
    <div>
    <ClassComponent obj={{name: 'king'}} number={7} />
    
    </div>
    <div><ClassComponent ui={<span>element</span>} /></div>
    <div>
      <App />
    </div>
    <div>
      <Controlled />
    </div>
    <div>
      <MyHooksTest />
    </div>
  </div>
)


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
