import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';

import { CourseModel } from '../models/course.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses?: CourseModel[] | null;
  courseItemButtons: any[] = [];
  actionsTableItemButtons: any[] = [];
  dataSource = new MatTableDataSource(this.courses as CourseModel[]);

  constructor(
    private cousrsesService: CoursesService,
    private toast: ToastHelper,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    // this.list();
  }

  ngAfterContentInit(): void {
    this.list();
    this.buildButtons()
  }

  buildButtons() {
    this.courseItemButtons = [
      {
        label: 'Adicionar',
        icon: 'add',
        onClick: () => this.onAdd()
      }
    ];
  }

  list() {
    this.courses = null;
    this.cousrsesService.list().subscribe(
      {
        next: (response: CourseModel[]) => {
          this.courses = response;
          this.dataSource.data = response;
        },
        error: (error: string) => {
          this.toast.error(error, 'Atenção!');
          this.courses = [];
        },
      }
    )
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
