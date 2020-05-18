package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum SchedulerMode {
    BYORDER("Schedule by order", "The staff makes pizzas of the same orders so the delivery time could be reduced."),
    BYPIZZA("Schedule by pizzas", "The staff makes the same pizzas at time in order to reduce the types of ingredients.");

    private String name;
    private String description;

    SchedulerMode(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
