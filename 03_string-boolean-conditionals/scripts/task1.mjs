const passwordMinLength = 4;
const specialSymbols = ['-', '_'];
const strongPasswordMessage = 'Пароль надёжный';
const weakPasswordMessage = 'Пароль недостаточно надёжный';

export function passwordCheck(passwordsArray) {
  return passwordsArray.map(pass => {
    let checkResult;

    charactersCheck(pass) && specialSymbolsCheck(pass)
      ? checkResult = strongPasswordMessage
      : checkResult = weakPasswordMessage;

    logCheckResult(pass, checkResult);

    return ({
      password: pass,
      checkResult,
    });
  })
}

function charactersCheck(password) {
  return password.length >= passwordMinLength;
}

function specialSymbolsCheck(password) {
  return specialSymbols.some(specialSymbol =>
    password.includes(specialSymbol));
}

function logCheckResult(passValue, message) {
  console.log(`'${passValue}' - ${message}`);
}
