import React from "react";
import Header from "./component/header";
import MainContainer from "./component/container";
import TransactionBox from "./component/transaction";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <TransactionBox
        transaction="Daily Transaction Volume"
        figure="₦4,000,000"
      />
    </div>
  );
}

export default App;
