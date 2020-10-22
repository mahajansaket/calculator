import React from "react";
import Calculator from "./components/Calculator";
import Table from "./components/Table";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Calculator />
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
