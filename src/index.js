import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Give from "./Pages/Give";
import ViewBlog from "./Components/Blogs/ViewBlog";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/give" component={Give} />
      <Route path="/viewblog/:id" component={ViewBlog} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
