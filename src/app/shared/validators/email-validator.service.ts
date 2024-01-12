import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {

    validate(control: AbstractControl): Observable<ValidationErrors | null> {

        const email: string = control.value;

        const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
            if (email === "nicolas@gmail.com") {
                subscriber.next({ emailTaken: true });
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete();
        });

        return httpCallObservable;

    }





    // validate(control: AbstractControl): Observable<ValidationErrors | null> {

    //     const email: string = control.value;

    //     console.log({ email });
    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000)
    //     )

    // }

}