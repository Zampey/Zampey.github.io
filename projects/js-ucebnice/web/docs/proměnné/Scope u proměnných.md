# Scope u proměnných v JavaScriptu

## Úvod

Scope (nebo-li "oblast platnosti") určuje, kde v kódu jsou proměnné dostupné. V JavaScriptu jsou dva hlavní typy scope: globální a lokální. Tento dokument vysvětlí, co znamená scope proměnných a jak klíčová slova `var`, `let` a `const` ovlivňují scope proměnných.

## Globální scope

Proměnné deklarované mimo jakoukoli funkci nebo blok mají globální scope. Jsou dostupné kdekoli v kódu.

### Příklad:
```javascript
var globalniPromenna = "Jsem globální";

function mojeFunkce() {
    console.log(globalniPromenna); // přístupná uvnitř funkce
}

console.log(globalniPromenna); // přístupná mimo funkci
```

## Lokální scope
Proměnné deklarované uvnitř funkce nebo bloku mají lokální scope. Jsou dostupné pouze uvnitř této funkce nebo bloku.

### Příklad s funkcí:
```javascript
function mojeFunkce() {
    var lokalniPromenna = "Jsem lokální";
    console.log(lokalniPromenna); // přístupná uvnitř funkce
}

console.log(lokalniPromenna); // chyba, proměnná není přístupná mimo funkci
```

### Příklad s blokem:
```javascript
if (true) {
    let blokovaPromenna = "Jsem bloková";
    console.log(blokovaPromenna); // přístupná uvnitř bloku
}

console.log(blokovaPromenna); // chyba, proměnná není přístupná mimo blok
```

## Klíčová slova **var**, **let** a **const**
### var
Proměnné deklarované pomocí var mají funkční nebo globální scope, nikoliv blokový scope. To znamená, že pokud jsou deklarovány uvnitř funkce, jsou dostupné pouze v této funkci, ale pokud jsou deklarovány mimo funkci, jsou dostupné globálně.
```javascript
function mojeFunkce() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10, x je přístupná uvnitř funkce
}

console.log(x); // chyba, x není přístupná globálně
```
### let
Proměnné deklarované pomocí let mají blokový scope. To znamená, že jsou dostupné pouze uvnitř bloku, ve kterém byly deklarovány.
```javascript
function mojeFunkce() {
    if (true) {
        let x = 10;
        console.log(x); // 10, x je přístupná uvnitř bloku
    }
    console.log(x); // chyba, x není přístupná mimo blok
}
```
### const
Proměnné deklarované pomocí const mají také blokový scope, stejně jako let, ale navíc jejich hodnota nemůže být znovu přiřazena.
```javascript
function mojeFunkce() {
    if (true) {
        const x = 10;
        console.log(x); // 10, x je přístupná uvnitř bloku
    }
    console.log(x); // chyba, x není přístupná mimo blok
}

const y = 20;
y = 30; // chyba, hodnota y nemůže být znovu přiřazena
```