
package com.ahpl.exports.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to AHPL Exports!";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "AHPL Java Backend is Working!";
    }

    @GetMapping("/api/company")
    public Map<String, String> company() {

        return Map.of(
                "name", "Anant Horizons Pvt. Ltd.",
                "brand", "AHPL Exports",
                "headline", "Global Trade. Trusted Partnerships.",
                "subheadline", "Limitless Opportunities.",
                "status", "Active"
        );
    }
}
