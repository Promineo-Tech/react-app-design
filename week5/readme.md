## Testing

Testing refers to the process of writing tests for our code based on what we expect to happen and then running our code against those tests. Our code will be considered successful if it passes the tests that we write for it. 

The idea is that we determine from the start what we expect a function or a component to do, write tests to reflect these expectations, and then put our components up against these tests. If they behave the way we expect, then we can move on. Otherwise, we need to refactor our code to pass the tests. 

There are several common kinds of testing:

- Unit Testing: Used to test a single function.
- Endpoint Testing: Used to test an endpoint. Postman tests would be an example of this.
- Component Testing/Mocking Components: Testing a component in a simulated environment.
- End to End Testing: Simulates a user interacting with the website.

### Test Driven Development

TDD, is a philosophy of first determining what you want your code to do and writing tests that your code will need to pass, and then writing the code.

TDD often takes place at the level of individual functions.

Test-driven development benefits you, the developer, in the following ways:

- It helps you fully understand the requirements for your function because you have to express them by writing test code. This also helps other people understand your code.
- It helps you relax when code doesn't work. This attitude will help you think more clearly when debugging.
- It helps you fearlessly refactor and improve your code when you need to, because the tests will let you know if you break anything.
- It helps you frequently experience the joy of working code, because getting a test to pass feels great.

#### To begin applying TDD to a function, follow the process detailed below:

- Determine inputs, outputs, and the function name. Put another way, what does the function do?
- Determine the happy path. The term happy path refers to the common scenario for using a function. So determining the happy path means ignoring any exceptions or odd cases (such as a missing parameter).
- Write the smallest test possible. For example, you may write a test that just checks whether or not the function exists.
- Write code to make the test pass. If you are testing for whether or not the function exists, you may just write the function.
- Repeat steps, updating the test to check for the next step on the road to the happy path. For example, the next test that you write maybe that it returns a value.
- Consider alternative cases and exceptions. For example, what should happen if a parameter is missing?

Benefits of testing:

- You know exactly what you expect to happen right from the start. This reduces debugging time as it allows you to develop in a more isolated environment
- Allows you to think through your logic beforehand and find any holes you may not have intended.

![Testing](images/testing-overview.png)


### Jest

- Jest is a unit testing library which allows us to perform unit tests.
- Jest comes out of the box with create-react-app.
- When bootstrapping a project with create-react-app, all of our tests must be included in the src directory and will not be compiled on build.

## Deployment



## Resources

- [Testing Overview](https://www.youtube.com/watch?v=u6QfIXgjwGQ)
- [Test Driven Development](https://www.youtube.com/watch?v=H4Hf3pji7Fw)
- [Intro to Jest](https://www.youtube.com/watch?v=FgnxcUQ5vho)
- []()
- []()
- []()



