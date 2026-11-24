import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import prettierConfig from 'eslint-config-prettier/flat';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'@stylistic': stylistic,
			prettier,
		},
		extends: [
			eslintReact.configs['strict-type-checked'],
			js.configs.recommended,
			reactHooks.configs.flat['recommended-latest'],
			reactRefresh.configs.recommended,
			reactRefresh.configs.vite,
			...tsEslint.configs.strictTypeChecked,
			...tsEslint.configs.stylisticTypeChecked,
		],
		languageOptions: {
			ecmaVersion: 2020,
			parser: tsEslint.parser,
			parserOptions: {
				projectService: true,
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'prettier/prettier': 'warn',
			'eqeqeq': ['error', 'always'],
			'no-console': 'warn',
			'@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
			'@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true }],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/strict-boolean-expressions': [
				'error',
				{
					allowString: false,
					allowNumber: false,
					allowNullableObject: false,
					allowNullableBoolean: true,
				},
			],
		},
	},
	prettierConfig,
]);
