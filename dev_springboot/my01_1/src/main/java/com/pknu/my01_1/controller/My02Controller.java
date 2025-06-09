package com.pknu.my01_1.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pknu.my01_1.dto.ChatRequest;
import com.pknu.my01_1.service.OpenAiService;

@RestController
public class My02Controller {
    private final OpenAiService openAiService;

    public My02Controller(OpenAiService openAiService) {
        this.openAiService = openAiService;
    }

    @PostMapping("/final_chatbot")
    @ResponseBody
    public Map<String, String> chat(@RequestBody ChatRequest request) {
        System.out.println(request.getMessage());
        String message = request.getMessage();
        String answer;
        if ("안녕".equals(message)) {
            answer = "안녕하세요!";
        } else if ("반가워".equals(message)) {
            answer = "반갑습니다!";
        } else {
            answer = openAiService.ask(message);
        }

        return Map.of("reply", answer);
    }
}
