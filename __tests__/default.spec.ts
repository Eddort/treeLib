import sumHelper from "./helpers/sum";
import sumSrc from "../src/index";

it("sum from src", () => {
	expect(sumSrc(1, 2)).toBe(3);
});

it("sum from helpers", () => {
	expect(sumHelper(1, 2)).toBe(3);
});