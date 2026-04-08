# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features multi-language support, dark/light theme toggle, and smooth animations.


## 🌟 Live Demo

**🔗 [View Live Site](https://portfolio.kemaldev.com/de)**

Available in multiple languages:
- 🇹🇷 [Turkish](https://portfolio.kemaldev.com/tr)
- 🇺🇸 [English](https://portfolio.kemaldev.com/en) 
- 🇩🇪 [German](https://portfolio.kemaldev.com/de)

## ✨ Features

- 📱 **Fully Responsive Design** - Works on all devices
- 🌍 **Multi-language Support** - Turkish, English, German
- 🌙 **Dark/Light Theme** - Toggle between themes
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🎨 **Modern UI/UX** - Clean and professional design
- 📧 **Contact Form** - Get in touch functionality
- 🚀 **Fast Performance** - Optimized for speed

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/kemaltt/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── messages/
│   │   │   ├── tr.json
│   │   │   ├── en.json
│   │   │   └── de.json
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── LocaleToggle.tsx
│   └── globals.css
└── public/
    └── profile.jpg
```

## 🌍 Internationalization

The website supports three languages with dynamic content loading:

- **Turkish (tr)** - Default language
- **English (en)** - Secondary language  
- **German (de)** - Additional language

Language files are located in `src/app/[locale]/messages/` directory.

## 🎨 Customization

### Adding New Languages

1. Create a new JSON file in `src/app/[locale]/messages/`
2. Add the language code to the `validLocales` array in `layout.tsx`
3. Update the `LocaleToggle` component with the new language option

### Modifying Content

Edit the appropriate JSON files in the `messages` directory to update text content for each language.

### Styling

The project uses Tailwind CSS for styling. Customize the design by modifying the utility classes in the components.

## 📧 Contact

- **Email:** kemal@example.com
- **LinkedIn:** [linkedin.com/in/kemal38](https://www.linkedin.com/in/kemal38)
- **GitHub:** [github.com/kemaltt](https://github.com/kemaltt)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework used
- [Tailwind CSS](https://tailwindcss.com) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
