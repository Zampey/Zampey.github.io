# Podmínky v JavaScriptu

## Úvod

Podmínky jsou základním stavebním kamenem v programování, který nám umožňuje rozhodovat, jaký kód se má vykonat na základě určitých podmínek. Pomocí podmínek můžeme vytvářet dynamické a interaktivní programy, které reagují na různé vstupy a situace.

## Co jsou podmínky a k čemu se používají?

Podmínky jsou logické výrazy, které vrací pravdivostní hodnotu `true` nebo `false`. Na základě těchto hodnot můžeme určit, který blok kódu se vykoná. Podmínky se používají k rozhodování, řízení toku programu a reakci na různé události.

## If (podmínka)

Klíčové slovo `if` se používá k provedení bloku kódu, pokud je zadaná podmínka pravdivá.
Do závorek píšeme situaci která se má vyhodnotit

### Příklad:
```javascript
let cislo = 10;

if (cislo > 5) {
    console.log("Číslo je větší než 5");
}
// V tomto případě se vypíše "Číslo je větší než 5", protože podmínka (cislo > 5) je pravdivá.
```

## If {} else {}

Klíčové slovo `else` se používá k provedení bloku kódu, pokud je zadaná podmínka nepravdivá.
Pokud použijeme pouze `if`bez `else` tak pokud je podmínka pravdivá tak se vykoná kód ve složených závorkách pod `if`. My ale chceme například reagovat i na to pokud pravdivá není. A k tomu použijeme `else`

>***Pozn.:*** `if{} else{}` se dá taky chápat ve slovním vyjádření jako : "Pokud platí tento stav, vykonej kód pod if, jinak vykonej kód pod else"

### Příklad:
```javascript
let cislo = 3;

if (cislo > 5) {
    console.log("Číslo je větší než 5"); // pokud je výsledek situace v podmínce true tak se provede kod v těchto závorkách
} else {
    console.log("Číslo není větší než 5"); // pokud je výsledek situace v podmínke false tak se provede kod v těchto závorkách
}
// V tomto případě se vypíše "Číslo není větší než 5", protože podmínka (cislo > 5) je nepravdivá.
```

## If {} else if {} else {}

Klíčové slovo `else if` se používá k provedení nového bloku kódu, pokud je další podmínka pravdivá. Můžete použít několik else if podmínek pro různé možnosti. Pokud například chceme zjistit zda je číslo větší, menší nebo rovno nějakému jinému číslu.

### Příklad:
```javascript
let cislo1 = 10;
let cislo2 = 20;

if (cislo1 > cislo2){
    console.log(`číslo ${cislo1} je větší než ${cislo2}`); // provede se pokud platí podmínka na tím
}else if (cislo1 < cislo2){
    console.log(`číslo ${cislo1} je menší než ${cislo2}`); // provede se pokud platí podmínka na tím
}else {
    console.log(`číslo ${cislo1} se rovná číslu ${cislo2}`); // pokud není cislo1 větší ani menší, tak se musí rovnat.
}
```

>***Tip.:*** Podmínka se provádí postupně, občas musíme tedy dobře zvážít pořadí podmínek, aby se nám neukončila podmínka dříve než chceme. Můžou totiž platit například 2 situace zároveň ale my chceme reagovat prioritně na jednu.


## Složené podmínky
Podmínky mohou být složeny pomocí logických operátorů jako **&&** (AND) a **||** (OR).

### Příklad s AND (&&):
```javascript
let vek = 20;

if (vek >= 18 && vek <= 25) {
    console.log("Věk je mezi 18 a 25");
}
// V tomto případě se vypíše "Věk je mezi 18 a 25", protože obě podmínky (vek >= 18) a (vek <= 25) jsou pravdivé.
```

### Příklad s OR (||):
```javascript
let den = "sobota";

if (den === "sobota" || den === "neděle") {
    console.log("Je víkend");
}
// V tomto případě se vypíše "Je víkend", protože alespoň jedna podmínka (den === "sobota") nebo (den === "neděle") je pravdivá.
```