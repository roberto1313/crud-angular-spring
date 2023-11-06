import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../models/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient,private ngxService: NgxUiLoaderService) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap((courses: Course[]) => console.log(courses))
    );
  }
}
