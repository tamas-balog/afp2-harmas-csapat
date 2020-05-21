package io.github.eperatis.core.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "algorithms")
@Getter @Setter @NoArgsConstructor
public class Algorithm {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;
}
