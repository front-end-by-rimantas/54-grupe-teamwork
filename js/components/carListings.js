export function carListings() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Car listings</h2>
                    <p class="section-description">Looking for a car? Here you will find your favorite car sell can get other information as well work with us</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    CAR LISTINGS CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
