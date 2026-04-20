function iscrtajSalu(kontejner, projekcija) {
    kontejner.innerHTML = ''; 

    if (!projekcija || !projekcija.film || !projekcija.vrijeme || !projekcija.sjedista || projekcija.sjedista.length === 0) {
        let greska = document.createElement("p");
        greska.style.color = "red";
        greska.style.textAlign = "center";
        greska.style.fontSize = "20px";
        greska.style.fontWeight = "bold";
        greska.innerText = "Podaci nisu validni!";
        kontejner.appendChild(greska);
        return;
    }

    const dozvoljeniStatusi = ['slobodno', 'zauzeto', 'rezervisano'];
    let validno = true;
    for (let i = 0; i < projekcija.sjedista.length; i++) {
        if (!dozvoljeniStatusi.includes(projekcija.sjedista[i].status)) {
            validno = false;
            break;
        }
    }

    if (!validno) {
        let greska = document.createElement("p");
        greska.style.color = "red";
        greska.style.textAlign = "center";
        greska.style.fontSize = "20px";
        greska.style.fontWeight = "bold";
        greska.innerText = "Podaci nisu validni!";
        kontejner.appendChild(greska);
        return;
    }

    let info = document.createElement('div');
    info.className = "info";
    info.innerHTML = `
        <h1>${projekcija.film}</h1>
        <p>Vrijeme projekcije: ${projekcija.vrijeme}</p>
        <p>Sala broj: 3</p>
    `;
    kontejner.appendChild(info);

    let platnoWrap = document.createElement('div');
    platnoWrap.className = "platno-container";
    platnoWrap.innerHTML = `<div class="platno">PLATNO</div>`;
    kontejner.appendChild(platnoWrap);

    let salaGrid = document.createElement('div');
    salaGrid.className = "sala-grid";

    let redOznake = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let r = 0; r < redOznake.length; r++) {
        let nazivReda = document.createElement('div');
        nazivReda.className = "red-oznaka";
        nazivReda.innerText = redOznake[r];
        salaGrid.appendChild(nazivReda);

        for(let s = 1; s <= 10; s++) {
            let sjDiv = document.createElement('div');
            sjDiv.classList.add("sjediste");

            let sjedisteObj = projekcija.sjedista.find(el => el.red === redOznake[r] && el.broj === s);
            
            if (sjedisteObj) {
                sjDiv.classList.add(sjedisteObj.status);
                
                if (sjedisteObj.status === 'slobodno') {
                    sjDiv.addEventListener('click', function() {
                        sjedisteObj.status = 'rezervisano';
                        // Feedback popup for user explicit confirmation!
                        alert("Uspješno ste rezervisali mjesto " + redOznake[r] + s + " za film " + projekcija.film + "!");
                        iscrtajSalu(kontejner, projekcija);
                    });
                } else {
                    // Dodano objašnjenje zašto se mjesta ne mogu klilkati
                    sjDiv.addEventListener('click', function() {
                        if (sjedisteObj.status === 'zauzeto') {
                            alert("Ovo mjesto (" + redOznake[r] + s + ") je već zauzeto/kupljeno!");
                        } else {
                            alert("Mjesto (" + redOznake[r] + s + ") je već rezervisano!");
                        }
                    });
                }
            } else {
                sjDiv.classList.add("slobodno");
            }

            salaGrid.appendChild(sjDiv);
        }
    }

    kontejner.appendChild(salaGrid);

    let legendaWrap = document.createElement('div');
    legendaWrap.className = 'legenda';
    legendaWrap.innerHTML = `
        <div class="legenda-item">
            <div class="legenda-boja slobodno"></div>
            <span>Slobodno</span>
        </div>
        <div class="legenda-item">
            <div class="legenda-boja zauzeto"></div>
            <span>Zauzeto</span>
        </div>
        <div class="legenda-item">
            <div class="legenda-boja rezervisano"></div>
            <span>Rezervisano</span>
        </div>
    `;

    kontejner.appendChild(legendaWrap);
}
