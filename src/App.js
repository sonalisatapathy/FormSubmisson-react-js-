import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";

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
    "",
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
    <div className="App">
      <Header />
      <Main countries={countries} interests={interest} />
      <Footer />
    </div>
  );
}

export default App;
