import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    // transforming the questions to a FormGroup.
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });

    /*
    const form = new FormGroup({
      first: new FormControl(),
      last: new FormControl()
    });

    this.myForm = new FormGroup({
    acceptTC : new FormControl('', [Validators.required, Validators.pattern('true')])
  });


    */

    return new FormGroup(group);
  }
}
