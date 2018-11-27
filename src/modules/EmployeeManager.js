import APIManager from "./apiCalls"

class EmployeeManager extends APIManager {
  getAnimals(id) {
    return this.get("employees", id)
  }

  getAllEmployees() {
    return this.getAll("employees")
  }

  removeEmployees(id){
    return this.deleteAndGrag("employees", id)
  }
  postEmployees(newObj){
    return this.post("employees", newObj)
  }
}

export default new EmployeeManager();