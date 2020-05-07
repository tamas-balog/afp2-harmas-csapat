package io.github.eperatis.dto;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.model.Order;

import java.util.Collection;

public class PreparationListDTO {

    private String name;

    private int price;

    private Collection<Ingredient> ingredients;

    private Collection<Order> orders;
}
