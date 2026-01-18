import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  @ViewChild('stdForm') stdForm!: NgForm;
  constructor(private _stdSerive: StudentService) {}

  ngOnInit(): void {}

  onAdd() {
    if (this.stdForm.valid) {
      let createObj: Istd = {
        ...this.stdForm.value,
        id: Date.now().toString(),
      };
      this._stdSerive.onAdd(createObj);
      this.stdForm.reset();
    }
  }
}
