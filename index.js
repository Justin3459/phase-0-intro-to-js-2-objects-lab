// Write your solution in this file!
const employee = {
    name: "Justin",
    streetAddress: "123 road",
}
 function updateEmployeeWithKeyAndValue(employee, name, Sam){
   const updateEmployee = {...employee}
   updateEmployee[name] = Sam
   return updateEmployee
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, ){
    employee[streetAddress] = "12 Broadway"
    return employee
  }
 function deleteFromEmployeeByKey(employee, name){
   const deleteEmployee = {...employee}
    delete deleteEmployee.name
    return deleteEmployee
 }
 function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name
    return employee
 }