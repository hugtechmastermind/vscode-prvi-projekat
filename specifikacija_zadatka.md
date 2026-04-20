# Specifikacija sistema i prototip aplikacije za Kino Salu

## Kratki opis sistema
Sistem predstavlja jednostavnu web aplikaciju namijenjenu posjetiocima kina. Posjetioci mogu pregledati sve dostupne filmove razvrstane prema žanru, uključujući informacije o dostupnosti, kao i vizuelni prikaz sjedišta unutar pojedinačne kino sale u realnom vremenu uz statusna stanja svake karte.

## Svrha aplikacije
Svrha aplikacije je olakšati korisnicima odabir filmova za gledanje nudeći im jasan i pregledan korisnički interfejs. Također, aplikacija u sklopu interfejsa kino sale nudi korisnicima direktan uvid u raspored slobodnih, zauzetih i rezervisanih sjedišta kako bi brzo, jasno i nedvosmisleno odabrali mjesto koje žele kupiti ili rezervisati prije odlaska u kino.

## Opis stranica aplikacije
Aplikacija je u ovoj fazi (Spirala 1) izvedena kao statički prototip koji obuhvata dvije glavne stranice:
1. **Filmovi (`filmovi.html`)** - Prikazuje sve filmove kategorizovane po jasno označenim žanrovima (Akcija, Drama, Komedija, Animirani). Za svaki film vidljiv je poster, naziv i trajanje filma, te dostupnost (trenutno prikazuje, uskoro u kinima i više nije u ponudi).
2. **Sala (`sala.html`)** - Prikazuje raspored sjedišta za odabrani film. Uključuje zaglavlje sa informacijama o filmu i dvorani, fiksnu reprezentaciju kino platna te raspored od 8 redova sa po 10 sjedišta. Podržava vizualne markere za stanja sjedišta (slobodno, zauzeto, rezervisano).

## Opis rasporeda elemenata
### `filmovi.html`
- **Navigacija**: Horizontalni navigacijski meni (nepobrojana lista elemenata), uvijek pozicioniran (fiksiran) na vrhu ekrana tokom skrolanja na širim ekranima. Na užim ekranima elementi postaju okomiti i nalaze se na početku tijela dokumenta.
- **Sadržaj (Sekcije žanrova)**: Idući u vertikalu prema dolje nalaze se naslovi žanrova (`Akcija`, `Drama`, ...). 
- **Film Kartice**: Unutar svakog žanra filmovi su posloženi u grid (širine 200px pojedinačno). U jednom redu prikazuje se od 1 do maksimalno 5 filmova ovisno o širini ekrana sa razmakom od minimalno 10px. Svaka kartica sadrži poster pretežno gornjim dijelom i teksualni opis ispod.

### `sala.html`
- **Navigacija**: Identična pristupnoj stranici, na vrhu ekrana.
- **Informacije**: Naslov filma, satnica i broj sale su centrirani pri vrhu sadržaja (ispod menija).
- **Platno**: Istaknuta vizuelna traka ispod samih informacija na kojoj piše "PLATNO", u obliku širokog i uskog bloka.
- **Raspored (Sjedišta grid)**: Sjedišta su smještena u grid mrežu (8 redova, 10 kolona po redu). Svako sjedište je vizuelni kvadrat. Lijevo od reda se nalazi oznaka reda velikim slovom (A - H).
- **Legenda (Status)**: Ispod sjedišta se nalazi legenda boja za pomoć pri identifikaciji slobodnih, zauzetih i rezervisanih sjedišta.

---

## Skica (Wireframe)

### 1. Wireframe: `filmovi.html` (Desktop - široki ekran)

```text
+-------------------------------------------------------------------------+
|                              [KINO MENI]                                |
|   [Filmovi]                  [Raspored]                 [Sala]          |
+-------------------------------------------------------------------------+
|                                                                         |
|  = AKCIJA =                                                             |
|                                                                         |
|  +---------+   +---------+   +---------+   +---------+   +---------+    |
|  | [Slika] |   | [Slika] |   | [Slika] |   | [Slika] |   | [Slika] |    |
|  | Naziv 1 |   | Naziv 2 |   | Naziv 3 |   | Naziv 4 |   | Naziv 5 |    |
|  | 148 min |   | 131 min |   | 156 min |   | 145 min |   | 132 min |    |
|  +---------+   +---------+   +---------+   +---------+   +---------+    |
|    Dostupno      Uskoro       Nedostupno     Dostupno      Dostupno     |
|                                                                         |
|                                                                         |
|  = DRAMA =                                                              |
|                                                                         |
|  +---------+   +---------+   +---------+                                |
|  | [Slika] |   | [Slika] |   | [Slika] |                                |
|  | Naziv 1 |   | Naziv 2 |   | Naziv 3 |                                |
|  | 180 min |   | 206 min |   | 114 min |                                |
|  +---------+   +---------+   +---------+                                |
|                                                                         |
+-------------------------------------------------------------------------+
```

### 2. Wireframe: `filmovi.html` (Mobile - uređaj širine ispod 600px)

```text
+-----------------------+
|  [Filmovi]            |
|  [Raspored]           |
|  [Sala]               |
+-----------------------+
| = AKCIJA =            |
|                       |
| +-------------------+ |
| |      [Slika]      | |
| |      Naziv 1      | |
| |      148 min      | |
| +-------------------+ |
|                       |
| +-------------------+ |
| |      [Slika]      | |
| |      Naziv 2      | |
| |      131 min      | |
| +-------------------+ |
|         ...           |
+-----------------------+
```

### 3. Wireframe: `sala.html`

```text
+-------------------------------------------------------------------------+
|                              [KINO MENI]                                |
|   [Filmovi]                  [Raspored]                 [Sala]          |
+-------------------------------------------------------------------------+
|                                                                         |
|                            OPPENHEIMER (Title)                          |
|                            Vrijeme: 20:00                               |
|                            Sala broj: 3                                 |
|                                                                         |
|                    <=============== PLATNO ===============>             |
|                                                                         |
|      (1) (2) (3) (4) (5) (6) (7) (8) (9) (10)                           |
|  A   [Z] [Z] [S] [S] [S] [S] [S] [S] [S] [S]                            |
|  B   [S] [S] [R] [R] [S] [S] [Z] [Z] [S] [S]                            |
|  C   [S] [S] [S] [Z] [Z] [Z] [S] [S] [R] [R]                            |
|  D   [S] [S] [S] [S] [Z] [Z] [S] [S] [S] [S]                            |
|  E   [S] [S] [R] [R] [Z] [Z] [Z] [Z] [S] [S]                            |
|  F   [S] [S] [S] [S] [S] [S] [S] [S] [R] [R]                            |
|  G   [Z] [Z] [S] [S] [Z] [Z] [S] [S] [S] [S]                            |
|  H   [S] [S] [S] [S] [S] [S] [S] [S] [S] [S]                            |
|                                                                         |
|       Legenda: [S]=Zelena, [Z]=Crvena, [R]=Siva                         |
+-------------------------------------------------------------------------+
```
