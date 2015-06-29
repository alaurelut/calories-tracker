if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var fetchService_1 = require('services/fetchService');
var positifPipe_1 = require('pipes/positifPipe');
var App = (function () {
    function App(fetchService) {
        var _this = this;
        this.foodList = [];
        this.calories = 0;
        this.besoin = 0;
        fetchService.loadFoods().then(function (response) {
            _this.foods = response;
        }, function (response) {
            console.warn("foods loading failed (it should, file doesnt exist)");
        });
    }
    App.prototype.addFood = function (event, aliment, poids) {
        event.preventDefault();
        for (var i = 0; i < this.foods.length; i++) {
            if (this.foods[i].name.indexOf(aliment.value) != -1) {
                this.calculateKcal(this.foods[i], poids.value);
                break;
            }
        }
        ;
        aliment.value = "";
        poids.value = "";
    };
    App.prototype.deleteFood = function (event, i, food) {
        event.preventDefault();
        console.log(food.calories);
        var calories = food.calories;
        this.calories -= calories;
        this.foodList.splice(i, 1);
    };
    App.prototype.calculateKcal = function (food, poids) {
        var calories = parseInt(food.calories * (poids / 100));
        this.foodList.push({ "name": food.name, "calories": calories, "poids": poids.value });
        this.calories += calories;
    };
    App.prototype.calculMetabolisme = function (event, taille, masse, age) {
        event.preventDefault();
        if (document.getElementById('homme').checked) {
            this.besoin = parseInt(66.5 + (13.8 * masse.value) + (5 * taille.value) - (6.8 * age.value));
        }
        else {
            this.besoin = parseInt(655.1 + (9.6 * masse.value) + (1.9 * taille.value) - (4.7 * age.value));
        }
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            appInjector: [fetchService_1.FetchService]
        }),
        angular2_1.View({
            templateUrl: "templates/main.html",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [fetchService_1.FetchService])
    ], App);
    return App;
})();
exports.pipes = Object.assign({}, angular2_1.defaultPipes, {
    positif: [
        new positifPipe_1.PositifPipe()
    ]
});
angular2_1.bootstrap(App, angular2_1.bind(angular2_1.PipeRegistry).toValue(new angular2_1.PipeRegistry(exports.pipes)));

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuYWRkRm9vZCIsIkFwcC5jYWxjdWxhdGVLY2FsIiwiQXBwLmNhbGN1bE1ldGFib2xpc21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQ0EsNENBRDRDO0FBQzVDLHlCQUF3RixtQkFBbUIsQ0FBQyxDQUFBO0FBQzVHLDZCQUEyQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ25ELDRCQUEwQixtQkFBbUIsQ0FBQyxDQUFBO0FBRzlDO0lBY0VBLGFBQVlBLFlBQTBCQTtRQWR4Q0MsaUJBK0RDQTtRQS9DR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVoQkEsWUFBWUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7WUFDcENBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBO1FBQ3hCQSxDQUFDQSxFQUFFQSxVQUFBQSxRQUFRQTtZQUNUQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxxREFBcURBLENBQUNBLENBQUNBO1FBQ3RFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVMQSxDQUFDQTtJQUVERCxxQkFBT0EsR0FBUEEsVUFBUUEsS0FBS0EsRUFBRUEsT0FBT0EsRUFBRUEsS0FBS0E7UUFDekJFLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBRXZCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUMzQ0EsRUFBRUEsQ0FBQUEsQ0FBRUEsSUFB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ZUFBSSxDQUFDLHVCQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBWSxDQUFDLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0ZvciwgTmdJZiwgZGVmYXVsdFBpcGVzLCBQaXBlUmVnaXN0cnksIGJpbmR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7RmV0Y2hTZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9mZXRjaFNlcnZpY2UnO1xuaW1wb3J0IHtQb3NpdGlmUGlwZX0gZnJvbSAncGlwZXMvcG9zaXRpZlBpcGUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIGFwcEluamVjdG9yOiBbRmV0Y2hTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL21haW4uaHRtbFwiLFxuICBkaXJlY3RpdmVzOiBbTmdGb3IsIE5nSWZdXG59KVxuY2xhc3MgQXBwIHtcbiAgZm9vZHM6IEFycmF5PE9iamVjdD47XG4gIGZvb2RMaXN0OiBBcnJheTxPYmplY3Q+O1xuICBjYWxvcmllczogTnVtYmVyO1xuICBiZXNvaW46IE51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihmZXRjaFNlcnZpY2U6IEZldGNoU2VydmljZSkge1xuXG4gICAgdGhpcy5mb29kTGlzdCA9IFtdO1xuICAgIHRoaXMuY2Fsb3JpZXMgPSAwO1xuICAgIHRoaXMuYmVzb2luID0gMDtcblxuICAgIGZldGNoU2VydmljZS5sb2FkRm9vZHMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuZm9vZHMgPSByZXNwb25zZTtcbiAgICB9LCByZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oXCJmb29kcyBsb2FkaW5nIGZhaWxlZCAoaXQgc2hvdWxkLCBmaWxlIGRvZXNudCBleGlzdClcIik7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGFkZEZvb2QoZXZlbnQsIGFsaW1lbnQsIHBvaWRzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZm9vZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoIHRoaXMuZm9vZHNbaV0ubmFtZS5pbmRleE9mKGFsaW1lbnQudmFsdWUpICE9IC0xKXtcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUtjYWwodGhpcy5mb29kc1tpXSwgcG9pZHMudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBhbGltZW50LnZhbHVlID0gXCJcIjtcbiAgICAgIHBvaWRzLnZhbHVlID0gXCJcIjtcblxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUtjYWwoZm9vZCwgcG9pZHMpe1xuICAgICAgdmFyIGNhbG9yaWVzID0gcGFyc2VJbnQoZm9vZC5jYWxvcmllcyAqIChwb2lkcy8xMDApICk7XG4gICAgICB0aGlzLmZvb2RMaXN0LnB1c2goe1wibmFtZVwiOmZvb2QubmFtZSwgXCJjYWxvcmllc1wiOmNhbG9yaWVzLCBcInBvaWRzXCI6cG9pZHMudmFsdWUgfSk7XG5cbiAgICAgIHRoaXMuY2Fsb3JpZXMgKz0gY2Fsb3JpZXM7XG4gICAgfVxuXG4gICAgY2FsY3VsTWV0YWJvbGlzbWUoZXZlbnQsIHRhaWxsZSwgbWFzc2UsIGFnZSl7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tbWUnKS5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuYmVzb2luID0gcGFyc2VJbnQoIDY2LjUgKyAoMTMuOCAqIG1hc3NlLnZhbHVlKSArICg1ICogdGFpbGxlLnZhbHVlKSAtICg2LjggKiBhZ2UudmFsdWUpICk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoaXMuYmVzb2luID0gcGFyc2VJbnQoIDY1NS4xICsgKDkuNiAqIG1hc3NlLnZhbHVlKSArICgxLjkgKiB0YWlsbGUudmFsdWUpIC0gKDQuNyAqIGFnZS52YWx1ZSkgKTtcbiAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IHZhciBwaXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQaXBlcywge1xuICBwb3NpdGlmOiBbXG4gICAgbmV3IFBvc2l0aWZQaXBlKClcbiAgXVxufSk7XG5cbmJvb3RzdHJhcChBcHAsIGJpbmQoUGlwZVJlZ2lzdHJ5KS50b1ZhbHVlKG5ldyBQaXBlUmVnaXN0cnkocGlwZXMpKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuYWRkRm9vZCIsIkFwcC5kZWxldGVGb29kIiwiQXBwLmNhbGN1bGF0ZUtjYWwiLCJBcHAuY2FsY3VsTWV0YWJvbGlzbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw0Q0FENEM7QUFDNUMseUJBQXNELG1CQUFtQixDQUFDLENBQUE7QUFDMUUsNkJBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFFbkQ7SUFjRUEsYUFBWUEsWUFBMEJBO1FBZHhDQyxpQkEwRUNBO1FBMURHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbEJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO1FBRWhCQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFBQSxRQUFRQTtZQUNwQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDeEJBLENBQUNBLEVBQUVBLFVBQUFBLFFBQVFBO1lBQ1RBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLHFEQUFxREEsQ0FBQ0EsQ0FBQ0E7UUFDdEVBLENBQUNBLENBQUNBLENBQUNBO0lBRUxBLENBQUNBO0lBRURELHFCQUFPQSxHQUFQQSxVQUFRQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxLQUFLQTtRQUN6QkUsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFFdkJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQzNDQSxFQUFFQSxDQUFBQSxDQUFFQSxJQUFJQSxDQUFDQSxLQUFL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LDJCQUFZQSxDQUFDQTtTQUM1QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEscUJBQXFCQTtZQUNsQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLEVBQUVBLGVBQUlBLENBQUNBO1NBQzFCQSxDQUFDQTs7WUFtRURBO0lBQURBLFVBQUNBO0FBQURBLENBMUVBLEFBMEVDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcbmltcG9ydCB7RmV0Y2hTZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9mZXRjaFNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIGFwcEluamVjdG9yOiBbRmV0Y2hTZXJ2aWNlXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL21haW4uaHRtbFwiLFxyXG4gIGRpcmVjdGl2ZXM6IFtOZ0ZvciwgTmdJZl1cclxufSlcclxuY2xhc3MgQXBwIHtcclxuICBmb29kczogQXJyYXk8T2JqZWN0PjtcclxuICBmb29kTGlzdDogQXJyYXk8T2JqZWN0PjtcclxuICBjYWxvcmllczogTnVtYmVyO1xyXG4gIGJlc29pbjogTnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmZXRjaFNlcnZpY2U6IEZldGNoU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuZm9vZExpc3QgPSBbXTtcclxuICAgIHRoaXMuY2Fsb3JpZXMgPSAwO1xyXG4gICAgdGhpcy5iZXNvaW4gPSAwO1xyXG5cclxuICAgIGZldGNoU2VydmljZS5sb2FkRm9vZHMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgdGhpcy5mb29kcyA9IHJlc3BvbnNlO1xyXG4gICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJmb29kcyBsb2FkaW5nIGZhaWxlZCAoaXQgc2hvdWxkLCBmaWxlIGRvZXNudCBleGlzdClcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBhZGRGb29kKGV2ZW50LCBhbGltZW50LCBwb2lkcykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZvb2RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoIHRoaXMuZm9vZHNbaV0ubmFtZS5pbmRleE9mKGFsaW1lbnQudmFsdWUpICE9IC0xKXtcclxuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlS2NhbCh0aGlzLmZvb2RzW2ldLCBwb2lkcy52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBhbGltZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgcG9pZHMudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgZGVsZXRlRm9vZChldmVudCwgaSwgZm9vZCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZm9vZC5jYWxvcmllcyk7XHJcbiAgICAgIHZhciBjYWxvcmllcyA9IGZvb2QuY2Fsb3JpZXM7XHJcbiAgICAgIHRoaXMuY2Fsb3JpZXMgLT0gY2Fsb3JpZXM7XHJcbiAgICAgIHRoaXMuZm9vZExpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVLY2FsKGZvb2QsIHBvaWRzKXtcclxuICAgICAgdmFyIGNhbG9yaWVzID0gcGFyc2VJbnQoZm9vZC5jYWxvcmllcyAqIChwb2lkcy8xMDApICk7XHJcbiAgICAgIHRoaXMuZm9vZExpc3QucHVzaCh7XCJuYW1lXCI6Zm9vZC5uYW1lLCBcImNhbG9yaWVzXCI6Y2Fsb3JpZXMsIFwicG9pZHNcIjpwb2lkcy52YWx1ZSB9KTtcclxuXHJcbiAgICAgIHRoaXMuY2Fsb3JpZXMgKz0gY2Fsb3JpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsTWV0YWJvbGlzbWUoZXZlbnQsIHRhaWxsZSwgbWFzc2UsIGFnZSl7XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21tZScpLmNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLmJlc29pbiA9IHBhcnNlSW50KCA2Ni41ICsgKDEzLjggKiBtYXNzZS52YWx1ZSkgKyAoNSAqIHRhaWxsZS52YWx1ZSkgLSAoNi44ICogYWdlLnZhbHVlKSApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuYmVzb2luID0gcGFyc2VJbnQoIDY1NS4xICsgKDkuNiAqIG1hc3NlLnZhbHVlKSArICgxLjkgKiB0YWlsbGUudmFsdWUpIC0gKDQuNyAqIGFnZS52YWx1ZSkgKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuYm9vdHN0cmFwKEFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
>>>>>>> b8845f29eff4f3429d8aee63e56a6c5eac16a613
