## Movie Reviewer Database App - Part 3

![Modal](images/modal.png)
![Filtering](images/filtering.png)

## Component Life Cycle Methods

The methods invoked during different phase/lifecycle of a component is what's
popularly known as the ```component lifecycle methods```. 

In the mounting and updating phases, the render lifecycle method is always invoked.
There are lifecycle methods available on all 4 phases of a component — mounting,
updating, unmounting and error handling.

The four essential phases or lifecycle attributed to a React component include:

- Mounting — The component is created and then inserted into the DOM
- Updating — A React component is updated via changes in props or state.
- Unmounting — The component is removed from the DOM.
- Error Handling — When there's a bug, the component is in the error



## React Asynchronous Data

Usually, data from a remote backend/database arrives asynchronously for client-side applications like React. Thus it’s often the case that we must render a component before we can initiate the data fetching. 


### useEffect hook


### Conditional Rendering

A ```conditional rendering``` in React always happens if we have to render different JSX based on information (e.g. state, props). Dealing with asynchronous data is a good use case for making use of conditional rendering. 

For example, when the application initializes for the first time, there is no
data to start with. Next, we are loading data and eventually, we have the data at our hands to display it. Sometimes the data fetching fails and we receive an error instead. 

## Styling

There are many ways (aka methodologies) to style a React application.

![Styling Patterns](images/styling-patterns.png)

### Modern Component Architecture

There are a few “hard problems” when it comes to CSS. One of the very hardest has to do with CSS global nature: how do we structure large applications to avoid specificity wars and naming collisions? How do we identify which styles affect a given element?

### CSS Stylesheets 

Writing CSS in a stylesheet is probably the most common and basic approach to styling a React application.

Plain CSS (CSS in CSS) would be accomplished by either having a global CSS file (App.css) and having all of your styles in that one file OR creating separate .css file per component. 

> The problem with creating a separate .css file per component is possible name conflicts and specificity issues. 

```CSS
/* global.css */

.button {
  width: 200px;
  border: none;
  background-color: aqua;
}
```

```JS
import "./global.css";

export default function App() {
  return (
    <>
      <button className="button">I am a button</button>
    </>
  );
}
```
### Inline Styling

Inline styling works the same for HTML documents as it does for React. The difference is that you need to create an object to pass the CSS properties that you want.

The properties in the ```styles``` object must be camelCase style because kebab-case doesn't fit because of syntax rule. - is not allowed in identifier.


```JS
const styles = {
  width: 200px,
  border: none,
  backgroundColor: blue
};

const Button = () => (
  <button style={styles}>This is a button</button
)
```

> Some of the drawbacks of inline-styling in React is the complexity for adding pseudo-selectors (e.g. :hover), inability to pass props, non-support of media queries, 

### CSS Modules

<a href="https://developer.adobe.com/commerce/pwa-studio/guides/general-concepts/css-modules/
">CSS Modules</a> are .css files in which all class names are scoped locally by default.

CSS Modules are not part of the CSS Spec or browser API. It is part of the build process of webpack or other module bundlers (Parcel, Vite, etc). 

CSS modules give you the ability to control your element styles in a more granular way. They allow you to build different layers of styles while building your application using a modular approach. 

A CSS Module is simply a .css file, where classes act similarly to local variables in Javascript. 

The build tools (Create-React-App) transforms your class names into variables that are exported separately as ```named exports``` and as an ```object```. Another CSS file gets generated and then mapped to the associated const . As a result, your CSS is specifically scoped to the space it is used.

> By default CSS Modules are scoped only to classes. This means that #id and global selectors are not processed by CSS Modules. However, descendants of classes are scoped. For example, .container img will be scoped by CSS Modules but img on its own will not.

![CSS Modules](images/css-modules.png)

```CSS
/* Button.module.css  */

.button {
  width: 200px;
  border: none;
  background-color: blue;
}
```

```JS
/* Button.jsx */

import styles from "./Button.module.css";

const Button = () => {
  return <button className={styles.button}>This is a button</button>;
};

export default Button;
```

```JS
import "./Button.jsx"

export default function App() {
  return (
    <>
      <Button>I am a button</button>
    </>
  );
}
```
### CSS-in-JS

There are a few popular libraries to do CSS-in-JS such as <a href="https://styled-components.com/">styled components</a>, and <a href="https://emotion.sh/docs/styled">Emotion</a>. CSS-in-JS is not a specific library, it’s a concept that tries to solve the problem of styling in React applications.

Styled-components are designed to eliminate the mapping between components and styles, so when you’re defining your styles, you’re really just building a regular React component with your styles attached.

 styled-components use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates">tagged template literals</a> in JavaScript to style components. Tagged template literals allows you to parse template literals with a function. It is powered by tagged templates and allows to create normal React components by only defining styles.

<strong>Install the Styled Components package:</strong>

```
npm i styled-components
```

<strong>Import into component</strong>

```JS
import styled from "styled-components";
```

<strong>Create style object and use inline</strong>

```JS
const StyledButton = styled.button`
   width: 200px;
   border: none;
   background-color: grey;
`;

const Button = () => {

  return <StyledButton>This is a button</StyledButton>;
}
```

Here, ```StyledButton``` is the styled component, and it will be rendered as an HTML button with the contained styles. ```styled``` is an <a href="https://styled-components.com/docs/api#styled">internal utility method</a> that transforms the styling from JavaScript into actual CSS.

> The knock against CSS-in-JS libraries involves performance. These libraries do some relatively heavy lifting under the hood: compiling and interpolating props for styling directives in tagged template literals, building a graph of managed elements, preprocessing CSS, and injecting the CSS into the page.


## References

 - [CSS Modules Documentation](https://github.com/css-modules/css-modules) 
 - [CSS Modules - Create React App](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
 - [Styled Components Documentation](https://styled-components.com/docs)
- [CSS-in-JS Explained](https://www.youtube.com/watch?v=ull9iCMTGDE)
 - [Using Styled Components](https://www.youtube.com/watch?v=pWps7PkrQaQ)
