import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { take } from "rxjs";


@Injectable()
export class ToastHelper {
    private duration: number;
    private positon: string;

    constructor(private toastrService: ToastrService) {
        this.duration = 3000;
        this.positon = 'toast-top-right';
    }

    success(message: string, title?: string) {
        this.toastrService.success(message, title ?? "OK!", {
            timeOut: this.duration,
            positionClass: this.positon,
        }).onTap
            .pipe(take(1))
            .subscribe(() => console.log('Toastr clicked'));
    }

    error(message: string, title?: string) {
        this.toastrService.error(message, title ?? "Error!", {
            timeOut: this.duration,
            positionClass: this.positon,
        }).onTap
            .pipe(take(1))
            .subscribe(() => console.log('Toastr clicked'));
    }
}