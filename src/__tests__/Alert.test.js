import React from "react";
import renderer from "react-test-renderer";
import Alert from "../lib/Alert"

const TEST_DATA = {
  color: "success",
  string: "This is a test string that should render inside alert component"
}

describe("Alert", () => {
  it ("renders properly", () => {
    const tree = renderer
      .create(<Alert color={TEST_DATA.color}>
        <p>{TEST_DATA.string}</p>
      </Alert>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});