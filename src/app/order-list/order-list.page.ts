import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbsongService, ToDoInterface } from '../dbsong.service';
import { WcfServiceService } from '../wcf-service.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  todos: ToDoInterface[];
  todoInput: string;
  myorders:string;
  prodname
  usage={
    prodname:'',
    prodqty:'',
    proddesc:'',
  }
  avatarimage ='assets/cabbage.jpg'
  constructor(private dbService: DbsongService,private Wcf:WcfServiceService,private router:Router) { 
    this.prodname =  "test"
    console.log("this.prodname" + this.prodname)
  }
  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.todoInput = "";
    var prodqty  = this.usage['prodqty'];
    this.dbService.getAllToDos().then(data => this.todos = data);
  }
 addToDo() {
  var prodqty  = this.usage['prodqty'];
  var proddesc  = this.usage['proddesc'];
   this.myorders = this.prodname + ";" +  prodqty + ";" + proddesc
   console.log("this.myorders" + this.myorders)
    this.dbService.addToDo(this.myorders).then(data => {
      this.todos = data;
      this.todoInput = "";
    });
  }
  deleteToDo(id: number) {
    this.dbService.deleteToDo(id)
      .then(data => this.todos = data);
  }
  doneToDo(id: number) {
    this.dbService.updateToDo(id)
      .then(data => this.todos = data);
  }


  rgquotation()
{
  this.router.navigate(['/list-of-orders']);
 // this.router.navigate(['/invoicesegments']);
}


}
