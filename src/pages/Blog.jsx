import React from 'react'
import { Button } from 'react-bootstrap';

import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {

  return (
    <div className="container">
      <div>
        <h3>Differences between controlled and uncontrolled components .</h3>
        <p>
          In ReactJS, components can be classified into two types based on how
          they handle data and communicate with other components: Controlled and
          Uncontrolled components.
          <br />
          <br />
          Controlled Components:
          <br />A controlled component is a component that manages its own state
          and communicates with other components through props. In other words,
          the state of a controlled component is completely controlled by the
          parent component, and the child component cannot modify its own state.
          The parent component passes all the necessary information, such as the
          state and behavior of the child component, to it as props. For
          example, in a form, if a parent component wants to manage the value of
          an input field, it would pass the value and the onChange handler to
          the child component as props. The child component would then use these
          props to update its state and communicate with the parent component.
          <br />
          <br />
          Uncontrolled Components:
          <br />
          An uncontrolled component is a component that manages its own state
          internally and does not require any intervention from its parent
          component to update its state. In other words, the state of an
          uncontrolled component is managed internally by the component itself,
          and the parent component has no control over it. For example, in a
          form, an uncontrolled input field does not require any onChange
          handler or value prop from its parent component. Instead, it manages
          its own state based on the user's input. In summary,
          <br />
          <br /> the key difference between controlled and uncontrolled
          components in ReactJS is the way they handle state management and
          communication with other components. Controlled components rely on
          props and callbacks to manage their state, while uncontrolled
          components manage their state internally.
        </p>
      </div>
      <div>
        <h3>How to validate React props using Prop Types</h3>
        <p>
          {" "}
          To validate React props using propTypes, you can follow these steps:
        </p>
        <ul>
          <li>
            Import the prop-types package at the top of your component file:
          </li>
          <li>
            Add a propTypes object to your component class or function, where
            each property corresponds to a prop that your component expects to
            receive:
          </li>
          <li>
            For each prop, assign a PropTypes validator to the corresponding
            property of the propTypes object. The available validators include
            string, number, bool, array, object, func, and others.
          </li>
          <li>
            You can also add validation rules such as isRequired, oneOf,
            oneOfType, shape, and arrayOf to ensure that the prop is required,
            has a specific value, or is of a specific type.
          </li>
        </ul>
      </div>
      <div>
        <h3>What are the Differences between Node js and Express js</h3>
        <p>
          Node.js and Express.js are both widely used technologies in the world
          of JavaScript and server-side web development. Here are the key
          differences between Node.js and Express.js:
        </p>
        <ul>
          <li>
            Node.js is a JavaScript runtime environment that allows you to run
            JavaScript code outside of the web browser. It provides a platform
            for building server-side applications in JavaScript. Express.js, on
            the other hand, is a framework built on top of Node.js that
            simplifies the process of building web applications in Node.js.
          </li>
          <li>
            Node.js provides a set of core modules that allow you to perform
            basic operations such as reading and writing files, creating and
            managing network connections, and more. Express.js extends Node.js
            by providing a set of features and tools for building web
            applications, such as middleware, routing, and templating.
          </li>
          <li>
            Node.js is highly flexible and can be used to build a wide variety
            of applications beyond web applications, such as command-line tools,
            desktop applications, and more. Express.js, on the other hand, is
            focused specifically on building web applications and provides a set
            of tools and features optimized for that purpose.
          </li>
          <li>
            Node.js is a low-level technology that requires a lot of boilerplate
            code to build a basic web application. Express.js simplifies this
            process by providing a set of conventions and best practices for
            building web applications, making it faster and easier to get
            started.
          </li>
          <p>
            In summary, Node.js is a JavaScript runtime environment that allows
            you to run JavaScript code on the server-side, while Express.js is a
            framework built on top of Node.js that provides a set of features
            and tools for building web applications.
          </p>
        </ul>
      </div>
      <div>
        <h3>What is a custom hook and why will you create a custom hook ? </h3>
        <br />
        <p>
          Sure! A custom hook is just a reusable piece of code that you can use
          in your React components. It's like a function that you define and can
          be called from anywhere in your code.
        </p>
        <p>
          By using custom hooks, you can avoid writing repetitive code in your
          components and abstract away common functionality. This makes your
          code more modular, easier to maintain, and can save you time and
          effort in the long run.
        </p>
      </div>
      <div className="ms-auto">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf} className='bg-warning'>Download Summary pdf</button>}
        </Pdf>
      </div>
      <div ref={ref} className=''>
        <h1>Overall Summary of this blog page</h1>
        <p>In this blog page we have disscussed some important concept of React js . They are Contralled and Uncontrolled components ,react props related discussion , .Besides we also disscused about Node js and Express js . what is their relation ship and finally why you will create a custom hook . As a react developer you shuld have a very clear concepts about this things . </p>
      </div>
    </div>
  );
}

export default Blog