import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main countries={countries} interests={interest} exact />}
          />
          <Route path="showdata-to-user" element={<ShowData />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
