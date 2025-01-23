# Barber Shop Website

## Overview
This project is a fully functional website for a barber shop, providing an engaging online presence with features such as an About page, a booking system, and a dashboard for managing appointments. The frontend is built with React, and the backend uses Python Flask, ensuring a seamless user experience and efficient management of client data.

---

## Features

### 1. **About Page**
- Highlights the barber shop's story, mission, and values.
- Includes photos and descriptions of the shop.
- Displays social media links with emojis for a modern touch.

### 2. **Booking System**
- Allows customers to book appointments with fields for:
  - Name
  - Email
  - Phone Number
  - Service
  - Age
  - Date and Time
- Booking details are sent to the backend for storage and management.

### 3. **Dashboard**
- Enables shop administrators to:
  - View all appointments.
  - Manage client bookings.
  - Add, update, or delete records.

---

## Technology Stack

### **Frontend**
- React: For building dynamic and responsive user interfaces.
- CSS: For styling components and ensuring a modern design.

### **Backend**
- Python Flask: Handles server-side logic and APIs.
- SQLite: A lightweight database for storing appointment details.

### **Tools and Libraries**
- Flask-Mail: For sending email notifications.
- React Icons: For adding icons like 📧 (email).

---

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/) for running the frontend.
- Install [Python 3.7+](https://www.python.org/) for the backend.
- Install `pipenv` for managing Python dependencies.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/barber-shop-website.git
   cd barber-shop-website
   ```

2. **Set Up the Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```
   
3. **Set Up the Backend**:
   ```bash
   cd backend
   pipenv install
   pipenv shell
   flask run
   ```

4. **Environment Variables**:
   - Create a `.env` file in the `backend` directory:
     ```
     FLASK_APP=app.py
     FLASK_ENV=development
     MAIL_SERVER=smtp.gmail.com
     MAIL_PORT=587
     MAIL_USERNAME=your-email@gmail.com
     MAIL_PASSWORD=your-password
     MAIL_USE_TLS=True
     ```

5. **Access the Website**:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

---

---

## Future Enhancements
- Add authentication for admin and client accounts.
- Implement payment integration for booking deposits.
- Expand dashboard with analytics (e.g., most popular services, peak booking times).
- Add a testimonials page with client reviews.
- Enable live chat for customer inquiries.

---

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
- **Email**: barbershop@example.com 📧
- **Instagram**: [@barbershop](https://instagram.com)

We hope you enjoy this project as much as we enjoyed building it!
