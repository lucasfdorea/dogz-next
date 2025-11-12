
# Dogz Next - Project Documentation

## Project Overview

Dogz Next is a social media platform for dogs, developed with Next.js. It allows users to create an account, post pictures of their dogs, and interact with other users' posts.

## Technologies

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [CSS Modules](https://github.com/css-modules/css-modules)
- **Linting:** [ESLint](https://eslint.org/)

## Project Structure

The project follows the standard Next.js `app` directory structure.

- **`/src/app`**: Contains the core application, with pages and layouts.
  - **`/src/app/login`**: Handles user authentication.
  - **`/src/app/conta`**: User account page.
  - **`/src/app/foto`**: Page for individual photos.
  - **`/src/app/perfil`**: User profile page.
- **`/src/components`**: Reusable React components.
  - **`header.tsx`**: The main header of the application.
  - **`footer.tsx`**: The main footer of the application.
  - **`feed`**: Components related to the photo feed.
- **`/src/actions`**: Server-side actions, like fetching data.
- **`/public`**: Static assets, like images and SVGs.

## Getting Started

1. **Installation:**

   ```bash
   npm install
   ```

2. **Running the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components

### Header (`/src/components/header.tsx`)

The header component displays the logo and the main navigation. It shows different links depending on whether the user is logged in or not.

### Footer (`/src/components/footer.tsx`)

The footer component displays the footer text and the Dogs logo.

### Feed (`/src/components/feed/feed.tsx`)

The feed component is responsible for displaying the photos. It uses the `FeedPhotos` component to render the list of photos.

## API Endpoints

The application fetches data from the [Dogs API](https://dogsapi.origamid.dev/json).

- **`photosGet()`**: Fetches a list of photos to display on the feed.
  - **File:** `/src/actions/photos-get.ts`
  - **Endpoint:** `https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=1&_user=0`
