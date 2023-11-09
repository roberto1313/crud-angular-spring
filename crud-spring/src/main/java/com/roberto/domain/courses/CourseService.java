package com.roberto.domain.courses;

import com.roberto.domain.courses.models.CourseModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService implements ICourseService {

    private final ICourseRepository Repository;

    public CourseService(ICourseRepository repository) {
        Repository = repository;
    }

    @Override
    public List<CourseModel> list() {
        return Repository.findAll().stream().map(Course::ToModel).collect(Collectors.toList());
    }

    @Override
    public void create(CourseModel courseModel) {

           var course = new Course(courseModel.name, courseModel.category);
           Repository.save(course);

    }
}
