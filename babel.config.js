/*
 * @Author: Joshua Eigbe self@joshuaeigbe.com
 * @Github: https://github.com/jsh007
 * @Date: 2023-12-05 15:17:07
 * @LastEditors: Joshua Eigbe self@joshuaeigbe.com
 * @LastEditTime: 2023-12-07 22:59:52
 * @FilePath: /resight/babel.config.js
 * @copyrightText: Copyright (c) Joshua Eigbe. All Rights Reserved.
 * @Description: See Github repo
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          'jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@components': './src/components/',
          '@features': './src/features/',
          '@screens': './src/screens/',
          '@utils': './src/utils/',
          '@assets': './src/assets/',
          '@templates': './src/templates/',
        },
      },
    ],
  ],
};
