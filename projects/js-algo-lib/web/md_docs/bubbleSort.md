# Bubblesort Algoritmus v JavaScriptu

Bubblesort je jeden z nejjednodušších algoritmů pro třídění seznamů. Je to **seřazení podle bublin**, kde se postupně porovnávají sousední prvky a v případě, že jsou v špatném pořadí, vymění se. Tento proces se opakuje, dokud celý seznam není seřazený.

### Jak funguje Bubblesort?

1. **Projdeme seznam** zleva doprava.
2. **Porovnáme každý pár sousedních prvků**.
3. Pokud jsou v nesprávném pořadí (například větší číslo je před menším), **prohodíme je**.
4. Tento proces opakujeme, dokud neprojdeme seznam zcela bez provedení žádných výměn.

Představme si, že máme seznam: `[5, 3, 8, 4, 2]`. Bubblesort by probíhal následovně:

- **První průchod**:
  - Porovnáme `5` a `3`. Prohodíme je, protože `5` je větší než `3`. Seznam vypadá: `[3, 5, 8, 4, 2]`
  - Porovnáme `5` a `8`. Neprohodíme je, protože jsou ve správném pořadí.
  - Porovnáme `8` a `4`. Prohodíme je, protože `8` je větší než `4`. Seznam vypadá: `[3, 5, 4, 8, 2]`
  - Porovnáme `8` a `2`. Prohodíme je, protože `8` je větší než `2`. Seznam vypadá: `[3, 5, 4, 2, 8]`

- **Druhý průchod**:
  - Porovnáme `3` a `5`. Neprohodíme je.
  - Porovnáme `5` a `4`. Prohodíme je. Seznam vypadá: `[3, 4, 5, 2, 8]`
  - Porovnáme `5` a `2`. Prohodíme je. Seznam vypadá: `[3, 4, 2, 5, 8]`
  - Porovnáme `5` a `8`. Neprohodíme je.

- **Třetí průchod**:
  - Porovnáme `3` a `4`. Neprohodíme je.
  - Porovnáme `4` a `2`. Prohodíme je. Seznam vypadá: `[3, 2, 4, 5, 8]`
  - Porovnáme `4` a `5`. Neprohodíme je.

Pokračujeme v tomto procesu, dokud neprojdeme seznam bez jakýchkoli výměn.

---

### Kód v JavaScriptu

Tady je ukázka, jak implementovat Bubblesort v JavaScriptu:

#### 1. Definice funkce `bubbleSort`

Nejprve si definujeme funkci, která přijme seznam (pole) a vrátí seřazený seznam.

```javascript
function bubbleSort(arr) {
  let n = arr.length;

  // Provedeme několik průchodů seznamem
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    // Porovnáváme sousední prvky
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Pokud jsou v nesprávném pořadí, vyměníme je
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // Pokud během průchodu nebyla žádná výměna, seznam je již seřazený
    if (!swapped) break;
  }
  return arr;
}
