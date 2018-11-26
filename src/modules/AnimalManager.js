import APIManager from "./apiCalls"

class AnimalManager extends APIManager {
  getAnimals(id) {
    return this.get("animals", id)
  }

  getAllAnimals() {
    return this.getAll("animals")
  }

  removeAnimals(id){
    return this.deleteAndGrag("animals", id)
  }
  postAnimal(newObj){
    return this.post("animals", newObj)
  }
}

export default new AnimalManager();