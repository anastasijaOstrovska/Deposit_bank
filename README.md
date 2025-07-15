# Bank Deposit System

This project is a simple banking deposit system with an Angular frontend, Quarkus backend, and PostgreSQL database.
---

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v22.17.0 version)
- **Angular CLI** (20.1.0 version)
- **Quarkus** (3.24.3 version)
- **Java** ( 21 version)
- **Maven**
- **PostgreSQL** (local)

## Project creation
  1. Install Node.js
  2. Install Angular CLI via npm:
  ```bash
  npm install -g @angular/cli
  ```
  3. Create Quarkus project with Maven builder, as used for small projects

    Use the official Quarkus project initializer: https://code.quarkus.io/
  
  5. Install PostgreSql and pgAgent4.

## Run project
To run the full application stack locally, follow these steps:

1. **Start the PostgreSQL Database**
   - Ensure PostgreSQL is running on port `5432`.
   - Use **pgAdmin** or any other database client to start the service.
   - Make sure the table `deposit_requests` is created in your database.

2. **Build and Run the Backend (Quarkus)**
   - Navigate to the backend project directory.
   - Use Maven to build and run the application:
     ```bash
     mvn clean install
     mvn quarkus:dev
     ```
   - The backend will be available at [http://localhost:8080](http://localhost:8080).

3. **Run the Frontend (Angular)**
   - Navigate to the frontend project directory.
   - Start the Angular development server:
     ```bash
     ng serve
     ```
   - The frontend will be available at [http://localhost:4200](http://localhost:4200).
## Architecture Overview

- **Frontend**: Angular application running on **port `4200`**
- **Backend**: Quarkus REST API running on **port `8080`**
- **Database**: PostgreSQL running on **port `5432`**

The `application.properties` file in the Quarkus backend is configured with proper **CORS settings** to allow seamless communication between the Angular frontend and the Quarkus backend during development.


---
## Implemented:

All deposit requests from the database are available at **`http://localhost:4200/all`** 
<img width="1899" height="637" alt="image" src="https://github.com/user-attachments/assets/50aa4f72-d9a3-491c-9d90-ae40ede557cb" />

A new request can be created at **`http://localhost:4200/new`**
<img width="1893" height="882" alt="image" src="https://github.com/user-attachments/assets/0784f239-d179-4776-a434-e5e8028574a3" />

Helpful form rules are shown to guide users and improve usability:
<img width="1088" height="387" alt="image" src="https://github.com/user-attachments/assets/fefbb551-092b-4722-941c-6f987772251e" />

Form errors are displayed when submitting incorrect or incomplete input:
<img width="777" height="291" alt="image" src="https://github.com/user-attachments/assets/d9e77c24-7700-463d-b9fc-4056e27c40c2" />

---
## Project File Structure

### Backend

Located in `bank_deposit-system/src/main/java/org.acme/`:

- **`Deposit_request.java`**  
  Class representing a deposit request with fields such as request ID, customer ID, amount, currency, and term.

- **Resource class (e.g., `GreetingResource.java`)**  
  Contains RESTful endpoints using `@GET` and `@POST` to handle deposit requests.

Located in `bank_deposit-system/src/main/resources/`:

- **`application.properties`**  
  Contains configuration for:
  - CORS settings to allow Angular frontend access
  - PostgreSQL database connection (URL, username, password)

Located at project root:

- **`pom.xml`**  
  Maven configuration file defining:
  - Project dependencies (Quarkus extensions, PostgreSQL JDBC, RESTEasy, etc.)
  - Build settings and plugins for packaging the app (JAR or native image)

---

### Frontend

Located in `deposit-front/src/`:

- **`app`**  
  Root component defining the structure and layout.

- **`app/header/`**  
  Contains a reusable header component used across pages.

- **`app/pages/all-requests/`**  
  Components responsible for fetching and displaying all deposit requests in a table format.

- **`app/pages/new-request/`**  
  Contains the form to create and submit a new deposit request.

- Includes related **HTML**, **TypeScript**, and **CSS** files to style and control each component.




   
 
