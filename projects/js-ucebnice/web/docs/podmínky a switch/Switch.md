# Switch v JavaScriptu

## Úvod

`Switch` je alternativní způsob, jak provádět podmíněné operace, který může být přehlednější a jednodušší než použití více `if...else if...else` podmínek. Umožňuje nám provádět různé akce na základě hodnoty výrazu.

## Jak funguje `switch`

Syntaxe `switch` se skládá z výrazu, který je vyhodnocen jednou, a několika případů (`case`), které jsou porovnány s hodnotou výrazu. Pokud se hodnota shoduje s nějakým případem, vykoná se příslušný blok kódu. Můžeme také použít volitelný blok `default`, který se provede, pokud žádný případ neodpovídá.

### Syntaxe (zápis):
```javascript
switch (výraz) {
    case hodnota1:
        // blok kódu
        break;
    case hodnota2:
        // blok kódu
        break;
    // další případy
    default:
        // blok kódu
}
```
Fungování switche je vcelku prostá. Do závorky dosadíme do switche nějakou hodnotu nebo proměnnou. Ta je pak porovnávána s hodnotami za klíčovým slovem `case` . Pokud se najde odpovídající hodnota, vykoná se blok kódu který k této hodnotě patří.

## Příklady použití `switch`e
### Příklad 1: Jednoduchý switch

```javascript
let den = 3;
let jmenoDne;

switch (den) {          //dosadili jsme proměnnou den (ve které je hodnota 3)
    case 1:
        jmenoDne = "Pondělí";
        break;
    case 2:
        jmenoDne = "Úterý";
        break;
    case 3:                         //switch jde postupně a zde rozezná že se hodnoty rovnají
        jmenoDne = "Středa";        //začne postupně plnit kod
        break;                      // po dokončení kodu zavolá break, čímž zastaví průchod switche
    case 4:
        jmenoDne = "Čtvrtek";
        break;
    case 5:
        jmenoDne = "Pátek";
        break;
    case 6:
        jmenoDne = "Sobota";
        break;
    case 7:
        jmenoDne = "Neděle";
        break;
    default:                        //kdyby žádná hodnota neodpovídala tak se spustí kod pod default:
        jmenoDne = "Neplatný den";
}

console.log(jmenoDne); // Středa - protože nám to tam dosadil switch
```

### Příklad 2: Použití `default` bloku
```javascript
let ovoce = "Jablko";

switch (ovoce) {
    case "Banán":
        console.log("Ovoce je Banán");
        break;
    case "Jablko":
        console.log("Ovoce je Jablko");
        break;
    case "Pomeranč":
        console.log("Ovoce je Pomeranč");
        break;
    default:            //spustí se následující kod protože žádná hodnota neodpovídá
        console.log("Neznámé ovoce");   // vypíše do konzole text
}
// Ovoce je Jablko
```

### Příklad 3: Případy s více hodnotami
```javascript
let barva = "červená";

switch (barva) {
    case "modrá":               //pokud jedna z těchto hodnot odpovídá tak se provede blok kodu
    case "zelená":
        console.log("Barva je studená");
        break;
    case "červená":
    case "oranžová":
    case "žlutá":
        console.log("Barva je teplá");
        break;
    default:
        console.log("Neznámá barva");
}
// Barva je teplá - se vypíše do konzole
```

## Pokročilejší zápis `switch`e

V JavaScriptu můžeme také použít funkce a lambda výrazy (také nazývané "arrow functions") ve spojení se `switch` pro lepší modularitu a čitelnost kódu.

### Příklad `switch`e s lambdou a arrow function

```javascript
let operace = "součet";
let a = 5;
let b = 3;

switch (operace) {
    case "součet":      // porovná hodnotu
        (() => {
            let vysledek = a + b;
            console.log(`Výsledek: ${vysledek}`);
        })();
        break;
    case "rozdíl":
        (() => {
            let vysledek = a - b;
            console.log(`Výsledek: ${vysledek}`);
        })();
        break;
    case "součin":
        (() => {
            let vysledek = a * b;
            console.log(`Výsledek: ${vysledek}`);
        })();
        break;
    case "podíl":
        (() => {
            let vysledek = a / b;
            console.log(`Výsledek: ${vysledek}`);
        })();
        break;
    default:
        console.log("Neznámá operace");
}
// Výsledek: 8 (pokud je operace "součet")
```

>***Pozn.:*** Když používáme **lambda** výraz ve `switchi`, tak se místo řádků kodu volají ***anonymní funkce*** které mohou být rozsáhlejší. Můžeme tak pro každý případ mít rozsáhlejší zpracování a kód. <br> **O lambdě a arrow funkcích se ještě budeme bavit**.