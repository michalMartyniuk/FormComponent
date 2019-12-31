import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  },
  input: {
    height: "50px",
    width: "500px",
    fontSize: "1.5rem",
    margin: "10rem auto"
  }
});
function Search({ onChange, value }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Search</h1>
      <input className={classes.input} value={value} onChange={onChange} />
    </div>
  );
}
export default Search;
