package com.roberto.domain.courses;

import com.roberto.domain.courses.models.CourseModel;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 10, nullable = false)
    private String category;
    public Course() {}
    public CourseModel ToModel() {
        return new CourseModel(id, name, category);
    }
}
