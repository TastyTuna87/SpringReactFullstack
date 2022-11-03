package com.fullstackdemo.SpringReactFullstack.service;

import com.fullstackdemo.SpringReactFullstack.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
