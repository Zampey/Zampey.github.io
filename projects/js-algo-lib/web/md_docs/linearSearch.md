# 🔎 Lineární vyhledávání (Linear Search) - Jak funguje?

**Lineární vyhledávání (Linear Search)** je nejjednodušší algoritmus pro hledání prvku v poli.
Prochází pole **postupně** od prvního do posledního prvku, dokud nenajde hledaný prvek nebo nedojde na konec.

📌 **Kdy použít lineární vyhledávání?**
- **Když pole NENÍ seřazené**.
- **Když je pole malé** (pro velká pole je binární vyhledávání rychlejší).

---

## 🛠 Jak lineární vyhledávání funguje krok za krokem?

Mějme **nesetříděné pole** a hledáme číslo `7`:

- Indexy: 0 1 2 3 4 5
- Pole: [5, 1, 7, 3, 9, 2]


1️⃣ **Začneme na indexu 0**
   - **Prvek `5`** → není `7`, pokračujeme.

2️⃣ **Porovnáme další prvek (index 1)**
   - **Prvek `1`** → není `7`, pokračujeme.

3️⃣ **Porovnáme další prvek (index 2)**
   - **Prvek `7`** → **je to náš hledaný prvek! ✅**

🎯 **Našli jsme číslo `7` na indexu `2`!**

---

## ⚡ Implementace v JavaScriptu

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Našli jsme prvek na indexu i
        }
    }
    return -1; // Prvek nebyl nalezen
}

// 📌 Testování
const numbers = [5, 1, 7, 3, 9, 2];
console.log(linearSearch(numbers, 7)); // Výstup: 2
console.log(linearSearch(numbers, 4)); // Výstup: -1 (není v poli)
```

## 🧠 Shrnutí
✅ Lineární vyhledávání je jednoduché, ale pomalejší než binární vyhledávání (O(n) místo O(log n)).

✅ Funguje na neseřazených polích – nemusíme pole řadit před hledáním.

✅ Nevyžaduje žádnou speciální strukturu dat – funguje v libovolném poli.

📌 Srovnání časové složitosti:

Pole s 1 000 000 prvky →

Nejhorší případ (O(n)): až 1 000 000 kroků.

Binární hledání (O(log n)): Pouze ≈ 20 kroků! 😲

🔹 Používej lineární vyhledávání, když pracuješ s malými nebo neseřazenými poli.

🔹 Pro větší pole je lepší binární vyhledávání! 🚀