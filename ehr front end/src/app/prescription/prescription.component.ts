import { Component, OnInit } from '@angular/core';

export interface prescription {
  type:string;
  name: string;
  dosage:string;
  qty: number;
  frequency: string;
  note: string;
}
 
const form: HTMLFormElement = document.querySelector('#prescription-form');
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  type:string;
  name: string;
  dosage:string;
  qty: number;
  frequency: string;
  note: string;
  public list:prescription[];
  constructor() {
    this.list=[];
   }

  ngOnInit(): void {
  }
  getFormValue(event){
    this.list.push(
      {
        type:this.type,
        name: this.name,
        dosage:this.dosage,
        qty: this.qty,
        frequency: this.frequency,
        note: this.note
      }
    );
    this.type=this.dosage=this.frequency=this.name=this.note="";
    
  }
  delete(index){
    
    if(index>-1)
      this.list.splice(index,1);
  }

}
