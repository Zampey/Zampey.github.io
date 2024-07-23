# Porovnávací operátory v JavaScriptu

## Úvod

Porovnávací operátory nám umožňují srovnávat hodnoty a vrací `true` nebo `false` na základě výsledku porovnání. Tyto operátory jsou základem pro vytváření podmínek a rozhodovacích struktur v programování. V JavaScriptu máme několik základních porovnávacích operátorů.

## Základní porovnávací operátory

### Rovnost (==)

Operátor rovnosti porovnává dvě hodnoty na rovnost, při čemž **ignoruje datový typ**. Prostě rozhodne zda se jedna hodnota rovná druhé

>***Pozn.:***  Pozor porovnávání rovnosti musí být provedeno dvěma znaky **=**. Jeden znak rovná se se totiž používá k přiřazení hodnoty do proměnné

#### Příklad:
```javascript
let a = 5;
let b = '5';
console.log(a == b); // true, protože hodnoty jsou stejné, i když mají různé datové typy
```

### Přísná rovnost (===)
Operátor přísné rovnosti porovnává dvě hodnoty na rovnost, ale zároveň **kontroluje**, zda mají stejný datový typ.

```javascript
let a = 5;
let b = '5';
console.log(a === b); // false, protože hodnoty mají různé datové typy
```

### Nerovnost (!=)
Operátor nerovnosti porovnává dvě hodnoty a vrací true, pokud nejsou stejné. **Ignoruje** datový typ.

>***Pozn.:*** znak **!** funguje jako negace, nebo-li obrací hodnotu true na false a naopak. Nazývá se **NOT**. Více se oněm zmíníme v sekci s logickými operátory.

```javascript
let a = 5;
let b = '5';
console.log(a != b); // false, protože hodnoty jsou stejné, i když mají různé datové typy
```

### Přísná nerovnost (!==)
Operátor přísné nerovnosti porovnává dvě hodnoty a vrací true, pokud nejsou stejné nebo mají **různé datové typy**.

```javascript
let a = 5;
let b = '5';
console.log(a !== b); // true, protože hodnoty mají různé datové typy
```

### Větší než (>)
Operátor větší než porovnává dvě hodnoty a vrací true, pokud je první hodnota větší než druhá.

```javascript
let a = 10;
let b = 5;
console.log(a > b); // true, protože 10 je větší než 5
```

### Menší než (<)
Operátor menší než porovnává dvě hodnoty a vrací true, pokud je první hodnota menší než druhá.

```javascript
let a = 10;
let b = 5;
console.log(a < b); // false, protože 10 není menší než 5
```

### Větší než nebo rovno (>=)
Operátor větší než nebo rovno porovnává dvě hodnoty a vrací true, pokud je první hodnota větší nebo rovna druhé.
```javascript
let a = 10;
let b = 10;
let c = 150;
console.log(a >= b); // true, protože 10 je rovno 10
console.log(c >= b); // true, protože 150 je větší než 10
```

### Menší než nebo rovno (<=)
Operátor menší než nebo rovno porovnává dvě hodnoty a vrací true, pokud je první hodnota menší nebo rovna druhé.
```javascript
let a = 10;
let b = 10;
let c = 150;
console.log(a <= b); // true, protože 10 je rovno 10
console.log(c <= b); // false, protože 150 je větší než 10
console.log(b <= c); // true, protože 10 je menší než 150
```
