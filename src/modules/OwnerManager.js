import APIManager from "./apiCalls"

class OwnerManager extends APIManager {
  getOwners(id) {
    return this.get("owners", id)
  }

  getAllOwners() {
    return this.getAll("owners")
  }

  removeOwners(id){
    return this.deleteAndGrag("owners", id)
  }

  postOwners(newObj){
    return this.post("owners", newObj)
  }

}

export default new OwnerManager();