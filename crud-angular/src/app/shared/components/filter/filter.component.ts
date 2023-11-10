import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CourseModel } from 'src/app/courses/models/course.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() courses: CourseModel[] = [];
  dataSource = new MatTableDataSource(this.courses);
  @Output() newFilterCourses: CourseModel[] = [];
  @Output() newItemFilterEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    if (!this.dataSource.data.length) {
      this.dataSource.data = this.courses;
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.courses = this.dataSource.filteredData;
    this.newItemFilterEvent.emit(this.courses);
  }
}
