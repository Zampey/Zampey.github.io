# Quick Sort - Jak funguje?

Quick Sort je **třídicí algoritmus**, což znamená, že slouží k seřazení čísel nebo jiných dat do nějakého pořadí (například vzestupně). Quick Sort je velmi rychlý, ale abychom pochopili, jak funguje, je potřeba se seznámit s několika základními kroky.

## Základní princip

Quick Sort funguje tak, že:

1. **Rozdělí seznam na menší části**.
2. **Seřadí tyto menší části**.
3. **Spojí je zpět dohromady**.

To vše se děje pomocí jednoho speciálního triku, kterému říkáme **pivot**. Pivot je prvek, kolem kterého rozdělíme seznam.

## Jak Quick Sort funguje krok za krokem?

Představme si, že máme seznam čísel, který chceme seřadit: **[10, 7, 8, 9, 1, 5]**


1. **Vybereme pivot**: Nejprve si vybereme jeden prvek v seznamu jako **pivot**. Obvykle se vybírá poslední prvek, takže v tomto případě je pivot číslo **5**.

2. **Rozdělíme seznam**: Pak vezmeme všechny prvky v seznamu a porovnáme je s pivotem. Pokud je prvek menší než pivot, umístíme ho nalevo, pokud je větší, umístíme ho napravo. Po tomto kroku máme dva nové seznamy:

   - Prvky menší než pivot: `[1]`
   - Prvky větší než pivot: `[10, 7, 8, 9]`

   A pivot se umístí mezi ně: `[1, 5, 10, 7, 8, 9]`.

3. **Rekurzivně seřadíme obě části**: Nyní provedeme Quick Sort na **levé** a **pravé** části seznamu. Levá část má pouze jeden prvek, což znamená, že je již seřazená. U pravé části opakujeme stejný postup.

### Jak tedy probíhá třídění pravé části?

- Máme seznam: `[10, 7, 8, 9]`
- Vybereme pivot (tento krok je opakován): `9`
- Rozdělíme seznam na:
  - `[7, 8]` (prvky menší než pivot)
  - `[10]` (prvky větší než pivot)

Znovu použijeme Quick Sort na `[7, 8]`, kde pivot bude `8` a rozdělení dá `[7]` a `[8]`, což jsou již seřazené části.

4. **Spojíme vše dohromady**: Jakmile máme všechny části seřazené, spojíme je zpět dohromady. Seznam vypadá takto: **[1, 5, 7, 8, 9, 10]**


A teď máme seřazený seznam!

## Ukázka kódu v JavaScriptu

Pokud chcete vidět, jak tento algoritmus vypadá v kódu, tady je jeho jednoduchá implementace v JavaScriptu:

```javascript
function quickSort(arr) {
    // Pokud seznam má 1 nebo méně prvků, je již seřazený
    if (arr.length <= 1) {
        return arr;
    }

    // Vybereme pivot (poslední prvek)
    const pivot = arr[arr.length - 1];

    // Seznamy pro menší a větší prvky
    let left = [];
    let right = [];

    // Rozdělíme seznam podle pivotu
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Menší než pivot
        } else {
            right.push(arr[i]); // Větší než pivot
        }
    }

    // Rekurzivně seřadíme levý a pravý seznam a spojíme je s pivotem
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testovací seznam
const arr = [10, 7, 8, 9, 1, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr);  // Výstup: [1, 5, 7, 8, 9, 10]
