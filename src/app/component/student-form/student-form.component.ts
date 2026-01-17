import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  isInEditMode: boolean = false
  editObj!: Istd
  @ViewChild('stdForm') stdForm!: NgForm
  constructor(private stdService: StudentService) { }

  ngOnInit(): void {
    this.stdService.onEdit$.subscribe(res => {
      this.stdForm.form.patchValue(res)
      this.editObj = res
      this.isInEditMode = true
    })
  }

  onUpdate() {
    if (this.stdForm.valid) {
      let createObj: Istd = {
        ...this.stdForm.value,
        id: this.editObj.id
      }
      this.stdService.onUpdate(createObj)
      this.isInEditMode = false
      this.stdForm.reset()
    }
  }
}
