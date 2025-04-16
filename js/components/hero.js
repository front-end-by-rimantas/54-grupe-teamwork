export function hero() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12 col-lg-10 col-xl-8">
                    <h1>Explore amazing listings</h1>
                    <p>Find top listings – from restaurants and locations</p>
                    ${formFilters()}
                    ${filterForm()}
                    <p>Or browse the Highlighted categories</p>
                    ${fastFilterLinks()}
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}

function formFilters() {
    const data = [
        { icon: 'globe', text: 'Listings' },
        { icon: 'globe', text: 'Restaurants' },
        { icon: 'globe', text: 'Automobiles' },
        { icon: 'globe', text: 'Properties' },
    ];

    let HTML = '';

    for (const item of data) {
        HTML += `<li><i class="fa fa-${item.icon}"></i>${item.text}</li>`;
    }

    return `<ul>${HTML}</ul>`;
}

function select(list) {
    let HTML = '';

    for (const item of list) {
        HTML += `<option>${item}</option>`;
    }

    return `<select>${HTML}</select>`;
}

function filterForm() {
    const listOptions1 = ['AAA - 1', 'AAA - 2', 'AAA - 3', 'AAA - 4', 'AAA - 5'];
    const listOptions2 = ['BBB - 1', 'BBB - 2', 'BBB - 3', 'BBB - 4', 'BBB - 5'];
    const listOptions3 = ['CCC - 1', 'CCC - 2', 'CCC - 3', 'CCC - 4', 'CCC - 5'];

    return `
        <form>
            ${select(listOptions1)}
            ${select(listOptions2)}
            ${select(listOptions3)}
            <button type="submit">Search</button>
        </form>`;
}

function fastFilterLinks() {
    const data = [
        { href: '#', text: 'Automobile' },
        { href: '#', text: 'Beauty' },
        { href: '#', text: 'Cinema' },
        { href: '#', text: 'Events' },
        { href: '#', text: 'Hotels' },
        { href: '#', text: 'Real estate' },
    ];

    let HTML = '';

    for (const item of data) {
        HTML += `<a href="${item.href}">${item.text}</a>`;
    }

    return `<div>${HTML}</div>`;
}