package io.github.eperatis.service;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.service.IngredientManager;
import io.github.eperatis.core.service.PizzaManager;
import io.github.eperatis.dao.PizzaRepository;
import io.github.eperatis.dto.ListPizzasDTO;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

public class PizzaManagerImpl implements PizzaManager {

    private final PizzaRepository repository;
    private final IngredientManager ingredientManager;

    public PizzaManagerImpl(PizzaRepository repository, IngredientManager ingredientManager) {
        this.repository = repository;
        this.ingredientManager = ingredientManager;
    }

    @Override
    public Collection<ListPizzasDTO> listPizza() {

        ModelMapper modelMapper = new ModelMapper();
        ArrayList<ListPizzasDTO> listPizzasDto = new ArrayList<>();
        repository.findAll().forEach(x -> listPizzasDto.add(modelMapper.map(x, ListPizzasDTO.class)));
        return listPizzasDto;
    }

//    @Override
//    public Collection<PreparationListDTO> listPreparationOrder() {
//        ModelMapper modelMapper = new ModelMapper();
//        if (schedulerManager.listChosen().isPresent()) {
//            if (schedulerManager.listChosen().get().getChosen() == SchedulerMode.BYORDER) {
//                ArrayList<PreparationListDTO> preparationListDTOS = new ArrayList<>();
//                repository.findAll().forEach(x -> preparationListDTOS.add(modelMapper.map(x, PreparationListDTO.class)));
//                return preparationListDTOS;
//            }
//        }
//        ArrayList<PreparationListDTO> preparationListDTOS = new ArrayList<>();
//        repository.findAll().forEach(x -> preparationListDTOS.add(modelMapper.map(x, PreparationListDTO.class)));
//        return preparationListDTOS;
//    }


    @Override
    public void recordPizza(Pizza pizza) {

        Collection<Ingredient> ingredients = pizza.getIngredients();
        if (ingredients != null) {
            for (Ingredient item : ingredients) {
                Optional<Ingredient> ingredient = ingredientManager.findByName(item.getName());
                if (!ingredient.isPresent()) {
                    ingredientManager.recordIngredient(item);
                    if (ingredientManager.findByName(item.getName()).isPresent()) {
                        item.setId(ingredientManager.findByName(item.getName()).get().getId());
                    }
                }
                else {
                    item.setId(ingredient.get().getId());
                }
            }
        }
        repository.save(pizza);
    }

    @Override
    public ListPizzasDTO findById(Long l) {

        ModelMapper modelMapper = new ModelMapper();
        Optional<? extends Pizza> pizzaOptional = repository.findById(l);

        if (!pizzaOptional.isPresent()) {
            throw new RuntimeException("Recipe Not Found!");
        }
        return modelMapper.map(pizzaOptional.get(), ListPizzasDTO.class);
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
                Optional<Ingredient> ingredient = ingredientManager.findByName(item.getName());
                if (ingredient.isPresent()) {
                    item.setId(ingredient.get().getId());
                }
                else {
                    item.setId(null);
                    ingredientManager.recordIngredient(item);
                    if (ingredientManager.findByName(item.getName()).isPresent()) {
                        item.setId(ingredientManager.findByName(item.getName()).get().getId());
                    }
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
