# Timery v JavaScriptu

Timery v JavaScriptu umožňují spouštět kód po určité době nebo opakovaně v určitých intervalech. Používají se zejména pro animace, aktualizaci dat nebo zpožděné akce.

## 1. `setTimeout` – jednorázové zpoždění
Funkce `setTimeout` vykoná danou funkci **po uplynutí určité doby** (v milisekundách).

```javascript
setTimeout(() => {
    console.log("Tento text se zobrazí po 2 sekundách");
}, 2000);
```

- První argument je funkce, která se má vykonat.
- Druhý argument je zpoždění v **milisekundách** (1000 ms = 1 sekunda).

### Zrušení `setTimeout`
Pokud chceme zrušit naplánované provedení kódu, použijeme `clearTimeout`.

```javascript
let timeoutId = setTimeout(() => {
    console.log("Tento text se nikdy nezobrazí");
}, 5000);

clearTimeout(timeoutId); // Zruší plánovaný `setTimeout`
```

## 2. `setInterval` – opakované spouštění kódu
Funkce `setInterval` spouští kód **opakovaně** v zadaném intervalu.

```javascript
let intervalId = setInterval(() => {
    console.log("Tento text se vypíše každou sekundu");
}, 1000);
```

### Zastavení `setInterval`
Pro zastavení opakovaného volání použijeme `clearInterval`.

```javascript
clearInterval(intervalId);
```

## 3. `setTimeout` vs. `setInterval`
| Funkce | Popis |
|--------|--------|
| `setTimeout` | Spustí funkci **jednou** po určité době. |
| `setInterval` | Spouští funkci **opakovaně** v určených intervalech. |

## 4. `setTimeout` jako alternativa k `setInterval`
Místo `setInterval` lze použít rekurzivní `setTimeout`, což je užitečné pro dynamické intervaly.

```javascript
function opakovaneVolani() {
    console.log("Tento text se vypíše každé 2 sekundy");
    setTimeout(opakovaneVolani, 2000);
}

opakovaneVolani();
```

## 5. Praktický příklad – odpočet času
Zde je ukázka jednoduchého odpočtu, který se každou sekundu aktualizuje:

```javascript
let sekundy = 10;

let odpocet = setInterval(() => {
    console.log(`Zbývá: ${sekundy} sekund`);
    sekundy--;

    if (sekundy < 0) {
        clearInterval(odpocet);
        console.log("Čas vypršel!");
    }
}, 1000);
```

## Shrnutí
- `setTimeout` vykoná kód **po určité době**.
- `setInterval` opakovaně spouští kód **v pravidelných intervalech**.
- `clearTimeout` a `clearInterval` umožňují zrušit naplánované akce.
- Rekurzivní `setTimeout` může být alternativou k `setInterval`.

Timery jsou velmi užitečné pro animace, aktualizace dat nebo zpožděné akce! 🚀
