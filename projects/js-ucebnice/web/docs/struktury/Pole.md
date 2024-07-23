# Pole v JavaScriptu

## Úvod

Pole (Array) je datová struktura, která umožňuje uchovávat více hodnot v jedné proměnné. Hodnoty v poli mohou být jakéhokoli typu a jsou uspořádány v indexech, které začínají na nule. Pole jsou velmi užitečná pro práci s kolekcemi nebo seznamy dat.

## Vytvoření pole

Pole lze vytvořit několika způsoby. Nejběžnější je použití hranatých závorek `[]`.

### Příklad:
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
console.log(ovoce); // ["Jablko", "Banán", "Pomeranč"]
```
#
Můžete také vytvořit pole pomocí konstruktoru `Array`.
### Příklad:
```javascript
let cisla = new Array(1, 2, 3, 4); // Zde je použití Objektového programování (Vysvětlíme si pozdělji)
console.log(cisla); // [1, 2, 3, 4]
```

## Přístup k prvkům pole
K prvkům pole se přistupuje pomocí jejich indexů. První prvek má index **0**, druhý má index **1**, a tak dále.

```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
console.log(ovoce[0]); // Jablko
console.log(ovoce[1]); // Banán
console.log(ovoce[2]); // Pomeranč
```

## Změna hodnoty v poli
Hodnoty v poli můžete měnit přiřazením nové hodnoty na konkrétní index.
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
ovoce[1] = "Hruška"; // v poli ovoce na prvku s indexem 1 (takže druhý prvek) pomocí znaku = nastavíme hodnotu na Hruška
console.log(ovoce); // ["Jablko", "Hruška", "Pomeranč"]
```

## Přidání a odstranění prvků
### Přidání prvků
Prvky můžete přidat na konec pole pomocí metody `push`.
```javascript
let ovoce = ["Jablko", "Banán"];
ovoce.push("Pomeranč"); // na pole ovoce voláme metodu push a pošleme jí to co chceme přidat na konec
console.log(ovoce); // ["Jablko", "Banán", "Pomeranč"]
```
Prvky můžete přidat na začátek pole pomocí metody `unshift`.
```javascript
let ovoce = ["Banán", "Pomeranč"];
ovoce.unshift("Jablko");    // volaná metoda požaduje prvek který chceme přidat a přidá ho na začátek pole
console.log(ovoce); // ["Jablko", "Banán", "Pomeranč"]
```
#
### Odstranění prvků
Prvky můžete odstranit **z konce** pole pomocí metody `pop`.
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
ovoce.pop(); // na pole ovovce voláme metodu pop které nic nepožaduje, a odstraní poslení prvek v poli
console.log(ovoce); // ["Jablko", "Banán"]
```

Prvky můžete také odstranit **z začátku** pole pomocí metody `shift`.
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
ovoce.shift(); // volaná metoda shift také nic nepožaduje , a odstraní první prvek v poli
console.log(ovoce); // ["Banán", "Pomeranč"]
```

## Další užitečné vlastnosti a metody pole
>***Tip.:*** Protože některé funkce mají více použití, doporučuji vyhledat na internetu v dokumentaci nebo na dalších webech jakými všemi způsoby se dá funkce použít. Funkce zde jsou pouze v základních případech a pro ukázku.
### Metoda `length`
Vrátí počet prvků v poli.
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
console.log(ovoce.length); // 3
```
### Metoda `splice`
Umožňuje přidávat nebo odstraňovat prvky na konkrétní pozici v poli.
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
ovoce.splice(1, 1, "Hruška"); // volání metody splice, které předáme index začátku a konce prvků k odstranění, a Hodnoty kterými je chceme nahradi
console.log(ovoce); // ["Jablko", "Hruška", "Pomeranč"]
```
### Metoda `slice`
Vrátí nový podřetězec pole, aniž by změnil původní pole.
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"];
let noveOvoce = ovoce.slice(1, 3); //voláme funkci slice a pošleme jí začátek a konec výřezu (indexy)
console.log(noveOvoce); // ["Banán", "Pomeranč"]            nové pole v naší proměnné
console.log(ovoce); // ["Jablko", "Banán", "Pomeranč"]      původní pole zůstalo nezměněno
```
### Metoda `concat`
Spojí dvě nebo více polí a vrátí nové pole.
```javascript
let ovoce1 = ["Jablko", "Banán"];
let ovoce2 = ["Pomeranč", "Hruška"];
let vseOvoce = ovoce1.concat(ovoce2); //zavoláme na poli ke kterému chceme připojovat, a do funkce pošleme pole které se má připojit
console.log(vseOvoce); // ["Jablko", "Banán", "Pomeranč", "Hruška"]
```