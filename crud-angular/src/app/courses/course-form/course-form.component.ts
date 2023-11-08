import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseModel } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseForm?: FormGroup;
  cousrseModel: CourseModel = new CourseModel();

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.buildCourseFormGroup();
  }

  buildCourseFormGroup() {
    this.courseForm = this.formBuilder.group({
      name:[this.cousrseModel?.name, [Validators.required]],
      category:[this.cousrseModel?.category,[Validators.required]]
    })
  }

  onSubmit() {

  }

  onCancel() {
    this.router.navigate([''])
  }

}
