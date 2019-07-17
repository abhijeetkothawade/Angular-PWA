import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';
import { ConnectionService } from 'ng-connection-service';
import { UpdateService } from '../app/update-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'connectionDetector';
  status = 'ONLINE'; //initializing as online by default
  isConnected = true;
  tableData:any = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'salary'];
  dataSource = this.tableData;
  constructor( private apiService: ApiService, private connectionService:ConnectionService, private updates: UpdateService, private toster: ToastrService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if(this.isConnected){
      this.status = "You are back Online";
      this.toster.success(this.status);
      } else {
      this.status = "Your internet connection is lost";
      this.toster.error(this.status)
      }
    });

    this.getData();

  }

  getData() {
    this.apiService.getDetails().subscribe( res => {
      this.tableData = res.body;
      console.log(this.tableData);
    });
  }
}
