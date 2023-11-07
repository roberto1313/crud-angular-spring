package com.roberto.domain.courses.models;

import lombok.Data;

@Data
public class CourseModel {

    public Long id;
    public String name;
    public String category;

    protected CourseModel() {}

    public CourseModel(Long id, String name, String category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}
