package io.github.eperatis.service;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.service.IngredientManager;
import io.github.eperatis.core.service.PizzaManager;
import io.github.eperatis.dao.PizzaRepository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.*;

public class PizzaManagerImpl implements PizzaManager {

    private PizzaRepository repository;
    private IngredientManager ingredientManager;

    public PizzaManagerImpl(PizzaRepository repository, IngredientManager ingredientManager) {
        this.repository = repository;
        this.ingredientManager = ingredientManager;
    }

    @Override
    public Collection<Pizza> listPizza() {
        return new ArrayList<Pizza>((Collection<? extends Pizza>) repository.findAll());
    }

    @Override
    public void recordPizza(Pizza pizza) {
        Collection<Ingredient> ingredients = pizza.getIngredients();
        if (ingredients != null) {
            for (Ingredient item : ingredients) {
                Optional<Ingredient> ingredient = ingredientManager.findByName(item.getName());
                if (!ingredient.isPresent()) {
                    ingredientManager.recordIngredient(item);
                    item.setId(ingredientManager.findByName(item.getName()).get().getId());
                }
                else {
                    item.setId(ingredient.get().getId());
                }
            }
        }
//        var user = context.Users.Include("Roles").Where(u => u.Name == "User1").FirstOrDefault();
//        user.Roles.Remove(user.Roles.Where(r => r.Name == "Admin").FirstOrDefault());
//        context.SaveChanges();
//        Ingredient ingredient = new Ingredient();
//        ingredient.setId(67L);
//        ingredient.setName("Pénisz");
//        pizza.getIngredients().add(ingredient);
//        EntityManagerFactory entityManagerFactory= Persistence.createEntityManagerFactory("ingredientPU");
//        EntityManager entityManager = entityManagerFactory.createEntityManager();
//        EntityTransaction entityTransaction = null;
//        try {
//            entityTransaction = entityManager.getTransaction();
//            entityTransaction.begin();
//            entityManager.persist(pizza);
//            entityTransaction.commit();
//        }
//        catch (RuntimeException e) {
//            if(entityTransaction.isActive())
//                entityTransaction.rollback();
//            throw e;
//        }
        repository.save(pizza);
    }

    @Override
    public Optional<Pizza> findById(Long l) {

        Optional<Pizza> pizzaOptional = repository.findById(l);

        if (!pizzaOptional.isPresent()) {
            throw new RuntimeException("Recipe Not Found!");
        }
        return pizzaOptional;
    }

    @Override
    public void deletePizza(Long l) {
        repository.deleteById(l);
    }

    @Override
    public void updatePizza(Pizza newPizza, Long id) {
        Collection<Ingredient> ingredients = newPizza.getIngredients();
        if (ingredients != null) {
            for (Ingredient item : ingredients) {
                //ingredientManager.updateIngredient(item, item.getId());
                Optional<Ingredient> ingredient = ingredientManager.findByName(item.getName());
                if (ingredient.isPresent()) {
                    item.setId(ingredient.get().getId());
                }
                else {
                    item.setId(null);
                    ingredientManager.recordIngredient(item);
                    item.setId(ingredientManager.findByName(item.getName()).get().getId());
                }
            }
        }
        repository.findById(id)
            .map(pizza -> {
                pizza.setName(newPizza.getName());
                pizza.setPrice(newPizza.getPrice());
                pizza.setIngredients(newPizza.getIngredients());
                return repository.save(pizza);
            })
            .orElseGet(() -> {
                newPizza.setId(id);
                return repository.save(newPizza);
            });
    }
}
