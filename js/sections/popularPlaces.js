export function popularPlaces() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Explore popular places</h2>
                    <p class="section-description">You can find the most popular places in the city and see the listings which are available in those</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    POPULAR PLACES CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
