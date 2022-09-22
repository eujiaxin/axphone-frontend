# axphone-frontend

[React framework](https://reactjs.org/) has been used to create the interface of **AxPhone**. Since a large database is not required, the default SQL engine [SQLite](https://www.sqlite.org/index.html) has been used to store all details on the contacts saved.

## Website navigation
### Default Home Page (`/`)
The main page displays all the current contacts. Users are able to edit and delete any contacts displayed by clicking on the provided buttons.
![image](https://user-images.githubusercontent.com/42997224/191855156-d8731e7c-47ec-4447-93f5-97c5b48ae729.png)

Clicking on the edit button prompts a modal that allows users to update the contact. The input fields contain placeholders that indicate the original details of the contact.
![image](https://user-images.githubusercontent.com/42997224/191855301-5c0d2339-2b22-4234-a02e-7b3daacdd786.png)


### Create New Contact Page (`/create-contact`)
Users can click on the top right navbar link to fill up details and create a new contact. Clicking on the "Create" button will redirect user back to the homepage with the updated contacts list displayed.
![image](https://user-images.githubusercontent.com/42997224/191855636-5de26a63-9c8f-42a8-bae1-1d9934a18fb4.png)


## Making requests to the [Backend API](https://github.com/heheheejin/axphone-backend)
AxPhone is a website that stores contacts information,and allows users to create, read, update and delete (CRUD) relevant contacts. The following snippet from `API.js` represents the request header sent to the backend API endpoint using axios:
```js
...
export default axios.create({
    baseURL: API_ENDPOINT_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

```
