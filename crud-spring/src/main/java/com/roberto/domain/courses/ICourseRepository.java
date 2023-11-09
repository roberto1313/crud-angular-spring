package com.roberto.domain.courses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ICourseRepository extends JpaRepository<Course, Long> {
    @Query(value = "SELECT * FROM courses where id=:id", nativeQuery = true)
    Course GetByKey(@Param("id") Long id);
}
