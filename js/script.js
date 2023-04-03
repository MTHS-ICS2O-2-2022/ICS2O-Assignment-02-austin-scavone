// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html


'use strict'
/**
 * This function calculates area and perimeter of parallelogram.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById('length-of-parallelogram').value)
  const width = parseInt(document.getElementById('width-of-parallelogram').value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
