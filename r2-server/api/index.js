// api/index.js - Vercel Serverless Function Adapter
const app = require('../server.js'); // 导入你的Express应用

// Vercel 需要导出这个处理函数
module.exports = (req, res) => {
  // 将Vercel的无服务器请求转发给Express应用处理
  return app(req, res);
};
