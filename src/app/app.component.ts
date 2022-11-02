import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tester';
  formGroup!: FormGroup;

  ngOnInit(): void {
    const fb = new FormBuilder();
    this.formGroup = new FormGroup({
      username: fb.control(null, Validators.required)
    })
  }

  showResult(): void {
    console.log(this.formGroup);
  }
}
