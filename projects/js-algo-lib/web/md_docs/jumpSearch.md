# 🔎 Jump Search - Jak funguje?

**Jump Search** je vyhledávací algoritmus, který je rychlejší než **Lineární vyhledávání (O(n))**, ale není tak rychlý jako **Binární vyhledávání (O(log n))**.

📌 **Hlavní myšlenka:**
Místo procházení pole po jednom prvku **skáčeme o pevně stanovené bloky** (např. po 4 prvcích).
Jakmile **najdeme blok, kde by mohl být hledaný prvek**, přepneme se na **lineární vyhledávání uvnitř tohoto bloku**.

📌 **Kdy použít Jump Search?**
- **Pole musí být seřazené!**
- **Rychlejší než lineární vyhledávání pro větší pole.**
- **Lépe se hodí pro velká pole uložená na pomalých médiích (např. pevné disky).**

---

## 🛠 Jak Jump Search funguje krok za krokem?

Mějme **seřazené pole** a hledáme číslo `18`:

- Indexy: 0 1 2 3 4 5 6 7 8 9
- Pole: [1, 3, 6, 9, 12, 15, 18, 21, 24, 27]


1️⃣ **Zvolíme velikost skoku** 🦘
   - Skáčeme **po 3 prvcích** (√n, kde `n = 10` → přibližně `3`).

2️⃣ **První skok na index `3`** → `9`
   - `9 < 18`, tak pokračujeme dál.

3️⃣ **Druhý skok na index `6`** → `18`
   - **Našli jsme prvek! ✅**

Pokud by `18` bylo mezi indexy `3` a `6`, **použili bychom lineární hledání uvnitř tohoto bloku**.

---

## ⚡ Implementace v JavaScriptu

```javascript
function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n)); // Velikost skoku
    let prev = 0;

    // Skáčeme bloky, dokud nenajdeme rozsah s hledaným prvkem
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1; // Pokud jsme mimo pole, prvek neexistuje
    }

    // Lineární hledání v nalezeném bloku
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1; // Prvek v bloku není
    }

    return arr[prev] === target ? prev : -1; // Pokud jsme našli prvek, vrátíme index
}

// 📌 Testování
const numbers = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
console.log(jumpSearch(numbers, 18)); // Výstup: 6
console.log(jumpSearch(numbers, 10)); // Výstup: -1 (není v poli)

```

## 🧠 Shrnutí
✅ Jump Search je efektivnější než lineární vyhledávání (časová složitost O(√n)).

✅ Funguje pouze na seřazených polích – podobně jako binární vyhledávání.

✅ Urychluje hledání díky velkým skokům – méně porovnávání.

📌 Srovnání časové složitosti:

- Lineární vyhledávání (O(n)) → Prohledává celé pole.
- Jump Search (O(√n)) → Prohledává bloky, méně kroků!
- Binární vyhledávání (O(log n)) → Ještě efektivnější než Jump Search.

🔹 Používej Jump Search, pokud máš seřazené pole a chceš rychlejší vyhledávání než lineární!

🔹 Pro ještě větší pole je ale binární vyhledávání lepší! 🚀