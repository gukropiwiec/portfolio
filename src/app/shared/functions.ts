declare const bootstrap: any;

/**
 * Enable Bootstrap tooltips on the current page
 */
export function enableTooltips(): void {
    setTimeout(() => {
        const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map((tooltipTriggerEl) => {
            new bootstrap.Tooltip(tooltipTriggerEl, {
                container: 'body',
                offset: '0,3'
            });
        });
    });
}

/**
 * Hide all tooltips from the current page
 */
export function hideAllTooltips(): void {
    const tooltipElList = document.getElementsByClassName('tooltip');
    for (let i = 0; i < tooltipElList.length; i++) {
        const tooltipEl = tooltipElList[i];
        tooltipEl.remove();
    }
}

/**
 * Check if a given element is on screen
 * @param selector
 * @returns when the element shows, returns a promise with the element
 */
export async function checkElement(selector: any): Promise<any> {
    while (document.querySelector(selector) === null) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
}
