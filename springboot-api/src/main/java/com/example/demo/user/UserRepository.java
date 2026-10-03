package com.example.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.Instant;

public interface UserRepository extends JpaRepository<User, Long> {
    
}