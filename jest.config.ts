/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],

    // Mapeamento de caminhos
    moduleNameMapper: {
        // 1. Resolve o alias @/ removendo a extensão .js para encontrar o .ts
        '^@/(.*)\\.js$': '<rootDir>/src/$1',

        // 2. Fallback caso você importe algo sem o .js (comum em testes internos)
        '^@/(.*)$': '<rootDir>/src/$1',

        // 3. Resolve imports relativos que terminam em .js (ex: ./fixtures/data.js)
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },

    transform: {
        '^.+\\.(mt|t)s$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: 'tsconfig.json',
            },
        ],
    },

    // Automação e Limpeza
    clearMocks: true,
    restoreMocks: true,

    // Cobertura moderna
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',

    // Impede que o Jest perca tempo olhando a pasta de build que você criou com o tsup
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
