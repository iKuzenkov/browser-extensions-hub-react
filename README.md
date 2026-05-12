# Project Description

---

## Production: https://browser-extensions-hub.vercel.app/

## Hoisting: https://vercel.com/

---

## This React app displays information to users of the following extensions.

- Safe Auto Clicker: https://chromewebstore.google.com/detail/mgadnfjigmdiljhffhjlopjfibddkneh?utm_source=item-share-cb
- To-Do List: https://chromewebstore.google.com/detail/mibfplaelemmjmeljhlfnhdmmajgdeio?utm_source=item-share-cb

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
npm start

# Build the project
npm run build
```
