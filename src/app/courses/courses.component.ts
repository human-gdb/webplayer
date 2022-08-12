import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title: String = '';
  count: Number = 0;
  courses: String[] = [];
  isActive = true;
  notActive = false;


  constructor(service: CoursesService) {
    this.count = service.getCount();
    this.title = this.count + ' Authors';
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

  getTitle (){
    return this.title;
  }
}
