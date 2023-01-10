export const countdown = (date: string) => {
  // calculate how many days until the birthday
  const birthday = new Date(date);
  const today = new Date();
  const nextBirthday = new Date();

  nextBirthday.setFullYear(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const daysUntilBirthday = Math.ceil(
    (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return daysUntilBirthday;
};
