# Úvod do Tříd v JS

## Co je to třída

- třída neboli **class** je něco jako šablona podle které se vytváří objekty.

- Pokud bychom např. chtěli pracovat s uživateli webu tak můžeme vytvořit třídu (šablonu) která bude odpovídat datům o uživateli

- třídy mají své **vlastnosti** a **schopnosti**
    - vlastnost je např. jméno uživatele, email uživatele,....
    - schopnost je např. pozdrav, odhlaš se,....

Takto vytváříme třídy abychom měli jednotnou šablonu podle které budeme pak vytvářet objekty.

## Co je to objekt

- Objekt je souhrn konkrétních vlastností a schopností z naší třídy.

- Protože je třída taková šablona, tak můžeme vytvořit např. více uživatelů (objektů) z naší třídy

## Jak vytvořit třídu

- třídu můžeme vytvořit pomocí klíčového slova **class**

- Poté následuje název třídy - VŽDY PRVNÍ PÍSMENO VELKÉ

- Potom následují složené závorky **{}**
    - do složených závorek píšeme vše co má být součástí třídy

### Příklad:

```javascript
class Uzivatel {

}
```

třídě můžeme dát nějaké vlastnosti (proměnné) které budou patřít přímo jí:

```javascript
class Uzivatel {
    var jmeno;
    var prijmeni;
    var email;
}
```

třídě můžeme také přidat nějaké schopnosti (funkce) které bude umět vykonat:

- všchny vlastnosti (proměnné) třídy jsou dostupné v celé třídě i v jejich funkcích

```javascript
class Uzivatel {
    var jmeno;
    var prijmeni;
    var email;

    function pozdrav(){
        console.log("jmenuji se " + jmeno + " " + prijmeni);
    }
}
```

takto jsme vytvořili třídu jako šablonu pro uživatele a např. při přihlašování si můžeme načíst data o uživateli a uchovávat je v objektu vytvořeném z této třídy

## Jak vytvořit objekt (instanci) třídy

- pokud máme vytvořenou třídu tak z ní můžeme vytvářet objekty jako podle šablony.

- při vytváření nového objektu z třídy, použijeme klíčové slovo **new**

- Poté následuje název třídy ze které chceme obejkt vytvořit

### Příklad:

```javascript
new Uzivatel(); //proč se píší závorky vysvětlíme níže
```

takže pokud bychom chtěli vytvořit objekt nového uživatele a ještě s ním pak pracovat můžeme si ho uložit do nějaké proměnné, jinak bychom se k němu nedostali. např.:

```javascript
var novyUzivatel = new Uzivatel();
```

## Proč se píší při vytváření objektu třídy závorky na konci?

- když vytváříme třídu, tak můžeme využít některé funkce které jsou v javascriptu defaultně součástí třídy i když o nich nemusíme vědět.

- jednou z těchto funkcí je tzv. **Konstruktor**

- jak už název napovídá, tato funkce je spustí jako úplně první věc při vytváření třídy.
    - spustí se pokaždé když vytváříme nový objekt přes slovo **new**.

- tato funkce může a nemusí mít nějaké parametry (podle toho jak ji nastavíme)

- pokud jí nějaké parametry dáme, tak je pak musíme při vytváření třídy zadat právě do těch závorek za názvem třídy (new Uzivatel **()** )

konstruktor se píše vždy stejně a vypadá takto:

```javascript
class Uzivatel {

    constructor(){

    }

}
```
 - konstruktor který jsme vytvořili vypadá stejně jako ten defaultní (nic nedělá).

 - proto ho tam nemusíme psát, ale pokud bychom chtěli při vytváření uživatele např. rovnou nastavit jeho jméno, tak můžeme do konstruktoru poslat data a v něm je zpracovat.

 - konstruktor funguje jako každá jiná funkce

 příklad dosazení jména přes konstruktor:

 ```javascript
 class Uzivatel {
    var jmeno;

    constructor(jmeno){
        this.jmeno = jmeno; //this vysvětleno níže
    }
 }

//vytvířme objekty
var pepa = new Uzivatel("Pepa");
var martin = new Uzivatel("Martin");

 ```

 takto můžeme upravit constructor a poslat do třídy jakákoliv data chceme a můžeme je jakkoliv zpracovat v construktoru

 Protože se konstruktor spouští jako první věc, tak ještě než se nám při vytváření např. uživatele pepa vrátí náš objekt do proměnné pepa, tak už konstruktor proběhl.

 v proměnné pepa budeme mít tedy obejtk který má v vlastnosti (property) jmeno hodnotu "Pepa"

 ## Co je **this**

 - klíčové slovo this, označuje třídu ve které se momentálně nacházíme

 - pokud tedy v konstruktoru uvedeme **this.jmeno = "pepa"** tak nastavíme property jmeno této třídě na pepa.

 V konstruktoru je toto pěkně vidět. funkce očekává že dostane parametr jmeno, ale naše třída má taky proměnnou jmeno.

 jak tedy poznáme jaké jmeno patří k čemu?

 Jednoduše tak že property jmeno, v naší třídě je použitelné a můžeme s ním pracovat jen přes this.

 Tím rozlišíme jmeno které si konstruktor vytvoří a this.jmeno což je jmeno patřící třídě

## Přístup a práce s objektem a třídou

- Jak už je z kodu výše zřejmé, tak vždycky když chceme použít něco co někomu patří (např. property která patří do nějaké třídy) tak musíme použít tečku **.**

- toto platí jak u proměnných tak u funkcí.

příklady:

```javascript

//vytvoříme třídu s vlastnostmi a schopnostmi
class User{
    var jmeno;
    var email;
    var zdraviciHlaska;

    //zpracujeme v konstruktoru data která jsme mu poslali
    constructor(email, jmeno){
        this.email = email;
        this.jmeno = jmeno;
        this.zdraviciHlaska = "Ahoj já jsem "+ jmeno;
    }

    //funkce pro výpis pozdravu
    function pozdrav(){
        console.log(this.zdravidiHlaska);
    }
}



//vytvoříme jednotlivé uživatele
var adam = new User("adam@gmail.com", "Adam");
var tomas = new User("tomas@gmail.com", "Tomáš");
var petr = new User("petr@gmail.com", "Petr");

//nyní můžeme jakkoliv pracovat s těmito objekty
adam.pozdrav(); //adam pozdraví
tomas.pozdrav(); //tomáš pozdraví

console.log(petr.jmeno) //vypíšeme hodontu jmeno z objektu User v proměnné petr

console.log(petr.zdraviciHlaska); // vypíše zdravici hlasku z objektu typu User v proměnné petr
```
