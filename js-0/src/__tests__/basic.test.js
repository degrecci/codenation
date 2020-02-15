const assert = require('assert');

/**
 * Main input selector.
 */
const selector = '[data-test="entrada"]';

/**
 * Type into certain input ($eval hack).
 * This is needed cause for whatever reason 'input.type' requires it to be blurred after press.
 */
const typeInput = async (input, string) => {
  await page.$eval(selector, (input, string) => input.value = string, string);
  await input.press(String.fromCharCode(13));
};

/**
 * Retrieve main page input.
 */
const getInput = async () => {3
  await page.waitForSelector(selector);

  const input = await page.$(selector);

  assert(input !== null, 'Could not find the input');

  return input;
};

/**
 * Load page recursive.
 */
const load = async () => {
  try {
    await page.goto('http://localhost:1337');
  } catch (e) {
    await load();
  }
};

describe('Palindrome', () => {
  beforeEach(load);

  it('should be able to add a new record if it is not empty', async () => {
    const input = await getInput();

  });
});
