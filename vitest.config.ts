import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['clover', 'cobertura', 'json-summary', 'json', 'lcov', 'text'],
      include: ['src'],
      reportOnFailure: true,
      thresholds: {
        lines: 65,
        statements: 65,
        functions: 70,
        branches: 83,
      },
    },
    reporters: process.env.CI_PREFLIGHT
      ? ['basic', 'github-actions']
      : ['basic'],
  },
});