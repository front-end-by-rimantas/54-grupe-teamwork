export function renderCardsList(dataList, renderingFunction) {
    let HTML = '';

    for (const item of dataList) {
        HTML += renderingFunction(item);
    }

    return HTML;
}