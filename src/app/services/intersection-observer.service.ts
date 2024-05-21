import { Injectable, ElementRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IntersectionObserverService {
    private observer: IntersectionObserver;

    constructor() {
        this.observer = new IntersectionObserver(this.handleIntersect, {
            threshold: 0.1
        });
    }

    observe(element: ElementRef) {
        this.observer.observe(element.nativeElement);
    }

    private handleIntersect(entries: IntersectionObserverEntry[]) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }
}
