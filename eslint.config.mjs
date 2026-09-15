import nextPlugin from "@next/eslint-plugin-next";
import tsEslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tsEslint.config(
  // 1. Injects recommended TypeScript parsing & rules natively
  ...tsEslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Allows ESLint to see React JSX tags (<)
        },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    // 2. Clear global ignores block to protect workspace tracking
    ignores: ["node_modules/", ".next/", "out/", "build/", "next-env.d.ts"],
  },
  // 3. Turns off rules that overlap with Prettier (must be last)
  prettierConfig,
);
