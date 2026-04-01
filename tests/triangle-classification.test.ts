import { classifyTriangle } from '@/index.js';
import { triangleCases } from './fixtures/triangle-cases.js';

describe('Triangle Classification Algorithm', () => {
    /* 
        Condições:
        - Tamanho da lista deve ser, exatamente, três (3)
        - Os valores da lista devem ser inteiros (ℤ)
        - Os valores da lista devem ser maiores que zero (0)
        - Os valores da lista devem forma um triângulo
        - nenhum, dois ou três valores da lista devem ser iguais (=)
    */

    // Data-Driven Testing
    it.each(triangleCases)(
        'Case $#: should return $expect for sides $sides for case "$info"',
        ({ sides, expect: exp }) => {
            const result = classifyTriangle(sides);
            expect(result).toBe(exp)
        },
    );
});
