export const blogDateFormat = (date) =>
{
  if (!date) return "Missing date!"
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  }).format(new Date(date))
}