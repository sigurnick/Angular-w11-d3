import { Component } from '@angular/core';

@Component({
  selector: 'app-greenalert',
  //templateUrl: './greenalert.component.html',

  template: `<div *ngIf="showAlert" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500 mx-3 w-full">
  <span class="text-xl inline-block mr-5 align-middle">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

  </span>
  <span class="inline-block align-middle mr-8">
    <b class="capitalize"></b> Operazione effettuata correttamente
  </span>
  <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" (click)="showAlert = false">
    <span>×</span>
  </button>
</div>`,

  styleUrls: ['./greenalert.component.scss']
})
export class GreenalertComponent {
  showAlert = true;
}
