import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { delay, first, tap, catchError, throwError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient, private ngxService: NgxUiLoaderService) { }

  list() {
    return this.httpClient.get<CourseModel[]>(`${this.API}/courses`)
      .pipe(
        first(),
        delay(1000),
        tap((courses: CourseModel[]) => console.log(courses))
      );
  }

  save(record: CourseModel): Observable<string> {
    return this.httpClient.post(`${this.API}/courses`, record)
      .pipe(
        map(() => 'Dados salvo com sucesso.'),
        catchError((response: any) => throwError(() =>
        response && response.error && response.error.message ? response.error.message  : 'Error ao salvar o curso. Tente novamente'
        ))
      )
  }
}
