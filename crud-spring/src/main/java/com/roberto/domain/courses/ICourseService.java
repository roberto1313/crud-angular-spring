package com.roberto.domain.courses;

import com.roberto.domain.courses.models.CourseModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICourseService {
    List<CourseModel> list();

    void create(CourseModel courseModel);
}
