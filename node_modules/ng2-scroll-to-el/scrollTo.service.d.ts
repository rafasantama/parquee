import { Observable } from 'rxjs/Observable';
export declare class ScrollToService {
    constructor();
    scrollTo(element: string | HTMLElement, duration?: number, offset?: number): Observable<any>;
    private scrollToElement(el, duration, offset, subject);
    private doScrolling(elementY, duration, subject);
}
