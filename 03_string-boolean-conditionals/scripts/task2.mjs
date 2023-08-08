const defaultUserName = 'коНстАНтИн';
const defaultUserSurname = 'отТовоРДемгенТшенФельд';

const convertedNameText = 'было преобразовано';
const notConvertedNameText = 'осталось без изменений';
const convertedSurnameText = 'была преобразована';
const notConvertedSurnameText = 'осталась без изменений';

export function fullNameConversion(isNodeJSStarting) {
  // аргумент isNodeJSStarting:
  // false - использовать значения по умолчанию для запуска в NodeJS;
  // true - или запросить ввод в функции getString.
  
  let userName;
  let userSurname;

  if (isNodeJSStarting) {
    userName = getString('имя');
    userSurname = getString('фамилию');
  } else {
    userName = defaultUserName;
    userSurname = defaultUserSurname;
  }

  const newUserName = compareString(userName);
  const newUserSurname = compareString(userSurname);

  const user = {
    name: {
      userName: newUserName,
      isChanged: newUserName === userName,
      isChangedMessage: newUserName === userName
        ? `Имя ${notConvertedNameText}`
        : `Имя ${convertedNameText}`,
    },
    surname: {
      userSurname: newUserSurname,
      isChanged: newUserSurname === userSurname,
      isChangedMessage: newUserSurname === userSurname
        ? `Фамилия ${notConvertedSurnameText}`
        : `Фамилия ${convertedSurnameText}`,
    }
  }

  logUserFullName(user);
  return user;
}

function getString(whatWeAsk) {
  // const str = prompt(`Введите ${whatWeAsk} (можно и не вводить)`);
  return prompt(`Введите ${whatWeAsk} (можно и не вводить)`)
    ? prompt(`Введите ${whatWeAsk} (можно и не вводить)`)
    : whatWeAsk === 'имя' ? defaultUserName : defaultUserSurname;
}

function compareString(str) {
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
}

function logUserFullName(user) {
  console.log(`Имя пользователя - ${user.name.userName}. ${user.name.isChangedMessage}`);
  console.log(`Фамилия пользователя - ${user.surname.userSurname}. ${user.surname.isChangedMessage}`);
}
