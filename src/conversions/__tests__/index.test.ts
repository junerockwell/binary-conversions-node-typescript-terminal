import { binaryToDecimal, decimalToBinary } from "../index";

describe("Conversion Functions", () => {
  it("converts binary string to the correct decimal result", () => {
    const binary = "1101100";
    let _fn = jest.fn(binaryToDecimal);
    // _fn(binary);
    expect(_fn(binary)).toBe("Decimal Result: 108");
    expect(_fn).toHaveBeenCalled();
  });

  it("converts decimal input (of type string) to the correct binary result", () => {
    const decimal = "108";

    expect(decimalToBinary(decimal)).toBe("Binary Result: 1101100");
  });

});
