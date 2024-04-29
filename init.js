// init.js

// Funktion för att skapa header
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

    <a class="navbar-brand" href="#">Chef Tingeling</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Hem <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a href="about.html" class="nav-link underline-effect">Om oss</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="menu.html">Meny</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="strid.html">Mr. Strid</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="location.html">Hitta hit</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="reservation.html">Boka bord</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="gallery.html">Galleri</a>
            </li>
            
        </ul>
        </div>
    </div>
</nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    
}



// Funktion för att skapa footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <footer class="footer bg-light text-dark text-center py-4 mt-5">
    
    <div class="card-header">
        © CT 2024
    </div>
    <div class="card-body">
        <h5 class="card-title">Kontaktinformation</h5>
        <ul class="list-unstyled">
            <li>Telefon: <a href=""><span>08-123 456 789</span><span class="sr-only">(current)</span></a></li>
            <li>Email: <a href="mailto:info@cheftingeling.com"><span>info@cheftingeling.com</span><span class="sr-only">(current)</span></a></li>
            <li>Adress: <a href="https://www.google.com/maps/place/Storgatan+15,+114+51+Stockholm/@59.3354492,18.0797066,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d5abb1d70af:0xb0384e71a2698322!8m2!3d59.3354465!4d18.0822815!16s%2Fg%2F11c29881_5?entry=ttu">
                <span>Storgatan 15, 114 51 Stockholm</span><span class="sr-only">(current)</span></a></li>
        </ul>
        <p class="card-text"><h6>Resterande Restaurangplatser</h6></p>
        <a href="https://www.google.com/maps/search/Chef+Tingeling/@59.3736466,17.9266606,12z/data=!3m1!4b1?entry=ttu" class="btn btn-primary">Chef Tingeling</a>
    </div>
    
</div>
    `;
    document.body.appendChild(footer);
}

// Anropa funktionerna för att skapa header och footer
createHeader();
createFooter();