import config from '@woohm402/eslint-config-base';

export default [
  {
    ignores: ['esbuild.js', 'out', 'dist', 'node_modules', '.vscode-test'],
  },
  ...config,
];
