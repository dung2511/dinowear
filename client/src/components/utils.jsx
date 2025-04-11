export const createSlug = (slug) => {
  return slug
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const convertTimestampToDate = (timestamp) => {
  if (!timestamp || !timestamp.seconds) return "";
  const date = new Date(timestamp.seconds * 1000);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export const convertSalary = (value) => {
  if (value >= 1e6) {
    return (value / 1e6).toFixed(0) + "M";
  } else if (value >= 1e3) {
    return (value / 1e3).toFixed(0) + "k";
  }
  return value.toString();
};
