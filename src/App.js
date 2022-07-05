import { useRef, useState } from 'react';
import './App.css';

// props를 써봐.
function Hello(props) {
  return(
    <div style = {{color: props.color}}> {/*JS 문법 구려;; 왜 이걸 이런 식의 중괄호 2개로? 놀랐다. {color: {props.color}}가 아니라니.*/}
      Props 복습중! 저는 {props.name}입니다.
    </div>
  );
}


// 이렇게 props를 안 써도 내용을 전달받을 수 있다. 그치만 킹받는 중괄호 처리는 해야 한다;;
// defaultProps라는 것도 있다.
function Hello2({color, name}) {
  Hello2.defaultProps = {name:"홍길동"} // 이걸 function 밖에 쓸 수도 있다.
  return(
    <div style = {{color: color}}>
      Props 복습중! 저는 {name}입니다.
    </div>
  );
}

// State 복습하기.
function Counter() {

  // const [상태변수, 상태변수 세터] = useState(상태변수의 초기값); State를 사용하는 구문은 이렇게 쓴다.
  const [number, setNumber] = useState(0);

  const onPlus = ()=> {
    console.log('+')
    setNumber(number + 1);
  }

  const onMinus = ()=> {
    console.log('-')
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>    
  );
}

function InputSample() {

  // const[text, setText] = useState(""); // 이놈이 관장하는 입력박스가 1개였을 때.

  const [inputs, setInputs] = useState({ // State 쓸 땐 = 아니라 : 쓴다. 괜히 헷갈린다.
    // (아래에 value, name 얘기 나와서 '느그이름' 변수 이름을 name 아니고 urname으로 고쳤는데 탁월한 선택이다. 훨씬 혼동이 덜 되네.)
    urname: "홍길동", email:"hong@abc.com"
  });

  const urnameInput = useRef();
  const {urname, email} = inputs;

  const onChangeInput = (inputT) => {
  
    // setText(inputT.target.value);

    const {value, name} = inputT.target; // 이해가 안 된다고? 나도 마찬가지다. 그래서 이 5줄 구문은 거의 정형화되어 있다. 걍 외우셈 ㅋ
    setInputs({
      ...inputs, //이런 걸 "스프레드 문법"이라고 한다. 기존 inputs의 내용을 복사한다.
      [name] : value
    });
  }

  const onReset = ()=>{
    setInputs({
      urname: "",
      email: ""
    });
    urnameInput.current.focus();
  }

  return (
    <div>
      <input name = "urname" onChange={onChangeInput} value = {urname}></input> <br></br>
      <input name = "email" onChange={onChangeInput} value = {email}></input>

      <button onClick = {onReset}>촉이와</button>
      <div>
        <h3>이름: {urname} <br></br> 이메일: {email}입니다.</h3>
      </div>
    </div>
  );
}

function User({user}) {
  return (
    <div>
      <h1>이름: {user.username}</h1>
      <h1>이메일: {user.email}</h1>
    </div>
  );
}



function UserList() {

  const users = [
    {id:1, username: "홍길동", email: "hong@abc.com"},
    {id:2, username: "이순신", email: "lee@gubuk.com"}
  ];

  return (
    <div>
      {/* <User user = {users[0]}></User>
      <User user = {users[1]}></User> */}

      {users.map(user => (
        <User user = {user} key = {user.id}></User>
      ))}
    </div>
  );
}


function App() {
  return (
    <div className="App">
        {/* <Hello name = "깜찕이" color = "DarkBlue"></Hello>
        <Hello2 name = "리발놈" color = "DarkGray"></Hello2>
        <Hello2 color = "DarkGray"></Hello2> */}

        {/* <Counter></Counter> */}
        {/* <InputSample></InputSample> */}
        <UserList></UserList>

    </div>
  );
}

export default App;
