import { Location } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';

import { CourseModel } from '../models/course.model';
import { CoursesService } from './../services/courses.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseForm?: FormGroup;
  cousrseModel: CourseModel = new CourseModel();
  courseId: any;

  constructor(
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private toast: ToastHelper,
    @Inject(MAT_DIALOG_DATA) public data: CourseModel,
    private dialogRef: MatDialogRef<CourseFormComponent>
  ) {
    this.courseId = this.activedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.data) {
      this.getById(this.data._id);

    } else {
      this.cousrseModel = new CourseModel();
      this.buildCourseFormGroup();
    }

  }

  getById(id: string) {
    this.courseService.getById(id).subscribe(
      {
        next: (response: CourseModel) => {
          this.cousrseModel = response;
          this.buildCourseFormGroup();
        },
        error: (error: string) => {
          this.toast.error(error);
          this.onCancel();
        }
      }
    )
  }

  buildCourseFormGroup() {
    this.courseForm = this.formBuilder.group({
      name: [this.cousrseModel?.name, [Validators.required]],
      category: [this.cousrseModel?.category, [Validators.required]]
    })

    this.courseForm.get('name')?.valueChanges.subscribe(value => this.cousrseModel.name = value);
    this.courseForm.get('category')?.valueChanges.subscribe(value => this.cousrseModel.category = value);
  }

  onSubmit() {

    if (this.courseForm?.valid) {
      this.save();
    } else {
      this.toast.error('Todos os campos são obrigatórios. Preencha os campos e tente novamente');
    }

  }

  save() {
    const obserbable = this.cousrseModel._id ?
      this.courseService.update(this.cousrseModel)
      : this.courseService.save(this.cousrseModel)

    obserbable.subscribe(
      {
        next: (success: any) => {
          this.toast.success(success);
          this.onCancel(true);
        },
        error: (error: string) => {
          console.log(error)
          this.toast.error(error, 'Atenção!')
        }
      }
    );
  }

  onCancel(asAction?: boolean) {
    if (asAction) {
      this.dialogRef.close(true);

    } else {
      this.dialogRef.close(false);

    }
  }

}
