package com.roberto.web.controllers;

import com.roberto.domain.courses.ICourseRepository;
import com.roberto.domain.courses.ICourseService;
import com.roberto.domain.courses.models.CourseModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    private final ICourseService courseService;

    public CourseController(ICourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public @ResponseBody List<CourseModel> list() {
        return courseService.list();

    }
}
