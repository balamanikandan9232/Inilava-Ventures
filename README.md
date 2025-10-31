<div align="center">
  <img src="client/public/images/C-Logo.png" alt="Inilava Ventures Logo" width="200"/>
</div>

# Inilava Ventures - MERN Stack Landing Page

A fully responsive landing page for Inilava India Ventures, built using React, Node.js, Express, and MongoDB. The project offers modern UI, seamless quote request handling, and secure backend integration for real-world business scenarios.

---

## 🚀 Features

- **Responsive UI:** Built with React and styled-components for best-in-class user experience on all devices.
- **Animated Transitions:** Image sliding and text effects for engaging presentation.
- **Quote Request Form:** Integrates frontend form with backend (Node.js + Express) email delivery (Nodemailer).
- **Scalable Architecture:** Uses MongoDB for data storage and efficient Express routing.
- **Clean Structure:** Follows best practices for component design and API organization.
- **Easy Deployment:** Ready for Vercel (frontend) and Render/Railway (backend).

---

## 🛠️ Tech Stack

- **Frontend:** React, styled-components, BoxIcons, EmailJS/Nodemailer, CSS Modules
- **Backend:** Node.js, Express, MongoDB, Nodemailer
- **Deployment:** Vercel, Render/Railway, GitHub Actions (CI/CD optional)
- **Utilities:** dotenv for environment management, Postman for API testing

---

## 📂 Project Structure

## 🎯 Getting Started

### Frontend
cd frontend
npm install
npm run dev # For local development
npm run build # For production build (Vercel runs this automatically)

### Backend
cd backend
npm install
npm run dev # For local development
npm start # For production (Render/Railway)


---

## 📧 Email Integration

- Uses Nodemailer on the backend for sending quote request emails.
- Configure your email credentials in `backend/.env` for secure delivery.

---

## 💡 Environment Variables

- Frontend: `.env.local` (React API URL, EmailJS keys if used on frontend only)
- Backend: `.env` (email credentials, MongoDB URI, CORS settings)

---

## 🎨 Customization

- Update styles easily in `frontend/src/styles/` or your preferred CSS approach.
- Modify form fields and animations in `components/` for unique business needs.

---

## 🚢 Deployment

| Platform  | Folder        | Command             | Notes                  |
|-----------|--------------|---------------------|------------------------|
| Vercel    | `frontend/`  | `npm run build`     | Autodetects React app  |
| Render    | `backend/`   | `npm start`         | Set .env variables     |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/xyz`
3. Commit changes: `git commit -m "Add feature"`
4. Open a Pull Request

---

## 👨‍💼 Author

**Bala Manikandan P**  
Full Stack Developer (MERN)  
📧 balamanikandan9232@gmail.com  
[LinkedIn](https://www.linkedin.com/in/bala-manikandann/)  
[Portfolio](https://bala-portfolio-p.vercel.app/)  
[GitHub](https://github.com/balamanikandan9232)

---

## 📞 Support

Have questions?  
Open an issue or email [balamanikandan9232@gmail.com](mailto:balamanikandan9232@gmail.com)

---

**Made with ❤️ for Inilava India Ventures**

