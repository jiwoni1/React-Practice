// async & await

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// = 함수가 프로미스를 반환하도록 변환해주는 키워드

function getDate() {
  return {
    name: "감자",
    id: "potato",
  };
}

// 여기에 asycn를 붙이면
// 저 객체를 반환하는 함수(동기적)에서 저 객체를 결과값으로 갖는 프로미스를 반환하는 함수(비동기)가 됌

async function getData() {
  return {
    name: "감자",
    id: "potato",
  };
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// 원래 getData가 반환하는 객체를 사용하려면
function printData() {
  getData().then((result) => {
    console.log(result);
  });
}
// 이렇게 then 메서드를 붙여서 매개변수(결과값)를 받아와서 써야했는데

// printData();

// 그런데 async와 await를 쓰면
async function printData() {
  const data = await getData(); // getData가 반환하는 promise가 종료되길 기다림
  // 결과값을 data 변수에 넣어주게 됨
  console.log(data);
}

printData();

// async&await : 비동기작업을 마치 동기작업처럼
