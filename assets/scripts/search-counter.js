// Cria um contador de pesquisas utilizando closure
export function createSearchCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}