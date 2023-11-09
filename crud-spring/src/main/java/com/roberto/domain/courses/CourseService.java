package com.roberto.domain.courses;

import com.roberto.domain.courses.models.CourseModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
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
    @Override
    public void update(CourseModel courseModel) throws Exception {
        var course = this.getCourse(courseModel.id).get();
        course.update(courseModel.name, courseModel.category);
        Repository.save(course);
    }
    @Override
    public void delete(long id) throws Exception {
        var course = this.getCourse(id).get();
        Repository.delete(course);
    }

    @Override
    public CourseModel getById(Long id) throws Exception {
        return this.getCourse(id).get().ToModel();
    }
    private Optional<Course> getCourse(Long  id) throws Exception  {
        var course = Repository.findById(id);

        if(Objects.isNull(course))
            throw new Exception("Error ao buscar o curso com o identificado "+ id);

        return course;
    }
}
