import fs from 'fs'

const formsDataFilePath = '../../data/forms.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request for retrieving forms
    const formsData = loadFormsData();
    res.status(200).json(formsData);
  } else if (req.method === 'POST') {
    // Handle POST request for creating a new form
    const newForm = req.body;
    const formsData = loadFormsData();
    formsData.push(newForm);
    saveFormsData(formsData);
    res.status(201).json(newForm);
  } else if (req.method === 'PUT') {
    // Handle PUT request for updating an existing form
    const updatedForm = req.body;
    const formsData = loadFormsData();
    const updatedFormsData = formsData.map((form) =>
      form.id === updatedForm.id ? updatedForm : form
    );
    saveFormsData(updatedFormsData);
    res.status(200).json(updatedForm);
  } else if (req.method === 'DELETE') {
    // Handle DELETE request for deleting a form
    const { id } = req.query;
    const formsData = loadFormsData();
    const updatedFormsData = formsData.filter((form) => form.id !== id);
    saveFormsData(updatedFormsData);
    res.status(200).json({ message: 'Form deleted successfully' });
  }
}

function loadFormsData() {
  const formsData = fs.readFileSync(formsDataFilePath, 'utf8');
  return JSON.parse(formsData);
}

function saveFormsData(formsData) {
  const formsDataJson = JSON.stringify(formsData);
  fs.writeFileSync(formsDataFilePath, formsDataJson, 'utf8');
}