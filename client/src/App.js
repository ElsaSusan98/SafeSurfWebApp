import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from "./pages/home";
// import About from "./pages/aboutus";
// import Contactus from "./pages/contactus";

function App() {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/aboutus" element={<About />} /> */}
            
          </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
export default App;

// import React from "react";
// import { useState,useEffect } from "react";

// function App(){
//   const [data,setData] = useState([{}])

//   useEffect(() =>{
//     fetch("/members").then(
//       res =>res.json()
//     ).then(
//       data => {
//         setData(data)
//         console.log(data)
//       }
//     )
  
// }, [])
// return (
//   <div>
//     {(typeof data.members === 'undefined') ? (
//       <p>Loading ...</p>
//     ) : (
//       data.members.map((member, i) => (
//         <p key={i}>{member}</p>
//       ))
//     )}
//   </div>
// );
// }
// export default App