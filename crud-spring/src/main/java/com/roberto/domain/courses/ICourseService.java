package com.roberto.domain.courses;

import com.roberto.domain.courses.models.CourseModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICourseService {
    void create(CourseModel courseModel);
    void update(CourseModel courseModel) throws Exception;
    CourseModel getById(Long id) throws Exception;
    List<CourseModel> list();

}
