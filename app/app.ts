/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf, defaultPipes, PipeRegistry, bind, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FetchService} from 'services/fetchService';
import {FoodService} from 'services/foodService';
import {PositifPipe} from 'pipes/positifPipe';
import {CustomValidators} from 'validators/loginValidators';


@Component({
  selector: 'app',
  appInjector: [FetchService, FoodService, CustomValidators]
})
@View({
  templateUrl: "templates/main.html",
  directives: [NgFor, NgIf, formDirectives]
})
class App {
  foods: Array<Object>;
  foodList: Array<Object>;
  caloriesCount: Number;
  caloriesNeed: Number;
  foodService : FoodService;
  imcForm: ControlGroup;

  constructor(fetchService: FetchService, foodService : FoodService, customValidators: CustomValidators) {

    this.foodService = foodService;
    this.foodList = this.foodService.getFood();
    this.caloriesCount = this.foodService.getCaloriesCount();
    this.caloriesNeed = this.foodService.getCaloriesNeed();

    fetchService.loadFoods().then(response => {
      this.foods = response;
    }, response => {
      console.warn("foods loading failed (it should, file doesnt exist)");
    });

    this.imcForm = new ControlGroup({
      taille: new Control("", customValidators.taille), // custom validator
      age: new Control("", customValidators.age), // custom validator
      masse: new Control("", customValidators.masse) // custom validator
    });
  }

  addFood(event, aliment, poids) {
    event.preventDefault();

      for (var i = 0; i < this.foods.length; i++) {
        if( this.foods[i].name.indexOf(aliment.value) != -1){
          this.foodService.addFood(this.foods[i].name, this.foods[i].calories, poids.value);
          break;
        }
      };

      this.caloriesCount = this.foodService.getCaloriesCount();
    
      aliment.value = "";
      poids.value = "";
  }


  deleteFood(event, index, food) {
    event.preventDefault();
    this.foodService.deleteFood(index, food.calories);
    this.caloriesCount = this.foodService.getCaloriesCount();
  }


 
    getCaloriesNeed(event, taille, masse, age){
      event.preventDefault();

    if(this.imcForm.valid) { // return true or false, depending on the form state
      if (document.getElementById('homme').checked) {
        var sexe = "homme";
      }
      else {
        var sexe = "femme";
      }

      this.caloriesNeed = this.foodService.getCaloriesNeed(masse.value, taille.value, age.value, sexe);
    }
    else{
      console.log(this.imcForm)
    }
  }
}

export var pipes = Object.assign({}, defaultPipes, {
  positif: [
    new PositifPipe()
  ]
});

bootstrap(App, bind(PipeRegistry).toValue(new PipeRegistry(pipes)));
