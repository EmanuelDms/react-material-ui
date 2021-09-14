import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  buttonContained: {
    background: "#FFF",
    fontWeight: "bold",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Typography color="secondary" className={classes.root}>
        Hello there!
      </Typography>
      <Button className={classes.buttonContained} variant="contained">
        This is our first button
      </Button>
    </div>
  );
}
