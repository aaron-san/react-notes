import React from "react";
// import styled from "styled-components";
import Links from "./Links";

function Notes() {
  return (
    <div className="mt-14 mx-5 flex flex-col gap-7 items-center">
      <div className="w-[95%] md:w-[60%] mx-4 border border-white rounded-md p-10">
        <h2>Notes</h2>
        <hr />

        <h1>Command Line</h1>
        <code>
          <div>node --version</div>
          <div>npm --version</div>
          <div>npx create-react-app hacker-stories</div>
          <div>cd hacker-stories</div>
          <div>code . //Open in VS Code</div>
          <div>npm start</div>
          <div>npm test</div>
          <div>npm run build</div>
        </code>
        <h1>Component Hierarchy</h1>
        <div className="p-3 mx-3 my-5 w-[95%] md:w-[60%] flex flex-col border border-white rounded-md">
          <em>Entry point (Root) component (App)</em>
          <em>Parent (Root) component</em>
          <em>Child (Leaf) component</em>
          <em>Sibling component</em>
        </div>

        <p>
          ReactDom.render() (from 'react-dom') uses an HTML node to replace it
          with JSX. That is all that is needed to integrate React into any
          application which uses HTML.
        </p>
        <p>
          JavaScript produces a <strong>synthetic event</strong> when an input
          object experiences a change. React's synthetic event is essentially a
          wrapper around the browser's native event, with more functions that
          are useful to prevent native browser behavior (e.g. refreshing a page
          after the user clicks a form's submit button).
        </p>

        <pre>
          <code>
            <div className="javascript">
              <div className="keyword">
                ReactDom.render(
                <h1>Hello React World</h1>, document.getElementById('root') );
              </div>
            </div>
          </code>
        </pre>

        <p>In HTML, outside of JSX, input fields have an onchange handler.</p>
        <p>
          In React, this function is called an (event) handler. In the console,
          we can see a <strong>synthetic event</strong> defined by a JavaScript
          object. Through this object, we can access the emitted value of an
          input field, for example. React's synthetic event is essentially a
          wrapper around the browser's native event, with more functions that
          are useful to prevent native browser behavior (e.g., refreshing a page
          after the user click's a form's submit button).
        </p>
        <p>
          With props in React, we can pass variables as information from one
          component to another. Props are used to pass information down the
          component tree, state is used to alter information over time. There is
          no way to pass information up the component tree, since props are
          naturally only passed downwards. However, we can introduce a{" "}
          <strong>callback handler</strong>. A callback function is introduced
          somewhere (e,g., handler function), is used in somewhere (e.g.,
          function return block), but "calls back" to the place it was
          introduced (e.g., the handler function implementation block).
        </p>
        <p>
          React needs to be notified when to re-render the component when the
          state changes (e.g., after updates). This is what the
          <strong> useState hook</strong> is used for. After the updated state
          is set in a component, teh component renders again, meaning the
          component function runs again. The updated state becomes the current
          state.
        </p>
        <p>
          The useState hook is great and can handle complex objects, but we have
          to change the state directly, which means using a lot of spread syntax
          (...) in order to ensure that we are not overwriting other parts of
          the state.
        </p>
        <p>
          Rule of thumb: Always manage state at a componenet level where every
          component is interested in it is one that either manages the state
          (using information directly from state, e.g., App componenet) or a
          component below the managing component (using information from props,
          e.g., List or Search). If a component below needs to update the state
          (e.g., Search), pass a callback handler down to it which allows it to
          update it. If a component needs to use the state (e.g., displaying
          it), pass it down as props.
        </p>

        <p>
          Sometimes, it is useful to <strong>refactor</strong> a function.
        </p>
        <h1>Callback Handlers</h1>
        <p>
          Pass a function from a parent component (e.g., App) to a child
          component via props; call this function in the child component, but
          have the actual implementation of the called function in the parent
          component. Essentially when an (event) handler is passed as props from
          a parent component to its child component, it becomes a callback
          handler.
        </p>
        <h1>Unidirectional Data Flow</h1>
        <p>
          A React application and its components start with an initial state,
          which may or may not be passed down as props to interested child
          components. It's rendered for the first time as a UI. Once a
          side-effect occurs, like user interaction (e.g., typing into an input
          field) or data loading from a remote API, the change is captured in
          React's state either in the component itself or by notifying parent
          components via a callback handler. Once state has been changed, all
          components below the component with the modified state are re-rendered
          (i.e., the component functions run again).
        </p>

        <h2>To Do</h2>
        <hr />
        <p>
          Learn UI/UX design, user interaction, and user experience tips on
          YouTube{" "}
        </p>
      </div>
      <div className="w-[95%] md:w-[60%] mx-4 border border-white rounded-md p-10">
        <Links />
      </div>
    </div>
  );
}

export default Notes;
