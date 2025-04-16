export function generalListings() {
    const HTML = `
        <section class="container bg-sand">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">General listings</h2>
                    <p class="section-description">Explore the exclusive listings around you are looking for your favorite one with top rated listings</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    GENERAL LISTINGS CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
