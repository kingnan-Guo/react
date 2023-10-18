import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root,React.StrictMode);
// root.render(
//   // <React.StrictMode>
//   //   <div>kingnan</div>
//   // </React.StrictMode>
//   <React.Fragment>
//       <div>kingnan</div>
//     <span>123</span>
//   </React.Fragment>
// );

let a = 5,b = 4
let obj = {
  a: 123
}
let domObj = <span>123</span>
let arr = [1,2,3,4]

const number = new Array(30)
number.fill(0)
var list = number.map((item, i) => {
  return <li className='asd' style={{background: 'yellow'}} key={i}>{i}</li>
})
let stringDome = "<span>stringDome</span>"
const d1 = (
  <div>
    {/* 注释 */}
    cd1 {a} * {b} = {a*b} 
    <div>
      {false}
    </div>
    <div>
      {domObj}
    </div>
    <div>
      {arr}
    </div>
    <div>
      {list}
    </div>
    <div dangerouslySetInnerHTML={{
      __html:stringDome
    }}></div>
  </div>
)
const img = (
  <img src='xxx' />
)

const div = document.createElement('div', {}, `${a}`)
console.log("div ==", div);
console.log("d1 ==", d1);
// root.render(d1)


// react 中 d1 所有有的 属性 是冻结的 ，原理是frezz，每一个 d1 是 不可变的
root.render(d1)


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
