# Práce s textovými řetězci v JavaScriptu

## Úvod

Textové řetězce jsou v programování nesmírně důležité. Umožňují nám pracovat s textem, ať už se jedná o zobrazení zpráv, zpracování uživatelského vstupu nebo generování dynamického obsahu. V JavaScriptu jsou řetězce sekvence znaků uzavřené v jednoduchých (''), dvojitých ("") nebo zpětných (``) uvozovkách.

## Vytvoření řetězce

### Příklad:
```javascript
let text1 = "Ahoj světe"; // řetězec uzavřený v dvojitých uvozovkách
let text2 = 'JavaScript je skvělý'; // řetězec uzavřený v jednoduchých uvozovkách
let text3 = `Tento řetězec používá zpětné uvozovky`; // řetězec uzavřený v zpětných uvozovkách
```

## Základní operace s řetězci

### Slučování (konkatenace) řetězců
Spojení dvou nebo více řetězců dohromady.
```javascript
var text1 = "Ahoj";
var text2 = " světe";
var spojenyText = text1 + text2;
console.log(spojenyText); // Ahoj světe
```
Pokud bychom například chtěli sloučit 3 Stringy a jeden z nich bychom měli v proměnné můžeme to udělat pomocí znaku **+** :
```javascript
var text1 = "Auto";
var spojenyText = "Tvoje" + text1 + "Nefunguje";
console.log(spojenyText); // Vypíše se Tvoje Auto Nefunguje
```

### Délka řetězce
Získání počtu znaků v řetězci pomocí vlastnosti **.length** .

```javascript
let text = "JavaScript";
var delka = text.length; // pro proměnnou length která je typu String, zavoláme vlastnost length
console.log(delka); // 10
```

### Přístup k jednotlivým znakům
Můžete přistupovat k jednotlivým znakům v řetězci pomocí **indexů**. Indexy začínají od **0**.
>**Pozn.:** Index je vlastně pořadové číslo, akorát že v programování se ***Indexuje*** neboli čísluje od **0**. A protože jak jsem zmínil v úvodu, **String** neboli textový řetězec je sekvence neboli posloupnost (sled,seznam,řada) znaků, tak samozřejmě můžeme z této sekvence vybírat pouze znaky na určité pozici neboli **Indexu**.

```javascript
let text = "JavaScript";
let prvniZnak = text[0]; // 0 protože indexujeme od 0, znamá první znak
let druhyZnak = text[1]; // index 1 = druhý znak
console.log(prvniZnak); //vypíše se  J
console.log(druhyZnak); //vypíše se a
```

## Běžné metody pro práci s řetězci

### Metoda toUpperCase()
Převede celý řetězec na velká písmena.

```javascript
let text = "Ahoj světe";
let velkaPismena = text.toUpperCase(); // na proměnné text typu String zavoláme metodu toUpperCase() a výsled který nám metoda vrátí uložíme do nové proměnné velkaPismena

console.log(velkaPismena); // AHOJ SVĚTE
```

### Metoda toLowerCase()
Převede celý řetězec na malá písmena.

```javascript
let text = "Ahoj SVĚTE";
let malaPismena = text.toLowerCase(); // totožný postup jako při převodu na velká písmena
console.log(malaPismena); // ahoj světe
```

### Metoda indexOf()
Najde **pozici prvního výskytu** určitého textu v řetězci. Pokud text **nenajde**, vrátí **-1**.

```javascript
let text = "Ahoj světe";
let pozice = text.indexOf("světe"); // voláme metodu indexOf, která přebírá text pro který budeme hledat první výskyt

console.log(pozice); // 5 protože hledaný řetězec "světe" začíná od indexu 5 v proměnné text
```

### Metoda substring()
Extrahuje část řetězce na základě zadaných indexů. Metodu **indexOf()** používáme když hledáme začátek určitého textu.

Tuto metodu používáme, pokud chceme z nějakého textu něco vyříznou, a známe začátek a konec úseku který chceme vyříznot (respektive první a poslední index, odkud kam chceme výřez udělat).

```javascript
let text = "JavaScript";
let cast = text.substring(0, 4); // voláme substring() a posíláme mu index začátku výřezu a konce výřezu.

console.log(cast); // Java
```

### Metoda replace()
Nahradí první výskyt určitého textu jiným textem. To znamená že metoda sama najde první výsky textu stejně jako metoda **indexOf()**, ale rovnou ho nahradí tím čím jí řekneme.

```javascript
let text = "Ahoj světe";
let novyText = text.replace("světe", "JavaScripte"); // najde první výskyt "světe" a celý ho nahradí námi zadanýt textem (tedy "JavaScripte")

console.log(novyText); // Ahoj JavaScripte
```

### Metoda split()
Rozdělí řetězec do pole na základě zadaného oddělovače. Pokud ještě nevíte co je to pole, tak velmi zjednodušeně je to seznam položek.

Tato funkce rozděluje Stringy, takže výsledné pole bude seznam s hodnotami typu String, které vzniknou rozdělením původního Stringu.

```javascript
let text = "Ahoj světe";
let pole = text.split(" "); // voláme metodu na proměnné text takže hodnota v proměnné text bude původní String, a posíláme znak nebo text který se má brát jako rozdělovací znak
console.log(pole); // ["Ahoj", "světe"]
```
Funkce nám tak rozdělila text na 2 Stringy a uložila je do pole neboli seznamu. Protože jsme ji volali na proměnné **text** tak se rozdělovala hodnota z této proměnné. Do funkce jsme pouze poslali String který určoval rozdělovač podle kterého funkce text rozdělí.

>***Pozn.:*** tím že voláme funkce "na nějaké proměnné" se může stát že nám některé funkce rovnou hodnotu změní. Jiné funkce nám naopak hodnotu v původní proměné nijak nezmění a výsledek neuloží tak že přepíší původní proměnnou, ale vrátí nám ho, takže si ho do proměnné musíme přeuložit jako například zde : **let pole = text.split(" ");** kde jsme si hodnotu přeuložili do nové proměnné pole

>***Tip.:*** Do funkce **split()** můžeme posílat i celá slova
#
## Šablonové řetězce (Template strings)
Zprvu se to může zdát zmatené ale je to celkem prosté. Vytvoříme šablonu Stringu a pak pouze pošleme hodnoty a ony se nám postupně dosadí do kolonek které jsme pro ně vytvořili.

Šablonové řetězce umožňují snadné vkládání proměnných a výrazů. Používají zpětné uvozovky (**``**) a proměnné jsou vkládány pomocí **${}**.

>***Tip.:*** Toto nám pomůže pokud máme více hodnot v proměnných a chceme je vložit mezi nějaký další tetx. Nemusíme totiž text rozdělovat pomocí zanku **+** a je tak zápis kratší.

```javascript
let jmeno = "Jan";
let prijmeni = "Novák";

                // String musíme dát do `` jinak nebude templatování fungovat
let celeJmeno = `Jméno: ${jmeno}, Příjmení: ${prijmeni}`; // vytvoříme kolonku ${} a pak do ní dáme proměnnou.
console.log(celeJmeno); // Jméno: Jan, Příjmení: Novák
```