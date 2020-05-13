import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular-material';
  total = 0;
  showSpinner = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(()=> { 
      this.showSpinner = false;
    },5000)
  }
}
