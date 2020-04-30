import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface MyPerson {
  name: string;
  surname: string;
  patronymic?: string;
  seriaP: string;
  numberP: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Работы с формами';
  person: MyPerson;

  personForm: FormGroup;

  ngOnInit(): void {
    this.personForm = new FormGroup({
      // name: new FormControl("какая-то строка")
      // name: new FormControl({value: "какая-то строка", 
      // disabled: true})
      name: new FormControl({
        value: null,
        disabled: false
      },
        Validators.required),
      surname: new FormControl({
        value: null,
        disabled: false
      },
        Validators.required),
      patronymic: new FormControl(),
      seriaP: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ]),
      numberP: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email]),
      phone: new FormControl(),
    });
  }

  onTest() {
    console.log(this.personForm.value)
    this.person = this.personForm.value;
    console.log(this.person)
  }

  onDisable() {
    this.personForm.controls.name.disable();
  }

}
