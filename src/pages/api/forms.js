import { promises as fs } from 'fs';
import path from 'path';

const formsDataFilePath = path.join(process.cwd(), 'src', 'data', 'forms.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request for retrieving forms
    const formsData = await loadFormsData();
    res.status(200).json(formsData);
  } else if (req.method === 'POST') {
    // Handle POST request for creating a new form
    const newForm = req.body;
    const formsData = await loadFormsData();
    formsData.push(newForm);
    await saveFormsData(formsData);
    res.status(201).json(newForm);
  } else if (req.method === 'PUT') {
    // Handle PUT request for updating an existing form
    const updatedForm = req.body;
    const formsData = await loadFormsData();
    const updatedFormsData = formsData.map((form) =>
      form.id === updatedForm.id ? updatedForm : form
    );
    await saveFormsData(updatedFormsData);
    res.status(200).json(updatedForm);
  } else if (req.method === 'DELETE') {
    // Handle DELETE request for deleting a form
    const { id } = req.query;
    const formsData = await loadFormsData();
    const updatedFormsData = formsData.filter((form) => form.id !== id);
    await saveFormsData(updatedFormsData);
    res.status(200).json({ message: 'Form deleted successfully' });
  }
}

async function loadFormsData() {
  const formsData = await fs.readFile(formsDataFilePath, 'utf8');
  return JSON.parse(formsData);
}

async function saveFormsData(formsData) {
  const formsDataJson = JSON.stringify(formsData);
  await fs.writeFile(formsDataFilePath, formsDataJson, 'utf8');
}
