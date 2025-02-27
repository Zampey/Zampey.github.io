# 🔍 Binární vyhledávání (Binary Search) - Jak funguje?

**Binární vyhledávání** je efektivní algoritmus pro vyhledávání prvku v **seřazeném poli**.
Využívá **rozděl a panuj (divide & conquer)** strategii, což znamená, že v každém kroku **rozdělí pole na polovinu** a hledá jen v té správné části.

📌 **Kdy použít binární vyhledávání?**
- **Pouze pro seřazená pole!** (Např. `[1, 3, 5, 7, 9, 11]`).
- **Když potřebujeme rychlé hledání** – **O(log n)** oproti lineárnímu hledání **O(n)**.

---

## 🛠 Jak binární vyhledávání funguje krok za krokem?

Mějme **seřazené pole** a hledáme číslo `7`:

- Indexy: 0 1 2 3 4 5
- Pole: [1, 3, 5, 7, 9, 11]


1️⃣ **Najdeme prostřední prvek**
   - **(left = 0, right = 5) → middle = (0+5)/2 = 2**
   - **Střední prvek je `5`** → není to `7`, ale `7 > 5`, takže hledáme **vpravo**.

<pre>
[1, 3, 5, 7, 9, 11]
       ↑ middle (5)
</pre>


2️⃣ **Hledáme v pravé části pole**
   - Nové **rozmezí je [7, 9, 11] (indexy 3 až 5)**.
   - **(left = 3, right = 5) → middle = (3+5)/2 = 4**
   - **Střední prvek je `9`** → `7 < 9`, takže hledáme **vlevo**.

<pre>
[7, 9, 11]
    ↑ middle (9)
</pre>


3️⃣ **Zbývá poslední prvek `7`**
   - **left = 3, right = 3 → middle = 3**
   - Střední prvek je **`7`**, což je **náš hledaný prvek!** ✅

🎯 **Našli jsme číslo `7` na indexu `3`!**

---

## ⚡ Implementace v JavaScriptu

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle; // Našli jsme prvek!
        } else if (arr[middle] < target) {
            left = middle + 1; // Hledáme vpravo
        } else {
            right = middle - 1; // Hledáme vlevo
        }
    }

    return -1; // Prvek nebyl nalezen
}

// 📌 Testování
const numbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(numbers, 7)); // Výstup: 3
console.log(binarySearch(numbers, 4)); // Výstup: -1 (není v poli)
```

## 🧠 Shrnutí

✅ Binární vyhledávání je mnohem rychlejší než obyčejné hledání (O(log n) místo O(n)).

✅ Podmínka: Pole musí být seřazené!

✅ Funguje tak, že postupně dělí pole na poloviny a hledá jen tam, kde může být prvek.

📌 Příklad časové složitosti:

Pole s 1 000 000 prvky → Lineární hledání (O(n)): až 1 000 000 kroků.

Binární hledání (O(log n)): Pouze ≈ 20 kroků! 😲

🚀 Používej binární vyhledávání, když hledáš v seřazeném poli a potřebuješ rychlost!