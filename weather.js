const API_KEY = "4caa469b13da7efdd381bdb4de70a9e8"
    
    
function geoOK(position){

    const lat = position.coords.latitude
    const lng = position.coords.longitude
    //console.log("You live in", lat, lng);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

   // console.log(url);
   fetch(url)
       .then((response) => response.json())
       .then((data) => {
         //console.log(data.name, data.weather[0].main)
         const weather = document.querySelector("#location span:first-child");
         const name = document.querySelector("#location span:last-child")
         
         weather.innerText =  `${data.weather[0].main}/${data.main.temp}`
         name.innerText = data.name
    })
}


function geoError(){
    alert("can't get your location");
}


navigator.geolocation.getCurrentPosition(geoOK,geoError);


//[1번쨰 강의]
// 1. navigator 함수를 이용해 사용자의 위치를 알아내는 코드 작성.

// navigator.geolocation.getCurrentPosition ( ) 라는 코드를 작성해준다.
// 이때 getCurrentPosition 은 2개의 argument가 필요하다. 앞쪽에는 모든 게 잘 됐을 때 실행될 함수인 onGeoOk 함수를,
// 뒤에는 실패했을 때 실행될 함수인 onGeoError 함수를 실행한다.

// 2. onGeoError() 함수가 실행될 때 :
// 에러가 났다는 것을 사용자에게 알려주기 위해서
// alert("Can't find you. No weather for you."); 를 해준다.

// 3. onGeoOk 함수가 실행될 때:
// function geoOk(position){
// const lat = position.coords.latitude;
// const lng = position.coords.longitude;
// console.log("You live in", lat, lng);
// }
// 자바스크립트가 position으로 user의 위치를 전달해준다.
// position은 object 이고 위도와 경도 값이 들어있다. positon.coords.latitude와
// position.coords.longitude 를 변수에 저장하고 console.log를 해서 사용자에게 보여준다.


//[2번째 강의]
//이제 콘솔장을 보면 You live in 37.3817344 127.1365632 가 나올것임

//1) 일단 https://openweathermap.org/ 이라는 사이트에서 날씨 도시이름 기온이 담긴 정보를 url형태로 js에 가져올거임

//로그인 -> API-> Current Weather Data: https://openweathermap.org/current 로가면 api호출하는 주소가 있을거임 거기에 {lat}(위도) {lon}(경도)쓰는칸이랑 
//          자신만의 {APIkey}쓰는 칸이 있을거임. 위도 경도에는 콘솔창에 있던거 그대로 복붙함.
//          키는 openweather에서 프로필 -> 나의 APIkey 가면됨 https://home.openweathermap.org/api_keys 에서 키 복붙하면됩.
//          참고로 {lat} -> 37.3817344 이렇게 괄호까지 없에야함
//          그 주소로 들어가면 너가있는 위치의 지리적특성을 텍스트 형식으로 정리해놈 -> js에서 사용가능한 형태임
//          그 주소: https://api.openweathermap.org/data/2.5/weather?lat=37.3817344&lon=127.1365632&appid=4caa469b13da7efdd381bdb4de70a9e8
//          그 주소에는 temp(온도)가 화씨로 되어있어서 섭씨로 바꾸고 싶은데 그럴려면다시 https://openweathermap.org/current로 가보면 메게변수 unit이 보일거임
//          그걸 클릭하면 '섭씨 온도의 경우 단위=미터법을 사용하세요.'라고 나와있음. 그 아래 미터법 주소 보면 '그 주소'+'&unit=metric'임.
//          그 주소로 들어가면 화씨가 섭씨로 바뀌어서 나와있음
//          다시 vsc로 돌아와서 이제 그 주소를 const url로 정의해놓고 const lat, lon, API_KEY로 따로정의해서 url에 대입할수 있게 만즐어 놓자.

//2) 이제 가져온 url의 정보를 화면애 띄워보자
//         1.크롬화면
//          url을 열기위해 fetch함수를 사용할거임. 
//          fetch(url)을 한뒤 창을 띄워서 f13을 누르고 netwark로 들어가서 name을보면 가져왔던 url주소가 보일거임
//          그걸 클릭하고 오른쪽에 preview를 보면 그 주소에서 봤던 지리정보텍스트가 있음
//          이제 그걸 vsd에서 만질거임
//         2.html
//          내가 있는 곳의 날씨와 도사이름을 보여주기위해 div요소안에 span을 두개 넣음
//          div id는 location으로 지정
//         3.js
//          fetch(url).then((response) => response.json())
//          여기서 then은 promise즉 시간이 걸린다는 뜻. 
//          response.json은 json에 응답한다는건데 url을 사용한다고 알면됨
//          .then((data) => {weather.innerText =  `${data.weather[0].main}/${data.main.temp}`
//          name.innerText = data.name}
//          이건 filter처럼 url에 있던 각 data를 가져와서 weather과 name의 텍스트로 지정한다는 뜻.
//          또한 괄호안에 html에서 작성한 span두개를 가져와서 각각 weahter과 name으로 지정해줌 
//          이렇게하면 끝~