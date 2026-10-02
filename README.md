# Shopping List Application

App with search tool and web storage functionality written in React and TypeScript. The app allows users to add items to their shopping list, remove items from the shopping list, search for items on the list, and save their list to local storage so it persists between sessions.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.1.0-orange)

## Features

- Add new grocery items
- Mark items as purchased (checkbox with bold strikethrough styling)
- Delete individual items
- Real-time search/filter functionality
- Persistent storage using `localStorage`
- Empty state handling
- Responsive and accessible UI with ARIA labels
- Uses React Icons (`react-icons/fa`) for intuitive buttons

## App
![Screenshot](/assets/shopping.png)
A clean, responsive, and fully functional application built with **React** and **TypeScript**.


## Components Overview

| Component     | Purpose |
|---------------|--------|
| `App`         | Main component managing state (`items`, `newItem`, `search`) and localStorage persistence |
| `Header`      | Displays the title (default: "Grocery List") |
| `Add`         | Form to add new items with auto-focus and submit button |
| `SearchIt`    | Search input that filters items in real time |
| `Content`     | Conditionally renders item list or empty message |
| `ItemList`    | Maps over filtered items and renders each as a `LineItem` |
| `LineItem`    | Individual list item with checkbox, label (double-click to toggle), and delete button |
| `Footer`      | Shows total number of items with correct pluralization |

## State Management

- `items`: Array of objects `{ id, checked, item }` stored in and retrieved from `localStorage`
- `newItem`: Controlled input value for adding new items
- `search`: Controlled search term for filtering

```javascript
useEffect(() => {
  localStorage.setItem('shoppinglist', JSON.stringify(items));
}, [items]);
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tpreisig/shopping-list.git
   ```
2. Ensure your are in the project root directory

3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run start
   ```
   The app will be available at http://localhost:3000.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Maintained by tpreisig - feel free to reach out!
