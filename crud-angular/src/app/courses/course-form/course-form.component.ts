import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseModel } from '../models/course.model';
import { Router } from '@angular/router';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseForm?: FormGroup;
  cousrseModel: CourseModel = new CourseModel();

  constructor(
      private formBuilder: FormBuilder,
     private router: Router, 
     private courseService: CoursesService,
     private toast: ToastHelper,
     private location: Location
     ) {}

  ngOnInit(): void {
    this.buildCourseFormGroup();
  }

  buildCourseFormGroup() {
    this.courseForm = this.formBuilder.group({
      name:[this.cousrseModel?.name, []],
      category:[this.cousrseModel?.category,[]]
    })

    this.courseForm.get('name')?.valueChanges.subscribe(value => this.cousrseModel.name = value);
    this.courseForm.get('category')?.valueChanges.subscribe(value => this.cousrseModel.category = value);
  }

  onSubmit() {
    this.courseService.save(this.cousrseModel).subscribe(
      {
        next: (success: any) => {
          this.toast.success(success);
          this.onCancel();
        },
        error: (error: string) => {
          console.log(error)
          this.toast.error(error, 'Atenção!')
        }
      }
    );
  }

  onCancel() {
    this.location.back();
  }

}
