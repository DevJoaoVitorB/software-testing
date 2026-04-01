export const classifyTriangle = (valuesList: number[]) => {
    // Tamanho da lista diferente de 3 - Tamanho da lista inválido
    if (valuesList.length !== 3) return 'Inválido';

    // Valores menores ou iguais a zero - Valores inválidos
    const invalidValues = valuesList.filter((value) => value <= 0);

    if (invalidValues.length > 0) return 'Inválido';

    // O triângulo é inválido - Valores não corresponde a um triângulo valido
    const [a, b, c] = valuesList;
    if (!(a + b > c && a + c > b && b + c > a)) return 'Inválido';

    // Verificar se é um triângulo escaleno, isósceles e equilátero
    const equalsValues = [...new Set(valuesList)];

    switch (equalsValues.length) {
        case 3:
            return 'Escaleno';
        case 2:
            return 'Isósceles';
        case 1:
            return 'Equilátero';
    }
};
