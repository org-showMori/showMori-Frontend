import React from "react";
import MainPage from "./components/views/MainPage/MainPage";
import Footer from "./components/views/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div style={{width: "100%"}}>
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
