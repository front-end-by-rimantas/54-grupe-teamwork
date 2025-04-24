export function rating(value) {
    const n = Math.floor(value);
    return `
        <div class="rating">
            <div class="stars">
                ${'<span>⭐</span>'.repeat(n)}
                ${'<span class="dark">⭐</span>'.repeat(5 - n)}
            </div>
            ${value}
        </div>`;
}