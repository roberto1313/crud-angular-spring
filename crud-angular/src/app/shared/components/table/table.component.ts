import { CourseFormComponent } from './../../../courses/course-form/course-form.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from 'src/app/courses/models/course.model';

import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() courses: CourseModel[] = [];
  dataSource = new MatTableDataSource(this.courses);
  readonly displayedColumns = ['name', 'category', 'actions'];
  @Output() list = new EventEmitter<any>();

  actionButtons: any[] = [];
  course: CourseModel = new CourseModel();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {

  }


  ngOnInit(): void {
  }

  onEdit(course: CourseModel) {
   this.openModal(course);
  }

  openModal(course: CourseModel) {
    const dialogRef = this.dialog.open(CourseFormComponent, {
      data: course,
    })

    dialogRef.afterClosed().subscribe((asUpdate) => {
      if (asUpdate) {
        this.list.emit(null)
      }
    })
  }

  onDelete(course: CourseModel) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: course
    })

    dialogRef.afterClosed().subscribe((asDelete) => {
      if (asDelete) {
        this.list.emit(null)
      }
    })
  }

  getFilterCourses(courses: any) {
    this.courses = courses;
  }

}
