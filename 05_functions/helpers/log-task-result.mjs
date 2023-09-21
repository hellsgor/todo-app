import {pluralizer} from "./pluralize.mjs";

export function logTaskResult(
  startOfMessage,
  result,
  pluralizeRequired,
  singular = '',
  plural = '',
  pluralGreater = '',
  endOfMessage = '') {
  if (Array.isArray(result)) {
    if (!pluralizeRequired) {
      result.forEach(res => console.log(`${startOfMessage}``${res}``${endOfMessage}`));
    } else {
      result.forEach(res => console.log(`${startOfMessage}``${pluralizer(res, singular, plural, pluralGreater)}``${endOfMessage}`));
    }
  } else {
    if (!pluralizeRequired) {
      console.log(`${startOfMessage} ${result} ${endOfMessage}`);
    } else {
      console.log(`${startOfMessage} ${pluralizer(result, singular, plural, pluralGreater)} ${endOfMessage}`);
    }
  }
}
