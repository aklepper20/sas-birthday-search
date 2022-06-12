import mergeSort from "./mergeSort";

const handleFilter = (employeesArr, filterStatus, setFilteredEmployees) => {
  const arr = [];
  employeesArr.map((em) => {
    if (filterStatus === em.birthMonth) {
      arr.push(em);
    }
  });
  let sortedArr = mergeSort(arr);

  setFilteredEmployees(sortedArr);
};

export default handleFilter;
