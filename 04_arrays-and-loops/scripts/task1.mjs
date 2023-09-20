import {errors} from "../errors.mjs";
import {getMinMax} from "../helpers/get-min-and-max.mjs";

export function getTask4_1Result(data) {
  let resultCount = 0;

  return data.map((subData) => {
    ++resultCount;
    if (subData.n === subData.m) {
      console.error(errors.nEqualsM);
      return {
        error: {
          status: true,
          text: errors.nEqualsM,
        },
        n: subData.n,
        m: subData.m,
        count: subData.count,
        randomArray: [],
      };
    }

    const {min, max} = getMinMax(subData);
    const randomArray = generateRandomArray(min, max, subData.count);
    const result = {
      error: {
        status: false,
      },
      n: subData.n,
      m: subData.m,
      randomArrayLength: randomArray.length,
      randomArray,
    }

    console.log(`Результат №${resultCount}: `, result);
    return result;
  })
}

function generateRandomArray(min, max, count) {
  let randomArray = [];
  for (let i = 0; i < count; i++) {
    randomArray.push(
      Math.floor(Math.random() * (max - min)) + min
    )
  }
  return randomArray;
}
