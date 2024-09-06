import { expect } from "chai";
import nock from "nock";
import resolvers from "../resolvers.js";

describe("Resolvers", () => {
  afterEach(() => {
    nock.cleanAll();
  });
});

describe("Query.classes", () => {
  it("Should Return a Random Class", async () => {
    // Arrange
    const mockClasses = [
      { index: "barbarian", name: "Barbarian" },
      { index: "bard", name: "Bard" },
    ];

    nock("https://www.dnd5eapi.co")
      .get("/api/classes")
      .reply(200, { results: mockClasses });

    // Act
    const result = await resolvers.Query.classes();
    console.log(result);

    // Assert
    expect(mockClasses).to.deep.include(result[0]);
  });
});

describe("Query.alignments", () => {
  it("Should Return a Random Alignment", async () => {
    // Arrange
    const mockAlignments = [
      { index: "lawful_good", name: "Lawful Good" },
      { index: "neutral", name: "Neutral" },
    ];

    nock("https://www.dnd5eapi.co")
      .get("/api/alignments")
      .reply(200, { results: mockAlignments });

    // Act
    const result = await resolvers.Query.alignments();
    console.log(result);
    // Assert
    expect(mockAlignments).to.deep.include(result[0]);
  });

  it("Should Handle API Errors Gracefully", async () => {
    // Arrange
    nock("https://www.dnd5eapi.co").get("/api/alignments").reply(500);

    // Act & Assert
    try {
      await resolvers.Query.alignments();
    } catch (error) {
      expect(error).to.exist;
    }
  });
});
