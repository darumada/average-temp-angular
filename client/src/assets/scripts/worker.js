this.onmessage = e => {
  let result = createResult(e.data);
  this.postMessage(result);
};

function createResult(e) {
  let startDate = e.startDate;
  let endDate = e.endDate;
  let years = endDate - startDate;
  let data = e.data;
  // количество дней в месяцах
  let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //количество высокосных годов в промежутке years
  let visYears = 0;
  let step = 0;
  for (let i = 0; i < years; i++) {
    // количество дней в феврале
    let dayInFeb = 28;
    let year = +data[step + 1].t.split('-')[0];

    // количество дней в году
    let count = 365;

    if (year < startDate) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        count = 366;
      }
      step += count;
      i--;
      continue;
    }
    if (year > endDate) {
      break;
    }

    // определяем является ли год высокосным
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      dayInFeb = 29;
      count = 366;
      visYears++;
    }

    for (let j = step; j <= step + count; j++) {
      if (j - step <= 31) {
        result[0] += data[j].v;
        continue;
      }
      if (j - step <= dayInFeb + 31) {
        result[1] += data[j].v;
        continue;
      }
      if (j - step <= 62 + dayInFeb) {
        result[2] += data[j].v;
        continue;
      }
      if (j - step <= 92 + dayInFeb) {
        result[3] += data[j].v;
        continue;
      }
      if (j - step <= 123 + dayInFeb) {
        result[4] += data[j].v;
        continue;
      }
      if (j - step <= 153 + dayInFeb) {
        result[5] += data[j].v;
        continue;
      }
      if (j - step <= 184 + dayInFeb) {
        result[6] += data[j].v;
        continue;
      }
      if (j - step <= 215 + dayInFeb) {
        result[7] += data[j].v;
        continue;
      }
      if (j - step <= 245 + dayInFeb) {
        result[8] += data[j].v;
        continue;
      }
      if (j - step <= 276 + dayInFeb) {
        result[9] += data[j].v;
        continue;
      }
      if (j - step <= 306 + dayInFeb) {
        result[10] += data[j].v;
        continue;
      }
      if (j - step <= 337 + dayInFeb) {
        result[11] += data[j].v;
        continue;
      }
    }
    step += count;
  }
  // вычисляем среднее арифметическое
  for (let i = 0; i < monthsDays.length; i++) {
    // не забываем учитывать высокосные года
    if (i === 1) {
      result[i] = result[i] / (monthsDays[i] * years + 1 * visYears);
      result[i] = result[i].toFixed(1);
    } else {
      result[i] = result[i] / (monthsDays[i] * years);
      result[i] = result[i].toFixed(1);
    }
  }
  return result;
}
