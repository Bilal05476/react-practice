import { Routes, Route } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import MainLink from "./MainLink";

function App() {
  return (
    <div>
      Hello World
      <br />
      <MainLink to="/one" name="One" />
      <MainLink to="/two" name="Two" />
      <br />
      <br />
      <Routes>
        <Route exact path="/one" element={<One />} />
        <Route exact path="/two" element={<Two />} />
      </Routes>
      Hello World
    </div>
  );
}

export default App;

// let fname = "Faizan";
// let lname = "raza";

// function fullName(){
//   return console.log(`My first name is ${fname} and my last name is ${lname}`)
// }

// fullName()


// function fullName(fname,lname) {
//   return console.log(fname, lname);
// }

// fullName("Bilal", "Ahmed");
// fullName("Faizan", "Raza");
