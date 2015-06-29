/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf, defaultPipes, PipeRegistry, bind} from 'angular2/angular2';
import {FetchService} from 'services/fetchService';
import {PositifPipe} from 'pipes/positifPipe';


@Component({
  selector: 'app',
  appInjector: [FetchService]
})
@View({
  templateUrl: "templates/main.html",
  directives: [NgFor, NgIf]
})
class App {
  foods: Array<Object>;
  foodList: Array<Object>;
  calories: Number;
  besoin: Number;

  constructor(fetchService: FetchService) {

    this.foodList = [];
    this.calories = 0;
    this.besoin = 0;

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
          this.calculateKcal(this.foods[i], poids.value);
          break;
        }
      };

      aliment.value = "";
      poids.value = "";

    }

  deleteFood(event, i, food) {
      event.preventDefault();

      console.log(food.calories);
      var calories = food.calories;
      this.calories -= calories;
      this.foodList.splice(i,1);
      

    }

    calculateKcal(food, poids){
      var calories = parseInt(food.calories * (poids/100) );
      this.foodList.push({"name":food.name, "calories":calories, "poids":poids.value });

      this.calories += calories;
    }

    calculMetabolisme(event, taille, masse, age){

      event.preventDefault();

      if (document.getElementById('homme').checked) {
        this.besoin = parseInt( 66.5 + (13.8 * masse.value) + (5 * taille.value) - (6.8 * age.value) );
      }
      else
      {
        this.besoin = parseInt( 655.1 + (9.6 * masse.value) + (1.9 * taille.value) - (4.7 * age.value) );
      }

    }
}

export var pipes = Object.assign({}, defaultPipes, {
  positif: [
    new PositifPipe()
  ]
});

bootstrap(App, bind(PipeRegistry).toValue(new PipeRegistry(pipes)));
