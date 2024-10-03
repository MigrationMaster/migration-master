# Project Guidelines

These guidelines outline the rules and best practices to follow when contributing to this Next.js project. Adherence to these will help maintain code quality and project consistency.

## Exports

### Default Export

- Export on the same line where the function is declared.
- **Example**:

```javascript
export default function functionName() { ... }
```

### Named Exports

- Named exports must be exported as a combined object
- Example:

  ```javascript
  const name = 'example';
  const setName = (newName) => { ... };
  export { name, setName };
  ```

## Routing

- **Import Router**: Always import from `"next/navigation"`.
- **Usage**: Avoid legacy imports from `"next/router"`.

## Naming Conventions

### Files

- Use **lowercase** for all filenames.
- Use **underscore** (`_`) instead of **hyphen** (`-`)
- Abbreviations must be all **UPPERCASE**

### Object Names

1. **Function Names**

   - Format: `<verb><subject>` (**Verb** should describe action on **subject** which follows same scheme as _object Names_).
   - Use **camelCase**
   - Example: `getUserData`

2. **Object Names**

   - Name objects from most **generalized** to **most specialized**.
   - Use **camelCase**
   - Example: `vehicleCarBmwM4Engine`

3. **Class Names**

   - Scheme follows the same structure as _object names_.
   - Use **PascalCase**
   - Example: `UserData`

4. **Global Constants**
   - Scheme follows the same structure as _object names_.
   - Use **CAPITALIZED_SNAKE_CASE**
   - Example: `MAX_USER_COUNT`

\* _Abbreviations still follow the respective case, not fully uppercase unless intended_

## Project Structure

Organize files and folders logically to maintain clarity. Here's a recommended project structure:

```plaintext
src/
└── components/ # Reusable components
└── app/ # Next.js pages
└── styles/ # CSS/styling files
└── utils/ # Utility functions
└── hooks/ # Custom hooks
public/ # Static assets
```

## Coding Standards

- Use **ESLint** for linting
- Follow **Prettier** for code formatting
- Adhere to the Airbnb JavaScript style guide

To automate formatting and linting, add the following npm scripts:

```json
"scripts": {
   "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
   "format": "prettier --write ."
}
```

## Testing

- Use **Jest** for unit tests
- Use Cypress for end-to-end tests
- Run tests with `npm test`

### Test Directory

```plaintext
tests/
└── unit/              # Unit tests
└── e2e/               # End-to-end tests
```

## Git Workflow

We follow a structured Git workflow to ensure smooth collaboration and maintain a clean history.

### Commit Message Guidelines

#### Major Release

- **Assumed current version**: `0.x.x`
- **Next major version**: `1.x.x`
- **Format**: `major 1.x.x | description summary`

#### Hot-Fixes

- **Assumed current version**: `x.x.3`
- **Next fix version**: `x.x.4`
- **Format**: `fix x.x.4 | description summary`

#### Minor Release or Feature Addition

- **Assumed current version**: `x.4.x`
- **Next minor version**: `x.5.x`
- **Format**: `minor x.5.x | description summary`

### Branching Strategy

1. **Main Branch**:

   - The `main` branch should always contain the latest stable production code.
   - Only merge `release` branches into `main` after testing.

2. **Develop Branch**:

   - The `develop` branch is where the latest development happens. It serves as an integration branch for new features.
   - Regular merges into `develop` from feature branches.

3. **Feature Branches**:

   - Name format: `feature/<feature-name>`
   - Used to develop individual features or improvements.
   - Merge into `develop` once the feature is complete and tested.

4. **Hotfix Branches**:

   - Name format: `hotfix/<description>`
   - Used for critical bug fixes in production.
   - Merged directly into both `main` and `develop`.

### Pull Requests (PRs)

- Each PR must target `develop` (or `release` in case of a release-related PR).
- PR titles should follow the commit message guidelines.
- All PRs must pass CI tests before being merged.
- PRs should be reviewed and approved by at least one other team member.
- Add clear descriptions of what was changed and why.

### Commit Message Conventions

Commit messages should follow the format outlined in the Commit Message Guidelines section. When in doubt, use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

- `feat`: Introduces a new feature.
- `fix`: Fixes a bug.
- `docs`: Documentation changes only.
- `chore`: Minor changes that don’t affect the code (e.g., updating dependencies).

---

By following this workflow, we ensure smoother collaboration and avoid merge conflicts during development and releases.

## Documentation

To maintain clear and consistent documentation across the project, follow these guidelines.

### README.md

- The `README.md` file should always be up to date with setup instructions, key project information, and how to contribute.
- Include sections for:
  - Project description
  - Setup instructions
  - Testing instructions
  - Guidelines for contributing
  - Links to further documentation (API, architecture, etc.)

### API Documentation

- Use a tool like **Swagger** or **Postman** to generate API documentation automatically.
- Document each endpoint’s purpose, parameters, response format, and any relevant examples.

### Code Comments

- Write comments for complex logic explaining what the code does and why.
- Use **JSDoc** for function and method documentation.

  - Example:

    ```javascript
    /**
     * Fetches user data from the API.
     * @param {string} userId - The ID of the user to fetch data for.
     * @returns {Promise<Object>} The user data.
     */
    async function getUserData(userId) {
      // Implementation here
    }
    ```

### Architectural Documentation

- Document key architectural decisions, such as:
  - State management (e.g., React Context, Redux, etc.)
  - Authentication flow
  - API design
- Consider using **ADR (Architectural Decision Records)** to document important architecture choices.

## CI/CD

To maintain code quality and streamline the release process, this project uses **GitHub Actions** for Continuous Integration (CI) and Continuous Deployment (CD).

### CI Pipeline

- The CI pipeline automatically runs on each PR or commit to `develop`.
- The pipeline includes:
  1. **Linting**: Ensures code follows coding standards (via **ESLint**).
  2. **Unit Tests**: Runs unit tests using **Jest** to ensure individual components work as expected.
  3. **Build Check**: Ensures the project builds successfully before merging.

### CD Pipeline

- When a PR is merged into `main`, the CD pipeline is triggered.
- The CD pipeline includes:
  1. **Build and Test**: Ensures the application can be built and passes all tests.
  2. **Deployment**: Deploys the latest version to the production environment (e.g., using **Vercel**, **AWS**, or **Heroku**).

### Example GitHub Actions Configuration

````yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - develop

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run ESLint
        run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Unit Tests
        run: npm run test

  deploy:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Build Project
        run: npm run build
      - name: Deploy to Production
        run: npm run deploy

### Dependencies and Version Management

Maintaining consistent dependency versions is important to avoid breaking changes. Here's an expanded section to cover this:

```markdown
## Dependencies and Version Management

- Use **package-lock.json** or **yarn.lock** to lock down exact versions of dependencies.
- Regularly update dependencies using a tool like **npm-check-updates** to ensure security and performance improvements.
- Critical dependencies should have clearly defined version ranges in `package.json` to avoid unintended upgrades.
  - Example:
    ```json
    "dependencies": {
      "react": "^18.0.0",
      "next": "^14.0.0"
    }
    ```

### Key Dependencies

- **React**: Core UI framework for this project.
- **Next.js**: For server-side rendering and static site generation.
- **TypeScript**: For type-safe JavaScript development.
- **Styled Components** (or CSS-in-JS solution): For component-level styling.
- **Jest**: For unit testing.
- **Cypress**: For end-to-end testing.

Ensure that major dependencies like React and Next.js are updated regularly, and test thoroughly when performing major upgrades.

## Environment Variables

To manage configuration between development, staging, and production environments, we use environment variables.

### Example `.env.example` File

```plaintext
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://user:password@localhost:5432/mydb
NODE_ENV=development
````
