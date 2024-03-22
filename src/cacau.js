const fs = require('fs').promises;
const { join } = require('path');

const readCacauFile = async () => {
  const path = '/files/cacauFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacau = await readCacauFile();
  return cacau.chocolates;
};

module.exports = {
    getAllChocolates,
};