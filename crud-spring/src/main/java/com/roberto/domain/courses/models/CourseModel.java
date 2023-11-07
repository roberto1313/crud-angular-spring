package com.roberto.domain.courses.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CourseModel {

    @JsonProperty("_id")
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
