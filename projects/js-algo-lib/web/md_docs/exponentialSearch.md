# 🔎 Exponential Search - Jak funguje?

**Exponential Search** je efektivní vyhledávací algoritmus, který kombinuje **rychlé exponenciální skoky** s **binárním vyhledáváním** pro nalezení prvku v **seřazeném poli**.

📌 **Hlavní myšlenka:**
1. **Exponenciální skoky** → Rychle najdeme rozsah, kde se hledaný prvek může nacházet.
2. **Binární vyhledávání** → V tomto rozsahu najdeme přesnou pozici prvku.

📌 **Kdy použít Exponential Search?**
- **Funguje pouze na seřazených polích.**
- **Rychlejší než lineární a jump search pro velká pole.**
- **Užitečné pro nekonečné nebo velmi velké pole (např. streamovaná data).**

---

## 🛠 Jak Exponential Search funguje krok za krokem?

Mějme **seřazené pole** a hledáme číslo `18`:

- Indexy: 0 1 2 3 4 5 6 7 8 9
- Pole: [1, 3, 6, 9, 12, 15, 18, 21, 24, 27]


1️⃣ **První skok o `2^0 = 1` na index `0`** → `1`
   - `1 < 18`, pokračujeme.

2️⃣ **Druhý skok o `2^1 = 2` na index `1`** → `3`
   - `3 < 18`, pokračujeme.

3️⃣ **Další skok o `2^2 = 4` na index `3`** → `9`
   - `9 < 18`, pokračujeme.

4️⃣ **Další skok o `2^3 = 8` na index `7`** → `21`
   - `21 > 18`, zpomalíme!

📌 **Teď víme, že `18` je mezi indexy `3` a `7`.**
📌 **Použijeme binární vyhledávání v rozsahu `[3, 7]`.**

---

## ⚡ Implementace v JavaScriptu

```javascript
function exponentialSearch(arr, target) {
    let n = arr.length;

    // Speciální případ - pokud hledaný prvek je první
    if (arr[0] === target) return 0;

    // Hledání rozsahu pomocí exponenciálních skoků
    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    // Použití binárního vyhledávání v nalezeném rozsahu
    return binarySearch(arr, target, i / 2, Math.min(i, n - 1));
}

function binarySearch(arr, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// 📌 Testování
const numbers = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
console.log(exponentialSearch(numbers, 18)); // Výstup: 6
console.log(exponentialSearch(numbers, 10)); // Výstup: -1 (není v poli)
```

## 🧠 Shrnutí
✅ Exponential Search kombinuje exponenciální skoky s binárním vyhledáváním.

✅ Je rychlejší než lineární, jump search a někdy i čistě binární vyhledávání.

✅ Používá se pro velmi velká pole nebo dynamická data (streamy).

📌 Srovnání časové složitosti:

Lineární vyhledávání (O(n)) → Prochází celé pole.
- Jump Search (O(√n)) → Efektivnější, ale stále prochází mnoho prvků.
- Binární vyhledávání (O(log n)) → Velmi efektivní pro seřazená pole.
- Exponential Search (O(log n)) → Může být rychlejší než binární při velmi velkých datech!

🔹 Používej Exponential Search, pokud máš extrémně velké pole a chceš rychlé hledání! 🚀