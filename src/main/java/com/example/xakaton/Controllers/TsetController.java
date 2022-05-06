package com.example.xakaton.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("showtest")
public class TsetController {
    @GetMapping
    public String showTests(){
        return "Tests";
    }
}
