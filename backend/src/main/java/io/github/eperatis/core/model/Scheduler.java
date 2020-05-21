package io.github.eperatis.core.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.github.eperatis.service.SchedulerDeserializer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "schedulers")
@JsonDeserialize(using = SchedulerDeserializer.class)
@Getter @Setter @NoArgsConstructor
public class Scheduler {

    @Id
    @GeneratedValue
    private Long id;

    private SchedulerMode chosen = SchedulerMode.BYORDER;
}
