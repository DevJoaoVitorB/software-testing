type ExpectType = 'Scalene' | 'Isosceles' | 'Equilateral' | 'Invalid';

interface TriangleCaseModel {
    sides: number[];
    expect: ExpectType;
    info: string;
}

export const triangleCases: TriangleCaseModel[] = [
    {
        sides: [3, 4, 5],
        expect: 'Scalene',
        info: 'scalene triangle',
    },
    {
        sides: [3, 3, 4],
        expect: 'Isosceles',
        info: 'isosceles triangle',
    },
    {
        sides: [3, 4, 3],
        expect: 'Isosceles',
        info: 'isosceles triangle',
    },
    {
        sides: [4, 3, 3],
        expect: 'Isosceles',
        info: 'isosceles triangle',
    },
    {
        sides: [3, 3, 3],
        expect: 'Equilateral',
        info: 'equilateral triangle',
    },
    {
        sides: [3, 4],
        expect: 'Invalid',
        info: 'should be invalid for insufficient sides',
    },
    {
        sides: [3, 4, 5, 6],
        expect: 'Invalid',
        info: 'should be invalid for excessive sides',
    },
    {
        sides: [3.5, 4, 5],
        expect: 'Invalid',
        info: 'side not belongs to integers',
    },
    {
        sides: [3, 4.5, 5],
        expect: 'Invalid',
        info: 'side not belongs to integers',
    },
    {
        sides: [3, 4, 5.5],
        expect: 'Invalid',
        info: 'side not belongs to integers',
    },
    {
        sides: [0, 4, 5],
        expect: 'Invalid',
        info: 'side less than one (1)',
    },
    {
        sides: [3, -1, 5],
        expect: 'Invalid',
        info: 'side less than one (1)',
    },
    {
        sides: [3, 4, -2],
        expect: 'Invalid',
        info: 'side less than one (1)',
    },
    {
        sides: [3, 4, 8],
        expect: 'Invalid',
        info: 'sides not form a valid triangle',
    },
    {
        sides: [3, 4, 7],
        expect: 'Invalid',
        info: 'sides not form a valid triangle',
    },
    {
        sides: [3, 9, 5],
        expect: 'Invalid',
        info: 'sides not form a valid triangle',
    },
    {
        sides: [3, 8, 5],
        expect: 'Invalid',
        info: 'sides not form a valid triangle',
    },
    {
        sides: [10, 4, 5],
        expect: 'Invalid',
        info: 'sides not form a valid triangle',
    },
    {
        sides: [9, 4, 5],
        expect: 'Invalid',
        info: 'sides not form a valid triangle',
    },
];
