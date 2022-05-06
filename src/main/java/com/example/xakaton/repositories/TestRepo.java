package com.example.xakaton.repositories;

import com.example.xakaton.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepo  extends JpaRepository<Test, Long> {
}
