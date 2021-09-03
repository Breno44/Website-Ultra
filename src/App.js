import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Signup from "./pages/SignUp/Signup";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
