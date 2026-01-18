import { Injectable } from '@angular/core';
import { Istd } from '../model/student';
import { studentArr } from '../const/student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  studentArr: Array<Istd> = studentArr;

  fetchAllData(): Observable<Istd[]> {
    return of(this.studentArr);
  }
  onAdd(std: Istd) {
    this.studentArr.unshift(std);
  }
  onRemove(id: string) {
    let value = this.studentArr.findIndex((s) => s.id === id);
    if (value > -1) {
      this.studentArr.splice(value, 1);
    }
  }
}
