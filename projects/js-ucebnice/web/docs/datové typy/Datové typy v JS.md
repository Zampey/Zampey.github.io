# Úvod do datových typů v JavaScriptu

## Co jsou datové typy a proč jsou důležité?

Datové typy jsou základní stavební kameny, které určují, jaký druh dat může být uložen a manipulován v programovacím jazyce.

V JavaScriptu, stejně jako v mnoha jiných jazycích, je důležité vědět, jaký typ dat používáte, protože různé typy dat mohou být zpracovány různými způsoby.

Například, s čísly můžete provádět matematické operace, zatímco s textem (řetězci) můžete provádět operace jako spojování textů nebo hledání podřetězců.

## Základní datové typy v JavaScriptu

JavaScript má několik základních datových typů:

1. **Číslo (Number)**
2. **Textový Řetězec (String)**
3. **Boolean (Boolean)**
4. **Neurčeno (Undefined)**
5. **Null (Null)**
6. **Objekt (Object)**

### Číslo (Number)

Datový typ číslo je použit pro uchovávání čísel, ať už celých nebo desetinných.

**Pozor: desetinná čísla píšeme vždy s tečkou**

#### Příklad:
```javascript
var vek = 25; // celé číslo
var teplota = 36.6; // desetinné číslo
```

### Textový řetězec (String)

Řetězec je použit pro uchovávání textu. Text musí být uzavřen v uvozovkách (jednoduchých nebo dvojitých -> **""** nebo **''** ).
#### Příklad:
```javascript
const jmeno = "Jan"; // řetězec uzavřený v dvojitých uvozovkách
const prijmeni = 'Novák'; // řetězec uzavřený v jednoduchých uvozovkách
```

### Boolean (Boolean)

Boolean je datový typ, který může nabývat pouze dvou hodnot: **true** (pravda) nebo **false** (nepravda). Používá se především pro logické operace.

Můžeme použít i čísla:
- 1 = true
- 0 = false

#### Příklad:
```javascript
var jeDospely = true; // pravda
var jeStudent = false; // nepravda

var jeDospelyCiselne = 1; // pravda
var jeStudentCiselne = 0; // nepravda
```

### Neurčeno (Undefined)

Undefined je datový typ, který označuje, že proměnná byla inicializována (vytvořena), ale ještě jí nebyla přiřazena hodnota.
#### Příklad:
```javascript
var neznamaPromenna;
console.log(neznamaPromenna); // undefined -> console.log() je výpis do konzole (do závorek píšeme to co chceme vypsat)
```

### Null (Null)

Null je speciální datový typ, který má jednu jedinou hodnotu: null. Označuje záměrně neexistující nebo prázdnou hodnotu. např.
#### Příklad:
```javascript
var prazdnaHodnota = null;
console.log(prazdnaHodnota); // null
```

### Objekt (Object)

Objekt je komplexní datový typ, který umožňuje uchovávat kolekce různých hodnot a funkcí. Objekty jsou tvořeny páry klíč-hodnota. Kdy podle názvu klíče získáváme hodnotu
#### Příklad:
```javascript
var osoba = {   //objekt píšeme do složených závorek
    jmeno: "Jan", //ke klíčí jmeno přidělíme hodnotu "Jan"
    prijmeni: "Novák",  //ke klíči prijmeni přidělíme hodnotu "Novák"
    vek: 25     //Ke klíči vek přidělíme hodnotu 25
    };      //objekt píšeme do složených závorek

//můžeme získat hodnotu 2 způsoby:  1.přes tečku:
console.log(osoba.jmeno); // získáme hodnotu pro klíč jmeno z objektu s názvem osoba, a vypíšeme

//2. do hranatých závorek za název objektu napíšeme název klíče jako string:
console.log(osoba['prijmeni']); // získáme hodnotu pro klíč prijmeni z objektu s názvem osoba, a vypíšeme
```
