package io.github.eperatis.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.model.Pizza;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;

@Getter @Setter @NoArgsConstructor
public class PreparationListDTO {

    Long id;

    Pizza pizza;

    boolean prepared;
}
