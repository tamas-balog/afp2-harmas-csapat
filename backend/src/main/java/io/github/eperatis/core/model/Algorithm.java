package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "algorithms")
@Getter @Setter @NoArgsConstructor
public class Algorithm {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;

//    @ManyToOne
//    @JoinColumn(name = "scheduler_id", referencedColumnName = "id")
//    private Scheduler scheduler;

//    @OneToOne(mappedBy = "chosen")
//    private Algorithm chosen;
}
