# Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Tokens are an open standard and are implemented across technology stacks making it simple to share tokens across different services. It can store any arbitrary payload information which are signed using secret key, so they can be validated later (similar to Flask sessions (but better)).

- What is the signature portion of the JWT? What does it do?
  It's a version of header and payload signed with secret key. The signature is used to verify the message wasn't changed along the way and in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, if a JWT is intercepted an attacker can see what's inside the payload, the header and payload are Base64Url encoded not encrypted, which means they are easily decoded by anyone with access to the JWT.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  To implement JWT authentication you need to install jsonwebtoken using npm, after that we would create a new token using `jwt.sign(payload(object to store as payload of token), secret-key(secret string used to 'sign' token), iwt-options(is optional object of settings for making the token))`.
  Example:
  `let token = jwt.sign({username}, SECRET_KEY);`
  `return res.json({token});`

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests are focused on isolated components of the code. They are usually faster since they test small, specific units of code.
  Integration tests are focused on the interaction between different components. They are slower due to the involvement of multiple components.
  End-to_end tests are focused on covering the entire application, simulating user scenarios. They are the slowest because they cover the entire system.

- What is a mock? What are some things you would mock?
  A mock is a simulated or fake object that is used in unit testing to replace dependencies or external objects that are out of control.
  It allows us to isolate the behavior of the object under test. Things that can be mocked are AJAX requests, reading/writing to files, and impure functions like Math.random.

- What is continuous integration?
  Continuous integration is a software development practice where small code changes are frequently merged into the main codebase.
  The goal of CI is to build better software by developing and testing in smaller increments.
  CI tools, such as Travis, automatically run tests whenever code changes are pushed. If the tests pass, the code can be deployed.
  If the tests fail, the code is rejected.

- What is an environment variable and what are they used for?
  Environment variables are ways of configuring parts of an application and its behavior. They are key-value pairs that can be set in the operating system or in the application's runtime environment.
  Environment variables are commonly used to store sensitive information like API keys or to configure the behavior of an application based on different environments (e.g.,m development, production)

- What is TDD? What are some benefits and drawbacks?
  TDD stands for Test-Driven Development. It is an approach to software development where test are written before writing the actual code.
  The process involves writing a test that is expected to fail, then writing the minimum amount of code to make the test pass, and finally refactoring the code.
  Some benefits of TDD include better code architecture, early bug detection, and improve test coverage.
  However, TDD can slow down development initially and requires practice to implement effectively.
- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?
  Some ways to decide which code to test:
  Code that is prone to errors, especially if it has complex conditions, calculation or error-handling logic.
  Testing code paths that have a high impact on the overall system.
  Special attention should be paid to code that interacts with external systems, databases, APIs or other components.
  Code that handles sensitive data or implements security-related features.

- What does `RETURNING` do in SQL? When would you use it?
  As an example we would take POST requests. When we create a new post request, we insert new data into our database but it would not be returning anything and we would need additionally use get request to make sure that correct data saved. To make our life easier we would use `RETURNING` so that we don't have to make get request, it would return requested data that is being selected after `RETURNING`.
  `INSERT INTO users (username, email, password) VALUES ('johnnnnnnny', 'test_+password', 'john@example.com') RETURNING username, email`

- What are some differences between Web Sockets and HTTP?
  HTTP:

  - Follows a request-response model. After the response is sent, the connection is closed.
  - It is a stateless protocol (each request from the client is independent, and the server doesn't maintain information about the client's previous requests).
  - Typically uses text-based formats like JSON or XML for data exchange.

  WebSocket:

  - Provides full-duplex communication, allowing both the client and the server to send data independently at any time. The connection is kept open.
  - Long-lived connection between the client and the server, allowing for continuous two-way communication without the need to re-establish the connection for each message.
  - It can handle various data formats, including binary data, which can be more efficient for certain types of real-time applications.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I think that Express is in some ways better for me than Flask. First of all, because it's a standard to use for building any kind of application (small and big), Flask is less flexible and is designed for building smaller projects (which is fine but if you want to build larger applications you would need to learn Django and I think it's inconvenient). Another thing that I prefer with flask is a code structure, I think it's much cleaner and easier to understand for both author of the code and other developers.
