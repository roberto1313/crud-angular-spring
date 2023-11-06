import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [];

  displayedColumns = ['name', 'category'];

  
  constructor(private cousrsesService: CoursesService) {
    this.courses = this.cousrsesService.list();

  }



}
