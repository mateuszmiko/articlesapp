# articlesapp

Add .env file with API_KEY before you starting app.

## Project setup

```
npm install
```

### Compiles and minifies for production

```
npm run build
```

### To run test

```
npm test
```

### Lints and fixes files

```
npm run lint
```

## Packages

```bash
- typescript v4.2.4
- babel v7.13.16
- webpack v5.34.0
- webpack-cli v4.6.0
- react v17.0.2
- redux v4.0.5
- react-router v7.2.3
- axios v0.21.1
- lodash.isempty v4.4.0
- lodash.isequal v4.5.0
- eslint v7.24.0
- prettier v2.2.1
- stylelint v13.12.0
- husky v4.3.0
- dotenv v8.2.0
```

## Project structure

```
dist/
src/
|- __mocks__ ________________________________ # Mocks for tests
|- actions __________________________________ # Actions
|- components/ ______________________________ # Component
|    |- App _________________________________ # Routers in App
|    |- Articles ____________________________ # Main view with articles
|    |- ArticleView _________________________ # View with article by id
|    |- PageLayout __ź
|    |- SharedComponents ____________________ # Shared components
|    |- Utils _______________________________ # Utils component
|- reducers/
|  |- articles/
|     |- filtersSettings.ts _________________ # FiltersSettings reducer
|     |- listOfArticles.ts __________________ # FiltersSettings reducer
|     |- index.ts ___________________________ # Combine reducers
|  |- index.ts ______________________________ # Articles reducer
|- selectors/ _______________________________ # DSelectros in Application
|- store/
|    |- store.ts ____________________________ # Redux store
|- styles/
|  |- main.scss _____________________________ # File with main styles
|  |- variables.scss ________________________ # File with variables for styles
|- types/ ___________________________________ # types in application
|    |- Home.vue ____________________________ # Home component
|  index.tsx
.balbelrc
.enc ________________________________________ # Project environment
.eslintignre
.eslintrc
.gitignore
.prettierrc
.stylelintrc
jest.config.json
package-lock.json
package.json
postcss.config.json
README.md
tsconfig.json
webpack.config.js
```
