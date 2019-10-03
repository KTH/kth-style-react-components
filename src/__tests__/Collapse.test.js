import React from "react";
import renderer from "react-test-renderer";
import Collapse from '../lib/Collapse';

const DEFAULT_COLOR = {
  buttonText: 'Click me',
  content: "This is a test string that should render inside collapse component"
}

const WHITE_COLOR = {
  color: 'white',
  buttonText: 'Click me',
  content: "This is a test string that should render inside collapse component"
}

describe("Collapse", () => {
  it("default color should be blue", () => {
    const tree = renderer
      .create(<Collapse buttonText={DEFAULT_COLOR.buttonText}>
        <p>{DEFAULT_COLOR.content}</p>
      </Collapse>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be white when given props color=white", () => {
    const tree = renderer
      .create(<Collapse color={WHITE_COLOR.color} buttonText={WHITE_COLOR.buttonText}>
        <p>{WHITE_COLOR.content}</p>
      </Collapse>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});