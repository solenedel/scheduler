// ------------------------------------- Imports -------------------------------- //
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Application from "components/Application";


// ---------------------------------- Tests: Application component ------------------------------- //

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
