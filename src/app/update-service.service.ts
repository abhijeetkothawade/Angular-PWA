import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private toster: ToastrService) {
    this.swUpdate.available.subscribe(evt => {
      this.toster.success('Updates are available, please refresh the page to get updates.');
    });
  }
}
