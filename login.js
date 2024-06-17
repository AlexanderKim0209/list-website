//강의1번째//
// const loginForm = document. getElementById(login-form);
// const loginInput = loginForm.querySelector(input);
// const loginButton = loginForm.querySelector(buttom);
//loginForm은 필요없으니까 줄이면

// const loginInput = document.querySelector("#login-form input");
// const loginButton =  document.querySelector("#login-form button");

// function cilckLoginButton(){
//     const username = loginInput.value
//     if(username === ""){
//         alert("제대로 입력해 씨발")
//     }else if (username.length > 15) {
//         alert("너무 길어 병신아")
//     }else{
//         console.log("hello",username)
//     }
// }

    // console.log("hello",loginInput.value)
    //input의 내용을 가져올려면 value러는 이름의 property(속설)를 찾아봐여함

// loginButton.addEventListener("click", cilckLoginButton)

//사실 이거 다 필요없고 html에 가보면 form이라는 놈이 있음
//굳이 funtion으로 길이제한걸고 할 필요없이 html에 필요한거 준비되어있음\
//htmml의 form은 input과button을 모두 포함한 상태여야하는데
//button을 클릭할떄마다 submit(리셋)이 되버려서 정보를 없에버린다는 단점이있음





//강의2번쨰//
// const loginForm = document. getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");

// function submitLoginForm(event){
//     event.preventDefault();  // 브라우저가 기본 동작을 실행하지 못하게 막기 
      // event object는 preventDefault함수를 기본적으로 갖고 있음
//     console.log(event);
//     console.dir(event);
//     console.log(loginInput.value);
// }

// loginForm.addEventListener("submit", submitLoginForm);  // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

// ★ 중요 ★
// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

// 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다.
// 첫 arument는 지금 막 벌어진 event들 (여기선 submit)에 대한 정보를 갖고 있다.
// JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다.
// ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

// const link = document.querySelector("a");

// function clicLink(event){
//     event.preventDefault();
//     console.log(event);
//     console.dir(event);
// }

// link.addEventListener("click",clicLink)
//링크를 클릭하면 사이트 접속을 막고 click이라는 event를 console.long하고 dir한다






//3번쨰 강의//
const loginForm = document. getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");//h1의 id

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.
const USERNAME_KEY = "username" // + 오타 방지를 위해서

function submitLoginForm(event){
    event.preventDefault(); //기본동작 실행 방해
    const userTypedUsername = loginInput.value; //유저의 이름을 변수로 저장
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden으로 form숨김
    localStorage.setItem(USERNAME_KEY, userTypedUsername);//(4th 강의) localStorage.setItem로 이름 저장
    paintGreeting(userTypedUsername);
   // greeting.innerText = "hello" + username; //h1의 텍스트를 추가해줌
   // greeting.classList.remove(HIDDEN_CLASSNAME)//hidden을 없애서 변수가 보이게 만들어줌
}

// 이 강의에서 한 것.
// 1. 클릭하면, 자동으로 새로고침 되어 정보가 날아가는 것을 막고(preventDefault();)
// 2. loginForm을 감추고(hidden)
// 3. hidden 됐던 A 문구가 나타나고(remove hidden)
// 4. A 문구와 username을 합쳐서 완전한 문구를 완성한다.


//4번쨰 강의//
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitLoginForm);
}else{
    //greeting.innerText = "hello" + username;
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    //위 함수에 있는 코드랑 겹치는 문장이어서 다른 함수로 정의해줌
    paintGreeting(savedUsername);
}

function paintGreeting(username){
    greeting.innerText = "hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//username인자에 관한 의문 총정리
//일단 자바스크립트를 읽는 순서를 알아야함
//이 html에는 2가지 시작하는 경우가 있음

// 1.아무것도 안한 메인 창에서
// if문에서 유저네임이 null이면 submitLoginForm로 가겠지?
// 거기서 const userTypedUsername = loginInput.value을 통해
// 사용자가 적은 유저네임을 구한 값은
// paintGreeting(userTypedUsername)에서 userTypedUsername라는 이름의 인자로
// paintGreeting(userTypedUsername )  = paintGreeting(username)인거임

//2.사용자가 1번을 한후 세로고침을 한다면ww
//if문에서 else로 넘어가겠지?
//거기서 const savedUsername = localStorage.getItem(USERNAME_KEY)로인해
//savedUsername = username 이됨
//paintGreeting(savedUsername) = paintGreeting(username) 인거임

