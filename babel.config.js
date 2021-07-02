module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ['import', { libraryName: 'antd-mobile', style: 'css' }], // `style: true` 会加载 less 文件
  ],
}
