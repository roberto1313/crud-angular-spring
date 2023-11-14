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
    private couserService: CoursesService,
    private toast: ToastHelper

  ) {}


  onDeleteClick() {
    this.couserService.delete(this.data._id).subscribe(
      {
        next: (success: string) => {
          this.toast.success(success);
          this.closeDialog(true)
        },
        error: (error: string) => {
          this.toast.error(error);
          this.closeDialog()
        }
      }
    )
  }

  onCancelClick() {
    this.closeDialog();
  }

  closeDialog(asAction?: boolean) {
    if(asAction) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(false);
    }
  }
}
