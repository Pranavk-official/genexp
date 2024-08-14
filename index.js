import {program }from "commander";
import fs from "fs-extra";
import path from "path";
import ejs from "ejs";
// import updateNotifier from "update-notifier";
import pkg from "./package.json";

// updateNotifier({ pkg }).notify();

program
  .version('0.0.1')
  .argument("<project-name>", "Name of the project")
  .option("-d, --directory <directory>", "Project directory", ".")
  .option("-t, --typescript", "Use TypeScript", false)
  .option("-m, --modules", "Use ES modules instead of CommonJS", false)
  .action((projectName, options) => {
    generateProject(projectName, options);
  });

program.parse(process.argv);

function generateProject(projectName, options) {
  const templateDir = path.join(
    __dirname,
    "templates",
    options.typescript ? "typescript" : "javascript",
  );
  const projectDir = path.join(options.directory, projectName);

  // Create project directory
  fs.mkdirSync(projectDir, { recursive: true });

  // Copy template files
  fs.copySync(templateDir, projectDir);

  // Render package.json template
  const packageJsonTemplate = path.join(templateDir, "package.json.ejs");
  const packageJsonDest = path.join(projectDir, "package.json");
  const packageJsonContent = ejs.render(
    fs.readFileSync(packageJsonTemplate, "utf-8"),
    {
      projectName,
      typescript: options.typescript,
      modules: options.modules,
    },
  );
  fs.writeFileSync(packageJsonDest, packageJsonContent);

  // If using TypeScript, update tsconfig.json
  if (options.typescript) {
    const tsconfigPath = path.join(projectDir, "tsconfig.json");
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
    tsconfig.compilerOptions.module = options.modules ? "ES2020" : "CommonJS";
    fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  }

  console.log(`Project ${projectName} generated successfully!`);
  console.log("To get started:");
  console.log(`  cd ${projectName}`);
  console.log("  npm install");
  console.log("  npm run dev");
}

// Add a catch for unhandled rejections
process.on("unhandledRejection", (error) => {
  console.error("Unhandled rejection:", error);
  process.exit(1);
});
