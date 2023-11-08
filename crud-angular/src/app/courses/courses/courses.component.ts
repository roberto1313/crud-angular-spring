import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';
import { CoursesService } from '../services/courses.service';
import { CourseModel } from '../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<CourseModel[]>;

  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private cousrsesService: CoursesService,
    private toast: ToastHelper,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.courses$ = this.cousrsesService.list().pipe(
      catchError(error => {
        this.toast.error(error?.message, 'Atenção!')
        return of([])
      })
    )

  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
