import { discountService } from '@/index.js';
import { discountCases } from './fixtures/discount-cases.js';

describe('Discount Service', () => {
    /* 
        Condições:
        - Cliente deve ser um texto de único caracter
        - Cliente deve ser (A, a); (B, b) ou (C, c)
        - Quantidade de Itens deve ser um valor inteiro (ℤ)
        - Quantidade de Itens deve ser um valor entre 1 e 1000
        - Os descontos devem ser aplicados por Cliente e Quantidade de Itens seguindo as regras:
            1. Cliente A - 10 un. a 99 un. recebe 5 % de desconto; acima de 100 un. recebe 10% de desconto;
		    2. Cliente B - abaixo de 10 un. recebe 5% de desconto; 10 un. a 99 un. recebe 15% de desconto; acima de 100 un. recebe 25% de desconto;
		    3. Cliente C - 10 un. a 99 un. recebe 20% de desconto; acima de 100 un. recebe 25% de desconto.
    */

    it.each(discountCases)(
        'Case $#: should return $expect for sides Client $client and $qtdItems un. for case "$info"',
        ({ client, qtdItems, expect: exp }) => {
            const result = discountService(client, qtdItems);
            expect(result).toBe(exp);
        },
    );
});
