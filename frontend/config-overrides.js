module.exports = {
  jest: (config) => {
    config.transformIgnorePatterns = [
      "/node_modules/(?!axios)/", // allow axios to be transpiled
    ];
    return config;
  },
};
