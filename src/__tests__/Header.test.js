import React from "react";
import renderer from "react-test-renderer";
import Header from '../lib/Header';

describe("Header", () => {

  // TODO: await cortina api call
  it("should match previous snapshot", async () => {
    const tree = renderer
      .create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});