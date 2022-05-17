import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Api from "./components/Api";
//Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import Footer from "./components/Footer/Footer";

function App() {
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/rsgh-akpg.json?$$app_token=3yrs3ewX0YYxoOpKKiJ0aWIxW"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Api />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />

        <Route path="/pricing" exact component={Pricing} />
      </Switch>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1fo3cJ2JueuXUar9WauhBsUJNNO7QC6JE&ehbc=2E312F"
        width="700"
        height="480"
      ></iframe>

      <Footer />
    </Router>
  );
}

export default App;
