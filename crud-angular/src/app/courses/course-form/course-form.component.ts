import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseModel } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
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
  courseId: any;
  constructor(
      private formBuilder: FormBuilder,
     private activedRoute: ActivatedRoute, 
     private courseService: CoursesService,
     private toast: ToastHelper,
     private location: Location
     ) {
      this.courseId = this.activedRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    if(this.courseId) {
      this.getById(this.courseId);

    } else {
      this.cousrseModel = new CourseModel();
      this.buildCourseFormGroup();
    }

  }

  getById(id: number) {
    this.courseService.getById(id).subscribe(
      {
        next: (response: CourseModel) => {
          this.cousrseModel = response;
          this.buildCourseFormGroup();
        },
        error: (error: string) => {
          console.log(error);
          this.toast.error(error);
          // this.onCancel();
        }
      }
    )
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
    const obserbable = this.cousrseModel._id ?
    this.courseService.update(this.cousrseModel)
    : this.courseService.save(this.cousrseModel)
    
    obserbable.subscribe(
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
