/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FetchService} from 'services/fetchService';

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

bootstrap(App);
