# Heap Sort - Jak funguje?

Heap Sort (**třídění haldou**) je efektivní třídicí algoritmus, který využívá **datovou strukturu haldy (heap)** k uspořádání prvků.

**Hlavní myšlenka:**
1. Přeměníme vstupní pole na **max haldu** (max heap) – strukturu, kde rodičovský prvek je vždy větší než jeho potomci.
2. **Vyměníme první a poslední prvek** a zmenšíme velikost haldy.
3. **Obnovíme strukturu haldy (heapify)**, aby byla opět validní.
4. Opakujeme, dokud není pole seřazené.

---

## Jak Heap Sort funguje krok za krokem?

Mějme nesetříděný seznam: [7, 3, 5, 1, 9]


1. **Přeměníme ho na max haldu** - největší prvek je kořen
<pre>
        9
       / \
      7   5
     / \
    1   3
</pre>
Pole po přestavbě na max heap: [9, 7, 5, 1, 3]


2. **Vyměníme kořen (9) s posledním prvkem (3) a opravíme haldu**
<pre>
        7
       / \
      3   5
     /
    1
</pre>
Pole po výměně: [3, 7, 5, 1, 9]

Pole po opravě haldy znovu na max haldu: [7, 3, 5, 1, | 9] - s kořeny které jsme již z haldy odstranili nepracujeme

3. **Znovu vyměníme kořen (7) s posledním prvkem (1) a opravíme haldu**
<pre>
      5
     / \
    3   1
</pre>
Pole po výměně: [1, 3, 5, 7, 9]

Pole po opravě: [5, 3, 1, | 7, 9]

4. **Pokračujeme, dokud není pole seřazené**
**Výsledek:** `[1, 3, 5, 7, 9]`

---

## Implementace v JavaScriptu

```javascript
function heapSort(arr) {
 let n = arr.length;

 // Přeměníme pole na max haldu
 for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
     heapify(arr, n, i);
 }

 // Postupně odebíráme prvky z haldy
 for (let i = n - 1; i > 0; i--) {
     // Vyměníme kořen (max hodnotu) s posledním prvkem
     [arr[0], arr[i]] = [arr[i], arr[0]];
     heapify(arr, i, 0); // Opravíme haldu pro zbytek pole
 }

 return arr;
}

function heapify(arr, n, i) {
 let largest = i; // Největší prvek (kořen)
 let left = 2 * i + 1; // Levý potomek
 let right = 2 * i + 2; // Pravý potomek

 // Pokud levý potomek existuje a je větší než rodič
 if (left < n && arr[left] > arr[largest]) {
     largest = left;
 }

 // Pokud pravý potomek existuje a je větší než největší dosud nalezený prvek
 if (right < n && arr[right] > arr[largest]) {
     largest = right;
 }

 // Pokud se největší prvek změnil, provedeme výměnu a rekurzivně opravíme podstrom
 if (largest !== i) {
     [arr[i], arr[largest]] = [arr[largest], arr[i]];
     heapify(arr, n, largest);
 }
}

// Testování algoritmu
const numbers = [7, 3, 5, 1, 9];
console.log(heapSort(numbers)); // Výstup: [1, 3, 5, 7, 9]
