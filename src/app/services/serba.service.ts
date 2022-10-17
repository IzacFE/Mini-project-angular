import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { IPassanger } from '../models/IPassanger';
import { Observable, throwError, catchError } from 'rxjs';
// import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root',
})
export class SerbaService {
  private serverUrl: string = 'https://fakestoreapi.com'; //json server url

  constructor(private httpClient: HttpClient) {}

  // Get all Passangers
  public getAllProducts(): Observable<any[]> {
    let dataUrl: string = `${this.serverUrl}/products`;
    return this.httpClient
      .get<any[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Get single Passanger
  public getProduct(productId: number): Observable<any> {
    let dataUrl: string = ` ${this.serverUrl}/products/${productId}`;
    return this.httpClient.get<any>(dataUrl).pipe(catchError(this.handleError));
  }

  // Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
    } else {
      errorMessage = `Status : ${error.status} \n Message:${error.message}`;
    }

    return throwError(errorMessage);
  }
}
