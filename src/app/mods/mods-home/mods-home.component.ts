import { Component} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {title: 'why is the sky blue', content:'because of air'},
    {title: 'why is grass green', content:'because God thought so'},
    {title: 'what does an orange taste like?', content:'because its an orange'}
  ];

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

  

}
