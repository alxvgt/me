<?php

class Coding
{
    function drinkCoffee()
    {
        $energy = null;
        try {
            $energy = $this->drinkMug();
        }
        catch (EmptyMugException $e) {
            $this->refillMugWithCoffee();
            $this->drinkCoffee();
        }
        return $energy;
    }
}