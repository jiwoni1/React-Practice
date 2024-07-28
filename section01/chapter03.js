// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

//  비동기 작업안에 값을 외부에서도 사용하고싶다면 callback함수를 인수로 주기
// 이 orderFood 안에있는 food(결과)를 함수 밖에서도 이용하고 싶다면 callback함수를 인수로
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);
  // 음식은 지금 이 콜백함수의 매개변수로 들어가있음!

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    // 콜백함수의 결과를 콜백함수의 매개변수로
    freezeFood(cooldownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
