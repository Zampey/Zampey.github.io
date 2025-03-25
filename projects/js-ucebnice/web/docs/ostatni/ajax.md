# **AJAX v JavaScriptu**

## **Úvod do AJAXu**
Možná jste si všimli, že některé webové stránky reagují velmi rychle a aktualizují svůj obsah bez nutnosti znovunačtení stránky. To je možné díky technologii AJAX.

### **Co je AJAX?**
AJAX (*Asynchronous JavaScript and XML*) je technika, která umožňuje webovým stránkám komunikovat se serverem na pozadí bez nutnosti opětovného načtení celé stránky. Díky tomu můžeme dynamicky načítat obsah, posílat data nebo provádět jiné operace, aniž by uživatel musel čekat na zdlouhavé načítání.

I když název obsahuje "XML", dnes se místo něj běžně používá formát JSON, protože je jednodušší a efektivnější.

## **Jak AJAX funguje?**
Než se pustíme do samotného programování, pojďme si představit, jak AJAX ve skutečnosti funguje. Proces probíhá v několika krocích:

1. **Uživatel provede akci** (například klikne na tlačítko "Načíst více komentářů").
2. **JavaScript pošle požadavek na server** – tento požadavek obsahuje instrukce, jaká data chceme získat.
3. **Server zpracuje požadavek** – například načte komentáře z databáze.
4. **Server odešle odpověď zpět** – odpověď obvykle obsahuje data ve formátu JSON.
5. **JavaScript zpracuje odpověď** – například vloží nové komentáře do stránky.

Všechny tyto kroky probíhají na pozadí, takže uživatel nemusí čekat na načtení celé stránky.

## **Jak poslat AJAX požadavek v JavaScriptu?**
V JavaScriptu máme dva hlavní způsoby, jak provést AJAX požadavek:
1. Pomocí staršího objektu `XMLHttpRequest`.
2. Pomocí modernějšího `fetch API`, které je jednodušší a přehlednější.

### **1. Použití XMLHttpRequest**
Objekt `XMLHttpRequest` byl dlouho standardem pro odesílání AJAX požadavků. Podívejme se, jak bychom s ním načetli data ze serveru:

```javascript
// Vytvoření objektu XMLHttpRequest
let xhr = new XMLHttpRequest();

// Otevření spojení (metoda, URL, asynchronní?)
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// Když je odpověď načtena
xhr.onload = function () {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data); // Výpis získaných dat
    } else {
        console.error("Chyba při načítání dat");
    }
};

// Odeslání požadavku
xhr.send();
```

Vysvětlení kódu:
- `xhr.open("GET", URL, true);` – otevřeme spojení na zadanou adresu (URL) a označíme jej jako asynchronní (`true`).
- `xhr.onload = function () { ... }` – nastavíme funkci, která se spustí, když server odpoví.
- `xhr.status === 200` – kontrolujeme, zda odpověď byla úspěšná (kód 200 znamená "OK").
- `JSON.parse(xhr.responseText)` – převedeme textovou odpověď serveru na objekt JavaScriptu.
- `xhr.send();` – odešleme požadavek.

### **2. Použití Fetch API (modernější způsob)**
`Fetch API` je novější a jednodušší způsob práce s AJAXem. Používá objekt `Promise`, což zlepšuje čitelnost kódu:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Chyba:", error));
```

Vysvětlení:
- `fetch(URL)` – odešle požadavek na server.
- `.then(response => response.json())` – převede odpověď na JSON objekt.
- `.then(data => console.log(data))` – vypíše data do konzole.
- `.catch(error => console.error("Chyba:", error))` – zachytí a zobrazí chybu, pokud požadavek selže.

### **Odesílání dat na server (POST požadavek)**
Někdy potřebujeme poslat data na server, například při registraci uživatele. Použijeme metodu `POST`:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nový příspěvek",
        body: "Obsah příspěvku",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log("Odpověď serveru:", data))
.catch(error => console.error("Chyba:", error));
```

Vysvětlení:
- `method: "POST"` – specifikujeme, že chceme data odeslat.
- `headers: { "Content-Type": "application/json" }` – nastavíme hlavičky, aby server věděl, že posíláme JSON.
- `body: JSON.stringify({...})` – převedeme JavaScript objekt na JSON.

## **Rozdíly mezi XMLHttpRequest a Fetch API**
| Vlastnost | XMLHttpRequest | Fetch API |
|-----------|---------------|-----------|
| Čitelnost kódu | Složitější | Jednodušší díky Promise |
| Podpora Promise | ❌ Ne | ✅ Ano |
| Zpracování chyb | Obtížnější | Snazší |
| Podpora starších prohlížečů | ✅ Ano | ❌ Ne (IE nepodporuje Fetch API) |

## **Shrnutí**
- AJAX umožňuje načítání dat bez znovunačtení stránky.
- `XMLHttpRequest` je starší způsob, `fetch API` je modernější a jednodušší.
- Fetch API používá `Promise`, což usnadňuje práci s asynchronním kódem.
- Kromě načítání dat lze AJAX použít i pro odesílání dat na server.

## **Další kroky**
Chcete-li se AJAX naučit lépe, zkuste:
1. Vytvořit stránku, která načítá data z API a zobrazuje je uživateli.
2. Použít formulář pro odeslání dat na server pomocí `POST` požadavku.
3. Experimentovat s chybovou kontrolou a asynchronním zpracováním odpovědí.
