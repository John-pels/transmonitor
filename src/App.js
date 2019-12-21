import React from "react";
import Header from "./component/header";
import MainContainer from "./component/container";
import TrackRecord from "./component/trackRecord";
function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <TrackRecord
        heading="Payments"
        textOne="Un-reconcilled Payments"
        textTwo="reconcilled Payments"
        textThree="Total payments"
      />
    </div>
  );
}

export default App;
