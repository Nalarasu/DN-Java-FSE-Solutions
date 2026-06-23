package com.cognizant;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setup Method Executed");
        calculator = new Calculator();
    }

    @Test
    public void testAdd() {

        int a = 10;
        int b = 20;

        int result = calculator.add(a, b);

        assertEquals(30, result);
    }

    @After
    public void tearDown() {
        System.out.println("Teardown Method Executed");
        calculator = null;
    }
}