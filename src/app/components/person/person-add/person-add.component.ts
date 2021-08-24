import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../services/person.service';
import {Person} from '../../../model/person';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  person:any={}

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  addPerson(){
    this.personService.addPerson(this.person).subscribe(res => {
      console.log('person added', res);
      window.history.back();
    })
  }

}
