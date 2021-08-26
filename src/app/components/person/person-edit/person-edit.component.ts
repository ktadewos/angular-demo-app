import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../services/person.service';
import {Person} from '../../../model/person';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person:Person={}
  id = '';
  persons: Person[] = [];

  constructor(private personService:PersonService, private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.id = params.id;
    })

    this.personService.getPersons().subscribe(res => {
      this.persons = res;
      this.person = this.persons.filter(r => r._id == this.id)[0];
    })

    // this.personService.getPersons().pipe(filter(p => p._id == this.id)).subscribe(res => {
    // this.person = res;
    // });

  }

  editPerson(){
    this.personService.updatePerson(this.person).subscribe(res => {
      window.history.back();
    })
  }

  cancel(){
    window.history.back();
  }

}
