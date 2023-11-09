import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';
import { CoursesService } from '../services/courses.service';
import { CourseModel } from '../models/course.model';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses?: CourseModel[] | null;

  displayedColumns = ['name', 'category', 'actions'];

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
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.list(); 
  }

  list() {
    this.courses = null;
    this.cousrsesService.list().subscribe(
      {
        next: (response: CourseModel[]) => {
          this.courses = response;
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

  onEdit(course: CourseModel) {
    this.router.navigate([`new/${course._id}`], { relativeTo: this.route });
  }

  onDelete(course: CourseModel) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: course
    })

    dialogRef.afterClosed().subscribe((asDelete) => {
      console.log(asDelete);
      if (asDelete) {
        this.list();
      }
    })
  }
}
