package io.github.eperatis.service;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import io.github.eperatis.core.model.Customer;
import io.github.eperatis.core.model.Scheduler;
import io.github.eperatis.core.model.SchedulerMode;

import java.io.IOException;

public class SchedulerDeserializer extends JsonDeserializer<Scheduler> {
    @Override
    public Scheduler deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        ObjectCodec oc = p.getCodec();

        JsonNode node = oc.readTree(p);

        Scheduler scheduler = new Scheduler();

        if (node.get("chosen").asText().equals("ByPizza"))
        {
            scheduler.setChosen(SchedulerMode.BYPIZZA);
        }
        else {
            scheduler.setChosen(SchedulerMode.BYORDER);
        }
        return scheduler;
    }
}
