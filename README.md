# genexp

## Overview

A simple Express boilerplate generator that creates a basic express app in MVC pattern with TypeScript and module support.

## Features

- Generates Express applications with either JavaScript or TypeScript.
- Supports ES modules or CommonJS module system based on your preference.
- Includes basic MVC structure with controllers, models, and views.
- Pre-configured with EJS for templating and Morgan for logging.
- TypeScript projects come with a `tsconfig.json` for easy configuration.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system. The generator requires Node.js version 12.0.0 or higher.

### Usage

```bash
npx genexp <project-name> [options]
```

Replace `<project-name>` with the name of your new project.

#### Options

- `-d, --directory <directory>`: Specify the directory where the project will be created. Defaults to the current directory.
- `-t, --typescript`: Generates a TypeScript-based Express application.
- `-m, --modules`: Uses ES modules instead of CommonJS. Applicable for both JavaScript and TypeScript projects.

## Project Structure

Upon running the generator, you'll find the following structure in your project directory:

- For JavaScript projects:
  ```
  my-new-project/
  ├── app.js
  ├── package.json
  ├── controllers/
  │   └── homeController.js
  ├── models/
  │   └── example.js
  ├── views/
  │   └── home.ejs
  └── routes/
      └── index.js
  ```

- For TypeScript projects:
  ```
  my-new-project/
  ├── src/
  │   ├── app.ts
  │   ├── controllers/
  │   │   └── homeController.ts
  │   ├── models/
  │   │   └── example.ts
  │   └── routes/
  │       └── index.ts
  ├── views/
  │   └── home.ejs
  ├── package.json
  └── tsconfig.json
  ```

## Development

After generating your project, navigate to the project directory:

```bash
cd my-new-project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Your application will be accessible at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
