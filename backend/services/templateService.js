import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';

// Simulate __dirname in ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadTemplate = (templateName) => {
  const templatePath = path.join(__dirname, '../../templates', `${templateName}.html`);
  return fs.readFileSync(templatePath, 'utf8');
};

export const renderTemplate = (templateName, data) => {
  const source = loadTemplate(templateName);
  const template = Handlebars.compile(source);
  return template(data);
};
