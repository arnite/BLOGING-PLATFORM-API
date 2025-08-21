import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Custom config
  {
    plugins: {
      prettier,
    },
    rules: {
      // Let Prettier handle formatting
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
        },
      ],
    },
  }
);
