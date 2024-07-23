# Operace s čísly v JavaScriptu

## Úvod

V JavaScriptu můžeme s čísly provádět různé matematické operace. Tento dokument vysvětluje základní operace s čísly a ukazuje je na jednoduchých příkladech.

## Základní aritmetické operace

### Sčítání (+)

Operace sčítání se používá k přidání dvou nebo více čísel dohromady.

#### Příklad:
```javascript
const a = 10;
const b = 20;
var soucet = a + b;
console.log(soucet); //vypíše se 30
```

### Odčítání (-)

Operace odčítání se používá k odečtení jednoho čísla od druhého.

#### Příklad:
```javascript
var a = 30;
var b = 10;
var rozdil = a - b;
console.log(rozdil); //vypíše se 20
```

### Násobení (*)

Operace násobení se používá k násobení dvou nebo více čísel.

#### Příklad:
```javascript
var a = 30;
var b = 10;
var vysledek = a * b;
console.log(vysledek); //vypíše se 300
```

### Dělení (/)

Operace dělení se používá k dělení jednoho čísla druhým.

#### Příklad:
```javascript
var a = 30;
var b = 10;
var vysledek = a / b;
console.log(vysledek); //vypíše se 3
```

### Zbytek po dělení (Modulo) (%)

Operace modulo se používá k získání zbytku po dělení jednoho čísla druhým.

#### Příklad:
```javascript
let a = 10;
let b = 3;
let zbytek = a % b;
console.log(zbytek); // vypíše se 1 (protože 10/3 jsou 3 a zbytek v celých číslech je 1)
```

## Inkrementace a dekrementace

### Inkrementace (++)

Operace inkrementace se používá k automatickému **zvýšení** hodnoty čísla o 1.

#### Příklad:
```javascript
var a = 5;
a++;
console.log(a); // 6
```

### Dekrementace (--)

Operace inkrementace se používá k automatickému **snížení** hodnoty čísla o 1.

#### Příklad:
```javascript
var a = 5;
a--;
console.log(a); // 4
```

## Příklady použití operátorů
Složené operátory kombinují aritmetické operace s přiřazením.

Pokud například máme v proměnné **x** uloženo číslo 10 a chceme ho o zvýšit o 3, použijeme tento přístup :

```javascript
var x = 10;
x = (x + 10); // zde jsme v podstatě do x dosadili jeho hodnotu zvýšenou o 10 (nejdříve se provede pravá strana tzn (x + 10))
```

>***Tip.:*** V části kde přidělujeme novou hodnotu -> **x = (x + 10)** , konkrétně v tom **(x + 10)** nemusíme závorky psát, ale můžeme. Při práci s čísly v programování **platí stejná priorita pro závorky jako v matematice**. Pro takto jednoduchý výpočet tedy závorky nepotřebujeme, ale pro přehlednost je budu i dále používat :)

Stejný postup zvolíme pro všechny ostatní operace.:

### Odčítání
```javascript
var x = 10;
x = (x - 10);
console.log(x) // vypíše se 0
```

### Násobení
```javascript
var x = 10;
x = (x * 10);
console.log(x) // vypíše se 100
```

### Dělení
```javascript
var x = 10;
x = (x / 10);
console.log(x) // vypíše se 1
```

### Modulo (zbytek po dělení)
```javascript
var x = 10;
x = (x % 4);
console.log(x) // vypíše se 2 (10 / 4 je 2 a zbytek po dělení je 2)
```

## Zkrácený zápis operátorů
Pokud chceme trochu zápis zkrátit, tak můžeme použít zkrácený způsob zápisu.

Sice je zápis kratší ale děje se úplně to stejné jako při dlouhém zápisu.

### Sčítání
```javascript
var x = 10;
x = (x + 10);   // delší zápis
x += 10;        //kratší zápis
console.log(x) //vypíše se 30
```

### Odčítání
```javascript
var x = 10;
x = (x - 10);   // delší zápis
x -= 10;         //kratší zápis
console.log(x) //vypíše se -10
```

### Násobení
```javascript
var x = 10;
x = (x * 10);   // delší zápis
x *= 10;        //kratší zápis
console.log(x) //vypíše se 1000
```

### Dělení
```javascript
var x = 10;
x = (x / 10);   // delší zápis
x /= 10;        //kratší zápis
console.log(x) //vypíše se 0.1
```

### Modulo (zbytek po dělení)
```javascript
var x = 1000;
x = (x % 10);   // delší zápis, x je nyní 0
console.log(x); // vypíše se 0

x = 1001;
x %= 10;        // kratší zápis, x je nyní 1
console.log(x); // vypíše se 1
```