# Selection Sort - Jak funguje?

Selection Sort (**řazení výběrem**) je jednoduchý třídicí algoritmus, který **opakovaně hledá nejmenší prvek v nesetříděné části seznamu** a přesune ho na správné místo.

Představte si, že máte řadu čísel a chcete je seřadit. Selection Sort funguje tak, že **hledáte nejmenší číslo** a přesunete ho na začátek. Pak to zopakujete se zbytkem čísel, dokud není seznam úplně seřazený.

---

## Jak Selection Sort funguje krok za krokem?

Mějme nesetříděný seznam: [7, 3, 5, 1, 9]


1. **Najdeme nejmenší prvek (1) a vyměníme ho s prvním prvkem (7).**
   - **Výsledek po prvním průchodu:** `[1, 3, 5, 7, 9]`

2. **Najdeme nejmenší prvek ze zbytku (3) a necháme ho na místě.**
   - **Seznam je stále stejný:** `[1, 3, 5, 7, 9]`

3. **Najdeme nejmenší prvek ze zbytku (5) a necháme ho na místě.**
   - **Pořád stejné:** `[1, 3, 5, 7, 9]`

4. **Najdeme nejmenší prvek ze zbytku (7) a necháme ho na místě.**
   - **Seznam už je seřazený:** `[1, 3, 5, 7, 9]`

Po každém průchodu je **nejmenší prvek umístěn na správné místo**, dokud není seznam úplně seřazený. 🎯

---

## Implementace v JavaScriptu

```javascript
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Předpokládáme, že nejmenší prvek je na pozici i

        // Hledáme skutečně nejmenší prvek ve zbytku pole
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Našli jsme menší prvek, aktualizujeme index
            }
        }

        // Prohodíme prvky, pokud jsme našli menší
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Testování algoritmu
const numbers = [7, 3, 5, 1, 9];
console.log(selectionSort(numbers)); // Výstup: [1, 3, 5, 7, 9]
