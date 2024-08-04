function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

module.exports = { sanitizeFileName };
