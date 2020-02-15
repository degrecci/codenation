module.exports = {
  launch: {
    headless: true,
    args: [
      '--max-old-space-size=4096',
    ],
  },
  browserContext: 'default',
  server: {
    command: 'npm run server',
  },
};
