import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CourseModel } from 'src/app/courses/models/course.model';
import { CoursesService } from 'src/app/courses/services/courses.service';

import { ToastHelper } from '../../helpers/toast.helper';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { CourseFormComponent } from './../../../courses/course-form/course-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() courses: CourseModel[] = [];
  dataSource = new MatTableDataSource(this.courses);
  readonly displayedColumns = ['name', 'category', 'actions'];
  @Output() list = new EventEmitter(false);

  actionButtons: any[] = [];
  course: CourseModel = new CourseModel();


  constructor(
    private dialog: MatDialog,
    private couserService: CoursesService,
    private toast: ToastHelper
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
        this.list.emit(true)
      }
    })
  }

  onDelete(course: CourseModel) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: 'Deseja Realmente remover esse Curso?'
    })

    dialogRef.afterClosed().subscribe((asDelete) => {
      if (asDelete) {
        this.delete(course)
      }
    })
  }

  delete(course: CourseModel) {
    this.couserService.delete(course._id).subscribe(
      {
        next: (success: string) => {
          this.toast.success(success);
          this.list.emit(true)
        },
        error: (error: string) => {
          this.toast.error(error);
          this.list.emit(false)
        }
      }
    )
  }

}
