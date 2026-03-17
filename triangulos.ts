
const analyzeValues = (valuesList: number[]) => {
    // Valores válidos: maiores que 0
    const invalidValues = valuesList.filter((value) => value <= 0);

    if(invalidValues.length > 0)
        return "Valores Inválidos";

    // Verificar se é um triângulo válido
    const [a, b, c] = valuesList;
    if (!(a + b > c && a + c > b && b + c > a))
        return "Valores não corresponde a um triângulo valido"

    // Verificar se é um triângulo escaleno, isósceles e equilátero
    const equalsValues = [... new Set(valuesList)];

    switch(equalsValues.length) {
        case 3:
            return "Escaleno";
        case 2:
            return "Isósceles";
        case 1:
            return "Equilátero";
    }
}
