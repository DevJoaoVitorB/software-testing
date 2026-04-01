/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',

    // Mapeamento de caminhos
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    transform: {
        // Usando isolatedModules para máxima velocidade em 2026
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
                isolatedModules: true,
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
