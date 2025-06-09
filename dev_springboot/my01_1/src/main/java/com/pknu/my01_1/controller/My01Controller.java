package com.pknu.my01_1.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pknu.my01_1.dto.BungBbang;
import com.pknu.my01_1.dto.MemberData;

@Controller
public class My01Controller {
    @GetMapping("/")
    public String mainPage(Model model) {
        List<String> pageNames = List.of("model", "increase", "fragments", "if", "DTO", "DTO2", "GET_querystring",
                "GET_pathvariable", "POST_formdata", "final_chatbot");
        model.addAttribute("pages", pageNames);
        return "index"; // templates/index.html

    }

    @GetMapping("/model")
    public String ex01Page(Model model) {
        model.addAttribute("hello", "만나서 반갑습니다. Spring Boot 시작합니다.");
        model.addAttribute("name", "sss");
        model.addAttribute("age", 20);
        return "ex01"; // templates/ex01.html

    }

    @GetMapping("/increase")
    public String ex02Page(Model model) {
        model.addAttribute("hello", "만나서 반갑습니다. Spring Boot 시작합니다.");
        model.addAttribute("name", "sss");
        model.addAttribute("age", 20);
        List<Integer> sampleNumbers = List.of(1, 2, 3, 4, 5, 6, 7);
        model.addAttribute("numbers", sampleNumbers);
        return "ex02"; // templates/ex02.html
    }

    @GetMapping("/fragments")
    public String ex03String(Model model) {
        return "ex03"; // templates/ex03.html
    }

    @GetMapping("/if")
    public String ex04String(Model model) {
        model.addAttribute("isAdmin", false);
        model.addAttribute("who", "김기윤");
        List<String> items = new ArrayList<>();
        items.add("사과");
        items.add("복숭아");
        items.add("바나나");
        items.add("수박");
        items.add("망고");
        items.add("포도");
        items.add("참외");
        model.addAttribute("items", items);
        return "ex04"; // templates/ex04.html
    }

    @GetMapping("/DTO")
    public String ex05(Model model) {

        MemberData member1 = new MemberData("홍길동", LocalDate.of(2001, 4, 3));
        MemberData member2 = new MemberData("슈퍼맨", LocalDate.of(1952, 10, 7));
        model.addAttribute("member1", member1);
        model.addAttribute("member2", member2);

        return "ex05";
    }

    @GetMapping("/DTO2")
    public String ex06(Model model) {

        List<BungBbang> bungs = List.of(
                new BungBbang("팥붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("슈크림붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("초코붕어빵", 1000, LocalDate.of(2025, 6, 4)));
        model.addAttribute("bungs", bungs);

        return "ex06";
    }

    @GetMapping("/GET_querystring")
    public String ex07(@RequestParam(required = false) String inName, String inGen, String want, String inAge,
            String allow, Model model) {
        System.out.println("이름: " + inName);
        System.out.println("나이: " + inAge);
        System.out.println("성별: " + inGen);
        System.out.println("언어: " + want);
        System.out.println("동의: " + allow);

        List<String> content = List.of(
                "이름: " + inName,
                "나이: " + inAge,
                "성별: " + inGen,
                "언어: " + want,
                "동의: " + allow);
        model.addAttribute("content", content);
        return "ex07";
    }

    @GetMapping({ "/GET_pathvariable", "/ex08/{name}", "/ex08/{name}/{age}" })
    public String ex08(@PathVariable(required = false) String name, @PathVariable(required = false) String age,
            Model model) {
        System.out.println("이름: " + name + "/ 나이: " + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "ex08";
    }

    @GetMapping("/POST_formdata")
    public String ex09() {
        return "ex09";
    }

    @PostMapping("/POST_formdata")
    public String ex09Post(@RequestParam String name, @RequestParam String age, Model model) {
        // System.out.println("이름: " + inName + " / 나이: " + inAge);
        // model.addAttribute("name", inName);
        // model.addAttribute("age", inAge);

        try {
            int parseAge = Integer.parseInt(age);
            model.addAttribute("name", name);
            model.addAttribute("age", parseAge);
        } catch (NumberFormatException e) {
            model.addAttribute("error", "나이는 숫자로 입력해야 합니다.");
        }
        return "ex09";
    }

    @GetMapping("/final_chatbot")
    public String ex10Chat(Model model) {
        return "ex10a";
    }
}
