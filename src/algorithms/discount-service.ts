export const discountService = (client: string, qtdItems: number) => {
    const cleanClient = client.trim().toLowerCase();

    // Cliente sendo uma string vazia ou maior que um caracter ou não pertecente aos tipos A, B ou C
    if (cleanClient.length !== 1 || !['a', 'b', 'c'].includes(cleanClient))
        return 'Invalid';

    // Quantidade de Itens não é um valor inteiro ou não está entre 1 e 1000
    if (!Number.isInteger(qtdItems) || qtdItems < 1 || qtdItems > 1000)
        return 'Invalid';

    // Buscar o desconto correto com base no Cliente e Quantidade de Itens
    const responses: Record<string, string[]> = {
        a: ['No discount', '5%', '10%'],
        b: ['5%', '15%', '25%'],
        c: ['No discount', '20%', '25%'],
    };

    return qtdItems < 10
        ? responses[cleanClient][0]
        : qtdItems >= 10 && qtdItems <= 99
          ? responses[cleanClient][1]
          : responses[cleanClient][2];
};
