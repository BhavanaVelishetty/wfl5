import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FreeapiService}from '../../app/services/freeapi.service';
import {Comment} from '../../app/classes/comment';
declare var $: any;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  data:any;
  question:any;
  op1:any;
  op2:any;
  op3:any;
  i:number=0;
  display:boolean=true;
  v:boolean;
  option:any;
  answers:Array<number>=[];
  constructor(private http:HttpClient,private _api:FreeapiService) { }
  selectedvalue (event: any) {
    this.option = event.target.value;
  }
  nextques()
  {
    this.answers[this.i]=this.option;
    console.log(this.answers);
    this.option=null;
    this.v=false;
    this.i+=1;
    if(this.i!=this.data.length)
    {
      this.question=this.data[this.i].ques;
      //this.v=false;
      this.op1=this.data[this.i].op1;
      this.op2=this.data[this.i].op2;
      this.op3=this.data[this.i].op3;
       
       $("#next").attr("disabled", true);
    }
    else
    {
      this.question=null;
      this.i=null;
      this.display=false;
    }
  }
  obj:Comment;
  ngOnInit() {
    this.http.get("assets/questions.json").subscribe((ques)=>{
          this.data=ques;
          console.log(this.data);
          this.question=ques[0].ques;
          this.op1=ques[0].op1;
          this.op2=ques[0].op2;
          this.op3=ques[0].op3;
    });
   
    var opost=new Comment();
    opost.ans1=this.answers[0];
    opost.ans2=this.answers[1];
    opost.ans3=this.answers[2];
    console.log(opost.ans1);
    this._api.postdata(opost).subscribe(
      data =>{
        this.obj=data;
      }
    
    );
    $(document).ready(() => {
      var q04 = $('input[name="op"]');
      validate();
      $("input[type='radio']").change(validate);

      function validate() {
          if ($(q04).is(':checked')  ) {
              $("#next").removeAttr("disabled", false);
          } else {
              $("#next").attr("disabled", true);
          }
          q04.removeAttr("checked",false);
      }
});
  
  
}
}





