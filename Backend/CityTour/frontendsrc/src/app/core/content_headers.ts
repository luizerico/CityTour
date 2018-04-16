import { Headers } from '@angular/http';

export const content_headers = new Headers();
content_headers.append('Accept', 'application/json');
content_headers.append('Content-Type', 'application/json');
// contentHeaders.append('Authorization', localStorage.getItem('token'));
content_headers.append('Authorization', sessionStorage.getItem('token'));
