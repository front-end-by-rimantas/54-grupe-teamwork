export function ourLatestCategories() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Our latest categories</h2>
                    <p class="section-description">You can find the listings from the categories listed here of your favorite one you want to have</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    OUR LATEST CATEGORIES CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
