# Openedu Platform

## About  
**OE‑NRP** (Open Education) is a modern EdTech platform that integrates blockchain, AI automation, gamification, and trustless collaboration. The goal of the platform is to support education, optimize teaching and learning experiences, and expand the EduFi market.

### Recommended system

- Nodejs: >= 20 [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)
  - Recommend: use [Fast node manager](https://github.com/Schniz/fnm)
- npm: latest version [https://pnpm.io/installation](https://npm.io/installation)
- Editor: `vscode`, `cursor`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Structure 

```sh
├───public 
└───src
    └───app
        ├───_components
        │   ├───layout
        │   └───section             
        └───_data                   # Mock up data course, navigation, partners
  ...
```

### Scripts

> Workspace is always root repo.

- Installation

```sh
npm install
```

- Add packages

```sh
npm add {npm_package} 
```

- Run dev

```sh
npm run dev
```

- Run build

```sh
npm run build
```

- Run lint

```sh
npm lint
```

## Branch Types

### feat/
New features or functionality additions
- Example: `feat/#123-user-authentication`

### fix/
Bug fixes and issue resolutions
- Example: `fix/#456-login-error`

### chore/
Maintenance tasks, dependency updates, or build process changes
- Example: `chore/#789-update-dependencies`

## Branch Creation

Create a new branch from `dev`:

```bash
# Checkout dev branch
git checkout dev

# Rebase latest changes
git pull origin --rebase dev

# Create and switch to new branch
git checkout -b feat/#123-user-authentication
```

After completing your work, create a pull request to merge your branch into `dev`:
- Assign team members for peer review
- Assign team leader for final review and approval
- Ensure all reviews are completed before merging

## Branch Naming Convention

Format: `<type>/#<ticket-number>-<summary>`

Examples:
- `feat/#123-user-registration`
- `fix/#456-payment-validation`
- `chore/#789-eslint-config`

## Deploy to Production

Create a pull request to merge `dev` into `main` for production deployment

Using github CI/CD to deploy from branch `main`


## License  
This project is licensed under the **MIT License** (or replace with the license of your choice). See the `LICENSE` file for details.
