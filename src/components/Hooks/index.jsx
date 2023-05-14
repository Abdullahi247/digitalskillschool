import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}



function TextInput() {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}


function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function Factorial({ n }) {
  const result = useMemo(() => factorial(n), [n]);

  return <div>{result}</div>;
}


function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>
    </div>
  );
}

// Step 1: Create a context object
const MyContext = React.createContext();

// Step 2: Create a provider component
function MyProvider(props) {
  const [data, setData] = useState('default data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
}

// Step 3: Use the provider component to wrap the part of the component tree that needs access to the context data
function App() {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
}

// Step 4: Use the consumer component to access the context data from within child components
function ChildComponent() {
  const { data, setData } = useContext(MyContext);

  function handleClick() {
    setData('new data');
  }

  return (
    <div>
      <p>Current data: {data}</p>
      <button onClick={handleClick}>Change data</button>
    </div>
  );
}

