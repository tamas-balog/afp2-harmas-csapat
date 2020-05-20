package io.github.eperatis.service;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import io.github.eperatis.core.model.Customer;
import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.model.Pizza;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;

public class OrderDeserializer extends JsonDeserializer<Order> {

    @Override
    public Order deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {

        ObjectCodec oc = p.getCodec();

        JsonNode node = oc.readTree(p);

        Customer customer = new Customer();
        Order order = new Order();

        customer.setFirstName(node.get("customer").get("firstName").asText());
        customer.setLastName(node.get("customer").get("lastName").asText());
        customer.setPostalCode(node.get("customer").get("postalCode").asInt());
        customer.setStreet(node.get("customer").get("street").asText());
        customer.setStreetNumber(node.get("customer").get("streetNumber").asInt());
        customer.setPhoneNumber(node.get("customer").get("phoneNumber").asText());
        customer.setComments(node.get("customer").get("comments").asText());
        order.setCustomer(customer);

        if (node.has("delivered")) {
            order.setDelivered(node.get("delivered").asBoolean());
        }
        Collection<OrderPizza> orderPizzas = new ArrayList<>();

        ArrayList<LinkedHashMap<String, Integer>> pizzas = oc.readValue(node.get("pizzas").traverse(), ArrayList.class);
        for (LinkedHashMap<String, Integer> stringIntegerLinkedHashMap : pizzas) {
            OrderPizza orderPizza = new OrderPizza();
            Pizza pizza = new Pizza();
            pizza.setId(Long.parseLong(String.valueOf(stringIntegerLinkedHashMap.get("id"))));
            orderPizza.setPizza(pizza);
            orderPizza.setOrder(order);
            orderPizza.setPrepared("true".equals(String.valueOf(stringIntegerLinkedHashMap.get("prepared"))));
            orderPizzas.add(orderPizza);
        }
        order.setPizzas(orderPizzas);
        return order;
    }
}
