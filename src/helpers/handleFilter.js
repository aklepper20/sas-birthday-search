import mergeSort from "./mergeSort";

const handleFilter = (employeesArr, filterStatus, setFilteredEmployees) => {
  const arr = [];

  employeesArr.map((em) => {
    if (filterStatus === em.birthMonth) {
      arr.push(em);
    }
  });
  //6 === 6 on first load but onClick sets the filterstatus to pick out and set the birthdays we want
  if (setFilteredEmployees) {
    let sortedArr = mergeSort(arr);
    setFilteredEmployees(sortedArr);
  } else {
    return arr;
  }
};

export default handleFilter;
