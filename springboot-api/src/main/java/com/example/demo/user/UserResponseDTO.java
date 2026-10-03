package com.example.demo.user;

public record UserResponseDTO (
    Long id,
    String firstName,
    String lastName,
    String email,
    String phoneNumber,
    String addressLine1,
    String addressLine2,
    String city,
    String state,
    String zipcode
) {
    public static UserResponseDTO from (User user) {
        return new UserResponseDTO(
            user.getId(),
            user.getFirstName(),
            user.getLastName(),
            user.getEmail(),
            user.getPhoneNumber(),
            user.getAddressLine1(),
            user.getAddressLine2(),
            user.getCity(),
            user.getState(),
            user.getZipcode()
        );
    }
}