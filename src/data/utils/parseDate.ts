export function parseDate(dateString: string): Date {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day); // month - 1 тому що місяці в JavaScript починаються з 0
}

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці в JavaScript починаються з 0, тому додаємо 1
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
