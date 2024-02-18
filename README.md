Following are the user interface of chat application **Authentication**.

### Refer to the image below:

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dwekbzmuw/image/upload/v1708252053/Screenshot_24_a1nzsv.png" alt="registration-page" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

### Design Files

<details>
<summary>Registraion Route</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login](https://res.cloudinary.com/dwekbzmuw/image/upload/v1708252053/Screenshot_24_a1nzsv.png)

</details>

<details>
<summary>Login Route</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login Failure](https://assets.ccbp.in/frontend/react-js/ebank-login-failure-route-img.png))

</details>

<details>
<summary>Home Route</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://res.cloudinary.com/dwekbzmuw/image/upload/v1708252070/Screenshot_26_mfltx9.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- **Registration Route**


  - The new user will have to create account in order to access application 
  - If the user already have an account they can switch to login page by clicking Login/Sign up link 
  - If the user entered the username, email, passowrd which is already available in dataBase it throw error error like user credentials already exists please try another one?
  - When an authenticated user tries to access the Home Route, then the page should be navigated to the Home Route


- **Login Route**


  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an unauthenticated user tries to access the Home Route, then the page should be navigated to Login Route
  - When an authenticated user tries to access the Home Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route
  - When the **Logout** button is clicked, then the page should be navigated to the Login Route



</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `http://localhost:3000/user/login`

#### Method: `POST`

#### Request:

```json
{
  "user_id": 142420,
  "pin": 231225
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response:

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE0MjQyMCIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjM0MDk4NzYyfQ.ZUCC2J2zBjRhLVa1EI_4EnkZ-M-7hoVZoZFAu8GTmEQ"
}
```

#### Sample Failure Response:

```json
{
  "status_code": 401,
  "error_msg": "Invalid user credential"
}
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Home Route should consist of `/` in the URL path
- Login Route should consist of `/ebank/login` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`



</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory
