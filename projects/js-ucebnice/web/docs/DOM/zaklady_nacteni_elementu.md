# Základy práce s html elementy v JS

Zde si ukážeme jak můžeme v JS jednoduše našíst elementy z html a pracovat s nimi

## Jak načíst/propojit js a html elementy

Pokud máme v html nějaký element a chceme ho načíst v JS tak musíme nejdřív nastavit **id** nebo **class** tomuto elementu.

- při načítání elmenentu v js se js chová takto:
    - načte celý html dokument stránky
    - projde řádek po řádku a zkontroluje jestli je na něm element který hledáme
    - pokud hledáme podle ID které je unikátní a najdeme ho tak skončí a dál nehledá
    - pokud hledáme podle class kterou může mít víc elementů, tak projde celou stránku a načte všechny nalezené elementy do pole

takže po nastavení ID nebo class můžeme přidat javascritp kod. buďto do script tagů, nebo ho nalinkovat do script -> src atributu.

## Jak najít a načíst html element

>Tip.: Pokud nevíte jak fungují třídy a funkce, doporučuji tyto kapitoly projít.

Stejně tak jako můžeme vytvořit třídu a z ní si udělat objekt a pak používat jeho funkce, tak v JS jsou některé objekty defaultně dostupné k použití.

- Jedním z těchto defaultních objektů je **document**.

- **document** představuje celou stránku, má vlastnosti a spoustu funkcí.
    - ve vlastnostech má např.: délku dokumentu, jednotlivé elementy, styly, atd...
    - ve funkcích má např.: načítání elementů, zapínání listenerů a metod čekájících na různé akce, atd...

> Tip.: zkuste si LOGnout document a podívejte se co všechno obsahuje:

má spustu properties a funkcí

```javascript
console.log(document);
```

### Nyní tedy načteme html element

- document umí načítat elementy více způsoby
    - podle id
    - podle class
    - podle selectoru

### podle ID

pokud načítáme element který má své unikátní id (což je nejrychlejší), použijeme funkci:

**document.getElementById()**

tato funkce dostane v parametru hodnotu id našeho hledaného elementu.

Příklad:

```javascript
<div id="mujDiv"></div>

//javascript část

<script>

//najdeme element a uložíme do proměnné
var hledanyElement = document.getElementById("mujDiv");

//zkusíme vypsat element
console.log(hledanyElement);

</script>
```

### podle CLASS

pokud načítáme element který má třídu tak použijeme funkci:

**document.getElementsByClassName()**

tato funkce dostane v parametru hodnotu třídy našeho hledaného elementu.

Příklad:

```javascript
<div class="mujDiv">Div 1</div>
<div class="mujDiv">Div 2</div>

//javascript část

<script>

//najdeme element a uložíme do proměnné
var hledanyElement = document.getElementsByClassName("mujDiv");

//zkusíme vypsat pole nalezených elementů
console.log(hledanyElement);

</script>
```

### podle selectoru

selectory se používají pro obecnější rozlišení který prvek chceme a který ne.

Základní je to že selector se používá stejně jako v CSS, takže pokud hledáme element podle třídy použijeme tečku, pokud podle ID použijeme #

**document.querySelectorAll()** získá všechny odpovídající

**document.querySelector()** získá první odpovídající


tato funkce dostane v parametru selector podle kterého hleda elementy které do něj spadají

Příklad:

```javascript
<div class="mujDiv">Div 1</div>
<div id="druhyDiv" class="mujDiv">Div 2</div>

//javascript část

<script>

// najde všechny elementy které obsahují třídu mujDiv
var nalezene = document.querySelectorAll(".mujDiv");

// najde element s id mujDiv
var nalezene = document.querySelector("#druhyDiv");

</script>
```
>Tip.: selectory se dají různě skládat a dá se podle nich např. vyřadit elementy které nejsou viditelné : **.mujDiv:not([hidden])** - kombinují se zde css vlastnosti
