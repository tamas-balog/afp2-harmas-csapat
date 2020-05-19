package io.github.eperatis.core.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class ErrorMessage {

    public ErrorMessage(String message) {
        this.message = message;
    }

    private String message;
}
