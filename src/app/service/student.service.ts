import { Injectable } from '@angular/core';
import { Istd } from '../model/student';
import { studentArr } from '../const/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  studentArr: Array<Istd> = studentArr;


 

  fetchAllData(): Observable<Istd[]> {
    return of(this.studentArr);
  }

  onEdit$: Subject<Istd> = new Subject()

  onUpdate(std: Istd) {
    let getIndex = this.studentArr.findIndex(s => s.id === std.id)
    this.studentArr[getIndex] = std
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
