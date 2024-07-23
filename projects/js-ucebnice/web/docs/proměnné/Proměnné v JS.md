# Proměnné v JavaScriptu

## K čemu slouží proměnné
**Proměnné** obecně v programování slouží k uchování nějaké informace po určitou dobu. To jakou informaci určíme my podle toho co do ní uložíme (např.: text, číslo,...). A to jak dlouho tam informace bude uložena můžeme určit také tzv. _```Scopem```_ (vysvětlíme později).

## Jaké informace můžeme do proměnných ukládat ?
- Běžné datové typy
- Námi vytvořené objekty
- Seznamy / pole
- atd...

.... Zkrátka téměř cokoliv.

## Jak vytvořit takovou proměnnou?
Když vytváříme proměnnou tak se tomu odborně říká *```Inicializace```*

Při takové *Inicializaci* můžeme nastavit více věcí které budou pro proměnnou platit. To určíme podle toho jaké použijeme tzv. *"Key-word"* neboli "klíčové slovo".

```"Key-Word"``` - je slovo které má nějaký význam nebo má nějakou funkci v programovacím jazyce.

#

Při inicializaci proměnné můžeme použít tato 3 hlavní *klíčová slova*:
- ```var```
- ```let```
- ```const```

....Jejich význam si vysvětlíme později....

#

Poté musíme proměnné přidělit nějaké jméno, kterým na ni budeme volat a přes které ji budeme používat. Jméno proměnné by vždy mělo splňovat určitá nepsaná pravidla.

**Pravidla** :
- *Cammel Casing* (tzv.: "*Velbloudí notace*")
- Výstižnost
- Přiměřená délka

Pojďme si to vysvětlit postupně :)

#

***Cammel Casing*** - Znamená že píšeme slova bez mezer a diakritiky, a první slovo z názvu začíná malým písmenem a všechna další slova začínají velkým písmenem.

příklad.: název proměnné *"jméno uživatele"* bude v *Cammel Casing* zápisu vypadat takto : **jmenoUzivatele**

#

***Výstižnost*** - Z názvu proměnné by mělo jít na první pohled poznat jaké informace jsou v ní uloženy

**příklad špatného pojmenování** : "dn", "t", "jmuz"

**příklad správného pojmenování** : "datumNarozeni", "telefon", "jmenoUzivatele"

#

***Přiměřená délka*** - název proměnné by měl být přiměženě dlouhý. Potom je kód nepřehledný. Délka názvu proměnné by ideálně neměla přesáhnou více jak 40 znaků.

*Je možné používat i zkratky, pokud jsou dostatečně výstižné aby název nepřestal dávat smysl.*

#

### Jak tedy vypadá zápis vytváření nové proměnné ?

 ```js
    var jmeno;
    let prijmeni;
    const rokNarozeni;
```
Toto jsou 3 proměnné které mají správný název, a zvolené klíčové slovo.

Pořád ale ještě nevím jaký význam má jaké klíčové slovo. Pojďme si to vysvětlit :)

`var` (jako *variable* -> *měnící se*)
- říká nám že hodnota která je uložena v proměnné je editovatelná a můžeme ji měnit
- slouží nám tedy jako takový košík do kterého můžeme vložit hodnotu, vzít si ji nebo ji jakkoliv změnit nebo smazat

#

`let`
- toto klíčové slovo funguje v podstatě stejně jako klíčové slovo `var`. jediné co nám však mění je tzv `scope` který jsem již zmiňoval na začátku. o *scopu* si řekneme více později a ukážeme si názorný příklad

#

`const` (jako *constant* -> *trvalý, konstatncí, neměnný*)
- toto klíčové slovo nám říká že proměná tohoto typu není editovatelná. takže jakmile do ní jednou něco uložíme už to nemůžeme měnit ani smazat.
- můžeme si hodnotu uloženou v této proměnné pouze vzít a používat ji

## Nyní víme jak správně vytvořit proměnnou. ...Ale je prázdná
Nyní tedy do naší proměnné potřebujeme něco uložit. Tomuto se říká *`Deklarace`*.

Deklarace v JavaScriptu probíhá pomocí znaku **=**. Tím přidělíme nějaké proměnné její hodnotu kterou do ní chceme vložit.

takže si můžeme vytvořit proměnnou :
```js
    var mojeJmeno;
```
teď si do ní pomocí "**=**" vložíme hodnotu.
```js
    mojeJmeno = "Pepa Zdepa";
```
Nyní máme v proměnné `mojeJmeno` uloženou hodnotu "*Pepa Zdepa*".

Jak si můžete všimnout tak klíčové slovo `var`, `let`, a `const` se používá pouze pro vytvoření proměnné. Jakmile je proměnná vytvořená tak si svůj typ pamatuje a už ho před proměnnou nepíšeme, a používáme pouze její název.

#

### Tento proces se dá zkrátit
Když vytváříme proměnnou a už víme co v ní bude za hodnotu (nebo ji máme například uloženou v jiné proměnné),
tak můžeme přivytváření rovnou dosadit hodnotu do proměnné

Jak jsem již říkal do proměnných se dá uložit téměř vše. Takže můžeme do proměnné například uložit hodnotu která je již v jiné proměnné a takto si ji zduplikovat.

takže můžeme buďto dosadit novou hodnotu rovnou při vytváření:
```js
    var mojeJmeno = "Pepa Zdepa";
```
Použili jsme `var` takže *Inicializujeme* proměnnou s názvem "mojeJmeno" a rovnou do ní uložíme hodnotu "Pepa Zdepa"

#

Nebo můžeme do proměnné uložit rovnou hodnotu z jiné proměnné:
```js
    const rokNarozeni = 2000;
    var kopieRokuNarozeni = rokNarozeni;
```
Měli jsme tedy konstantní neměnnou proměnnou "rokNarozeni". Poté jsme si vytvořili novou proměnnou s názvem "kopieRokuNarozeni" a do té jsme uložili hodnotu která je obsažena v proměnné "rokNarozeni".

Takže nyní máme v proměnné "kopieRokuNarozeni" také hodnotu 2000.