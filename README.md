# 🔍 GitHub User Search

A clean and responsive web application to search for GitHub users and display their public profile information and repositories using the **GitHub REST API**.

---

## 🌐 Live Demo

👉 **Live Project:**  
https://bhavanish-mantri.github.io/Search-github-profile/

---

## 🚀 Features

- 🔎 Search any GitHub username
- 👤 Displays user avatar, username, followers & following
- 📦 Shows up to 6 public repositories
- ⭐ Repository details: stars, forks, and size
- 🎨 Modern dark UI with vertical layout

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **GitHub REST API** 

---

## 📁 Project Structure
```
project/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
 └── github_logo.png
```

---

## ⚙️ How It Works

1. Enter a GitHub username in the search bar
2. The app fetches user data from: `https://api.github.com/users/{username}`
3. Repository data is fetched from: `https://api.github.com/users/{username}/repos`
4. Results are rendered dynamically without page reload

---

## 🧪 Error Handling

- Empty input → alert message shown
- Invalid username → UI resets with **Not Found**
- Users with no repositories → friendly message displayed
- API errors handled gracefully

---

## 📱 Responsive Design

- Mobile-friendly vertical layout
- Uses `max-width` instead of fixed widths
- Optimized for both desktop and small screens

---

## 📌 Future Improvements

- Add a loading spinner during API calls
- Implement pagination for repositories
- Add debounced search input to reduce API calls
- Include a direct link to the user’s GitHub profile

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## ⭐ Acknowledgements

- GitHub REST API
