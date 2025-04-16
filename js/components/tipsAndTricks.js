export function tipsAndTricks() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Tips &amp; Tricks</h2>
                    <p class="section-description">Outsource your HR functions to industry-specialized HR experts, so you and your team can dedicate your time.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    TIPS AND TRICKS CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
