export function footer() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    FOOTER CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
