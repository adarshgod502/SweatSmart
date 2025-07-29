package com.example.demo.service.interfac;


import com.example.demo.dto.Response;
import com.example.demo.entity.Booking;

public interface IBookingService {

    Response saveBooking(String rooId, String userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(String bookingId);
}
