import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'form-example';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  printLoop() {

    for (let i = 0; i < 10 ; i++) {
        setTimeout(function() { console.log(i); }, 100 * i);
    }

  }


  theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();	// returns null though in console
  }

}
