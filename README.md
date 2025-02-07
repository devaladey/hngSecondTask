# HNG12 Public API

## Project Overview

This is a simple public API developed for HNG12, returning essential details in JSON format, including:

- The registered email address.
- The current datetime in ISO 8601 format (UTC).
- The GitHub repository URL containing the project code.

The API is built using **Node.js with Express.js** and deployed for public access.

## Technology Stack

- **Backend:** Node.js, Express.js
- **Deployment:** Render
- **Version Control:** GitHub
- **CORS Handling:** Enabled with Express CORS middleware

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Git](https://git-scm.com/)

### Installation & Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devaladey/hngSecondTask
   Install dependencies:
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

4. **Test the API locally:**
   Open your browser or use Postman to visit:
   ```
   http://localhost:3000/
   ```

---

## API Documentation

### Base URL (Deployed API Endpoint)

```
https://hngsecondtask.onrender.com/
```

### Endpoint:

#### **GET /api/classify-number?number=42**

Returns essential details in JSON format.

#### **Request Format:**

No request parameters required.

#### **Response Format (`200 OK`):**

```json
{
  "number": "371",
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "armstrong",
    "odd"
  ],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Example Usage

#### **Using `curl` in Terminal:**

```bash
curl -X GET https://hngsecondtask.onrender.com
```

#### **Using JavaScript (Fetch API):**

```js
fetch("https://hngsecondtask.onrender.com")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

---

## Deployment

The API is deployed on **Render** and is publicly accessible.

- **Live URL:** [https://hngsecondtask.onrender.com](https://hngsecondtask.onrender.com)
- **Response Time:** < 500ms

---

## Related Link

Interested in **Node.js developers**? Visit:
👉 [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

### License

This project is open-source and available under the MIT License.

---

### Author

Developed by **[Oyedokun Oluwatobiloba Remi]**
```