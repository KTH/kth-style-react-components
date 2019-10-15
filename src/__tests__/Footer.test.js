import React from "react";
import renderer from "react-test-renderer";
import Footer from '../lib/Footer';

describe("Footer", () => {

  // TODO: await cortina api call
  it("should match previous snapshot", async () => {
    const tree = renderer
      .create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});