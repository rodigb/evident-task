# Evident Task – Guess the Album Cover

This project is a React application built as part of the Evident Task.  
It is a quiz game where users try to guess album covers, track their score, and view results in a summary screen.

You can view the initial Figma mockups and designs here:  
[Figma Design File](https://www.figma.com/design/cxT3eXc0qTE1CKq53atPpO/Evident-Task?node-id=0-1&t=6tfgx69ZUhcvv4zA-1)

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node) or [Yarn](https://yarnpkg.com/)

---

1. **Clone the repository**
   To clone the repository, you can copy and paste the repo url from github to your IDE.
   In this case I used Visual Studio Code

   Or you can head to your IDE's terminal and type the following:
   
   ```
   git clone <repo-url>
   cd evident-task
2. **Install the dependencies**
   ```
   npm install
4. **Run the application**
   ```
   npm start
Open your browser and head to http://localhost:3000

## File Structure

```
/evident-task
├── src/
│   ├── components/   # Reusable UI components
│   ├── features/     # Feature modules (Quiz, Register, etc.)
│   ├── hooks/        # Custom React hooks
│   ├── theme/        # MUI theme overrides & styling
│   └── App.tsx       # Root component
├── public/           # Static assets
├── package.json      # Dependencies & scripts
└── README.md         # Project documentation
```


 ## Tools

React (with TypeScript)
Material UI (MUI) for UI components and styling
Redux Toolkit for state management

## Testing

Due to the small timeframe, testing was not done. However, JEST would have been used to test the endpoints, and components.
