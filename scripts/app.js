// Helper funkcija za generisanje lažnih ali ispravnih sjedista (80 po sali) 
// radi realnijeg testa.
function kreirajTestnaSjedista() {
    const sjediLista = [];
    const redovi = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    redovi.forEach(red => {
        for(let j=1; j<=10; j++) {
            // Većinu postavimo kao slobodno, ostala random zauzeto/rezervisano
            let r = Math.random();
            let randStatus;
            
            if (r < 0.6) randStatus = 'slobodno';
            else if (r < 0.85) randStatus = 'zauzeto';
            else randStatus = 'rezervisano';

            sjediLista.push({ red: red, broj: j, status: randStatus });
        }
    });

    return sjediLista;
}

// Baza podataka
const kinoPodaci = {
    "projekcije": [
        {
            "film": "Avatar 2",
            "vrijeme": "18:00",
            "sjedista": kreirajTestnaSjedista()
        },
        {
            "film": "Spider-Man: Across the Spider-Verse",
            "vrijeme": "20:30",
            "sjedista": kreirajTestnaSjedista()
        },
        {
            "film": "Dune: Part Two",
            "vrijeme": "22:15",
            "sjedista": kreirajTestnaSjedista()
        },
        // Projekcija sa greškom u podacima unutar sistema kako bismo pokazali ispis Error poruke -> "Podaci nisu validni!"
        {
            "film": "The Matrix (Test GRESKE U STATUSU)",
            "vrijeme": "00:00",
            "sjedista": [{ red: "A", broj: 1, status: "nepostojeci_status"}]
        }
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    const kontejner = document.getElementById("sala");
    const btnPrethodna = document.getElementById('btn-prethodna');
    const btnSljedeca = document.getElementById('btn-sljedeca');

    let trenutniIndex = 0;

    function renderSalu() {
        if (!kinoPodaci.projekcije || kinoPodaci.projekcije.length === 0) {
            kontejner.innerHTML = '<p>Nema raspoloživih projekcija.</p>';
            return;
        }

        // Iscrtaj dom u kontejneru uzimajući podatke za index
        iscrtajSalu(kontejner, kinoPodaci.projekcije[trenutniIndex]);

        // Ažuriranje disable stanja dugmadi u ovisnosti od limita
        if (trenutniIndex === 0) {
            btnPrethodna.disabled = true;
            btnPrethodna.style.opacity = 0.5;
        } else {
            btnPrethodna.disabled = false;
            btnPrethodna.style.opacity = 1;
        }

        if (trenutniIndex === kinoPodaci.projekcije.length - 1) {
            btnSljedeca.disabled = true;
            btnSljedeca.style.opacity = 0.5;
        } else {
            btnSljedeca.disabled = false;
            btnSljedeca.style.opacity = 1;
        }
    }

    // Dodjela listenera sa limit blokadama
    btnPrethodna.addEventListener('click', function() {
        if (trenutniIndex > 0) {
            trenutniIndex--;
            renderSalu();
        }
    });

    btnSljedeca.addEventListener('click', function() {
        if (trenutniIndex < kinoPodaci.projekcije.length - 1) {
            trenutniIndex++;
            renderSalu();
        }
    });

    // Inicijalno iscrtavanje (poziv) pri prvom posjetu
    renderSalu();
});
