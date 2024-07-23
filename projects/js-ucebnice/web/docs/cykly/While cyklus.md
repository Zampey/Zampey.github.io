# While cyklus v JavaScriptu

## Úvod

`While` cyklus je jeden z nejčastěji používaných způsobů, jak opakovaně vykonávat blok kódu, dokud je splněna určitá podmínka. Tento typ cyklu je užitečný, když předem nevíte, kolikrát bude potřeba smyčku provést.

## Jak `while` cyklus funguje?

Syntaxe `while` cyklu je jednoduchá. Smyčka se vykonává, dokud je podmínka pravdivá. Jakmile se podmínka stane nepravdivou, smyčka se zastaví.

### Syntaxe:
```javascript
while (podmínka) {
    // kód, který se provede, pokud je podmínka pravdivá
}
```
## Použití while cyklu
`While` cyklus se používá v situacích, kdy potřebujete opakovaně provádět blok kódu, dokud není splněna určitá podmínka. Může být užitečný například při iteraci přes data, čekání na určitý stav nebo opakovaném pokusu o splnění podmínky.

### Příklad 1: Jednoduchý while cyklus
```javascript
let i = 0;

while (i < 5) { // před každým průchodem se zkontroluje zda vyjde podmínka true. pokud ano tak se provede další průchod
    console.log(i);
    i++;
}
// Vypíše:
// 0   1. průchod
// 1   2. průchod
// 2   3. průchod
// 3   4. průchod
// 4   5. průchod
```
V Tomto příkladu byla podmínka zda je proměná **i** menší než 5. To platilo a tak se provedl první průchod. <br> V tomto půchodu se provedl kod který zvedl hodnotu **i** o 1.<br>V dalším průchodu tedy byla hodnota 1 a stále tak platilo že (i<5) . <br> Provedl se tedy další průchod.<br> A tak dál... Dokud se nezvedla hodnota v **i** dost na to aby přestalo platit i<5 .

### Příklad 2: Použití while cyklu k nalezení prvního sudého čísla
```javascript
let cislo = 1;

while (cislo % 2 !== 0) { // pokud celočíselný zbytek po dělení proměnné cislo číslem 2 není 0
    console.log(`${cislo} není sudé číslo`);
    cislo++;
}

console.log(`${cislo} je sudé číslo`);
// Vypíše:
// 1 není sudé číslo
// 2 je sudé číslo
```
V tomto příkladu smyčka `while` pokračuje v iteraci, dokud cislo není sudé. Když se najde první sudé číslo, smyčka se zastaví.

### Příklad 3: Nekonečná smyčka
Buďte opatrní při používání `while` cyklů, protože pokud podmínka nikdy nebude nepravdivá, smyčka poběží navždy a způsobí nekonečnou smyčku.
```javascript
while (true) {
    console.log("Tato smyčka nikdy neskončí");
}
// Tento kód by měl být zastaven, protože způsobí nekonečnou smyčku.
```

>***Tip.:*** protože se průchody provádí pokud výsledek podmínky je **true**, tak pokud dosadíme **true** přímo do podmínky, tak ..... **true** bude vždycky **true**.

>***Tip.:*** Pokud bychom potřebovali zajistit že se cyklus zastaví, buďto aby nedošlo k nekonečné smyčce, nebo z jiného důvodu, můžeme použít klíčové slovo `break`, které stejně jako u switche zastaví pokračování cyklu a program bude pokračovat kódem který je až pod cyklem.


## Do-while cyklus
Kromě `while` cyklu existuje také `do-while` cyklus. Hlavní rozdíl je v tom, že `do-while` cyklus vykoná blok kódu alespoň jednou, než zkontroluje podmínku.

Zatímco `while` cyklus kontroluje podmínku ještě před prvním průchodem.

### Syntaxe:
```javascript
do {
    // kód, který se provede alespoň jednou než se zkontroluje podmínka
} while (podmínka); // pokud vyjde podmínka false, dálší průchody nebudou
```

### Příklad: do-while cyklus
```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
// Vypíše:
// 0
// 1
// 2
// 3
// 4
```

```javascript
do {
    console.log(i);
    i++;
} while (i > 5);
// Vypíše:
// 0    // po prvním průchodu zkontroluje podmínku, zjistí že je false, a dál nepokračuje
```