const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
// const path = require('path');

// module.exports = {
//   //...
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//   },
// };
module.exports = (config, context) => {
  nrwlConfig(config);

  config.devServer = {
    ...config.devServer,
    client: {
      webSocketURL: 'auto://0.0.0.0:3020/ws',
    },
  };

  return config;
};
