import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Input()editId;
  @Output()arrayEvent: EventEmitter<any> = new EventEmitter();
  addcontact:FormGroup;
  model:any={};
  contact:any=[];
  
  
  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes.editId)
  }

  ngOnInit(): void {
    this.addcontact=this.fb.group({
      name:['', [Validators.required]],
      contact:['', [Validators.required]],
    });
  }
  onAdd(){
    this.model={
      name:this.addcontact.value["name"],
      contact:this.addcontact.value["contact"],
    }
    this.contact.push(this.model);
    console.log(this.contact);
    this.arrayEvent.emit(this.contact);
  }
  onEdit(){
    console.log(this.editId);
  }
}
