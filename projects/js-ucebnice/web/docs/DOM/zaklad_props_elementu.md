# Základní vlastnosti (properties) HTML elementů v JavaScriptu

Když v JavaScriptu načteme HTML element, můžeme s ním pracovat pomocí různých **properties**. Zde jsou ty nejdůležitější:

## 1. `innerText` – Text uvnitř elementu

Vrátí nebo nastaví **viditelný** text uvnitř prvku.

```javascript
let nadpis = document.getElementById("mojeId");
console.log(nadpis.innerText); // Získá text
nadpis.innerText = "Nový text"; // Změní text
```

## 2. `textContent` – Všechen text, i skrytý
Na rozdíl od innerText vrátí všechen text včetně skrytého.

```javascript
let nadpis = document.getElementById("mojeId");
console.log(nadpis.textContent);
```

## 3. `innerHTML` – HTML uvnitř elementu
Vrátí nebo nastaví HTML kód uvnitř prvku.

```javascript
let div = document.getElementById("obsah");
div.innerHTML = "<strong>Tučný text<strong>"; //Přidá HTML
```

## 4. `value` – Hodnota vstupního pole
Používá se u `<input>`, `<textarea>` apod.

```javascript
let input = document.getElementById("jmeno");
console.log(input.value); // Získá hodnotu
input.value = "Nová hodnota"; // Změní hodnotu

```

## 5. `href` – Odkaz u `<a>`
Získá nebo nastaví URL odkazu.

```javascript
let odkaz = document.getElementById("mujOdkaz");
console.log(odkaz.href); // Výstup: "https://example.com"
odkaz.href = "https://novyweb.cz";
```

## 6. `src` – Zdroj obrázku `<img>`
Nastaví nový obrázek.

```javascript
let obrazek = document.getElementById("logo");
obrazek.src = "novy-obrazek.jpg";
```

## 7. `classList` – Práce s CSS třídami
Přidání, odebrání nebo přepnutí třídy.

```javascript
let box = document.getElementById("box");
box.classList.add("aktivni"); // Přidá třídu aktivni
box.classList.remove("skryty"); // Odebere třídu skryty
box.classList.toggle("dark-mode"); // Přepne třídu (pokud je tak ji odstraní, pokud není tak ji přidá)
```

## 8. `style` – Přímá změna CSS
Mění inline styly přímo v HTML.

```javascript
let btn = document.getElementById("tlacitko");
btn.style.backgroundColor = "red";
btn.style.fontSize = "20px";
```

## 9. `disabled` – Deaktivace prvku
Používá se u `<button>`, `<input>` atd.

```javascript
let tlacitko = document.getElementById("odeslat");
tlacitko.disabled = true; // Tlačítko je neaktivní
```

## 10. `checked` – Stav zaškrtávacího políčka
Používá se u `<input type="checkbox">`.

```javascript
let checkbox = document.getElementById("souhlas");
console.log(checkbox.checked); // true nebo false
checkbox.checked = true; // Zaškrtne checkbox
```