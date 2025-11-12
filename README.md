## **Movie App**

A modern, responsive movie discovery application built with React and Vite, allowing users to explore, search, and view detailed information about their favorite movies with an elegant, fast-loading interface.

---

##  Features

🎥 **Movie Discovery** – Browse through a curated collection of movies fetched dynamically from an API.

🔍 **Search Functionality** – Instantly find movies by title using a live search bar.

🎞️ **Detailed Movie Cards** – View key details such as title, release date, and rating at a glance.

📱 **Responsive Design** – Optimized layout for both desktop and mobile screens.

⚡ **Fast Rendering** – Built with Vite for ultra-fast builds and reloads.

🎨 **Modern UI** – Styled beautifully with Tailwind CSS and DaisyUI.

🚫 **Error & Loading States** – Smooth user experience even when data is loading or fails to fetch.

💾 **Dynamic Rendering** – Efficiently maps fetched movie data to individual movie cards.

---

## 🛠️ Technologies Used

* **React** – Component-based UI library for building dynamic interfaces
* **React Hooks** – For managing state and lifecycle (useState, useEffect)
* **Tailwind CSS and DaisyUI** – Utility-first CSS framework for styling
* **Vite** – Lightning-fast development server and build tool
* **Movie API** – Provides real-time movie data
* **Vercel** – For reliable deployment

---


## 🧱 Project Structure

```
MovieApp/
│
├── node_modules/             
├── public/                   
│
├── src/                      
│   ├── assets/                
│   ├── components/            
│   │   ├── ErrorMessage.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetailsModel.jsx
│   │   ├── SearchBar.jsx
│   │   └── Spinner.jsx
│   │
│   ├── App.jsx                
│   ├── index.css              
│   └── main.jsx              
│
├── .env                      
├── .gitignore                 
├── eslint.config.js           
├── index.html                
├── package.json               
├── package-lock.json        
├── README.md               
└── vite.config.js             
```

---

## 🎮 Usage

### 🏠 Browsing Movies

* On load, the home page displays a grid of trending or featured movies.
* Each movie card shows the poster, title, and release date.

### 🔍 Searching for Movies

* Use the search bar to look up movies by title.
* The search results update instantly and are case-insensitive.

### 🎞️ Viewing Movie Details

* Click on a movie card to open a detailed view showing:

  * Overview / description
  * Rating
  * Release year
  * Poster image

### 🧾 Error & Loading States

* While data is being fetched, a loader animation is displayed.
* If an error occurs (e.g., API unavailable), an error message appears gracefully.

---

## 🗂️ Data Format

Movie data is fetched dynamically, but if using local mock data, it follows this format:

```json
{
  "id": 1,
  "title": "Inception",
  "poster_path": "https://image.tmdb.org/t/p/inception.jpg",
  "release_date": "2010-07-16",
  "overview": "A skilled thief leads a team into dreams to steal secrets."
}
```

---

## 🧩 Key Components

### **Header**

* Contains the app title and navigation.
* Houses the search bar for quick movie look-up.

### **MovieCard**

* Displays movie poster, title, and release info.
* Can trigger modal or expanded details view when clicked.

### **MovieList**

* Maps over fetched movie data and renders multiple `MovieCard` components.
* Handles empty or error states gracefully.

### **Loader**

* Provides visual feedback during data fetching.

### **ErrorMessage**

* Displays a friendly error message when API calls fail or no results are found.

---

## 🎨 Customization

### Styling

This app uses **Tailwind CSS and DaisyUI** for rapid, clean styling.
You can customize the look and feel by:

* Editing className attributes within components.
* Modifying global styles in `index.css`.
* Adding Tailwind and daisyui configurations or themes as needed.

### Adding More Features

You can extend the app by:

* Implementing movie filtering by genre or rating.
* Adding pagination or infinite scroll.
* Integrating user favorites or bookmarks (using localStorage).

---


## 🧭 Browser Support

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)

---


## 💌 Acknowledgments

🎞️ Movie data from The Movie Database (TMDB) API

⚡ Built with Vite & React

🌍 Deployed on Vercel

---

## 🌟 Project Live

🔗 **Live Demo:** [MovieApp](https://movie-app-week4.vercel.app)

👩‍💻 **Developed by:** Nyipoji Jibarang


