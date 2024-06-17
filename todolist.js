const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "ToDos";

//const ToDos = []; [4]
let ToDos = []; //[6]

function submitToDoForm(event){
    event.preventDefault();
    const todayGoals = toDoInput.value;
    const todayGoalObj = {
        text: todayGoals,
        id: Date.now()
    }//[7]
    //console.log(todayGoals, toDoInput.value); 
    toDoInput.value = "";
    //console.log(todayGoals, toDoInput.value);
    //ToDos.push(todayGoals);[4]
    ToDos.push(todayGoalObj);//[7]
    //paintToDo(todayGoals);[2]
    paintToDo(todayGoalObj);//[7]
    stringifiedToDos();//[4]
}
toDoForm.addEventListener("submit", submitToDoForm);

//[1번쨰 강의]
//1.html
//1)todo리스트를 만들기위해 기본적은로 form(입력칸)과
//  list(나열칸)가 필요함.
//2)form의 기능은 submit이라는 기본기는만 내장함
//  form안에 텍스트형식으로 기입할수 있는input 태그를 추가함
//3)그및에 ul태글르 추가해 텍스트가 나열될수 있도록함

//2.js
//1)form,input,list를 각각변수로 지정
//2)greeting강의에서 form 태그에서의 event는 submit(새로고침)를 발생
//  event.preventDefault() 로 기본값을 없애준다.
//3)택스트상자안에 글 작성후 내용물을 저장하기위해 const todayGoals = toDoInput.value;을 사용
//4)글 작성후 상자안에 텍스트를 비우기위해 toDoInput.value = "";을 사용
//5)중요한점: 상자를 비우기전에는 todayGoals과 toDoInput.value둘다 값을 가지고있지만
//  비우고난 후에는 todayGoals에만 값이 존재하고 toDoInput.value은 비워져있는 상태인것임.



function paintToDo(todayGoals){
    const li = document.createElement("li");
    li.id = todayGoals.id;//[7]
    const span = document.createElement("span");
    const button = document.createElement("button");//[3]
    button.innerText = "X";//[3]
    li.appendChild(span);
    li.appendChild(button);//[3]
    toDoList.appendChild(li);
    //span.innerText=todayGoals;
    span.innerText=todayGoals.text;//[7]
    button.addEventListener("click",deleteList);//[3]
}

//[2번쨰강의]
//1.html
//이미ul은 html안에 만들어 놨음. 하지만 li는 새로운 텍스트가 입력 될 때마다 그 안에 생성하여 나열
//해줘야하기떄문에 html에 만들어놓는것이 의미없음.(실시간으로 수를 늘려줘야하니까)
//2.js
//1)paintToDo라는 놈으로 실시간으로 추가되는 list를 시각화 할것임
//  paintToDo라는 함수를 submitToDoForm함수안에 넣어주고 todayGoal(테스트값)을
//  인자로 가져가게 만들어줌.
//2)const li = document.createElement("li"); li태그 생성 명령
//  const span = document.createElement("span"); span태그 생성 명령
//3)li.appendChild(span); span을 li안에 넣어줌
//  toDoList.appendChild(li); li를 ul안에 넣어줌
//4)span.innerText=todayGoals;로 span안에 텍스트값을 넣어줌
//중요한점: li안에 span을 추가해주는 이유는 추후에 추가했던list를 지워야하는 button을 만들어야하기떄문



function deleteList(event){
    // console.dir(event);
    // console.dir(event.target);
    // console.log(event.target.parentElement);
       const li = event.target.parentElement;
    li.remove();
    //console.log(typeof li.id);[9] 이걸하는이유: stringifiedToDos함수에서 object의text와id를 string화 시켰으니까 type이 string임
    //                                     todo.id는 number인데 li.id는 string이라 에러가나서 parseInt로 number로 바꿔줌.
    ToDos = ToDos.filter((todo) => todo.id !== parseInt(li.id));//[9]
    stringifiedToDos();//[9]
}

//[3번쨰 강의]
//1.js에서 삭제 버튼 만들기
//1)paintToDo함수안에 먼저 button태그를 만들어주고 2번쨰겅의랑 똑같이 li안에 넣어줌.
//  button의 innertext를 X로 보이게해주고,button.addEventListener("click",deleteList)
//  를 추가해서 버튼을 클릭하면 deleteList함수를 실행시키게 해줌.
//2)deleteList함수안에는 해당하는 리스트만 딱집어서 삭제시켜주는 기능을 추가해야겠지?
//  const li = event.target.parentElement;
//  event = click, target = button, parentElement = 해강버튼의 부모<li>임.
//  즉 클릭된 버튼이 소속된 li를 말하는거임.
//  그li를 li.remove();로 삭제시켜주면 끝.

function stringifiedToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(ToDos));
}

//[4번째 강의]
//이제 우리는 리스트를 추가하고 삭제하는것을 구현했다
//하지만 세로고침을하면 추가했던 리스트들이 싹다 사라짐
//일단 리스트들을 러컬저장소에 저장해두는 작업을 할거임
//1.todo - list의 배열 생성
//1)const toDos = [ ]; // toDo에 들어오는 텍스트를
//  배열로 묶어 보관하기 위해 빈 array를 생성해준다.
//  submitToDoForm함수에 ToDos.push(todayGoals);를 넣어줘서
//  submit할떄마다 새로운리스트가 ToDos에 가도록함
//2)로컬저장소애 저장하는 saveToDos함수를 만든다.
//  localStorage.setItem("ToDos",ToDos)
//  로하면 로컬저장소애는 "1,2,3"같은text형태로 남게된다
//  localStorage.setItem("ToDos",JSON.stringify(ToDos))
//  ***이렇게 JSON.stringify(ToDos)을 사용한다면
//  ["1","2","3"]같은 string형태로 남게만들 수 있다.***
//  #이렇게 string으로 남은 object의 id를 9번강의에서 parseInt로 number형태로만들어야함#
//3)saveToDosg함수를 submitToDoForm함수가 실행될떄마다 실행하게
//  해줌으로써 submit할때마다 localStorage에 저장할수 있게 해준다



const getSavedTodos = localStorage.getItem(TODOS_KEY)
// console.log(getSavedTodos)
if(getSavedTodos !== null){
    const parsedTodos = JSON.parse(getSavedTodos);
//console.log(parsedTodos)
// parsedTodos.forEach(hello);
//parsedTodos.forEach((item) => console.log("저장된"+item)
    ToDos = parsedTodos;//[6]
    parsedTodos.forEach(paintToDo)//[6]

}

// function hello(item){
//     console.log("저장된",item);
// }

//[5번쨰 강의]
//JSON.stringify(ToDos)를 통해 string을 만들엇었다.
//string data type 각각의 object가 떨어져있는 array로 바꿔주고싶다.
//그 array에서 각각의 item(odject)를 나눠서 뽑아내고 싶다
//(이놈만 삭제하거나 텍스트를바꾸거나 하는등)
//(즉, 이array에 있는 각각의 item에 대해서 funtion을 실행시키고 싶다)

//1)로컬저장소에 있던 ToDos를 가져와서 getSavedTodos로 저장하는데
//  ToDos가 두번이상 사용되니깐 TODOS_KEY로 바궈주고
//  getSavedTodos는 이떄 string형태의 array이나깐 
//  이것을 각각의 object로 바꿔주는 if문을 추가한다
//2)***JSON.parse(getSavedTodos)를 해주고 콘솔창에 띄우면
// (3) ['1', '2', '3']
// 0: "1"
// 1: "2"
// 2: "3"
// length: 3[[Prototype]]: Array(0)
// 와 같은 각각의 item(object)이 떨어져있는 array형태로 남게된다.***
// 이값을 parsedTodos에 저장해줌. 즉 parsedTodos는 array인 거임.
//3)parsedTodos.forEach(hello)
//  이 친구는 각각의 item"만큼" funtion을 실행시켜주는 친구임
//  이 친구가 실행시키는 특정item이 어떤것인지 알아야함
//  그걸 알려주는 기능을 js가 제공함 js가 각각 item별로 나눠서 판별해줌  
//  addEventListener를 사용할떄 click이란 event를 사용할수 있게 제공하는 것처럼
//  forEach를 사용할때 array에 있던 item을 사용할수 있게해줌
//  parsedTodos.forEach(hello);를 함수안에 추가하고
//  hello라는 함수를 추가해서 item인자를 대려와야함 -> 얘가 방금 말한거임
//  console.log("저장된",item);를 안에 추가하면
//  콘솔창을 띄웠을때
// 저장된1
// 저장된2
// 저장된3
//  이렇게 나오는 것을 볼수 있다.
//  이걸 shortcut으로 parsedTodos.forEach((item) => console.log("저장된"+item));
//  이렇게 따로 함수 사용하지 않고 만들 수 있다.

//[6번쨰 강의]
//목표1: 5번쨰강의에선 parsedTodos.forEach((item) => console.log("저장된"+item)
//       를 만등었었지만 우리에게필요한것은 콘솔창에 텍스트를 띄우는것이 아니라
//       실제 화면에 로컬에저장되있던 item만큼 띄우는 것이다
//해결:  우리에겐 화면에 todayGoal을 띄워주는 paintToDo함수가있다
//       그러므로 parsedTodos.forEach(paintToDo)을 추가해주면된다.
//       정리하자면 parsedToDos에 들어있는 array의 item갯수만큼 paintToDos를 한다는 말이다.
//목표2: 이제 우리는 세로고침을 해도 더이상 todayGoal이 날라가지 않게 되었다!
//       하지만 여전히 문제가 있는데 세로고침후 새로운 목표를 submit하고나면
//       로컬에있던 예전정보가 덮여씌워진다는 것이다! [1,2,3]->[4,5,6]
//       우리는 정보가추가될떄마다 [1,2,3] -> [1,2,3,4,5,6]으로 만들고 싶다.
//해결:  문제의 원인은 const ToDos =[]이었다
//       일단 ToDos는 비워져있는 존재이다
//       submitToDoForm을 보먄 ToDos.push(todayGoals);가있는데
//       즉 이말은 우리가 todayGoals 즉 새로운 정보를 추가(push)하는 동작을 한다면
//       (submitToDoForm함수가 실행된다면) 비워져있는 ToDos에 정보를 추가한다는 뜻이다.
//       이걸 해결하기위해선 let ToDos =[]로 바꿔서 ToDos의 정보가 언제든지 바뀌어도가능하게 만들고
//       if문에 ToDos = parsedTodos;추가해준다. 이떄 parsedTodos는 예전정보가 담긴 array일것이다.

//[7번째 강의]
//     우리는 로컬저장소에 있던 예전정보를 보존하는 동시에 새로운 정보를 추가하는 기능을 만들었다!
//목표:이제 저장되있던 정보들을 정확하게 삭제시켜주고싶다. 예를들어 [a,b,c,d,e,f,a]가 저장되있다면
//     a라는 텍스트가 2개인것인데 js가 이 두개를 같은것으로 판단하여 두개를 동시에 삭제시킬수 있기떄문이다
//     그래서 우리는 각각의 item에 text와 id를 따로부여하여 object화 시킬것이다. 같은 text여도 서로 다른id를 가질수 있게.
//해결:submitToDoForm 함수안에
//     const todayGoalObj = {
//     text: todayGoals,
//     id: Date.now()};
//     을 추가해준다. 이렇게하면 todaygoal의 text와 무작위의 겹치지않는 새로운 id를 생성할수 있다
//     이것들을 ToDo에 push해주고 paintToDo의 인자로 넣어준다
//     그러면 paintToDo함수안에 span.ineertext를 todayGoals.text로 바꿔줘야하고
//     li.id = todayGoals.id를 추가해서 해당 odject의 li에게 id를 부여해준다.
//     이렇게하면 각각의 object들의 li id가 새로운 정보를 추가할떄마다 로컬에 생성되는것을 볼 수 있다 
//     다음번에는 원하는 id를 찾아서 없에는 방법을 알아보겠다.

//{8번쨰강의}
//     7번강의에서 우리는 각각의 object의 li에게 id를 부여하는 방법을 알아냈다
//목표:이제 "X"표시를 누르면 특정 id를 가진 object만 localStorage에서 삭제하고 화면에서도 없에고싶다
//     여기서 생각의 순서를 바꿔야한다. 만약, "X"표시를 눌렀는데 기존의 array에서 삭제하고싶은 object만 제외한상태로
//     새로운 array를 추가 할수 있게 만든다면? 니코쌤은 이 방식을 사용하기로 했다.
//해결:이 방법을 사용하기 아주좋은 객체가 하나 있다. 그것은 바로 "filter"라는 놈이다.
//     filter는 가본적으로 true인 친구만 뺴고 나머지친구(flase인 친구)는 제외시키는 성질이 있다.
//     즉, 원하는 item을 뺴고 새로운array를 만들어준다
//     작동하는 방식은 foeEach와 비슷하다
//     모든 item을 대입해보고 true인지 flase인지 판별해준다.
// ex1) function sexyFilter(item){return item !== 3}
//     [1,2,3,4,5].filter(sexyFilter)
//     을 입력했다 치면 어떤 결과가 나올까? 
//     sexyFilter함수에선 item중에 3이 아닌것이 true인 숫자를 칮고있다 
//     filter는 true만 남기므로 결과는 [1,2,4,5]가 된다
// ex2) const ToDos = [{"text":"1","id":1718168591702},{"text":"2","id":1718168592056},{"text":"3","id":1718168592454}]
//     function sexyFilter(item){return item.id != 1718168592056}
//     ToDos.filter(sexyFilter)를 한다면 어떻게 될까
//      (2) [{…}, {…}]
//         0: {text: '1', id: 1718168591702}
//         1: {text: '3', id: 1718168592454}
//         length: 2
//     로컬저장소에는 1과3의 text와 id만 남을것이다. 
//     function sexyFilter(item){return item.id !== 1718168592056}
//     ToDos.filter(sexyFilter)
//     를 압축하면
//     ToDos = ToDos.filter((item) => item.id !== 1718168592056) 으로도 function없이 사용할 수 있다

//[9번째 강의]
//     8번쨰 강의에서 우리는 filter를 이용하는 방법을 알앗다
//목표:filter를 사용해서 "X"를 누를때마다 로컬저장소에있는 array를 업데이크시켜보자
//해결:다시말하자면 filter는 item을 삭제시켜주는게 아니라, 그item뺴고 나머지를 다시 
//     array로 만들어주는 놈이다. 이전 array가 변하는 것이 아니다. 새로운 array가 생기는 것이다.
//     "x"버튼을 누르면 array가 새로만들어져야하니 deleteList함수로 간다
//     그럼 이제 원래있던 ToDos를 filter를 통해 삭제버튼누름당한 li를 flase로 인식해줘야한다.
//     또한 주의해야할 점이 li는 로컬저장소에 저장되있는 string형태의 text와id이므로 parseInt를 통해 number로 바꿔줘야한다
//     todo.id는 Date.now()로 인해서 무작위 숫자(number)형태이기 떄문이다. 
//     ToDos = ToDos.filter((todo) => todo.id !== parseInt(li.id));
//     그럼 이제ToDos는 삭제당한li를 제외한새로운array를 가지게 되었다
//     마지막에 stringifiedToDos();를 다시 해주지않으면 ToDos에는 변경된 값이 저장되겠지만
//     LocalStorage에는 저장되지 않으므로 추가해주자.



//총정리 간단하게
//0.let ToDos = [] 사용자가 적은 정보를 저장할 함수. 내포하는 정보가 수정될 수 있으므로 let을 사용함
//1.submitToDoForm:form을 submit(enter를 누름)할때마다 무언가를 실행
// 무언가:ToDos에 input.value넣기, paintToDo실행, stringifiedToDos실행
//2.paintToDo: 작성자가 적은 리스트를 순서대로 나열하여 화면에 보여줌, click하면 deleteList실행
//3.deleteList: 사용자가 원하는 리스트를 정상적으로 삭제,
//              filter함수로 특정 abject뺴고 array재생성
//              재생성된 array를 ToDos에 저장
//              재생성된 array를 로컬저장소에 저장하는 stringifiedToDos실행 
//4.stringifiedToDos: 사용자가 작성한 리스트를 localstorage에 string(문자열)형식"["a","b","c"]"으로 저장 (localStorage.setItem(TODOS_KEY,JSON.stringify(ToDos)))
//5.JSON.parse(getSavedTodos): stirng형삭으로 저장했던 array를 object(객체)형식["a","b","c"]
// 0: "1"
// 1: "2"
// 2: "3"
// 으로 ToDos에 저장 및 객체 하나하나 화면에띄워서 각각수정가능 -> 나중에 원하는 객체를 지정해서 수정 혹운 삭재 사칼 수 있음
//  parsedTodos.forEach(paintToDo): parsedToDos에 들어있는 객체의 갯수만큼 paintToDo를 한다 

//submitToDoForm ->ToDos(js안에서 저장), paintToDo(화면에 배치), stringifiedToDos(로컬에 저장)
//paintToDo -> parsedToDos만큼 화면에 표시, 버튼 클릭하면 deleteList
//stringifiedToDos -> 토컬에 string저장->pasedToDos->ToDos에저장,paintToDo로 화면표시
//deleteList -> ToDos에 저장, stringifiedToDos로 로컬애 저장-> paintToDo로 화면표시

  
