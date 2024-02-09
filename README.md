# Team challenge | Mocko

## ℹ️ General Info

This is the repository responsible for Mocko's application frontend.

## 🏭 Applications

- [Backend](https://github.com/AlenaVyrodova/Marketplace) — Mocko's application backend.

## 🖍 Requirements

- [NodeJS](https://nodejs.org/en/) (16.x.x);
- [NPM](https://www.npmjs.com/) (8.x.x);

## 🏃‍♂️ Simple Start

1. **`npm run i`** at the root
2. **`npm run dev`** at the root
3. Enjoy ☕

## 🛠️ Tools

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) – frontend library and local development server.
- [shadcn/ui](https://ui.shadcn.com/) – ui library.
- [DatoCMS](https://dashboard.datocms.com) - content management system.

## 🥊 Code quality

- [editorconfig](https://editorconfig.org/) — helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [prettier](https://prettier.io/) — an opinionated code formatter.
- [eslint](https://eslint.org/) – find problems in your JS code.

## 🗞 Git

### 📊 Branches

- **`main`** - production source code.
- **`development`** - staging source code.

### 👍👎 Pull Request flow

```
<project-prefix>-<ticket-number>: <ticket-title>
```

#### Example:

`catalog-5: Add filter component`

### 🌳 Branch flow

```
<type>/<project-prefix><ticket-number>-<short-desc>
```

#### Types:

- task
- fix

#### Examples:

- `task/catalog5-add-filters`
- `task/design12-add-signin-page`
- `fix/design16-fix-signup-validation`

### 🗂 Commit flow

```
<project-prefix>-<ticket-number>: <modifier> <desc>
```

#### Modifiers:

- `+` (add)
- `*` (edit)
- `-` (remove)

#### Examples:

- `catalog-5: + filters component`
- `design-12: - default prop for filter field`
- `design-16: * signup validation`
