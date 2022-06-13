import mergeSort from "./mergeSort";

const handleFilter = (employeesArr, filterStatus, setFilteredEmployees) => {
  const arr = [];
  employeesArr.map((em) => {
    if (filterStatus === em.birthMonth) {
      arr.push(em);
    }
  });

  if (setFilteredEmployees) {
    let sortedArr = mergeSort(arr);
    setFilteredEmployees(sortedArr);
  } else {
    return arr;
  }
};

export default handleFilter;
