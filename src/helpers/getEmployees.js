import axios from "axios";

const getEmployees = async (employeesAPI, setEmployeesAPI, postEmployees) => {
  if (employeesAPI?.length >= 100) return;

  try {
    const employeeData = await axios.get(
      "https://randomuser.me/api/?results=100"
    );
    setEmployeesAPI(employeeData.data.results);
  } catch (err) {
    console.log(err);
    alert(err);
  }
  postEmployees(employeesAPI);
};

export default getEmployees;
