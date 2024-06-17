const clock = document.querySelector("#clock");


//1단계

// function hi(){
//     console.log("hello")
// }

// setInterval(hi,5000);

// function bye(){
//     console.log("bye")
// }

// setTimeout(bye,5000);

//setInterval은 5000ms(5s)마다 1번씩 실행해주는 함수
//setTimeout은 5000ms(5s)후에 1번 실행해주는 함수


//2단계

// function setclock(){
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }
// setclock();
// setInterval(setclock, 1000);

//배운것들 정리
//new Date()에서 그날 시간 날짜등의 세부정보를 가져올 수 있음
//console.log(new Date().getHours());
//console.log(new Date().getMinutes());
//console.log(new Date().getSeconds());
//setclock();을 넣은 이유는 세로고침 하자마자 시간을 띄우기 위해서



function setclock(){
    const date = new Date();
    const hour= String(date.getHours());
    const minute= String(date.getMinutes());
    const second= String(date.getSeconds());
    clock.innerText = `${hour.padStart(2,"0")}:${minute.padStart(2,"0")}:${second.padStart(2,"0")}`
}
setclock();
setInterval(setclock, 1000);

//배운것들 정리
//1.시간을 가져오면 number인 상태일 테니까 string형태로 나타줘야함
//new Date() -> getHours() -> string형태 -> const hour 로 가는 과정
//const hour= String(date.getHours());

//2.string 형태로 바꾸는 이유는 padstart를 하기위해서임
//padstart는 "1"을 "01"로 보이게 바꿔주는 애인데
//이때 "1"은 number말고 string이어야 바꿔줄 수 있음
//hour.padStart(2,"0")를 해석하면
//hour라는 string이 한자리수로 표시될떄
//이 sttring이 2칸이 되게끔 앞쪽에 0을 끼워넣음

