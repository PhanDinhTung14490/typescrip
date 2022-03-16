import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const myName: string = "Phan Dinh Tung";
const myStatus: boolean = true;
const myAge: number = 20;
const product: { id: number, name: string} = { id: 1, name: "A"};

type ShowProps = {
    name: string
}
function show(props: ShowProps ): any{
  console.log(props.name);
}

function Show(props: ShowProps): any{
  console.log('props',props);
  console.log(props.name);
  return null;
}

ReactDOM.render(<div>
  <h1>Hello {myName}</h1>
  <div>{myStatus ? "Phan Dinh Tung" : "Tung day"}</div>
  <div>{myAge}</div>
  <div>{product.name}</div>
  <div>{show({ name: myName })}</div>

  <div><Show name={myName}/></div>
</div>, document.querySelector('#root'));
////
function App() {
    const [count, setCount] = useState(0);
    const [myName, setMyName] = useState("Le Trong Dat");
    const [status, setStatus] = useState(false);
    const [info, setInfo] = useState({ name: "Dat", age: 20});
    const [products, setProducts] = useState([
      {id: 1, name: "Product A"},
      {id: 2, name: "Product B"},
      {id: 3, name: "Product C"}
    ])
    return (
      <div className="App">
        Count: {count} 
        <hr />
        Full Name: {myName}
        <hr />
        Status: {status ? "True" : "False"}
        <hr />
        Info: {info.name} - {info.age}
        <hr />
        Products: { products.map(item => <div>{item.name}</div>)}
        <hr />
        Component: ShowInfo
      </div>
    )
  }