package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @Transactional
    public UserResponseDTO create(UserRequestDTO request) {
        User user = new User(request.firstName(), request.lastName());
        user.setEmail(request.email());
        user.setPhoneNumber(request.phoneNumber());
        user.setAddressLine1(request.addressLine1());
        user.setAddressLine2(request.addressLine2());
        user.setCity(request.city());
        user.setState(request.state());
        user.setZipcode(request.zipcode());

        return UserResponseDTO.from(userRepository.save(user));
    }

    public List<UserResponseDTO> findAll() {
        return userRepository.findAll().stream().map(UserResponseDTO::from).toList();
    }

    public UserResponseDTO findById (Long id) {
        return UserResponseDTO.from(getUser(id));
    }

    @Transactional
    public UserResponseDTO update(Long id, UserRequestDTO request) {
        User user = getUser(id);

        user.setFirstName(request.firstName()); 
        user.setLastName(request.lastName());
        user.setEmail(request.email());
        user.setPhoneNumber(request.phoneNumber());
        user.setAddressLine1(request.addressLine1());
        user.setAddressLine2(request.addressLine2());
        user.setCity(request.city());
        user.setState(request.state());
        user.setZipcode(request.zipcode());

        return UserResponseDTO.from(userRepository.save(user));
    }

    @Transactional
    public void delete(Long id) {
        User user = getUser(id);
        userRepository.delete(user);
    }
}