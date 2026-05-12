# Project Description

Browser Extensions Hub is a React-based web application that serves as an informational hub for browser extensions.

The project presents and describes the functionality of several extensions, helping users quickly understand their purpose and navigate to the Chrome Web Store for installation.

The focus is on clean UI structure, routing, and smooth navigation between extension pages.

---

## Production: https://browser-extensions-hub.vercel.app/

## Hoisting: https://vercel.com/

---

## This React app displays information to users of the following extensions.

- Safe Auto Clicker: https://chromewebstore.google.com/detail/mgadnfjigmdiljhffhjlopjfibddkneh
- To-Do List: https://chromewebstore.google.com/detail/mibfplaelemmjmeljhlfnhdmmajgdeio

---

## Technologies Used

- **React** (components)
- **React Router v6** (routing)
- **CSS**

---

## Project structure

```
src/
  assets/
      images/
         autoclicker (images)
         todo (images)
  components
    auto-clicker/
         AutoClicker.css
         AutoClicker.jsx
    error/
         Error404.css
         Error404.jsx
    footer/
         contact/
            Contact.css
            Contact.jsx
         donate/
            Donate.css
            Donate.jsx
         privacy-policy/
            PrivacyPolicy.css
            PrivacyPolicy.jsx
         terms/
            TermsOfService.css
            TermsOfService.jsx
       Footer.css
       Footer.jsx
    home/
         Home.css
         Home.jsx
    to-do/
         ToDo.css
         ToDo.jsx
    data/
         auto-clicker-data.js
         footer-data.js
         general-data.js
         to-do-data.js
 App.jsx (Routing)
 index.css
 index.js


```

---

## Routing

- `/` — home page.
- `/auto-clicker` — auto-clicker page.
- `/to-do` — to-do list page.
- `/footer` — footer.
- `/terms-of-service` — terms of service
- `/privacy-policy` — privacy policy
- `/contact` — contact information
- `/donate` — donation
- `/*` — error page (page not found)

---

## Stylization

- **CSS** and media queries are used.
- Each component and page has its own .css file.

## Project launch

```bash
# Install dependencies
npm install

# Start the dev server
npm run start

# Build the project
npm run build
```
