import config from '@woohm402/eslint-config-base';

export default [
  {
    ignores: ['esbuild.js', 'out', 'dist'],
  },
  ...config,
];
