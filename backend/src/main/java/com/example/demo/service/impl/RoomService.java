package com.example.demo.service.impl;

import com.example.demo.dto.Response;
import com.example.demo.dto.RoomDTO;
import com.example.demo.entity.Booking;
import com.example.demo.entity.Room;
import com.example.demo.exception.OurException;
import com.example.demo.repo.BookingRepository;
import com.example.demo.repo.RoomRepository;
import com.example.demo.service.CloudinaryService;
import com.example.demo.service.interfac.IRoomService;
import com.example.demo.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class RoomService implements IRoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private CloudinaryService cloudinaryService;

    @Override
    public Response addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice, String description) {

        Response response = new Response();

        try {
            String imageUrl = cloudinaryService.uploadImage(photo);
            Room room = new Room();
            room.setRoomPhotoUrl(imageUrl);
            room.setRoomPrice(roomPrice);
            room.setRoomType(roomType);
            room.setRoomDescription(description);

            Room savedRoo = roomRepository.save(room);
            RoomDTO roomDTO = Utils.mapRoomEntityToRoomDTO(savedRoo);

            response.setStatusCode(200);
            response.setMessage("successful");
            response.setRoom(roomDTO);

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while saving a room: " + e.getMessage());

        }
        return response;
    }

    @Override
    public List<String> getAllRoomTypes() {
        return roomRepository.findDistinctRoomType();
    }

    @Override
    public Response getAllRooms() {

        Response response = new Response();

        try {
            List<Room> roomList = roomRepository.findAll();
            List<RoomDTO> roomDTOList = Utils.mapRoomListEntityToRoomListDTO(roomList);

            response.setStatusCode(200);
            response.setMessage("successful");
            response.setRoomList(roomDTOList);

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while getting  all room: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response deleteRoom(String roomId) {
        Response response = new Response();

        try {
            roomRepository.findById(roomId).orElseThrow(() -> new OurException("Room Not Found"));
            roomRepository.deleteById(roomId);

            response.setStatusCode(200);
            response.setMessage("successful");

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while deleting  a room: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response updateRoom(String roomId, String description, String roomType, BigDecimal roomPrice,
            MultipartFile photo) {
        Response response = new Response();

        try {
            String imageUrl = null;
            if (photo != null && !photo.isEmpty()) {
                imageUrl = cloudinaryService.uploadImage(photo);
            }

            Room room = roomRepository.findById(roomId).orElseThrow(() -> new OurException("Room Not Found"));

            if (roomType != null)
                room.setRoomType(roomType);
            if (roomPrice != null)
                room.setRoomPrice(roomPrice);
            if (description != null)
                room.setRoomDescription(description);
            if (imageUrl != null)
                room.setRoomPhotoUrl(imageUrl);

            Room updatedRoom = roomRepository.save(room);

            RoomDTO roomDTO = Utils.mapRoomEntityToRoomDTO(updatedRoom);

            response.setStatusCode(200);
            response.setMessage("successful");
            response.setRoom(roomDTO);

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while updating  a room: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getRoomById(String roomId) {
        Response response = new Response();

        try {
            Room room = roomRepository.findById(roomId).orElseThrow(() -> new OurException("Room Not Found"));
            RoomDTO roomDTO = Utils.mapRoomEntityToRoomDTOPlusBookings(room);

            response.setStatusCode(200);
            response.setMessage("successful");
            response.setRoom(roomDTO);

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while getting  a room by id: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getAvailableRoomsByDateAndType(LocalDate checkInDate, LocalDate checkOutDate, String roomType) {
        Response response = new Response();

        try {
            List<Booking> bookings = bookingRepository.findBookingsByDateRange(checkInDate, checkOutDate);
            List<String> bookedRoomsId = bookings.stream().map(booking -> booking.getRoom().getId()).toList();

            List<Room> availableRooms = roomRepository.findByRoomTypeLikeAndIdNotIn(roomType, bookedRoomsId);
            List<RoomDTO> roomDTOList = Utils.mapRoomListEntityToRoomListDTO(availableRooms);

            response.setStatusCode(200);
            response.setMessage("successful");
            response.setRoomList(roomDTOList);

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while getting  available rooms by date range: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getAllAvailableRooms() {
        Response response = new Response();

        try {
            List<Room> roomList = roomRepository.findAllAvailableRooms();
            List<RoomDTO> roomDTOList = Utils.mapRoomListEntityToRoomListDTO(roomList);

            response.setStatusCode(200);
            response.setMessage("successful");
            response.setRoomList(roomDTOList);

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred while getting  all available rooms: " + e.getMessage());
        }
        return response;
    }
}
