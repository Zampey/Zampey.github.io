# Logické operace a operátory v JavaScriptu

## Úvod

Logické operátory a operace nám umožňují kombinovat a vyhodnocovat více podmínek. Jsou základem pro psaní podmínek a rozhodovacích struktur v programování. V JavaScriptu máme několik základních logických operátorů: AND (`&&`), OR (`||`) a NOT (`!`).

## Logické operátory

### AND (&&)

Operátor AND vrátí `true` pouze tehdy, pokud jsou **všechny** porovnávané situace pravdivé.

#### Příklad:
```javascript
let a = true;
let b = true;
let vysledek = a && b;
console.log(vysledek); // true, protože obě podmínky jsou pravdivé

a = true;
b = false;
vysledek = a && b;
console.log(vysledek); // false, protože jedna z podmínek je nepravdivá
```

### OR (||)

Operátor OR vrátí true, pokud **alespoň jedna** z porovnávaných podmínek je pravdivá.

#### Příklad:
```javascript
let a = true;
let b = false;
let vysledek = a || b;
console.log(vysledek); // true, protože alespoň jedna podmínka je pravdivá

a = false;
b = false;
vysledek = a || b;
console.log(vysledek); // false, protože žádná z podmínek není pravdivá
```

### NOT (!)

Operátor **NOT** vrátí opačnou hodnotu dané podmínky. Pokud je podmínka **pravdivá**, vrátí **false** a naopak.

#### Příklad:
```javascript
let a = true;
let vysledek = !a;
console.log(vysledek); // false, protože a je pravdivé

a = false;
vysledek = !a;
console.log(vysledek); // true, protože a je nepravdivé
```

## Kombinace logických operátorů
Logické operátory lze kombinovat pro vytvoření složitějších podmínek.

```javascript
let vek = 20;
let jeStudent = true;

var vyhodnoceni = (vek >= 18 && vek <= 25 && jeStudent) // podmínka se zkontroluje postupně po částech. nejdříve (vek >= 18) což je true, poté (vek <= 25) což je taky true, a pak jeStudent což je taky true.
console.log(vyhodnoceni); // true
```
Program si tedy z logických operací získá hodnoty true a false a interně si tedy předělá podmínku zhruba na něco takového:

(Toto je jak vidí podmínku JavaScript):

```javascript
(vek >= 18 && vek <= 25 && jeStudent)
//z toho si vytáhne true a false hodnoty tak že vyhodnotí jednotlivé části
(true && true && true)
// a protože je všechno true a operátory jsou && neboli AND tak je výsledek true
```