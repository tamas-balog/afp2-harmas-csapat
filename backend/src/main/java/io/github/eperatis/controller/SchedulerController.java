package io.github.eperatis.controller;

import io.github.eperatis.core.model.Scheduler;
import io.github.eperatis.core.service.SchedulerManager;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/algorithms")
public class SchedulerController {

    private final SchedulerManager schedulerManager;

    public SchedulerController(SchedulerManager schedulerManager) {
        this.schedulerManager = schedulerManager;
    }

    @RequestMapping(value = {""})
    public Collection<Scheduler> listSchedulers() {
        return schedulerManager.listSchedulers();
    }

    @RequestMapping(value = "/choose", method = RequestMethod.PUT)
    void updateScheduler(@RequestBody Scheduler chosen) {
        schedulerManager.updateScheduler(chosen);
    }
}
