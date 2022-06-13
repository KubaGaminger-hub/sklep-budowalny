document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select');
    const img = document.querySelector('img');
    const cena = document.querySelector('.cena');
    const metry = document.querySelector('#metry');
    const zegarek = document.querySelector('.zegarek')
    const cenaPojedyncza = document.querySelector('#cenaPojedyncza')
    const opis = document.querySelector('.opis')
    const btn = document.querySelector('.koszyk')
    const icon = document.querySelector('.icon')
    const plytki = [
        ciemnaPlytka= {
            name: 'Ciemna plytka',
            price: 22.30,
            img: 'img/ciemna.png',
            description: 'Ciemna marmurowa płytka zapewniająca utrzymywanie się koloru.'
        },
        jasnaPlytka= {
            name: 'Jasna plytka',
            price: 10.80,
            img: 'img/jasna.png',
            description: 'Jasna marmurowa płytka zapewniająca wytrzymałość na lata.'
        },
        zielonaPlytka= {
            name: 'Zielona plytka',
            price: 41.20,
            img: 'img/zielona.png',
            description: 'Zielona płytka z wyrzeźbionymi kwadratami.'
        },
        brazowaPlytka= {
            name: 'Brązowa plytka',
            price: 31.30,
            img: 'img/brazowa.png',
            description: 'Brązowa marmurowa płytka zapewniająca wytrzymałość na lata.'
        },
        niebieskaPlytka= {
            name: 'Niebieska plytka',
            price: 32.50,
            img: 'img/niebieska.png',
            description: 'Niebieska płytka z wyrzeźbionymi kwadratami.'
        },
    ]
    
    // zegarek
    
    setInterval(() => {
        zegarek.innerText = new Date().toLocaleTimeString()
    }, 1000);
    
    // Wyświetlanie ceny i metrów
    
    window.onload = () => {
        if(localStorage.getItem('koszyk') == null){
            localStorage.setItem('koszyk', JSON.stringify([]));
        }
        if (select.value != null){
            plytki.forEach(function(plytka) {
                if (plytka.name == select.value){
                    img.style.width = '500px';
                    img.src = plytka.img;
                    img.alt = plytka.name;
                    opis.innerText = plytka.description;
                    cenaPojedyncza.innerText = plytka.price;
                    cena.innerText = `0 zł`;
                }
            })
        }
    }
    
    // Dodawanie opcji do selecta
    
    plytki.forEach(function(plytka){
        const option = document.createElement('option');
        option.value = plytka.name;
        option.innerText = plytka.name;
        select.appendChild(option);
    })
    
    // Dodanie eventu do selecta
    
    select.addEventListener('change', function(){
        plytki.forEach(function(plytka) {
            if (plytka.name == select.value){
                img.src = plytka.img;
                img.alt = plytka.name;
                opis.innerText = plytka.description;
                cenaPojedyncza.innerText = plytka.price;
                cena.innerText = `${plytka.price * metry.value} zł`;
            }
        })  
    })
    
    // Dodanie eventu do inputu
    
    metry.addEventListener('input', () =>{
        plytki.forEach(function(plytka) {
            if (plytka.name == select.value){
                cena.innerText = `${plytka.price * metry.value} zł`;
            }
        })    
    })

    // Dodawanie do koszyka
    
    btn.addEventListener('click', () => {
        let koszyk = JSON.parse(localStorage.getItem('koszyk'));
        koszyk.push(select.value, metry.value, cena.innerText);
        localStorage.setItem('koszyk', JSON.stringify(koszyk));
    })

    // Wyświetlanie koszyka
    icon.addEventListener('click', () => {
        JSON.parse(localStorage.getItem('koszyk')).forEach((elem)=> {
            console.log(elem)
        })
    })
})