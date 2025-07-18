export default function checkDate(value: string): boolean {
  // Valida MM/AAAA onde AAAA >= ano atual (ex: 2024)
  // Também verifica se a data não está anterior à atual
  const [monthStr, yearStr] = value.split('/');
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (
    isNaN(month) ||
    isNaN(year) ||
    month < 1 ||
    month > 12 ||
    year < currentYear ||
    (year === currentYear && month < currentMonth)
  ) {
    return false;
  }
  const regex = new RegExp(
    `^(0[1-9]|1[0-2])/(${currentYear}|${currentYear + 1}|${currentYear + 2}|${
      currentYear + 3
    }|${currentYear + 4}|${currentYear + 5}|${currentYear + 6}|${
      currentYear + 7
    }|${currentYear + 8}|${currentYear + 9}|${currentYear + 10})$`
  );

  return regex.test(value);
}