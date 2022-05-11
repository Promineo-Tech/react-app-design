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



### React Asynchronous Data

Usually, data from a remote backend/database arrives asynchronously for client-side applications like React. Thus it’s often the case that we must render a component before we can initiate the data fetching. 


### useEffect hook


### Conditional Rendering

A ```conditional rendering``` in React always happens if we have to render different JSX based on information (e.g. state, props). Dealing with asynchronous data is a good use case for making use of conditional rendering. 

For example, when the application initializes for the first time, there is no
data to start with. Next, we are loading data and eventually, we have the data at our hands to display it. Sometimes the data fetching fails and we receive an error instead. 


### Styling

There are many ways (aka methodologies) to style a React application.

![Styling Patterns](images/styling-patterns.png)

#### Modern Component Architecture

There are a few “hard problems” when it comes to CSS. One of the very hardest has to do with CSS global nature: how do we structure large applications to avoid specificity wars and naming collisions? How do we identify which styles affect a given element?


#### CSS Stylesheets 


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

#### CSS Modules



#### Styled Components (CSS-in-JS)