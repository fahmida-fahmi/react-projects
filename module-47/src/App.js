import "./App.css";
import {useEffect, useState} from 'react';

function App() {

  
  return (
    <div className= "App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
    </div>
  );
}

function ExternalUsers(){
  const [user,setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => setUser(data))
  },[])

  return(
    <div>
        <h2>Users Info</h2>
        {user.map(user => <Users name={user.name} email ={user.email}></Users>)}
    </div>
  )
}

function Users(props) {
  return(
    <div>

      <h3>Name: {props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(0)
//   const increase = () => setCount(count+1)
//   const decrease = () => setCount(count-1)

  

//   return(
//   <div>
//     <h2>Counter:{count}</h2>
//     <button id="count" onClick={increase}>Increase</button>
//     <button id="count" onClick={decrease}>Decrease</button>
//   </div>
//   )
// }

export default App;
