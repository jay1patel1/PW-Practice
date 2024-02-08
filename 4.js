function prints2(min, max) {
    console.log(min);
    if (min == max) {
      return;
    } else {
      min = min + 1;
      prints2(min, max);
    }
  }
  prints2(4,34)