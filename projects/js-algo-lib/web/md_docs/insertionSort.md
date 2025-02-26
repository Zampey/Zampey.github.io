# Insertion Sort - Jak funguje?

Insertion Sort (**řazení vkládáním**) je jednoduchý a intuitivní **třídicí algoritmus**, který funguje podobně jako třídění karet v ruce. Každý prvek se vezme a vloží na správné místo mezi již seřazené prvky.

---

## Jak Insertion Sort funguje krok za krokem?

Představme si, že máme nesetříděný seznam čísel: [7, 3, 5, 1, 9]


1. **První prvek necháme být**, protože samostatně je již seřazený.
   - `[7] | 3, 5, 1, 9`

2. **Vezmeme druhý prvek (3) a vložíme ho na správné místo** mezi již seřazené prvky.
   - `[3, 7] | 5, 1, 9`

3. **Vezmeme třetí prvek (5) a vložíme ho na správné místo** mezi 3 a 7.
   - `[3, 5, 7] | 1, 9`

4. **Vezmeme čtvrtý prvek (1) a vložíme ho na správné místo** na začátek.
   - `[1, 3, 5, 7] | 9`

5. **Vezmeme pátý prvek (9) a vložíme ho na správné místo** (už je správně).
   - `[1, 3, 5, 7, 9]`

A máme hotovo! Seznam je seřazený.

---

## Implementace v JavaScriptu

Tady je jednoduchá implementace **Insertion Sortu** v JavaScriptu:

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Aktuální prvek k zařazení
        let j = i - 1;

        // Posunujeme větší prvky doprava
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Vložíme aktuální prvek na správné místo
        arr[j + 1] = key;
    }
    return arr;
}

// Testovací seznam
const numbers = [7, 3, 5, 1, 9];
console.log(insertionSort(numbers)); // Výstup: [1, 3, 5, 7, 9]
