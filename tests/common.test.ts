import {
  generateSecretURL,
  setSecrets,
  parseDataFromEnvironment,
} from "../src/common";

test("generateSecretURL()", () => {
  expect(generateSecretURL("nextlinux", "test", "12345")).toBe(
    "https://app.stepsecurity.io/secrets/nextlinux/test/12345"
  );
});

test('setSecrets()', () => {
  var secrets = [{Name: "Secret_1", Value: "Mock_Value"}, {Name: "Secret_1", Value: "Mock_Value"}]
  expect(setSecrets(secrets)).toBe(undefined);
});

test("parseDataFromEnvironment()", () => {
  process.env["GITHUB_REPOSITORY"] = "nextlinux/test";
  process.env["GITHUB_RUN_ID"] = "12345";

  expect(parseDataFromEnvironment()).toStrictEqual([
    "nextlinux",
    "test",
    "12345",
  ]);
});
