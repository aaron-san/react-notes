import React from "react";
import { describe, it, test, expect } from "vitest";

export const refCode = `import {useRef, useEffect} from "react"; 
const App = () => { 
  const ref = useRef<HTMLInputElement>(null); 
  useEffect(() => { 
    if (ref.current) { 
      ref.current.focus(); 
    }
  }, []); 
  return <input ref={ref} />;     
}; 
export default App;
`;

export const nodeV = `node -v`;

//   "npmV": {
//     "code": "npm -v"
//   },

//   "HelloReact": {
//     "code": "ReactDom.render(<h1>Hello React World</h1>, document.getElementById('root'));"
//   },
//   "useReducer": {
//     "code": "const storiesReducer = (state, action) => { if(action.type === 'SET_STORIES') { return action.payload} else {throw new Error()}};"
//   },
//   "refEx": {
//     "code": "import * as React from 'react'; const App = () => { const [count, setCount] = React.useState<number>(0); const ref = React.useRef<number>(0); const handleIncrement = () => { ref.current++; setCount(count + 1); }; const handleDecrement = () => { ref.current++; setCount(count - 1); }; return ( <> <button onClick={handleIncrement}>+</button> <button onClick={handleDecrement}>-</button> <div>Count: {count}</div> <div>Buttons {ref.current} times clicked</div> </> ); }; export default App;"
//   },

export const refExTwo = `import * as React from 'react'; 
const App = () => { 
  const [seconds, setSeconds] = React.useState<number>(0); 
  const [toggle, setToggle] = React.useState<boolean>(false); 
  const ref = React.useRef<NodeJS.Timeout | null>(null); 
  const toggleStopwatch = () => setToggle(!toggle); 
}; 
const resetStopwatch = () => { 
  setToggle(false); 
  setSeconds(0); 
}; 
React.useEffect(() => { 
  ref.current = setInterval(() => { 
    if (toggle) setSeconds((state) => state + 1); 
  }, 1000); 
  return () => { 
    if (ref.current) clearInterval(ref.current); 
  }; 
}, [toggle]); 
return ( 
  <> 
  <div>{seconds}</div> 
  <button onClick=toggleStopwatch}> 
  {toggle ? 'Stop' : 'Start'} 
  </button> 
  <button onClick={resetStopwatch}>
  Reset
  </button> 
  </> 
  ); 
}; 
export default App;
`;

export const classComponent = `

  class InputWithLabel extends React.Component {
  render() {
    const {id, value, type='text', onInputChange, children} = this.props;

    return (
      <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} />
      </>
      
    )
  }
}
`;

export const classComponent2 = `class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'React'
    }
  }

  render() {
    const {searchTerm} = this.state;
    return (
      <div>
        <h1>My Hacker Stories</h1>
        <SearchForm 
        searchTerm={searchTerm}
        onSearchInput={() => this.setState({
          searchTerm: event.target.value
        })}
        />
      </div>
    )
  }
}
`;

export const imperReact = `
  class InputWithLable extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.isFocused) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <>
        <input
          ref={this.inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}
          />
      </>
    )
  }
}
`;

export const styledButtons = `
const styledButton = styled.button\`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background: #171212;
    color: #fff;
  }
\`;
const styledButtonSmall = styled(StyledButton)
  padding: 5px;
\`;
`;

export const loggingStatement = `const List = ({ list, onRemoveItem }: any) => {
  return (
    console.log("B:List") || (
      <ul>
        {list.map((item: any) => {
          return (
            <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
          );
        })}
      </ul>
    )
  );
};`;

export const memoCode = `const List = React.memo(
  ({ list, onRemoveItem }) =>
    console.log("B:List") || (
      <ul>
        {list.map((item) => (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    )
);
`;

export const renameCode = `
mv src/index.js src/index.tsx
mv src/App.js src/App.tsx
`;

export const svgEx = `
import {Check } from "../check.svg"

...
<Check
  height="18px"
  width="18px"
  />
...
`;

export const svgCSS = `
.button:hover > svg > g {
  fill: #fff;
  stroke: #fff;
}
`;
export const basicTestSuite = `
describe("something truthy and falsy", () => {
  test("true to be true and false to be false", () => {
    expect(true).toBe(true);
    expect(false).toBe(false);
  });
  test("true to be truthy and false to be falsy", () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });
});
`;

export const useContextCode = `import {useContext} from "react"; 
function Button() {
  const theme = useContext(ThemeContext);
}

function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
`;

export const testingCode = `import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";`