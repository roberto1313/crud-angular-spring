import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$:Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  
  constructor(private cousrsesService: CoursesService, private toast: ToastHelper) {
    this.courses$ = this.cousrsesService.list().pipe(
      catchError(error => {
        this.toast.error(error?.message, 'Atenção!')
        return of([])
      })
    )
    
  }
  
  ngOnInit(): void {
    // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
       // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);
  }



}
