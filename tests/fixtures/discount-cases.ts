type ExpectType =
    | 'No discount'
    | '5%'
    | '10%'
    | '15%'
    | '20%'
    | '25%'
    | 'Invalid';

interface DiscountCaseModel {
    client: string;
    qtdItems: number;
    expect: ExpectType;
    info: string;
}

export const discountCases: DiscountCaseModel[] = [
    {
        client: 'A',
        qtdItems: 7,
        expect: 'No discount',
        info: 'Client A - items quantity less than 10 units no discount applied',
    },
    {
        client: 'a',
        qtdItems: 10,
        expect: '5%',
        info: 'Client A - items quantity between 10 and 99 units 5% discount applied',
    },
    {
        client: 'A',
        qtdItems: 100,
        expect: '10%',
        info: 'Client A - items quantity starting from 100 units 10% discount applied',
    },
    {
        client: 'B',
        qtdItems: 8,
        expect: '5%',
        info: 'Client B - items quantity less than 10 units 5% discount applied',
    },
    {
        client: 'b',
        qtdItems: 20,
        expect: '15%',
        info: 'Client B - items quantity between 10 and 99 units 15% discount applied',
    },
    {
        client: 'B',
        qtdItems: 125,
        expect: '25%',
        info: 'Client B - items quantity starting from 100 units 25% discount applied',
    },
    {
        client: 'C',
        qtdItems: 9,
        expect: 'No discount',
        info: 'Client C - items quantity less than 10 units no discount applied',
    },
    {
        client: 'c',
        qtdItems: 50,
        expect: '20%',
        info: 'Client C - items quantity between 10 and 99 units 20% discount applied',
    },
    {
        client: 'B',
        qtdItems: 500,
        expect: '25%',
        info: 'Client C - items quantity starting from 100 units 20% discount applied',
    },
    {
        client: ' ',
        qtdItems: 5,
        expect: 'Invalid',
        info: 'invalid client identifier (empty string)',
    },
    {
        client: 'Abc',
        qtdItems: 10,
        expect: 'Invalid',
        info: 'invalid client identifier (exceeds character limit)',
    },
    {
        client: 'D',
        qtdItems: 50,
        expect: 'Invalid',
        info: 'invalid client identifier (unknowm client type)',
    },
    {
        client: 'A',
        qtdItems: 25.3,
        expect: 'Invalid',
        info: 'items quantity not belongs to integers',
    },
    {
        client: 'B',
        qtdItems: 0,
        expect: 'Invalid',
        info: 'items quantity below minimum (min 1 un.)',
    },
    {
        client: 'C',
        qtdItems: 2500,
        expect: 'Invalid',
        info: 'items quantity above maximum (max 1000 un.)',
    },
];
