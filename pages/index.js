import React from "react";
import Head from "../components/Head";
import "../styles/global.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Head />
        <h1>Bootcamp List</h1>
      </div>
    );
  }
}

export default Index;
