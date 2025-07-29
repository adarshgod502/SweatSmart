package com.example.demo.util;

import com.example.demo.service.interfac.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.io.InputStream;
import java.net.URL;

@Component
public class AddCricketRoom implements CommandLineRunner {

    @Autowired
    private IRoomService roomService;

    @Override
    public void run(String... args) throws Exception {
        // Add cricket room if not exists
        String cricketRoomType = "cricket";

        // This is a simple example, you might want to check if cricket room already exists in DB before adding

        // Load a default image from URL or local resource
        URL imageUrl = new URL("https://example.com/default-cricket-image.jpg"); // Replace with actual image URL or local file path
        try (InputStream inputStream = imageUrl.openStream()) {
            MultipartFile photo = new MultipartFile() {
                @Override
                public String getName() {
                    return "photo";
                }

                @Override
                public String getOriginalFilename() {
                    return "cricket.jpg";
                }

                @Override
                public String getContentType() {
                    return "image/jpeg";
                }

                @Override
                public boolean isEmpty() {
                    return false;
                }

                @Override
                public long getSize() {
                    try {
                        return inputStream.available();
                    } catch (Exception e) {
                        return 0;
                    }
                }

                @Override
                public byte[] getBytes() {
                    try {
                        return inputStream.readAllBytes();
                    } catch (Exception e) {
                        return new byte[0];
                    }
                }

                @Override
                public InputStream getInputStream() {
                    return inputStream;
                }

                @Override
                public void transferTo(java.io.File dest) {
                    // no-op
                }
            };
            BigDecimal price = new BigDecimal("100.00");
            String description = "Cricket session available";

            roomService.addNewRoom(photo, cricketRoomType, price, description);
        } catch (Exception e) {
            System.out.println("Failed to add cricket room: " + e.getMessage());
        }
    }
}
