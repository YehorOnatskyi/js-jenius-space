function printNumbers(from, to) {
  let current = from;
  const id = setInterval(function () {
    // 1. напечатай current
    console.log(current);
    // 2. если current дошёл до to — останови таймер (как в разделе 3)
    if (current === to) {
      clearInterval(id);
    }
    // 3. увеличь current на
    current++;
  }, 1000);
}

//printNumbers(1, 5); // 1, 2, 3, 4, 5 — по одному в секунду

function printNumbers2(from, to) {
  let current = from;

  function tick() {
    // 1. напечатай current
    console.log(current);
    // 2. если current меньше to:
    if (current < to) {
      current++;
      //      заведи setTimeout(tick, 1000)   ← функция без скобок!
      setTimeout(tick, 1000);
    }
  }

  setTimeout(tick, 1000);
}

//printNumbers2(1, 5); // 1, 2, 3, 4, 5 — по одному в секунду

function delay(ms) {
  return new Promise(function (resolve) {
    // заведи таймер на ms, который нажмёт resolve
    setTimeout(function () {
      resolve("Все работает");
    }, ms);
  });
}

delay(3000).then(function () {
  console.log("виконалось через 3 секунди");
});
