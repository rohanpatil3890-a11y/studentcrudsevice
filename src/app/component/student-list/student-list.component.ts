import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  studentArr: Array<Istd> = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.fetchAllData().subscribe((res) => {
      this.studentArr = res;
    });
  }

  onRemove(id: string) {
    this.studentService.onRemove(id);
  }
}
