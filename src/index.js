for (let number = 2; number < 100; number++) {
  const element = number;
    if (
    element === 2 ||
    element === 3 ||
    element === 5 ||
    element === 7 ||
    (element % 2 !== 0 &&
      element % 3 !== 0 &&
      element % 5 !== 0 &&
      element % 7 !== 0)
  ) {
    console.log(element);
  }
}
