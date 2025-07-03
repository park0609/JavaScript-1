package com.pknu.react_test.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.RestController;

// import jakarta.servlet.http.HttpSession;

@Controller
public class MytestController {

    @PostMapping("/data")
    @ResponseBody
    public Map<String, String> ReceiveData(@RequestBody Map<String, String> payload) {
        String name = payload.get("name");
        String age = payload.get("age");
        String memo = payload.get("memo");
        Map<String, String> result = new HashMap<>();
        result.put("name", name);
        result.put("age", age);
        result.put("memo", memo);
        payload = result;
        return result;
    }

    @GetMapping("/api")
    @ResponseBody
    public Map<String, String> Api() {
        Map<String, String> data = new HashMap<>();
        data.put("data", "관련자료들");
        return data;
    }

}