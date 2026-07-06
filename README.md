# Contact CRM

A modern Contact CRM application built with **Next.js**, **Express.js**, and **MongoDB**. This application allows users to manage contacts with complete CRUD functionality, search, sorting, filtering, pagination, and statistics.

---

## 🚀 Live Features

- ✅ Create Contact
- ✅ View Contact Details
- ✅ Update Contact
- ✅ Delete Contact
- ✅ Search Contacts
- ✅ Sort Contacts (Newest / Oldest)
- ✅ Favorite Filter
- ✅ Pagination
- ✅ Contact Statistics
- ✅ Responsive UI

---

## 🛠️ Tech Stack

### Frontend

- Next.js (App Router)
- React.js
- Tailwind CSS
- React Toastify
- Gravity UI Icons

### Backend

- Express.js
- MongoDB
- Node.js

---





---

##  API Endpoints

### Contacts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/contacts` | Get all contacts |
| GET | `/api/contacts/:id` | Get single contact |
| POST | `/api/contacts` | Create contact |
| PATCH | `/api/contacts/:id` | Update contact |
| DELETE | `/api/contact/:id` | Delete contact |

---

##  Search

```
GET /api/contacts?search=john
```

Search by:

- First Name
- Last Name
- Email
- Phone

---




##  Statistics

Statistics page includes:

- Total Contacts
- Total Favorite Contacts
- Total Companies
- Contacts with Website

---



##  Author

Developed by Foysal Jaman

