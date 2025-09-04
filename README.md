# 💯 100 Days of Frontend Coding Challenge

Welcome to my **100 Days of Frontend Coding** journey! 🚀  
In this challenge, I aim to sharpen my frontend development skills by building something every day using modern styling preprocessors like **SCSS**, **SASS**, **LESS**, integrating **Bootstrap**, and adding interactivity using **JavaScript** when needed.

---

## 🧠 What’s the Plan?

For the next 100 days, I’ll be:
- Building small to medium frontend components or projects.
- Styling them using CSS preprocessors (**SCSS**, **SASS**, **Stylus** or **LESS**), and **Bootstrap**.
- Enhancing user interaction with **JavaScript** where needed.
- Pushing code daily and tracking my progress here.

---

## 🛠️ Tools & Technologies

- **HTML5**
- **CSS3**
- **SCSS / SASS / LESS / Stylus**
- **Bootstrap 5**
- **JavaScript (ES6+)**
- **VS Code** with helpful extensions (optional)

---

## 🧰 Installation & Setup

### 🔧 Install SCSS / SASS / LESS / Stylus (Globally via npm)

> Requires [Node.js](https://nodejs.org/) installed.

#### SCSS / SASS
```bash
npm install -g sass
```

To compile SCSS/SASS manually:
```bash
sass styles.scss styles.css
```

#### LESS
```bash
npm install -g less
```

To compile LESS manually:
```bash
lessc styles.less styles.css
```

#### Stylus
```bash
npm install -g stylus
```

To compile Stylus manually:
```bash
stylus -w styles.styl
```

### 🔧 Add Bootstrap to Your Project

You can include Bootstrap in two ways:

#### Option 1: CDN (Recommended for quick use)
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Add this in the `<head>` and before the closing `<body>` tag of your `index.html` respectively.

#### Option 2: Install via npm (for more control)
```bash
npm install bootstrap
```

Then import it in your SCSS:
```scss
@import "node_modules/bootstrap/scss/bootstrap";
```

---

## 💻 Using VS Code? Make It Easier!

If you're working in **Visual Studio Code**, use these extensions to compile automatically:

### ✅ For SCSS & SASS:
Use **Live Sass Compiler**  
📦 [Live Sass Compiler Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

- Click **"Watch Sass"** at the bottom of VS Code to start compiling.
- It will auto-generate CSS on save.

### ✅ For LESS:
Use **Easy LESS**  
📦 [Easy LESS Extension](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

- It will **automatically compile** `.less` files into `.css` on save.

---

## 📁 Project Structure

```
100-days-frontend/
│
├── 001 Sign Up/
│   ├── index.html
│   ├── styles.scss
│
├── 002 Random Password Generator/
│   ├── index.html
│   ├── styles.less
│
...
```

> ✅ Bootstrap can be included in any project folder using CDN links or local imports.

---

## 📅 Daily Log

A log will be maintained to track what I built each day, what I learned, and any challenges I faced. *(You can add a `log.md` or keep this in the README itself.)*

---

## 📌 Goals

- Improve understanding of CSS architecture, preprocessing, and utility-first frameworks.
- Write cleaner, reusable, and scalable styles using **SCSS**, **LESS**, and **Bootstrap**.
- Practice JavaScript in real-world UI scenarios.
- Build a solid frontend portfolio over 100 days.

---

## 🔁 How to Use

1. Clone this repo
2. Navigate to any day’s folder
3. Open with Live Server or any static server
4. If using SCSS/SASS or LESS:
   - Make sure the compiler is running (Live Sass or Easy LESS)
   - Edit your `.scss`, `.sass`, or `.less` files and save
   - The compiled `.css` file will be generated automatically
5. Include **Bootstrap** either via CDN or local import for quicker layout and component building

---

## 🤝 Contributions

If you’d like to contribute, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines.

---

## 📫 Let's Connect

- LinkedIn: [Yashi Singh](https://www.linkedin.com/in/yashi-singh-b4143a246)

---

**Let’s build awesome stuff one day at a time! 🔥**