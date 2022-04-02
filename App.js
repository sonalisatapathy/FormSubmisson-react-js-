import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ShowData from "./components/ShowData/ShowData";
function App() {
  const interest = [
    "sports ",
    "singing",
    "dancing",
    "yoga",
    "reading books",
    "reading newsPaper",
    "computer & software",
    "fashion",
    "photography",
  ];
  const countries = [
    "India",
    "China",
    "Pakistan",
    "Nepal",
    "Butan",
    "SriLanka",
    "South-Africa",
    "USA",
    "Soviet-Russia",
  ];

  return (
    <Routes>
      {/* <div className="App"> */}
      {/* <Header /> */}
      <Route
        path="/"
        element={<Main countries={countries} interests={interest} />}
      />
      <Route path="showdata-to-user" element={<ShowData />} />
      {/* <Footer /> */}
      {/* <ShowData /> */}
      {/* </div> */}
    </Routes>
  );
}

export default App;
