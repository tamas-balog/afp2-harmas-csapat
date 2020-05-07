package io.github.eperatis.dto;

import io.github.eperatis.core.model.Ingredient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;

@Getter @Setter @NoArgsConstructor
public class ListPizzasDTO {

    Long id;

    String name;

    int price;

    Collection<Ingredient> ingredients;
}

