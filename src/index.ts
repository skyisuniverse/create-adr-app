#!/usr/bin/env node
//
// import fs from 'node:fs';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import pc from 'picocolors';
//
// // Create ESM-compatible __dirname replacement
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// function run() {
//   const args = process.argv.slice(2);
//   const projectDirName = args[0]; // Fix: pick the first argument string
//
//   if (!projectDirName) {
//     console.error(pc.red('Error: Please specify the project directory:'));
//     console.log(`  npx create-adr-app ${pc.cyan('<project-directory>')}`);
//     process.exit(1);
//   }
//
//   const targetDir = path.resolve(process.cwd(), projectDirName);
//   const templateDir = path.resolve(__dirname, '../template');
//
//   if (fs.existsSync(targetDir)) {
//     console.error(pc.red(`Error: Directory "${projectDirName}" already exists.`));
//     process.exit(1);
//   }
//
//   console.log(pc.cyan(`\nCreating a new ADR app in ${pc.bold(targetDir)}...\n`));
//
//   try {
//     fs.cpSync(templateDir, targetDir, { recursive: true });
//
//     const dotGitignore = path.join(targetDir, '.gitignore');
//     const gitignoreTemplate = path.join(targetDir, 'gitignore');
//     if (!fs.existsSync(dotGitignore) && fs.existsSync(gitignoreTemplate)) {
//       fs.renameSync(gitignoreTemplate, dotGitignore);
//     }
//
//     console.log(pc.green('✔ Success! Project scaffolded successfully.'));
//     console.log('\nNext steps:');
//     console.log(`  cd ${projectDirName}`);
//     console.log('  npm install');
//     console.log('  npm run dev\n');
//   } catch (error) {
//     console.error(pc.red('Failed to scaffold project:'), error);
//     process.exit(1);
//   }
// }
//
// run();

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors';

// Create ESM-compatible __dirname replacement
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APPS = ['architecture-decision-records', 'simulation-tool'];

function run() {
  const args = process.argv.slice(2);
  const projectDirName = args[0];

  if (!projectDirName) {
    console.error(pc.red('Error: Please specify the project directory:'));
    console.log(`  npx create-adr-app ${pc.cyan('<project-directory>')}`);
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), projectDirName);
  const templateDir = path.resolve(__dirname, '../template');

  if (fs.existsSync(targetDir)) {
    console.error(pc.red(`Error: Directory "${projectDirName}" already exists.`));
    process.exit(1);
  }

  console.log(pc.cyan(`\nCreating a new project in ${pc.bold(targetDir)}...\n`));

  try {
    // Copy the entire template folder containing both app directories
    fs.cpSync(templateDir, targetDir, { recursive: true });

    // Restore .gitignore inside each app subdirectory
    for (const appName of APPS) {
      const appDir = path.join(targetDir, appName);
      const dotGitignore = path.join(appDir, '.gitignore');
      const gitignoreTemplate = path.join(appDir, 'gitignore');

      if (!fs.existsSync(dotGitignore) && fs.existsSync(gitignoreTemplate)) {
        fs.renameSync(gitignoreTemplate, dotGitignore);
      }
    }

    console.log(pc.green('✔ Success! Project scaffolded with the following apps:'));
    for (const appName of APPS) {
      console.log(`  - ${pc.bold(appName)}`);
    }

    console.log('\nNext steps:');
    console.log(`  cd ${projectDirName}/architecture-decision-records`);
    console.log('  npm install');
    console.log('  npm run dev\n');
  } catch (error) {
    console.error(pc.red('Failed to scaffold project:'), error);
    process.exit(1);
  }
}

run();
