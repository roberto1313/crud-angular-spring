package com.roberto.web.controllers;

import com.roberto.domain.courses.ICourseRepository;
import com.roberto.domain.courses.ICourseService;
import com.roberto.domain.courses.models.CourseModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public void create(@RequestBody CourseModel courseModel) {
        this.courseService.create(courseModel);
    }

    @PutMapping("")
    public void update(@RequestBody CourseModel courseModel) throws Exception {
        this.courseService.update(courseModel);
    }
    @GetMapping("/{id}")
    public CourseModel getById(@PathVariable String id) throws Exception {
        return courseService.getById(Long.parseLong(id));
    }
}
