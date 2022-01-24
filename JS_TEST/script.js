import { db } from "./db.js";

const parceTime = (data) => {
  const date = new Date(data).getTime(); // return timestamp!!!

  console.log(date);

  return date;
};

const sortedDates = db.messages.sort((a, b) => {
  return parceTime(a.date) - parceTime(b.date);
});

console.log(sortedDates);
