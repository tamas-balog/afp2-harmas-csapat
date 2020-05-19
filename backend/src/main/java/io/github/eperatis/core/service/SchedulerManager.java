package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Scheduler;

import java.util.Collection;
import java.util.Optional;

public interface SchedulerManager {

    Collection<Scheduler> listSchedulers();

    void updateScheduler(Scheduler chosen);

    Optional<Scheduler> listChosen();
}
