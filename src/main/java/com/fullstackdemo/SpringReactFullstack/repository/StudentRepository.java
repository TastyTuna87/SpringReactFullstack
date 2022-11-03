package com.fullstackdemo.SpringReactFullstack.repository;

import com.fullstackdemo.SpringReactFullstack.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
