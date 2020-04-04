package io.github.eperatis.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Greetings {
    @RequestMapping("/greeting")
    public String greeting(@RequestParam(name="name",required = false, defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }
}
