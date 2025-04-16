export function restaurantsListings() {
    const HTML = `
        <section class="container bg-sand">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Restaurants listings</h2>
                    <p class="section-description">Here are the Top of the Featured Listings Paid which you can explore from here easily latest one</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    RESTAURANT LISTINGS CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
