package com.example.demo.user;

import jakarta.validation.constraints.*;

public record UserRequestDTO (
    @NotBlank String firstName,
    @NotBlank String lastName,
    @Email String email,
    String phoneNumber,
    String addressLine1,
    String addressLine2,
    String city,
    String state,
    String zipcode
) {}