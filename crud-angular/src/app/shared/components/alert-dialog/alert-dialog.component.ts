import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseModel } from 'src/app/courses/models/course.model';
import { CoursesService } from 'src/app/courses/services/courses.service';
import { ToastHelper } from '../../helpers/toast.helper';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CourseModel,
    private dialogRef: MatDialogRef<AlertDialogComponent>,

  ) { }

  onFirmClick(action: boolean) {
    this.dialogRef.close(action);
  }

}
