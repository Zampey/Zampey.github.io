# Merge Sort - Jak funguje?

Merge Sort je další velmi rychlý a efektivní **třídicí algoritmus**. Je to algoritmus **rozdělování a dobývání**, což znamená, že rozděluje seznam na menší části, které následně seřadí a spojí zpět do celku.

## Základní princip

Merge Sort funguje takto:

1. **Rozdělí seznam na dvě poloviny**.
2. **Rekurzivně seřadí obě poloviny**.
3. **Spojí seřazené poloviny zpět** do jednoho seznamu.

Takto opakujeme, dokud není seznam zcela seřazený.

## Jak Merge Sort funguje krok za krokem?

Představme si, že máme seznam čísel, který chceme seřadit: [10, 7, 8, 9, 1, 5]


1. **Rozdělení seznamu**: Nejprve rozdělíme seznam na dvě poloviny:

   - Levá polovina: `[10, 7, 8]`
   - Pravá polovina: `[9, 1, 5]`

2. **Rekurzivní dělení**: Každou polovinu rozdělíme na poloviny znovu, dokud nebudeme mít seznamy o jednom prvku.

   - Levá polovina `[10, 7, 8]` se rozdělí na:
     - `[10]` a `[7, 8]`
     - `[7, 8]` se rozdělí na `[7]` a `[8]`
   - Pravá polovina `[9, 1, 5]` se rozdělí na:
     - `[9]` a `[1, 5]`
     - `[1, 5]` se rozdělí na `[1]` a `[5]`

3. **Seřazení a spojení**: Jakmile máme seznamy o jednom prvku, začneme je spojovat zpět a seřazovat. Při spojování dvou seznamů je porovnáme a vložíme menší prvek dříve.

   - Seřazení `[7]` a `[8]` dá `[7, 8]`
   - Seřazení `[1]` a `[5]` dá `[1, 5]`
   - Seřazení `[9]` a `[1, 5]` dá `[1, 5, 9]`
   - Seřazení `[7, 8]` a `[10]` dá `[7, 8, 10]`

4. **Konečné spojení**: Nakonec spojíme všechny seřazené části do jednoho velkého seznamu:

   - Seřazení `[7, 8, 10]` a `[1, 5, 9]` dá konečný seřazený seznam: `[1, 5, 7, 8, 9, 10]`

## Ukázka kódu v JavaScriptu

Tady je jednoduchá implementace Merge Sortu v JavaScriptu:

```javascript
function mergeSort(arr) {
    // Pokud má seznam 1 nebo méně prvků, je již seřazený
    if (arr.length <= 1) {
        return arr;
    }

    // Rozdělíme seznam na dvě poloviny
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Rekurzivně seřadíme obě poloviny
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Porovnáme každý prvek z obou seznamů a vložíme menší prvek do výsledného seznamu
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Pokud zbývají nějaké prvky v levé nebo pravé části, přidáme je
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Testovací seznam
const arr = [10, 7, 8, 9, 1, 5];
const sortedArr = mergeSort(arr);
console.log(sortedArr);  // Výstup: [1, 5, 7, 8, 9, 10]
