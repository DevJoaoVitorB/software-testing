## Programa 01 - Triângulos

### Definição do Caso: 
* Input - três valores que representam os lados de um triângulo
* Output - tipo do triângulo:
    1. EQUILÁTERO: 
        * 3 lados iguais
        * 3 ângulos internos são iguais (60°)
    2. ISÓSCELES: 
        * 2 lados iguais 
        * os ângulos opostos a esses lados são iguais
    3. ESCALENO: 
        * 3 lados diferentes
        * 3 ângulos internos diferentes entre sí

### Casos de Teste
> **Variáveis de Entrada:** lista de 3 valores (lados do triângulo)
>
> **Condição 1:** Tamanho da lista deve ser, exatamente, 3
> **1. Classe Válida:** `lengthList === 3`
> **2. Classe Inválida:** `lengthList < 3`
> **3. Classe Inválida:** `lengthList > 3`
> 
> **Condição 2:** Todos os valores da lista devem ser maiores que zero
> **4. Classe Válida:** `value > 0`
> **5. Classe Inválida:** `value === 0`
> **6. Classe Inválida:** `value < 0`
> 
> **Condição 3:** Existência de um triângulo
> **7. Classe Válida:** `val1 + val2 > val3 && val1 + val3 > val2 && val2 + val3 > val1`
> **8. Classe Inválida:** `val1 + val2 < val3`
> **9. Classe Inválida:** `val1 + val2 === val3`
> **10. Classe Inválida:** `val1 + val3 < val2`
> **11. Classe Inválida:** `val1 + val3 === val2`
> **12. Classe Inválida:** `val2 + val3 < val1`
> **13. Classe Inválida:** `val2 + val3 === val1`
>
> **Condição 4:** Tipificar em EQUILÁTERO, ISÓSCELES ou ESCALENO
> **14. Classe Válida:** `qtdEqualsValue in [0, 2, 3]`
> **15. Classe Inválida:** `qtdEqualsValue < 0`
> **16. Classe Inválida:** `qtdEqualsValue === 1`
> **17. Classe Inválida:** `qtdEqualsValue > 3`