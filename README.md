# Restaurant Website with React

Independent frontend project developed for [UIU CDIP Frontend Mastery course](https://cdip.uiu.ac.bd/training-courses/frontend-mastery-javascript-react-next-js-typescript-vue-angular/) submission



[Live Demo] (https://menujs-restaurant.netlify.app/)
Login: Admin Password: 1234

## Project Goal
The goal of this project is to practice core frontend engineering skills:
- component-based UI development with React
- client-side routing and page flow
- shared state management with Context API
- responsive layout and styling with Tailwind CSS
- basic code quality checks with ESLint

## What I Implemented
- Single-page restaurant layout with sections: Home, Dishes, About, Reviews
- Smooth scrolling navigation using `react-scroll`
- Route-based pages using `react-router-dom` (`/`, `/login`, `/cart`)
- Client-side login flow with basic validation and session persistence (`localStorage`)
- Protected cart route (redirects to login when user is not authenticated)
- Cart system with Context API:
  - add item
  - increase/decrease quantity
  - remove item when quantity reaches zero
  - calculate total item count and total price

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- React Router DOM
- React Scroll
- ESLint 9

## Project Structure
- `src/components`: feature and page-level components
- `src/layout`: reusable UI blocks
- `src/hooks`: shared custom hooks
- `src/assets`: images and static assets

## Run Locally
1. Clone the repository:
   `git clone https://github.com/towfique-pranto/restaurant-project.git`
2. Install dependencies:
   `npm install`
3. Start the dev server:
   `npm run dev`
4. Run lint:
   `npm run lint`
5. Build for production:
   `npm run build`

## Current Limitations
- Authentication is frontend-only (no backend auth service)
- Menu items are hardcoded in the frontend
- No automated tests yet

## Next Improvements
- Integrate backend/API for auth and menu data
- Add unit and integration tests
- Improve accessibility (labels, keyboard navigation, focus handling)
- Add CI pipeline for lint/build checks
