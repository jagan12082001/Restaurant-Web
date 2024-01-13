import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

Category=['biriyani', 'noodles','mutton']

mutton=[{name :'mutton chukka',id :108,qty:1},{name :'mutton 65',id :109,qty:1},{name :'mutton masala',id :110,qty:1}]
noodles=[{name :'eeg noodles',id :105,qty:1},{name :'mutton noodles',id :106,qty:1},{name :'chicken noodles',id :107,qty:1}]
biriyani=[{name :'plain biriyani',id :101,qty:1},{name :'veg biriyani',id :102,qty:1},{name :'egg biriyani',id :103,qty:1},{name :'chicken biriyani',id :104,qty:1}]

Selected = new FormGroup({
  category : new FormControl(''),
  item : new FormControl('')
})

qty=0;
show=0;
items:any;
datas:any=[];
datas1:any=[];
Selectdatas:any=[];

constructor(){}

IncValue(id : any){
  for(let i=0;i<=this.datas.length;i++){
     if(this.datas[i].item.id==id){
      this.datas[i].item.qty+=1
      this.qty+=1
     }
  }
}

DecValue(id:any){
  for(let i=0;i<=this.datas.length;i++){
    if(this.datas[i].item.id==id){
      if(this.datas[i].item.qty>=1){
        this.datas[i].item.qty-=1
        this.qty-=1
      }
    }
  }
}

ChangeCat(){
    if ( this.Selected.value.category === "biriyani"){
      this.items=this.biriyani
    }else if(this.Selected.value.category === "noodles"){
      this.items=this.noodles
    }else if(this.Selected.value.category === "mutton"){
      this.items=this.mutton
    }
}

getData(id:any){
   this.datas.push(this.Selected.value)
   this.qty+=1;
   this.show=1;
}
}
