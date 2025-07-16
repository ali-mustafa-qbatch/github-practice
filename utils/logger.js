function log(message) {
  console.log(`[LOG]: ${message}, Timestamp: ${new Date().toISOString()}`);
}

module.exports = { log };
