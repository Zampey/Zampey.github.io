# For cyklus v JavaScriptu

## Úvod

`For` cyklus je jedním z nejpoužívanějších způsobů, jak opakovaně vykonávat blok kódu. Umožňuje nám iterovat přes data nebo opakovat akce určitý početkrát s přesnou kontrolou nad počátkem, podmínkou a iterací.

cyklus `for` tedy použijeme pokud dopředu víme kolikrát budeme chtít smyčku opakovat.

## Jak `for` cyklus funguje?

Syntaxe `for` cyklu se skládá ze tří částí: inicializace, podmínka a iterace. Tyto části jsou uzavřeny v kulatých závorkách a odděleny středníky.

## Syntaxe:
```javascript
for (inicializace; podmínka; iterace) {
    // kód, který se provede v každé iteraci
}
```
- **Inicializace**: Nastaví počáteční hodnotu proměnné, která bude kontrolována ve smyčce.
- **Podmínka**: Vyhodnocuje se před každou iterací. Pokud je pravdivá, smyčka pokračuje; pokud je nepravdivá, smyčka se zastaví.
- **Iterace**: Aktualizuje hodnotu proměnné po každé iteraci. (Dá se říct že iterace je jeden průchod cyklem)

## Použití `for` cyklu
`For` cyklus se používá k iteraci přes pole, provádění opakovaných úkolů a řízení přesného počtu opakování.

### Příklad 1: Jednoduchý for cyklus
```javascript
for (let i = 0; i < 5; i++) { // inicializovali a deklarovali jsme proměnnou i, zadali podmínku, a určili co se s i stane po každém průchodu
    console.log(i);
}
// Vypíše:
// 0
// 1
// 2
// 3
// 4
```
V tomto příkladu:
- **Inicializace**: let i = 0 - nastaví proměnnou i na 0.
- **Podmínka**: i < 5 - smyčka pokračuje, dokud je i menší než 5.
- **Iterace**: i++ - zvýší hodnotu i o 1 po každé iteraci.

### Příklad 2: Iterace přes pole
```javascript
let ovoce = ["Jablko", "Banán", "Pomeranč"]; // vytvoření pole s hodnotami

for (let i = 0; i < ovoce.length; i++) { // i nastav na 0, dělej dokud i je menší než velikost pole, zvětšuj i o 1 po každém průchodu
    console.log(ovoce[i]); // vypiš hodnotu z pole ovoce na indexu i
}
// Vypíše:
// Jablko
// Banán
// Pomeranč
```
V tomto příkladu:
- **Inicializace**: let i = 0 - nastaví proměnnou i na 0.
- **Podmínka**: i < ovoce.length - smyčka pokračuje, dokud je i menší než velikost pole.
- **Iterace**: i++ - zvýší hodnotu i o 1 po každé iteraci.

>***Tip.:*** Všimněte si, že nepotřebujeme znát přesné číslo kolikrát se má průchod  vykonat. Zde nám stačilo vědět že chceme projít hodnoty v poli, tudíž budeme dělat tolik průchodů kolik je prvků v poli, k čemuž nám pomůže metoda `length`. A tím pádem stačí použít cyklus `for` a ne `while`.

### Příklad 3: Použití složené podmínky
Přestože ve většině případů si vystačíme s předchozími cykly, lze dělat i cykly se složitějšími podmínkami.

V cyklech můžeme v Inicializační sekci inicializovat i více proměnných najednou, a také v sekci pro iteraci můžeme oběma proměnným měnit hodnoty podle potřeby.

Taktéž můžeme do části pro podmínku vkládat i složitější podmínky než jen jednoduché porovnávání
```javascript
for (let i = 0, j = 10; i < 5 && j > 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
// Vypíše:
// i: 0, j: 10
// i: 1, j: 9
// i: 2, j: 8
// i: 3, j: 7
// i: 4, j: 6
```
V tomto příkladu:
- **Inicializace**: let i = 0, j = 10 - nastaví dvě proměnné i a j.
- **Podmínka**: i < 5 && j > 5 - smyčka pokračuje, dokud jsou obě podmínky pravdivé.
- **Iterace**: i++ a j-- - zvýší i a sníží j po každé iteraci.

### Příklad 4: Nekonečná smyčka
Buďte opatrní při vytváření `for` smyček, protože pokud podmínka nikdy nebude nepravdivá, smyčka poběží navždy a způsobí nekonečnou smyčku.

Bude tak potřeba cyklus zastavit pomocí `break`

```javascript
for (;;) {
    console.log("Tato smyčka nikdy neskončí");
}
// Tento kód by měl být zastaven, protože způsobí nekonečnou smyčku.
```
<br>
<br>
<br>

# Speciální cyklus `For each`

`forEach` je metoda pole v JavaScriptu, která slouží k průchodu přes každý prvek pole. Tato metoda provádí zadanou funkci jednou pro každý prvek pole.

## Základní Syntaxe

```javascript
var pole = ['jablko','hruška','kiwi']

pole.forEach(function(prvek) {
    console.log(prvek) // vypíše nejdříve jablko pak hruška a pak kiwi
    //Zde může být další kod který se vždy postupnš provede pro každý prvek v poli které procházíme
});
```

### Jednoduchý příklad
Následující příklad ukazuje, jak použít `forEach` k iteraci přes pole čísel a jejich vypsání do konzole.

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number); // vypisujeme každé number (neboli prvek z pole) do konzole
});
```
Výstup z tohoto cyklu tedy bude vypadat takto :
<br>1 <br>
2<br>
3<br>
4<br>
5<br>

## Použití indexu
Při průchodu pole si nemusíme získávat pouze aktuální prvek který je na řadě. Můžeme si k němu vzít i index na kterém se nachází v daném poli.

```javascript
let fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) { // zde pokud uvedeme i druhý parametr tak se do něj bude ukládat index pro aktuální prvek
  console.log(index + ': ' + fruit);
});
```

Výstup bude tedy i s indexy vypadat takto : <br>
0: apple<br>
1: banana<br>
2: cherry<br>

## Použití forEach s šipkovou funkcí
Můžete také použít šipkovou funkci (arrow function) pro zjednodušení syntaxe:
```javascript
let animals = ['dog', 'cat', 'elephant'];

animals.forEach((animal, index) => {
  console.log(`${index}: ${animal}`);
});

//0: dog
//1: cat
//2: elephant
```
