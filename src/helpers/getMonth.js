const getMonth = (str) => {
  return str[5] === "0" ? (str = str.slice(6, 7)) : (str = str.slice(5, 7));
};

export default getMonth;
