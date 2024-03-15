// init.js

// Funktion för att skapa header
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Chef Tingeling</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Hem <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.html">Om oss</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="menu.html">Meny</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="strid.html">Kock</a>
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
        © 2024
    </div>
    <div class="card-body">
        <h5 class="card-title">Contact Information</h5>
        <ul class="list-unstyled">
            <li>Phone: <a href=""><span>123-456-7890</span><span class="sr-only">(current)</span></a></li>
            <li>Email: <a href=""><span>ida.karstrom@elev.ga.ntig.se</span><span class="sr-only">(current)</span></a></li>
            <li>Address: <a href="https://www.google.com/maps/place/Tomtebodav%C3%A4gen+3A,+171+65+Solna/@59.3452243,18.0234365,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d9cd12a90e3:0x5d507840ccf1f4a3!8m2!3d59.3452243!4d18.0234365!16s%2Fg%2F11c1xpt3x7?entry=ttu">
                <span>Tomtebodavägen 3A, Solna, Sweden</span><span class="sr-only">(current)</span></a></li>
        </ul>
        <p class="card-text"><h6>Additional Movies, Series, and Music...</h6></p>
        <a href="https://www.insidehook.com/film/best-movies-tv-music-january-2024" class="btn btn-primary">The Best Movies, TV and Music</a>
    </div>
    
</div>
    `;
    document.body.appendChild(footer);
}

// Anropa funktionerna för att skapa header och footer
createHeader();
createFooter();