import {useState} from "react"
import './App.css';
import Box from "./component/Box"

const choice = {
  rock:{
    name:"Rock",
    img:"https://emojigraph.org/media/joypixels/rock_1faa8.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://emojigraph.org/media/messenger/scissors_2702-fe0f.png"
  },
  paper:{
    name:"Paper",
    img:"https://em-content.zobj.net/source/google/387/hand-with-fingers-splayed_1f590-fe0f.png"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("");
  const [Cresult, setCresult] = useState("");
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setCresult(reJudgement(choice[userChoice], computerChoice));
  };

  const resultStyle = (result) => {
    if (result === "win") {
      return { border: "5px solid green" };
    } else if (result === "lose") {
      return { border: "5px solid red" };
    } else if (result === "tie") {
      return { border: "5px solid gray" };
    } else {
      return { border: "5px solid black" };
    }
  };
  

  const judgement = (user, computer) => {
    if(user.name === computer.name){
      return "TIE";
    }
    else if(user.name === "Rock"){
      return computer.name==="Scissors"?"WIN":"LOSE"
    }
    else if(user.name === "Scissors")
      return computer.name === "Paper"?"WIN":"LOSE"
    else if(user.name === "Paper")
      return computer.name === "Rock"?"WIN":"LOSE"
  }

  const reJudgement =  (user, computer) => {
    if(user.name === computer.name){
      return "TIE";
    }
    else if(user.name === "Rock"){
      return computer.name==="Scissors"?"LOSE":"WIN"
    }
    else if(user.name === "Scissors")
      return computer.name === "Paper"?"LOSE":"WIN"
    else if(user.name === "Paper")
      return computer.name === "Rock"?"LOSE":"WIN"
  }


  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수수
    
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} style={resultStyle(result)}/>
        <Box title="Computer" item={computerSelect} result={Cresult} style={resultStyle(Cresult)}/>
    </div>
    <div className="main">
      <button onClick={() => play("scissors")}>✌️</button>
      <button onClick={() => play("rock")}>✊</button>
      <button onClick={() => play("paper")}>🖐️</button>
    </div>
    </div>
  );
}

export default App;
