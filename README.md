# Angular Portfolio

A modern, responsive portfolio website built with Angular 20, featuring a clean design and smooth animations.

## 🚀 Features

- **Modern Angular 20** with standalone components
- **Responsive Design** - Works on all device sizes
- **TypeScript** for type safety
- **SCSS** for advanced styling
- **Angular Material** for UI components
- **Lucide Icons** for beautiful iconography
- **ESLint** for code quality
- **Server-Side Rendering (SSR)** ready

## 🛠️ Technologies Used

- Angular 20
- TypeScript
- SCSS
- Angular Material
- Lucide Angular
- RxJS
- ESLint

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/JoshuaShalim/angular-portfolio.git
   cd angular-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/angular-portfolio/` directory.

## 🚀 Deployment

This project is configured for deployment on multiple platforms:

### GitHub Pages
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the master branch.

1. Go to your repository settings
2. Navigate to Pages section
3. Set source to "GitHub Actions"
4. Push to master branch to trigger deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. The `netlify.toml` configuration file will handle the build settings
3. Deploy automatically on every push

### Vercel
1. Connect your GitHub repository to Vercel
2. The `vercel.json` configuration file will handle the deployment
3. Deploy automatically on every push

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint

## 🧪 Testing

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner:

```bash
npm test
```

## 📧 Contact

Joshua Shalim - [joshuashalim15@gmail.com](mailto:joshuashalim15@gmail.com)

Project Link: [https://github.com/JoshuaShalim/angular-portfolio](https://github.com/JoshuaShalim/angular-portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.*
