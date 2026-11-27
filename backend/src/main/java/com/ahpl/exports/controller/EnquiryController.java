
package com.ahpl.exports.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    public record EnquiryRequest(

            @NotBlank
            @Size(max = 100)
            String name,

            @NotBlank
            @Email
            @Size(max = 150)
            String email,

            @NotBlank
            @Size(max = 25)
            String phone,

            @NotBlank
            @Size(max = 2000)
            String message

    ) {}

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitEnquiry(
            @Valid @RequestBody EnquiryRequest enquiry
    ) {

        System.out.println("===== NEW ENQUIRY =====");

        System.out.println("Name: " + enquiry.name());
        System.out.println("Email: " + enquiry.email());
        System.out.println("Phone: " + enquiry.phone());
        System.out.println("Message: " + enquiry.message());

        System.out.println("=======================");

        return ResponseEntity.ok(
                Map.of(
                        "success", true,
                        "message",
                        "Thank you! Your enquiry was received successfully."
                )
        );
    }

}
