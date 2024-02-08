function prints(max, min) {
    console.log(max);
    if (min == max) {
      return;
    } else {
      max = max - 1;
      prints(max, min);
    }
  }
  prints(20,5);