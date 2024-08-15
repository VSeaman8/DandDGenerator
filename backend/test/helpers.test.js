import { expect } from "chai";
import getRandomItem from "../helpers.js";

describe("getRandomItem", () => {
  it("should return an item from the array", () => {
    // Arrange
    const array = ["able", "bently", "crikey", "donald"];

    // Act
    const item = getRandomItem(array);

    // Assert
    expect(array).to.include(item);
  });
});
