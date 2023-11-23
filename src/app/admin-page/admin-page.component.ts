import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})


export class AdminPageComponent {
  
  
  
  openPopup(){
    let popup = document.querySelector(".popup") as HTMLElement;
    popup.style.display = "flex";
  }
  updateProductPrice(){
    let popup = document.querySelector(".popup") as HTMLElement;
    popup.style.display = "none";
  }
}
