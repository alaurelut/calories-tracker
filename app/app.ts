/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf, defaultPipes, PipeRegistry, bind} from 'angular2/angular2';
import {FetchService} from 'services/fetchService';
import {FoodService} from 'services/foodService';
import {PositifPipe} from 'pipes/positifPipe';


@Component({
  selector: 'app',
  appInjector: [FetchService, FoodService]
})
@View({
  templateUrl: "templates/main.html",
  directives: [NgFor, NgIf]
})
class App {
  foods: Array<Object>;
  foodList: Array<Object>;
  caloriesCount: Number;
  caloriesNeed: Number;
  foodService : FoodService;

  constructor(fetchService: FetchService, foodService : FoodService) {

    this.foodService = foodService;
    this.foodList = this.foodService.getFood();
    this.caloriesCount = this.foodService.getCaloriesCount();
    this.caloriesNeed = this.foodService.getCaloriesNeed();

    fetchService.loadFoods().then(response => {
      this.foods = response;
    }, response => {
      console.warn("foods loading failed (it should, file doesnt exist)");
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

    if (document.getElementById('homme').checked) {
      var sexe = "homme";
    }
    else
    {
      var sexe = "femme";
    }

    this.caloriesNeed = this.foodService.getCaloriesNeed(masse.value, taille.value, age.value, sexe);
  }
}

export var pipes = Object.assign({}, defaultPipes, {
  positif: [
    new PositifPipe()
  ]
});

bootstrap(App, bind(PipeRegistry).toValue(new PipeRegistry(pipes)));
