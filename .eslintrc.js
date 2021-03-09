const baseConfigList = [
  '@spotify/eslint-config-base',
  '@spotify/eslint-config-react',
];

const jsConfigList = [...baseConfigList, 'prettier'];
const tsConfigList = [
  ...baseConfigList,
  '@spotify/eslint-config-typescript',
  'prettier',
];

const jsSettings = {
  react: {
    version: 'detect',
  },
};
const tsSettings = jsSettings;

module.exports = {
  env: {
    browser: true,
  },
  extends: jsConfigList,
  settings: jsSettings,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: tsConfigList,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      settings: tsSettings,
    },
  ],
};
