const convertDate = (date) => {
  return date.split("/").reverse().join("-");
};

export default convertDate;
