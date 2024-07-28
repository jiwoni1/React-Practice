// promise
//   // 비동기 작업을 실행하는 함수 => executor
//   // 프로미스 객체를 생성하면서 인수로 전달되는 콜백함수를 executor
const promise = new Promise(() => {
  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});

console.log(promise); // Promise {<pending>}

//   // 비동기 작업을 성공상태로 바꿔주는 resolve
//   // 비동기 작업을 실패상태로 바꿔주는 reject
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지 이유"); // 인수로 결과값을 전달
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 성공상태로 바꿔주는 resolve
  // 비동기 작업을 실패상태로 바꿔주는 reject

  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아님");
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

// 결과값 이용하기
// then 메서드
// promise가 성공하게 되면 then의 콜백함수가 실행됨
// 콜백함수의 매개변수로 promise의 결과값이 들어갈 수 있음
// then 메서드는 promise 객체를 그대로 다시 반환함 -> 그래서 이어서 catch를 쓸 수 있어(promise chaining)
promise.then((value) => {
  console.log(value);
});

// 실패했을 때는 catch 메서드

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아님");
      }
    }, 2000);
  });
  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  //   newP.then((result) => {
  //     console.log(result);
  //   });
  return newP; // 원래는 then메서드 기존의 promise객체를 반환햇지만, 이렇게 새로운 promise객체를 반환할 수도 있음
}).then((result) => {
  console.log(result);
});

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
