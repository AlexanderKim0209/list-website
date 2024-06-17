const bgimage = document.createElement("img");
//img라는놈을 새로 만들어주고 그것을 js에서 bgimage로 지정함(아직 html에는 없는상태)
// bgimageDiv.classList("주현영")
const image =["mj1.jpg", "acdc1.jpg","acdc2.jpg","mj2.jpg","g&r1.jpg"];
//사진자료를 array형태로 만들어줌

const todayImage = image[Math.floor(Math.random() * image.length)];
//명언파트에서 했던것 처럼 사진갯수만큼 숫자를 구해서 해당 번호의 사진을 하나 지정해줌

bgimage.src = `img/${todayImage}`;
//bgimage의 소스를 html형식으로 만들어줌

document.body.appendChild(bgimage);

bgimage.id = 'bgImage1';


//appendChild를 이용해서 img즉 bgimage를 body부분에 넣어줌

//console.log(bgimage);
//이게 좀 의문인게 콘솔화면에서 img로 나올떄가 있고 html형식으로 나올떄가 있는데 
//첫줄땜에 했갈려하는것 같기도

