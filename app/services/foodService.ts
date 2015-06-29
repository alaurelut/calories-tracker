export class FoodService {
    foods : Array<Food>;
    caloriesCount : Number;
    caloriesNeed : Number;
    
    constructor(){
      this.foods = [];
      this.caloriesCount = 0;
      this.caloriesNeed = 0;
    }

    getFood(){
      return this.foods;
    }

    getCaloriesCount(){
      return this.caloriesCount;
    }

    addFood( name : String, calories: Number, poids: Number ){
      var caloriesCount = parseInt(calories * (poids/100) );
      this.caloriesCount += caloriesCount;
      this.foods.push(new Food(name, caloriesCount, poids));
    }

    deleteFood( index: Number, foodCalories: Number ) {

      this.caloriesCount -= foodCalories;
      this.foods.splice(index,1);     
    }

    getCaloriesNeed(masse: Number, taille: Number, age: Number, sexe: String){

      if (sexe == "homme") {
        this.caloriesNeed = parseInt( 66.5 + (13.8 * masse) + (5 * taille) - (6.8 * age) );
      }
      else
      {
        this.caloriesNeed = parseInt( 655.1 + (9.6 * masse) + (1.9 * taille) - (4.7 * age) );
      }
      return this.caloriesNeed;
    }

}

export class Food {
  name: String;
  calories: Number;
  poids: Number;

  constructor(name: String, calories: Number, poids: Number){
    this.name = name;
    this.calories = calories;
    this.poids = poids;
  }
}