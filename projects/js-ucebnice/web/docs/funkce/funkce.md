# Úvod do funkcí v JS

## Co je to funkce

- Funkce je blok kódu který můžeme použít kolikrát chceme, bez toho abychom museli opisovat řádky pořád dokola.

- Díky funkcím tedy máme méně kódu a program je čitelnější a lépe organizovaný.

- Výhodou je že pokud máme například funkci která něco počítá a zjistíme chybu, tak opravíme kód jen na jednom mísě (v té funkci) a nebudeme muset upravovat víc míst

- Funkce může nebo nemusí přijímat nějaké hodnoty které jí předáme. Těmto hodnotám říkáme **Parametry**

## Jak vytvořit funkci

- Funkce se vytváří pomocí klíčového slova **function**

- Poté následuje název funkce, který by měl být výstižný a dodržovat stejná pravidla pro pojmenování jako např. proměnné.

- Hned na názvem jsou kulaté závorky **()**, do kterých se můžou uvést parametry pokud má funkce nějaké dostat. (parametry vysvětlíme níže)

- Pak už jsou jen složené závorky **{}**, do kterých napíšeme všechen kod který se provede pokaždé co spustíme naši funkci

### Příklad vytvoření funkce

```javascript
function pozdrav(){
    console.log("ahoj");
}
```

nebo funkce na výpočet něčeho - i s parametry

```javascript
function obsahCtverce(delkaStrany){
    var obsah = delkaStrany * delkaStrany;
}
```

## Parametry

- Nyní si vysvětlíme co to jsou a k čemu jsou parametry ve funkcích.

- Parametr je vlastně takový předávací bod kam při volání naší funkce vložíme nějakou hodnotu, a odtud si tu hodnotu přebere sama funkce a pak s ní může pracovat.

příklad:

```javascript
var delkaStrany = 5;    //délka strany čtverce

spocitejObsah(delkaStrany);   //zavoláme funkci a předáme hodnotu v parametru

function spocitejObsah(strana){ //vytvoření funkce která očekává že jí dáme parametr strana
    var obsah = strana * strana;  // výpočet obsahu
}
```

> Tip.: funkce můžeme volat odkudkoliv, takže můžeme zavolat spocitejObsah() i když vytvoření funkce je až pod tímto.

Funguje to tak že jakmile funkci zavoláme s předanou hodnotou tak si funkce vezme tu hodnotu kterou jsme jí dali a vytvoří si dočasnou proměnnou (podle názvu toho parametru) a s tou proměnnou pak můžeme pracovat vevnitř té funkce.

Proto můžeme uvnitř funkce použít výpočet **strana * strana** protože jsme jí poslali hodnotu z proměnné delkaStrany, ona ji vzala a vytvořila si dočasnou vnitřní proměnnou strana která existuje jenom v té naší funkci a jakmile kod ve funkci dojde na konec a funkce skončí, tak všechny proměné (parametry smaže)

- může se stát že například budeme od uživatele získávat údaje a on nezadá email. Naše funkce ale očekává že dostane email.

- k tomuto můžeme použít tzv. defaultní hodnoty parametrů.

- Můžeme nastavit hodnotu parametru pokud ho funkce nedostane při volání. Parametry které mají defaultní hodnotu jsou pak nepovinné

### Příklad:
```javascript
function pozdrav(jmeno = "Tomáš"){
    console.log("Zdravím tě " + jmeno);
}

pozdrav("Adam") //vypíše zdravím tě Adam
pozdrav() //vypíše zdravím tě Tomáš
```

## Vracení hodnoty z funkce

- běžně se děje to že máme například funkci na výpočet a chceme aby až funkce spočítá hodnotu aby nám ji nějak vrátila a my jsme si ji mohli např. uložit do proměnné.

- toho dosáhneme jednoduše tak že použijeme klíčové slovo **return**.

- jakmile se ve funkci provede příkaz return, tak se všechno zastaví, vrátí se hodnota, a funkci skončí.

- takže pokud použijeme například return na začátku funkce tak se nic nestane a funkce hned po spuštění a převzetí parametrů skončí a zase je smaže.

### Příklady:

```javascript
function spocitejObsah(delkaStrany){ //vytvoříme funkci
    var obsah = delkaStrany * delkaStrany; //provede výpočet
    return obsah; //vrátí hodnotu z proměnné obsah
}
```

Takto bychom tu funkci pak mohli použít:

```javascript
var delka = 10;

var vysledekVypoctu = obsah(delka);

function obsah(strana){
    var vysledek = strana * strana;
    return vysledek;
}
```
