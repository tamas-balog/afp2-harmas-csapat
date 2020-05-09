package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Algorithm;
import io.github.eperatis.core.model.Scheduler;
import io.github.eperatis.core.model.SchedulerMode;

import java.util.Collection;

public interface SchedulerManager {

    Collection<Scheduler> listSchedulers();

    void updateScheduler(Scheduler chosen);
}
