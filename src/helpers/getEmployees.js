import axios from "axios";

const getEmployees = async (employeesAPI, setEmployeesAPI, postEmployees) => {
  if (employeesAPI?.length >= 100) return;

  try {
    const employeeData = await axios.get(
      "https://randomuser.me/api/?results=100"
    );
    console.log(employeeData.data.results[0]);
    setEmployeesAPI(employeeData.data.results);
  } catch (err) {
    console.log(err);
    alert(err);
  }
  if (employeesAPI) {
    postEmployees(employeesAPI);
  }
};

export default getEmployees;
