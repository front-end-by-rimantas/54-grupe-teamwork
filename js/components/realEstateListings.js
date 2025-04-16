export function realEstateListings() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Real estate listings</h2>
                    <p class="section-description">Looking for properties? No need to run here and there just come here find your real estate listings</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    REAL ESTATE LISTINGS CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
