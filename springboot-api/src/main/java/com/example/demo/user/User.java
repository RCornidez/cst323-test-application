package com.example.demo.user;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;
    
    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;
    
    private String email;
    
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address_line1")
    private String addressLine1;

    @Column(name = "address_line2")
    private String addressLine2;

    private String city;

    private String state;

    @Column(name = "zip_code")
    private String zipcode;

    @Column(name = "created_at", insertable = false, updatable = false)
    @Setter(AccessLevel.NONE)
    private Instant createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    @Setter(AccessLevel.NONE)
    private Instant updatedAt;

    public User (String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}