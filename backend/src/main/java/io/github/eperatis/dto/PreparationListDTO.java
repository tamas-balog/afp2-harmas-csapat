package io.github.eperatis.dto;

import io.github.eperatis.core.model.Pizza;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class PreparationListDTO {

    Long id;

    Pizza pizza;

    boolean prepared;
}
