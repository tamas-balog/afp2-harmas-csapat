package io.github.eperatis;

import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.dto.ListPizzasDTO;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
public class App {

    public static void main(String[] args) {

        SpringApplication.run(App.class, args);
    }
}
