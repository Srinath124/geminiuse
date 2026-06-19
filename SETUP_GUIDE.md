# Todo Application - ESLint & CI Setup

## Overview
This project has been set up with ESLint for linting and Prettier for code formatting, along with GitHub Actions CI/CD workflows.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       ├── ci.yml          # Main CI workflow (lint, build, test)
│       └── format.yml      # Auto-format workflow
├── .prettierrc.json        # Prettier configuration
├── .prettierignore         # Files to ignore for Prettier
│
├── client/
│   ├── .eslintrc.json      # ESLint config for React
│   ├── .eslintignore       # ESLint ignore patterns
│   ├── package.json        # Client scripts: lint, format
│   └── src/
│
└── server/
    ├── eslint.config.js    # ESLint flat config (v10+)
    ├── package.json        # Server scripts: lint, format
    ├── index.js
    └── routes/
```

## Available Scripts

### Client (`client/` directory)

```bash
npm run lint          # Run ESLint checks
npm run lint:fix      # Fix ESLint issues automatically
npm run format        # Format code with Prettier
npm run format:check  # Check Prettier formatting
npm start             # Start development server
npm run build         # Build for production
npm test              # Run tests
```

### Server (`server/` directory)

```bash
npm run lint          # Run ESLint checks
npm run lint:fix      # Fix ESLint issues automatically
npm run format        # Format code with Prettier
npm run format:check  # Check Prettier formatting
npm start             # Start Node.js server
npm run dev           # Start with watch mode (nodemon)
```

## ESLint Configuration

### Client (.eslintrc.json)
- Extends: `react-app` configuration
- Includes React and Jest rules
- Configured for React Hooks best practices

### Server (eslint.config.js)
- Uses ESLint v10+ flat config format
- Node.js environment rules
- Enforces single quotes and semicolons

## Prettier Configuration (.prettierrc.json)
- Print width: 100 characters
- Tab width: 2 spaces
- Single quotes
- Trailing commas (ES5)
- Semicolons required
- Arrow function parentheses always

## GitHub Actions Workflows

### CI Workflow (.github/workflows/ci.yml)
**Triggers:** push to main/develop, pull requests

**Jobs:**
1. **lint-and-test** (Node 18.x, 20.x)
   - Install dependencies
   - ESLint checks
   - Prettier format checks
   - Build verification

2. **unit-tests** (Node 18.x, 20.x)
   - Run client tests
   - Server syntax check

### Format Workflow (.github/workflows/format.yml)
**Trigger:** Manual workflow dispatch

**Actions:**
- Auto-fix ESLint issues
- Format code with Prettier
- Auto-commit changes

## Setup & Installation

```bash
# Install root dependencies (if needed)
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

## Running Locally

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

**Terminal 3 - Linting (optional):**
```bash
# Watch for changes and lint
cd client
npm run lint
```

## CI/CD Pipeline

The CI pipeline runs on every push/PR:
1. Checks code with ESLint
2. Verifies Prettier formatting
3. Builds both client and server
4. Runs all tests

To use the auto-format workflow:
1. Push changes to a feature branch
2. Go to GitHub Actions → Format workflow
3. Click "Run workflow" → Select branch → Run

## Fixing Code Issues

### Automatically fix issues:
```bash
npm run lint:fix   # ESLint
npm run format     # Prettier
```

### Check issues without fixing:
```bash
npm run lint           # ESLint check
npm run format:check   # Prettier check
```

## Dependencies Added

### Client
- `eslint`: Code linting
- `eslint-plugin-react-hooks`: React Hooks linting
- `prettier`: Code formatting

### Server
- `eslint`: Code linting
- `prettier`: Code formatting
- `@eslint/js`: ESLint flat config support

## Notes

- Both projects follow the same code style rules
- ESLint is configured to warn on unused variables (allowing prefix `_`)
- Prettier ensures consistent formatting across the codebase
- GitHub Actions runs on Node 18.x and 20.x for compatibility testing
