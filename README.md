# GitHub Explorer Mobile App

This project is a GitHub Explorer Mobile Application built using **React Native**. The app allows users to search for GitHub repositories, view repository details, and manage a list of favorite repositories. It uses **Redux Toolkit** for state management and **EAS Build** for production builds.

---

## Features

1. **Search Repositories:**
   - Search for GitHub repositories using the GitHub API.
   - Display repository information such as name, owner, description, stars, forks, and language.

2. **Favorites Management:**
   - Add repositories to favorites.
   - Remove repositories from favorites.
   - Favorites persist using Redux state management.

3. **Repository Details Page:**
   - Click on a repository card to view detailed information about the repository.

4. **Bottom Tab Navigation:**
   - Navigate between the "Search", "Favorites", "Profile", and "Settings" tabs.

---

## Installation

### Prerequisites
- Node.js installed
- Expo CLI installed
- GitHub Personal Access Token (if required for API requests)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kuldeep1603/gitHub_explorer_app
   cd https://github.com/kuldeep1603/gitHub_explorer_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   expo start
   ```

4. Open the app:
   - Use an Android/iOS emulator, or
   - Scan the QR code using the Expo Go app on your mobile device.

---


## File Structure

```
root
├── src
│   ├── components
│   │   ├── RepositoryCard.js
│   │   └── RepositoryDeatils.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── Fav.js
│   │   └── Profile.js
        └── settinfs.js
│   ├── redux
│   │   ├── favoritesSlice.js
│   │   └── store.js
│   └── API
│       └── githubApi.js
├── assets
├── App.js
└── eas.json
```



