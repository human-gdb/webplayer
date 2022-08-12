import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: String[] = [];
  count = 3;
  getCourses(){
    return this.courses;
  }
  getCount(){
    return this.count;
  }
  constructor() {
    for(let i = 1; i <= this.count; i++){
      this.courses.push('author' + i);
    }
  }
}
