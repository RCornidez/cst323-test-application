package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> {
            log.warn("User {} not found", id);
            return new ResponseStatusException(HttpStatus.NOT_FOUND);
        });
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

        User saved = userRepository.save(user);

        log.info("Created user {}", saved.getId());
        return UserResponseDTO.from(saved);
    }

    public List<UserResponseDTO> findAll() {
        List<UserResponseDTO> users = userRepository.findAll().stream().map(UserResponseDTO::from).toList();
        log.info("Fetched {} users", users.size());
        return users;
    }

    public UserResponseDTO findById (Long id) {
        UserResponseDTO user = UserResponseDTO.from(getUser(id));
        log.info("Fetched user {}", id);
        return user;
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

        log.info("Updated user {}", id);

        return UserResponseDTO.from(userRepository.save(user));
    }

    @Transactional
    public void delete(Long id) {
        User user = getUser(id);
        userRepository.delete(user);
        log.info("Deleted user {}", id);
    }
}