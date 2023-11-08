import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { delay, first, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient,private ngxService: NgxUiLoaderService) { }

  list() {
    return this.httpClient.get<CourseModel[]>(`${this.API}/courses`)
    .pipe(
      first(),
      delay(1000),
      tap((courses: CourseModel[]) => console.log(courses))
    );
  }
}
