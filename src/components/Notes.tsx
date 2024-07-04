import React, { useEffect } from "react";
// import styled from "styled-components";
import { Links } from "./Links";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { a11yDark, agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import data from "./code-chunks.js";
// import prettier from "prettier/standalone";
// import parserBabel from "prettier/parser-babel";
import { Link } from "react-router-dom";
import { CodeBlock } from "./CodeBlock";
import * as codeChunks from "./code-chunks";

const Notes = () => {
  return (
    <div className="mt-6 md:mt-14 lg:mx-5 flex flex-col gap-7 items-center">
      <div className="w-[99%] lg:w-[60%] mx-1 lg:mx-4 md:border md:border-white rounded-md p-2 md:p-6">
        <h1>Notes</h1>
        <hr />
        <h2>Command Line</h2>
        <h3>Check Node version:</h3>
        <CodeBlock code={codeChunks.nodeV} language="jsx" />
        {/* {codeHighlighter(data.nodeV.code, "shell")} */}
        <h3>Check NPM version:</h3>
        {/* {codeHighlighter(data.npmV.code, "shell")} */}
        <h2>Component Hierarchy</h2>
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
        {/* {codeHighlighter(data.HelloReact.code, "javascript")} */}
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
        <h2>Callback Handlers</h2>
        <p>
          Pass a function from a parent component (e.g., App) to a child
          component via props; call this function in the child component, but
          have the actual implementation of the called function in the parent
          component. Essentially when an (event) handler is passed as props from
          a parent component to its child component, it becomes a callback
          handler.
        </p>
        <h2>Unidirectional Data Flow</h2>
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
        <h2>Component Lifecycle</h2>
        <p>
          At first, all components are instantiated from the top to the bottom
          of the componenet hierarchy. This includes all hooks (e.g., useState)
          that are instantiated with their initial values (e.g., initial state).
          From their, the UI awaits side-effects like user interactions. Once
          the state is changed (e.g., current state changed via state updater
          function from useState), all components below render again. Hooks
          initialize only once when the component renders for the first time,
          after which React tracks them internally with their most recent
          values.
        </p>
        <p>
          <strong>Nested destructuring</strong> helps us gather all the needed
          information of the item object in the function signature for its
          immediate usage in the component's elements. However, nested
          destructuring introduces lots of clutter through indentations in the
          function signature.
        </p>
        <p>
          JavaScript's spread operator (...) allow us to literally spread all
          key/value pairs of an object to another object. This can also be done
          in React's JSX. Instead of passing each property one at a time via
          props from List to Item component, we can use JavaScript's spread
          operator to pass all the object's key/value pairs as attribute/value
          pairs to a JSX element.
        </p>
        <p>
          Side-effects don't change the output of a React component (which rely
          directly on props and state), but they can affect them indirectly.
          Side-effects are used to interact with APIs outside of the component
          (e.g., a browser's localStorage API, remote APIs for data fetching),
          measuring HTML element width and height, or setting timers in
          JavaScript. For example, we can use a side-effect to store the recent
          search from the browser's local storage and load it upon component
          initialization.
        </p>
        <p>
          React's useEffect() takes two arguments: a function that runs our
          side-effect and a dependency array of variables. If one of the
          variables in the dependency array changes, the function for the
          side-effect is called. The function is also called when the component
          renders for the first time.
        </p>
        <p>
          Leaving out the dependency array would make the function for the
          side-effect run on every render (initial render and update renders) of
          the component. The useEffect hook allows us to opt into React's
          component lifecycle.
        </p>
        <h2>Custom Hooks (Advanced)</h2>
        <p>
          We can create a custom hook, for example, to manage state yet
          syncronize with the local storage. It could be persistent because
          clearing the local storage of the browser deletes relevant data for
          the application.
        </p>
        <p>
          <em>"domain-related"</em>
        </p>
        <p>
          Actually, there are hundreds of React hooks that are shared by people
          across the internet and you don't have to worry about their
          implementation details.
        </p>
        <h2>React Fragments</h2>
        {/* {codeHighlighter("<React.Fragment></React.Fragment>", "javascript")} */}
        <p>or...</p>
        {/* {codeHighlighter("<></>", "javascript")} */}
        <p>
          One caveat with JSX is that we must introduce a
          <strong>wrapping</strong> HTML element to components in order to
          render them. Normally, the JSX returned by a React component needs
          only one wrapping top-level element. To render multiple top-level
          elements side-by-side, we have to wrap them into an array instead.
          Since we're working with a list of elements, we would have to give
          every sibling element React's key attribute. Another solution is to
          use a React fragment.
        </p>
        <p>
          A fragment wraps other elements into a single top-level element
          without adding to the rendered output.
        </p>
        <h2>Reusable Components</h2>
        <p>
          We can make components reusable by generalizing domain-specific
          properties. Start by making names of objects more generic.
        </p>
        <h2>Component Composition</h2>
        <h3>Children</h3>
        <p>
          React's children prop: we can use the children prop to render
          everything that has been passed down from above. Everything that's
          passed between a component's elements can be accessed as children in
          the component and be rendered somewhere. We can compose React
          components into each other. You can pass components via children as
          well.
        </p>
        <h2>Imperative React</h2>
        <p>
          React is inherently declarative, starting with JSX and ending with
          hooks. In JSX, we tell React <em>what</em> to render and not{" "}
          <em>how</em> to render it. In a React side-effect Hook (useEffect), we
          express when to achieve <em>what</em> instead of <em>how</em> to
          achieve it.
        </p>
        <div>
          Although the declarative approach is preferred in React, it's
          sometimes not possible, making the imperative path necessary. In such
          cases, we want to access the rendered elements of JSX imperatively
          (most often as a side effect) in cases such as these:
          <ul>
            <li>Read/write access to elements via the DOM API</li>
            <ul>
              <li>Reading an element's width or height</li>
              <li>Setting an input field's focus state</li>
            </ul>
            <li>Complex Animations</li>
            <ul>
              <li>Setting transitions</li>
              <li>Managing transitions</li>
            </ul>
            <li>Integration of 3rd party libraries</li>
            <ul>
              <li>D3 is a popular imperative chart library</li>
            </ul>
          </ul>
        </div>
        <h4>Refs</h4>
        <p>
          A ref in React is mainly used to assign a HTML element to it. The
          assigned HTML element gives us imperative read and write operations on
          it which allows us to programmatically call functions. Sometimes you
          want to use a ref as an instance variable to capture a value. For
          example, a ref could keep track of all click interactions. Either the
          ref is used as HTML element by leveraging the ref attribute on an
          element or as instance variable to keep track of a state which does
          not cause React to re-render.
        </p>
        <h3>useRef Steps</h3>
        <p>
          First, create a ref with the useRef Hook. The ref object is a
          persistent value which stays intact over the lifetime of a React
          component. It comes with a property called <em>current</em>, which, in
          contrast to the ref object, can be changed. The best practice would be
          initializing the ref with null. Second, the ref is passed to the input
          field's JSX-reserved ref attribute and the element instance is
          assigned to the changeable <em>current</em> property. Third, opt into
          React's lifecycle with React's useEffect Hook, performing the focus on
          the input field when the component renders (or its dependencies
          change). And fourth, since the ref is passed to the input field's{" "}
          <em>ref</em> attribute, its <em>current</em> property gives access to
          the element. Execute its focus programmatically as a side-effect, but
          only if isFocused is set and the current property exists.
        </p>
        <p>
          Usually, data from a remote backend/database arrives asynchronously
          for client-side applications like React. Thus it's often the case that
          we must render a component before we can initiate the data fetching.
        </p>
        <h3>useReducer Hook</h3>
        <p>
          A reducer function always receives a state and action and returns a
          new state.
        </p>
        {/* {codeHighlighter(data.useReducer.code, "javascript")} */}
        <p>
          A reducer action is always associated with a type. useReducer receives
          a reducer function and an initial state as arguments and returns an
          array with two items. The first item is the current state; the second
          item is the state updater function (also called dispatch function):
        </p>
        <p>
          The new dispatch function can be used instead of the setStories
          function which used useState. Instead of setting the state explicitly
          with the state updater function from useState, the useReducer state
          updater function dispatches an action for the reducer. The action
          comes with a type and an optional payload.
        </p>
        <h3>React Impossible States</h3>
        <p>
          There is nothing wrong with multiple useState hooks in one React
          component. Be wary once you see multiple state updater functions in a
          row, however. These conditional states can lead to{" "}
          <strong>impossible states</strong> and undesired behavior in the UI.
        </p>
        <p>
          The impossible state happens when an error occurs for the asynchronous
          data. The state for the error is set, but the state for the loading
          indicator isn't revoked. In the UI, this would lead to an infinite
          loading indicator and an error message, though it may be better to
          show the error message only and hide the loading indicator. Impossible
          states are not easy to spot, which makes them infamous for causing
          bugs in the UI.
        </p>
        <p>
          Fortunately, we can improve our chances by moving states that belong
          together from multiple useState and useReducer hooks into a single
          useReducer hook for a unified state management and a more complex
          state object.
        </p>
        <p>
          For every state transition, we return a new state object which
          contains all the key/value pairs from teh current state object (via
          JavaScript's spread operator) and the new overwriting properties.
        </p>
        <h3>Server Side vs Client Side</h3>
        <p>
          By moving the data fetching from client side using local data and to
          an API fetching external data, we move the data fecthing to
          server-side. This approach stresses theh API so you might experience
          errors if too many requests are made.
        </p>
        <h3>Memoized Handler in React</h3>
        <p>
          In React, there are handlers, callback handlers, and inline handlers.
          There are also <strong>memoized handlers</strong> which can be applied
          on top of handlers and callback handlers.
        </p>
        <p>
          We can move all data fetching from a standalone function in a
          useEffect hook to a memoized function using the useCallback hook which
          can then be invoked in the useEffect hook.
        </p>
        <p>
          Instead of using a data fetching logi anonymously in a side-effect
          hook, we made it available as a function for the application. React's
          useCallback Hook creates a memoized function every time its dependency
          array changes.
        </p>
        <p>
          If we didn't create a memoized function with React's useCallback Hook,
          a new handleFetchStories function would be created each time the App
          component re-renders, and would be executed in the useEffect hook to
          fetch data.
        </p>
        <p>
          React's useCallback hook changes the function only when the search
          term changes. That's when we want to trigger a re-running of the
          function.
        </p>
        <p>
          By moving the data fetching function outside the useEffect hook, it
          becomes reusable for other parts of the application. Now, the
          useEffect hook runs implicitly when the searchTerm changes, because
          the handleFetchStories is re-defined each time the searchTerm changes.
        </p>
        <p>
          Using a 3rd-party API to fetch data means we cannot access the its
          internals and we may incur rate limiting, which returns an error
          instead of data. Instead we can try to refetch data conditionally
          using a confirmation button.
        </p>
        <h3>3rd-Party Libraries</h3>
        <p>
          In a
          <Link to="https://bit.ly/3ncFfSs">headless browser environment</Link>,
          issues might arise using the browser native fetch API. An alternative
          is to use a stable library like axios, which performs asynchronous
          requests to remote APIs.
        </p>
        <p>
          You can use axios instead of fetch, and its usage looks almost
          identical to the native fetch API. It takes the URL as an argument and
          returns a promise. You don't have to transform the returned response
          to JSON anymore, since axios wraps the result into a data object in
          JavaScript. Axios is recommended over the native fetch API when
          requests become complex, working with older browsers, or for testing.
        </p>
        <h3>Async/Await in React</h3>
        <p>
          Once you start using the await keyword on returned promises,
          everything reads like synchronous code. Actions after the await
          keyword are not executied until the promise resolves, meaning the code
          will wait. The goal is to make our code more readable in a synchronous
          way.
        </p>
        <h3>Forms in React</h3>
        <p>
          Instead of passing the handleSearchSubmit handler to the button, it's
          used in the new form element. THe button receives a new type attribute
          called submit, which indicates that the form element handles teh click
          and not the button. Since the handler is used for the from event, it
          executes <strong>preventDefault</strong> in React's synthetic event.
          This prenvents the HTML form's native behavior, which leads to a
          browser reload.
        </p>
        <p>
          With a form, we can use the Enter key for the action because we are
          not just using a standalone button. When we have input fields and a
          button to submit data from them, we can give our HTML more structure
          by wrapping it into a form element with an onSubmit handler. The
          button that executes the submission needs only the "submit" type. It
          makes it more accessible for keyboard users as well.
        </p>
        <h3>CSS Modules in React</h3>
        <p>
          CSS modules offer the benefit of conditional rendering, readability,
          and more.
        </p>
        <h3>useContext Hook</h3>
        <ul>
          <li>Passing data deeply into the tree</li>
          <li>Updating data passed via context</li>
          <li>Specifying a fallback default value</li>
          <li>Overriding context for a part of the tree</li>
          <li>Optimizing re-renders when passing objects and functions</li>
        </ul>
        <p className="note">
          <span className="warning">Warning:</span>
          useContext() always looks for the closest provider above the component
          that calls it. It searches upwards and does not consider providers in
          the component from which you’re calling useContext().
        </p>
        <CodeBlock code={codeChunks.useContextCode} language="tsx" />
        <h3>React's Legacy</h3>
        <h2>Class Components in React</h2>
        <p>
          React components have undergone many changes, from
          <strong>createClass</strong> components over
          <strong>class components</strong>, to
          <strong>function components</strong>. A typical class components is a
          JavaScript class with a mandatory <strong>render method</strong> that
          returns the JSX. The class extends from a React.Component to inherit
          (class inheritance) all React's component features (e.g., state
          management, lifecycle methods for side-effects). React props are
          accessed via the class instance (this) in any class method (e.g.,
          render).
        </p>
        <CodeBlock code={codeChunks.classComponent} language="tsx" />
        <p>
          With the addition of React Hooks function components were granted the
          same features as class components, with state and side-effects. And
          since there was no longer any practical difference between them, the
          community chose function components over class components since they
          were more lightweight.
        </p>
        <h3>React Class Components: State</h3>
        <p>
          Before React Hooks, class components were superior to function
          components because they could be stateful.
        </p>
        <CodeBlock code={codeChunks.classComponent2} language="tsx" />
        <p>
          If the state has more than one property in its state object, the
          setState method performs only a shallow update. Only the properties
          passed to setState are overwritten, and all other properties in the
          state stay intact.
        </p>
        <p>
          In a React class component, there are two dedicated APIs (this.state
          and this.setState) to manage a component's state. In a function
          component, React's useState and useReducer hooks handle this. Related
          items are packed into one state hook, while a class component must use
          a general state API.
        </p>
        <h2>Imperative React</h2>
        <p>
          In a React function component, React's <i>useRef</i> Hook is used
          mostly for imperative programming. Throughout React's history, the{" "}
          <i>ref</i> and its usage had a few versions:
        </p>
        <ul>
          <li>String Refs (deprecated)</li>
          <li>Callback Refs (used in class and function components)</li>
          <li>createRef Refs (exclusive for class components)</li>
          <li>useRef Hook Refs (exclusive for function components)</li>
        </ul>
        <CodeBlock code={codeChunks.imperReact} language="tsx" />
        Refs are good for focusing on an input field on a button click, for
        example. React's <i>useRef</i> Hook is used in React function
        components.
        <h2>Styling in React</h2>
        <p>There are various strategies for implementing css in React:</p>
        <ul>
          <li>CSS-in-CSS (CSS, CSS modules)</li>
          <li>CSS-in-JS (styled components)</li>
          <li>Utility-first-CSS (Tailwind CSS)</li>
        </ul>
        <pre>Webpack is a build tool.</pre>
        <p>
          <strong>Inline style</strong> is useful for quick prototyping and
          dynamic style definitions. Inline style should be used sparingly,
          since a separate style definition with a CSS file keeps the JSX more
          concise.
        </p>
        <h3>Styled Components</h3>
        <p>
          Styled Components is one of several approaches for{" "}
          <strong>CSS-in-JS</strong> CSS-in-JS happens in your JavaScipt file.
        </p>
        <p>
          When using Styled Components, you are using the JavaScript template
          literals the same way as JavaScript functions. Everything between the
          backticks can be seen as an argument and the <strong>styled</strong>{" "}
          object gives you access to all the necessary HTML elements (e.g., div,
          h1) as functions.
        </p>
        <p>
          This kind of React component follows the same rules as a common React
          component.
        </p>
        <p>
          Advanced features like CSS nesting are available in Styled Components
          by default. Nested elements are accessible and the current element can
          be selected with the & CSS operator
        </p>
        <p>
          You can also create specialized versions of styled components by
          passing another component to the library's function. The specialized
          button receives all the base styles from the previously defined
          component.{" "}
        </p>
        <CodeBlock code={codeChunks.styledButtons} language="tsx" />
        <p>
          When we use a styled component the underlying element is used in the
          real HTML output. We can continue using the native HTML attributes
          (onSubmit, type, disabled) there.
        </p>
        <p>
          Styled Components are styles defined as React components without the
          intermediate CSS file. IF a styled component isnt' used in a
          JavaScript, your IDE/editor will tell you.
        </p>
        <h3>SVGs (Scalable Vector Graphics) in React</h3>
        <p>
          SVGs in React Flaticon's Freepick offer's many free SVG icons to use,
          but you are required to mention the author.
        </p>
        <CodeBlock code={codeChunks.svgEx} language="tsx" />
        <CodeBlock code={codeChunks.svgCSS} language="css" />
        <h3>React Maintenance</h3>
        <p>
          For large React applications, maintenance becomes essential.
          Performance optimization, type safety, testing, and project structure
          are important considerations. Performance optimization prevents
          applications from slowing down by assuring efficient use of available
          resources. Typed programming languages like TypeScript detect bugs
          earlier in the feedback loop. Testing gives us more explicit feedback
          than typed programming, and provides a way to understand which actions
          can break the application.
        </p>
        <h3>Performance in React (Advanced)</h3>
        <p>
          We wouldn't need optimizations in most React applications, as React is
          fast out of the box.
        </p>
        <h4>Don't run on first render</h4>
        <p>
          React's useEffect Hook is used for side-effects. It runs the first
          time a component renders (mounting), and then every re-render
          (updating). By passing an empty dependency array to it as a second
          argument, we can tell the hook to run on the first render only.
        </p>
        <p>
          There is no way to tell the hook to run only on every re-render (after
          the initial render) and not the first render (mount). We can build a
          custom hook for that.
        </p>
        <p>
          It doesn't make sense to run the side-effect for the initial rendering
          of the component though, because there is nothing to store in the
          local storage except the initial value. It's a redundant function
          invocation, and should only run for every update (re-rendering) of the
          component.
        </p>
        <p>
          There is no React Hook that runs on every re-render, and there is no
          way to tell the useEffect hook in a React idiomatic way to call its
          function only on every re-render. However, by using React's useRef
          Hook which keeps its ref.current property intact over re-renders, we
          can keep a made up state (without re-rendering the component on state
          updates) with an instance variable of our component's lifecycle.
        </p>
        <p>
          We are exploiting the ref and its mutable current property for
          imperative state management that doesn't trigger a re-render. Once the
          hook is called from its current component for the first time
          (component render), the ref's current property is initialized with a
          false boolean called isMounted. As a result, the side-effect function
          in useEffect isn't called; only the boolean flag isMounted is toggled
          to true in the side-effect. Whenever the hook runs again (component
          re-render), the boolean flag is evaluated in the side-effect. Since
          it's true, the side-effect function runs. Over the lifetime of the
          component, the isMounted boolean will remain true. It was there to
          avoid calling the side-effect function for the first time render that
          uses our custom hook.
        </p>
        <h4>Add a Logging Statement</h4>
        <CodeBlock code={codeChunks.loggingStatement} language="tsx" />
        <p>
          console.log always evaluates to false so combining it with the OR
          operator (||) results in the right-hand side always being executed.
          This is a neat trick for adding a logging statement to a function
          component without a function body.
        </p>
        <h4>Strict Mode</h4>
        <p>
          In development mode, React's StrictMode renders a component twice to
          detect problems with your implementation in order to warn you about
          these. This StrictMode is automatically excluded for applications in
          production.
        </p>
        <h4>Re-rendering</h4>
        <p>
          React's default behavior is to re-render everything below a component
          with a state change, which surprises many people. In other words, if a
          parent component re-renders, its child components re-render as well.
          React does this by default, because preventing a re-render of child
          components could lead to bugs, and the re-rendering mechanism of React
          is often fast enough by default.
        </p>
        <p>
          Sometimes we want to prevent re-rendering. For example, huge datasets
          displayed in a table shouldn't re-render if they are not affected by
          an update. It's more efficient to perform an equality check if
          something changed for the component. We can use React's memo API to
          make this equality check for the props:
        </p>
        <CodeBlock code={codeChunks.memoCode} language="tsx" />
        <p>
          The list component passed to the List componnet is the same, but the
          onRemoveItem callback handler isn't. If the App component re-renders,
          it always creates a new version of this callback handler as a new
          function. Earlier, we used React's useCallback Hook to prevent this
          behavior, by creating a function only on a re-render (if one of its
          dependencies has changed).
        </p>
        <p>
          Since the callback handler get the item passed as an argument in its
          function signature, it doesn't have any dependencies and is declared
          only once when the API component initially renders.
        </p>
        <p>
          While all props passed to a component stay the same, the component
          renders again if its parent component is forced to re-render. That's
          React's default behavior, which works most of the time because the
          re-rendering mechanism is pretty fast. However, if re-rendering
          decreases the performance of a React application, React's memo API
          helps prevent re-rendering. However, sometimes memo alone doesn't
          help, though. Callback handlers are re-defined each time in the parent
          component and passed as changed props to the component, which causes
          another re-render. In that case, useCallback is used for making the
          callback handler only change when its dependencies change.
        </p>
        <h4>useMemo</h4>
        <p>
          We can tell React to only run a function if one of its dependencies
          has changed. If no dependency has changed, the result of the function
          stays the same. React's useMemo Hook helps us here. Warning: This
          should only be used for cost expensive computations which could lead
          to a delay of a re-rendering of a component.
        </p>
        <p>
          For useMemo, useCallback, and memo, remember that these shouldn't be
          used by default. Apply them only if you run into performance
          bottlenecks. Most of the time this shouldn't happen because React's
          rendering mechanism is pretty efficient by default. Sometimes using
          these functions can be more expensive than the re-rendering itself!
        </p>
        <h4>TypeScript in React</h4>
        <p>
          JavaScript is a dynamically typed language. TypeScript is a statically
          typed language with benefits over dynamically typed languages. Type
          inference works most of the time for React hooks out of the box.
        </p>
        <CodeBlock code={codeChunks.renameCode} language="shell" />
        {/* {codeHighlighter(data.refCode.code, "jsx")} */}
        <h4>Testing in React</h4>
        <p>
          The goal of testing is to verify the source code quality and
          functionality before using it in production. The testing pyramid will
          serve as our guide. The testing pyramid includes end-to-end test,
          integration test, and unit tests. Unit tests are for small, isolated
          blocks of code, such as a single function or component. Integration
          tests help us figure out how well these blocks of code work together.
          An end-to-end test simulates a real-life scenario, like a user logging
          into a web application. Unit tests are quick and easy to write and
          maintain; end-to-end tests are the opposite.
        </p>
        <p>
          Many units tests are required to cover all the functions and
          components in a workign application, after which several integration
          tests make sure that the most important units work together.
          End-to-end tests can simulate critical user scenarios.{" "}
          <strong>Snapshot tests</strong> are useful component-specific tests.
        </p>
        <p>
          End-to-end (E2E) tests have more integration but are slower to run.
          Unit tests have less integration (more isolation) but are faster to
          run. Integration tests are in the middle of the spectrum.
        </p>
        <p>
          Jest and React Testing Library (RTL) are the most popular tools. Jest
          is a full-blown testing framework with test runners, test suites, test
          cases, assertions, mocking capabilities and more. RTL is used for
          rendering React components, triggering events like mouse clicks, and
          selecting HTML elements from the DOM to perform assertions. RTL is the
          default testing library, so it doesn't need to be set up.
        </p>
        <p>
          Test suites and test cases are commonly used in JavaScript and many
          other programming languages. A test suite groups the individual test
          cases into one larger subject.
        </p>
        <p>
          Create-react-app comes with Jest, so it isn't necessary to install if
          app was created with "create-react-app." Run "npm test" in the command
          prompt and the test runner will match all files with a "test.js"
          suffix. The interactive test script watches your tests and source code
          and executes tests when the files change.
        </p>
        <p>
          Once you start testing, it is a good practice to keep two command line
          interfaces open: one for watching your tests (npm test), and one for
          developing your application (npm start). Also, source control
          platforms like Git may require an additional command line interface
          for adding your source code to the repository.
        </p>
        <h5>Unit Testing</h5>
        <p>
          A unit test is generally used to test components or functions in
          isolation. For functions, unit tests are for input and output; for
          components, we test props or the callback handlers communicating to
          the outside. Before performing tests, we must export components and
          functions so that we can import them into our test files.
        </p>
        <p>
          RTL (React Testing Library) has various utility functions. You should
          get a habit of using RTL's screen object debug() function whenever
          rending a new component in a React component test. screen.debug()
          shows what is rendered. The screen object also provided a function
          called screen.getByText(), screen.getByPlaceholderText() and other
          search functions.
        </p>
        <h2>RTL's act() Helper Function</h2>
        <p>
          The act() helper function is used to wait until a promise resolves
          after a component's initial render. screen.debug() can be used to
          check the App component's html tree before and after the request.
        </p>
        <p>
          When writing UI tests, tasks like rendering, user events, or data
          fetching can be considered as “units” of interaction with a user
          interface. React provides a helper called act() that makes sure all
          updates related to these “units” have been processed and applied to
          the DOM before you make any assertions
        </p>
        <p>
          When we are testing for a returned element that is absent, we use
          RTL's queryByText() instead of the getByText() function. getByText()
          would produce an error when the element is not found. queryByText()
          just returns null.
        </p>
        <p>
          In React Testing Library, the getByDisplayValue query allows you to
          find an input element, textarea, or select element based on its
          displayed value.
        </p>
        <h2>Search functions</h2>
        <ul>
          <li>getByText()</li>
          <li>getAllByText()</li>
          <li>getByRole()</li>
          <li>getAllByRole()</li>
        </ul>
        <p>
          Assertive functions include toBeInTheDocument(), toHaveAttribute(),
          etc. For example,
          expect(screen.getByText("react")).toBeInTheDocument();
        </p>
        <p>
          RTL's getByText() search function finds one element with the visible
          text (text that users can see) "Jordan Walke" and "React", for
          example. We can use the getAllByText() to find all instances.
        </p>
        <p>
          Generally, use getBy..() for single elements and getAll..() for
          multiple elements. If you are checking for elements that aren't
          present, use queryBy..() or queryAllBy..().
        </p>
        <p>
          Sometimes, RTL ignores child components in tests. This is because the
          end user wouldn't care about it either.
        </p>
        <h2>Snapshot Testing</h2>
        <p>
          Snapshot tests are a more lightweight way to test React components and
          their structure. They have less focus on implementation details. A
          snapshot test creates an instance of your rendered component's output
          as HTML elements and their structure. This snapshot is compared to the
          same snapshot in the next test to give more output on how the rendered
          component changed and show why any tests failed in the difference. You
          can accept or deny any differences in your source code until the
          component functions as intended.
        </p>
        <p>
          When snapshot tests are run, a new directory will be created with the
          HTML snapshot. If the HTML in a file is subsequently changed, the next
          time npm run test is run, the new snapshot will be different from the
          old snapshot, so the test will fail, but if the changes were
          intentional (the command line will show the changes), press "u" to
          update the snapshot.
        </p>
        <CodeBlock code={codeChunks.testingCode} language="js" />
        {/* (p. 180) */}
        <CodeBlock code={codeChunks.refCode} language="tsx" />
        {/* {codeHighlighter(data.refEx.code, "jsx")} */}
        {/* {codeHighlighter(data.refExTwo.code, "jsx")} */}
        <CodeBlock code={codeChunks.refExTwo} language="tsx" />
        <hr />
        <h2>toBe() vs. toStrictEqual()</h2>
        <p>
          The toBe() assertive function makes a strict comparison like "===." If
          object references are different, the equality will fail.
          toStrictEqual() is used instead of toBe() to limit the comparison to
          the objects' contents. A strict comparison is just a content
          comparison. For JavaScript primitives (like strings or booleans), you
          can still use toBe(). There is also a toEqual() function that is
          slightly different from toStrictEqual().
        </p>
        <h2>Testing Events</h2>
        <p>
          Not only can we can test the presence of items, we can test the
          outcome of events. For example, does clicking a button trigger a
          callback handler function? We can use Jest to create a mock function
          and RTL to fire a click event on the button. With mock functions we
          can assert whether these functions get called appropriately.
        </p>
        <h2>Test Specific Functions</h2>
        <p>
          Test-specific functions are called <strong>spy</strong>,{" "}
          <strong>stub</strong>, or <strong>mock</strong>. The jest.fn()
          (vi.fn() for vitest?) returns a mock for the actual function, which
          let's us capture when it has been called. Then, we can use the
          toHaveBeenCalledTimes(n) and toHaveBeenCalledWith() assertions. First,
          use Jest's helper function to create a mocked function (jest.fn()),
          then invoke it implicitly with RTL's fireEvent object's function. Then
          we can assert that a callback handler - which is the mocked function -
          has been called a certain number of times.
        </p>
        <h2>
          RTL adheres to a single philosophy: instead of testing implementation
          details of React components, it tests how users interact with the
          application and if it works as expected.
        </h2>
      </div>

      <ul>
        <li>
          findBy - findBy queries return a promise which resolves when a
          matching element is found. The promise is rejected if no elements
          match or if more than one match is found after a default timeout of
          1000 ms. If you need to find more than one element, then use
          findAllBy.
        </li>
        <li>
          getBy*() - getBy queries return the first matching node for a query,
          and throw an error if no elements match or if more than one match is
          found. If you need to find more than one element, then use getAllBy.
        </li>
        <li>
          queryBy*() - queryBy queries return the first matching node for a
          query, and return null if no elements match. This is useful for
          asserting an element that is not present. This throws if more than one
          match is found (use queryAllBy instead).
        </li>
      </ul>
      <h2>mockImplementationOnce() and mockImplementation()</h2>
      <p>
        These functions are used to mock url requests. Depending on the income
        url, we can decide what action to take. We can mock a request once
        ("Once") or multiple requests.
      </p>

      <h2>Challenge: Remember Last Searches</h2>
      <p>
        Task: Remember the last five search terms which hit the API, and provide
        a button to move quickly between searches. When the buttons are clicked,
        stories for the search term should be fetched again.
      </p>
      <h2>Paginated List</h2>
      <p>
        The Hacker News API returns a <strong>paginated list</strong>, a page
        (or group) of results from a larger collection where each page (or
        group) is indexed. The first page property index is 0. Often, websites
        have page buttons (e.g., 1-[3]-10) where the user can choose which page
        to choose from. This typically involves rendering a single paginated
        list on a button click.
      </p>
      <p>
        An alternative strategy is <strong>infinite pagination</strong>. This
        involves rendering all paginated lists as one list with one button to
        fetch the next page. Instead of fetching only the first page of a list,
        extend the functionality for fetching succeeding pages
      </p>
      <div className="w-[97%] md:w-[60%] mx-1 md:mx-4 md:border md:border-white rounded-md p-1 md:p-10">
        <Links />
      </div>
    </div>
  );
};

export default Notes;
// interface ICodeHighlighter {
//   code: string;
//   language: string;
// }

// const codeHighlighter = (code: string, language: string) => {
//   return (
//     <SyntaxHighlighter
//       // children={code}
//       // showLineNumbers={true}
//       // language={language}
//       // style={agate}
//       className="w-[1200px]"
//       customStyle={{ background: "none", fontSize: ".5rem" }}
//       // lineProps={(lineNumber) => ({
//       //   style: { display: "block", cursor: "pointer" },
//       //   // onClick() {
//       //   //   alert(`Line Number clicked: ${lineNumber}`);
//       //   // },
//       // })}
//       lineProps={{
//         style: {
//           wordBreak: "break-all",
//           // whiteSpace: "pre-wrap",
//           paddingBottom: 8,
//         },
//       }}
//       wrapLines={true}
//       language="jsx"
//       style={a11yDark}
//     >
//       {() =>
//         prettier.format(
//           { code },
//           {
//             parser: "babel",
//             plugins: [parserBabel],
//           }
//         )
//       }
//     </SyntaxHighlighter>
//   );
// };
