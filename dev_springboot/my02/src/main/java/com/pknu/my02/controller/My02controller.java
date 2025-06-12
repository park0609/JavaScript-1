package com.pknu.my02.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class My02controller {
    @GetMapping("/api")
    public String Api(Model model) {
        model.addAttribute("name");
        model.addAttribute("password");
        return "index";
    }

    @PostMapping("/data")
    public String rdata(@RequestParam String username, @RequestParam String password, Model model) {
        System.out.println("이름: " + username + " / 나이: " + password);
        Map<String, String> result = new HashMap<>();
        result.put("username", username);
        result.put("password", password);
        return "index";
    }
}
