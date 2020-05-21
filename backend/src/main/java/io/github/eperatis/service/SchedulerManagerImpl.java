package io.github.eperatis.service;

import io.github.eperatis.core.model.Scheduler;
import io.github.eperatis.core.model.SchedulerMode;
import io.github.eperatis.core.service.SchedulerManager;
import io.github.eperatis.dao.SchedulerRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

public class SchedulerManagerImpl implements SchedulerManager {

    private final SchedulerRepository repository;

    public SchedulerManagerImpl(SchedulerRepository repository) {
        this.repository = repository;
        if (!listSchedulers().iterator().hasNext()) {
            Scheduler scheduler = new Scheduler();
            scheduler.setChosen(SchedulerMode.BYORDER);
            repository.save(scheduler);
        }
    }

    @Override
    public Collection<Scheduler> listSchedulers() {
        return new ArrayList<>((Collection<? extends Scheduler>) repository.findAll());
    }

    @Override
    public Optional<Scheduler> listChosen() {
        return repository.findById(1L);
    }

    @Override
    public void updateScheduler(Scheduler chosen) {
        repository.findById(1L).map(x ->{
            x.setChosen(chosen.getChosen());
            return repository.save(x);
        });
    }
}
