package com.example.demo.service.interfac;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.Response;
import com.example.demo.entity.User;

public interface IUserService {

    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUSerBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);
}
