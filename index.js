// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Повертаємо об'єкт, що містить деякі деталі про вхідний об'єкт Date.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const details = {
    year: year,
    month: month,
    day: day,
  };

  return details;
}

console.log("Завдання: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(new Date("2023-12-25T00:00:00Z")));
//Виведе { year: 2023, month: 11, day: 25 }

// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Перевірка, чи є вхідний ISO рядок валідним, отримавши дату з рядка та перевірити чи є результат числом,
  //  якщо ні виводимо повідомлення "Помилка: недійсний ISO рядок"
  // Встановлюємо дату з ISO рядка в об'єкт Date.
  // Повертаємо об'єкт Date з встановленою датою.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const parsedDate = Date.parse(isoString);

  if (isNaN(parsedDate)) {
    return "Помилка: недійсний ISO рядок";
  }

  date.setTime(parsedDate);

  return date;
}

console.log("Завдання: 2 ==============================");
const date = new Date();
console.log(setDateDetails(date, "2023-12-25T00:00:00Z"));
//Виведе 2023-12-25T00:00:00.000Z

// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date. Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Повертаємо рядок з датою в UTC форматі.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const utcDateString = date.toUTCString();

  return utcDateString;
}

console.log("Завдання: 3 ==============================");
console.log(dateToUTC(new Date()));
//Виведе Tue, 27 Jun 2023 07:15:47 GMT

// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Встановлюємо конкретний час в об'єкті Date за допомогою setHours.
  // Повертаємо об'єкт Date з встановленим часом.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const timezoneOffset = date.getTimezoneOffset() / 120;
  date.setUTCHours(hours - timezoneOffset, minutes, seconds, milliseconds);

  return date;
}

console.log("Завдання: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
//Виведе 2023-12-25T09:30:00.000Z

// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear() {
  // Створюєму змінну в яку записуємо поточну дату
  // Визначення поточного року.
  // Визначення дати наступного Нового року. Для цього створюємо новий об`єкт Date в якому збільшуємо поточний рік на 1, встановлюємо місяць на 0 а дату на 1
  // Визначаємо кількість мілісекунд до наступного Нового року в змінну diff.
  // Розраховуємо кількість повних днів, годин, хвилин і секунд.
  // Дні:diff / (1000 * 60 * 60 * 24)
  // Години:(diff / (1000 * 60 * 60)) % 24
  // Хвилини: (diff / (1000 * 60)) % 60;
  // Секунди:(diff / 1000) % 60;
  // Мілісекунди:  diff % 1000;
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const nextNewYear = new Date(currentYear + 1, 0, 1);
  const diff = nextNewYear - currentDate;

  const days = diff / (1000 * 60 * 60 * 24);
  const hours = (diff / (1000 * 60 * 60)) % 24;
  const minutes = (diff / (1000 * 60)) % 60;
  const seconds = (diff / 1000) % 60;
  const milliseconds = diff % 1000;

  const timeUntilNextNewYear = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };

  return timeUntilNextNewYear;
}

console.log("Завдання: 5  ==============================");

console.log(nextNewYear());
//Виведе

// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  // Перевірка, чи є вхідне значення числом якщо ні повертаємо рядок .
  // Перевірка, чи є рік високосним.
  // Високосним вважається рік, який ділиться націло на 4
  // Повертаємо об'єкт з роком та інформацією про те, чи є він високосним.
  if (typeof year !== "number") {
    return {
      year: year,
      isLeap: false,
    };
  }

  const isLeap = year % 4 === 0;

  return {
    year: year,
    isLeap: isLeap,
  };
}
console.log("Завдання: 6 ==============================");

console.log(isLeapYear(2020));
//Виведе { year: 2020, isLeap: true }

// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Перевірка, чи є кількість днів числом.
  // Якщо days не є числом, функція поверне рядок
  // "Помилка: кількість днів має бути числом" та повертає undefined.
  // Збереження початкової дати для виведення в форматі ISO.
  // Додавання заданої кількості днів до дати.
  // Збереження результуючої дати для виведення в форматі ISO.
  // Повертаємо об'єкт з початковою датою, кількістю доданих днів та результуючою датою.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  if (typeof days !== "number" || isNaN(days)) {
    return "Помилка: кількість днів має бути числом";
  }

  const inputDate = date.toISOString();

  date.setDate(date.getDate() + days);

  const resultDate = date.toISOString();

  return {
    inputDate: inputDate,
    addedDays: days,
    resultDate: resultDate,
  };
}

console.log("Завдання: 7 ==============================");

console.log(addDays(new Date("2023-01-01"), 7));
//Виведе
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

function getDayOfWeek(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  // Отримання дня тижня як числа (0 - неділя, 1 - понеділок, ..., 6 - субота).
  // Отримання назви дня тижня з масиву daysOfWeek за індексом.
  // Повертаємо об'єкт з початковою датою та днем тижня.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString();

  const dayOfWeekNumber = date.getUTCDay();

  const dayOfWeekUkrainian = daysOfWeek[dayOfWeekNumber];

  return {
    inputDate: inputDate,
    dayOfWeek: dayOfWeekUkrainian,
  };
}

console.log("Завдання: 8 ==============================");

console.log(getDayOfWeek(new Date("2023-01-01")));
//Виведе { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'неділя' }

// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  // Отримання поточного місяця.
  // Отримання поточного року.
  // Створення об'єкта Date для першого дня наступного місяця.
  // Віднімання одного дня від наступного місяця, щоб отримати останній день поточного місяця.
  // Отримання числа останнього дня поточного місяця - це кількість днів у місяці.
  // Повертаємо об'єкт з початковою датою та кількістю днів у місяці.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString();

  const currentMonth = date.getUTCMonth();

  const currentYear = date.getUTCFullYear();

  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);

  const lastDayOfCurrentMonth = new Date(nextMonthDate - 1);

  const daysInMonth = lastDayOfCurrentMonth.getDate();

  return {
    inputDate: inputDate,
    daysInMonth: daysInMonth,
  };
}

console.log("Завдання: 9 ==============================");

console.log(getDaysInMonth(new Date("2023-02-01")));
//Виведе { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }

// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  // Отримання годин.
  // Отримання хвилин.
  // Отримання секунд.
  // Форматування часу у вигляді 'гг:хх:сс', ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.
  // Повертаємо об'єкт з початковою датою та отформатованим часом.
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString();

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const timezoneOffset = date.getTimezoneOffset() / -100;

  const formattedTime = `${
    hours.toString().padStart(2, "0") - timezoneOffset
  }:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return {
    inputDate: inputDate,
    formattedTime: formattedTime,
  };
}

console.log("Завдання: 10 ==============================");

console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
//Виведе { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '12:30:00' }

// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є birthDate.getTime по типу функція .
  // Якщо birthDate не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Отримання поточної дати.
  // Вираховування різницю років між поточною датою та датою народження.
  // Перевірка, чи поточна дата ще не пройшла день народження, тобто поточний місяць має бути менше, а якщо дорівнює дата має бути менше.
  // Якщо день народження ще не пройшов, вік потрібно зменшити на 1.
  // Збереження дати народження для виведення в форматі ISO.
  // Повертаємо об'єкт з датою народження та обчисленим віком.
  if (typeof birthDate.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const birthDateFormatted = birthDate.toISOString();

  return {
    birthDate: birthDateFormatted,
    age: age,
  };
}

console.log("Завдання: 11 ==============================");

console.log(getAge(new Date("1990-05-15")));
//Виведе { birthDate: '1990-05-15T00:00:00.000Z', age: 33 }

// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо date1 або date2 не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Порівняння дат і отримання результату порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
  // Збереження дат для виведення  в форматі ISO.
  // Повертаємо об'єкт з порівнюваними датами та результатом порівняння.
  if (
    typeof date1.getTime !== "function" ||
    typeof date2.getTime !== "function"
  ) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  let comparison = 0;

  if (date1 < date2) {
    comparison = -1;
  } else if (date1 > date2) {
    comparison = 1;
  }

  const date1Formatted = date1.toISOString();
  const date2Formatted = date2.toISOString();

  return {
    date1: date1Formatted,
    date2: date2Formatted,
    comparison: comparison,
  };
}

console.log("Завдання: 12 ==============================");

console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
//Виведе
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо startDate або endDate не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Отримання часу в мілісекундах для початкової та кінцевої дати.
  // Різниця в мілісекундах між двома датами.
  // Перетворення різниці в мілісекундах у дні поділивши мілісекунди на (1000 * 60 * 60 * 24).
  // Збереження дат для виведення в форматі ISO.
  // Повертаємо об'єкт з початковою та кінцевою датами та різницею в днях.
  if (
    typeof startDate.getTime !== "function" ||
    typeof endDate.getTime !== "function"
  ) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const startTime = startDate.getTime();

  const endTime = endDate.getTime();

  const differenceInMilliseconds = endTime - startTime;

  const daysDifference = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  const startDateFormatted = startDate.toISOString();
  const endDateFormatted = endDate.toISOString();

  return {
    startDate: startDateFormatted,
    endDate: endDateFormatted,
    daysDifference: daysDifference,
  };
}
console.log("Завдання: 13 ==============================");

console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
//Виведе
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
