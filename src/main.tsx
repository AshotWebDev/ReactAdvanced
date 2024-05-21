import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app/App";
import { ThemProvider } from "./context/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemProvider>
  </React.StrictMode>
);



const three = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [{ value: 5 }],
        },
      ],
    },
    {
      value: 3,
      children: [{ value: 6 }],
    },
  ],
};


// function printValues(obj) {
//   console.log(obj.value);
//   if (obj.children) {
//     obj.children.forEach(el => printValues(el));
//   }
// }

// printValues(three);


// function* generateNumbers() {
//   let n = 0
//   while (true){
//     n ++ 
//     yield n
//   }
// }


// const res = generateNumbers()

// console.log(res.next());
// console.log(res.next());




// function* printValues(obj) {
//   yield obj.value
//   if (obj.children) {
//     for (const el of obj.children) {
//       yield * printValues(el)
//     }
//   }
  
// }

// let res = printValues(three)

// console.log(res.next());
// console.log(res.next());
// console.log(res.next());


// function* stringCombination(str) {
  
// }


// const gen = stringCombination('abc')


// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


