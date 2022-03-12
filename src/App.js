import { useEffect, useState } from 'react';
import './App.css';
//Basic Dynamic content load
/*function App() {
  return (
    <div>
      <Friend phone="019" address='dhk'></Friend>
      <Friend phone="017" address="com"></Friend>
      <Friend phone="019" address="ctg"></Friend>
    </div>
  );
}
function Friend(props){
  return(
    <div>
      <h3>phone: {props.phone}</h3>
      <h4>address: {props.address}</h4>
    </div>
  );
}
*/

//Basic Dynamic content load using Array

/*function App(){
  const casts = [
    {hero:'a',heroin:'b'},
    {hero:'c',heroin:'d'},
    {hero:'e',heroin:'f'},
    {hero:'g',heroin:'h'},
  ]
  return (
    <div className="App">
    {
      casts.map(casts=> <Show hero={casts.hero} heroin={casts.heroin}></Show>)
    }
    </div>
  );
}

function Show (props){
  return (
    <div>
      <h2>Hero:{props.hero} </h2>
      <h3>heroin:{props.heroin} </h3>
    </div>
  );
}
*/

//Learning State, stateHandle

/*function App(){
  return(
    <div className ="app">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount (count + 1);
  const handleDecrease = () => setCount (count - 1);
  return(
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  )
}
*/

//Load Dynamic Data, Api Call Useeffect Integrate State

function App(){
  return (
    <div className='App'>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h1>External Users</h1>
    {
      users.map(user => <User name={user.name} email={user.email}></User>)
    }
    </div>
  )
}

function User(props){
  return (
    <div>
      <h2>Name:{props.name} </h2>
      <h3>Email:{props.email} </h3>
      <br></br>
    </div>
  )
}



export default App;
