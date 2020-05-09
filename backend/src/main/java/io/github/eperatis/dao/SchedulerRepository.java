package io.github.eperatis.dao;

import io.github.eperatis.core.model.Scheduler;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SchedulerRepository extends CrudRepository<Scheduler, Long> {
    Optional<Scheduler> findById(Long id);
}
