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

  list(): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${this.API}/courses`)
      .pipe(
        delay(1000),
        first(),
        catchError((response: any) => throwError(() =>
          response && response.error && response.error.message ? response.error.message : 'Error ao listar os cursos. Tente novamente'
        ))
      );
  }

  save(record: CourseModel): Observable<string> {
    return this.httpClient.post(`${this.API}/courses`, record)
      .pipe(
        map(() => 'Dados salvo com sucesso.'),
        catchError((response: any) => throwError(() =>
          response && response.error && response.error.message ? response.error.message : 'Error ao salvar o curso. Tente novamente'
        ))
      )
  }

  update(record: CourseModel): Observable<string> {
    return this.httpClient.put(`${this.API}/courses`, record)
      .pipe(
        map(() => 'Dados atualizado com sucesso.'),
        catchError((response: any) => throwError(() =>
          response && response.error && response.error.message ? response.error.message : 'Error ao atualizar o curso. Tente novamente'
        ))
      )
  }

  delete(id: any): Observable<string> {
    return this.httpClient.delete(`${this.API}/courses/${id}`)
    .pipe(
      map(() => 'Dados removido com sucesso.'),
      catchError((response: any) => throwError(() =>
        response && response.error && response.error.message ? response.error.message : 'Error ao remover o curso. Tente novamente'
      ))
    )
  }

  getById(id: any): Observable<CourseModel> {
    return this.httpClient.get<CourseModel>(`${this.API}/courses/${id}`)
      .pipe(
        catchError((response: any) => throwError(() =>
          response && response.error && response.error.message ? response.error.message : 'Error ao buscar o curso. Tente novamente'
        ))
      )
  }
}
