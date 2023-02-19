# [StudentAPI]()

1. Create a Firestore Database and insert Student dummy data.
2. Create a Node server and listen to the Firestore Database.
3. Create a Basic React App to show the received data from the Node.
4.Provided the data in an API 

## API

1. Fetch all student using GET method
    ```
    127.0.0.1:4000/api/student/all
    ```

2. Fetch single student using GET method
    ```
    127.0.0.1:4000/api/student/:id
    ```

3. Create student using POST method
   Use data :
    ```
    {
    "id": 4,
    "name": "Test PQR",
    "age": 22,
    "email" : "testing@gmail.com",
    "phone": 1112244455
    }
    ```

4. Update student using PUT method
   Use data :
    ```
    {
    "id": 4,
    "name": "Test PQR",
    "age": 22,
    "email" : "testing@gmail.com",
    "phone": 1112244455
    }
    ```

    ```
    127.0.0.1:4000/api/student/:id
    ```

5. Delete single student using DELETE method
   ```
   127.0.0.1:4000/api/student/:id
   ```

