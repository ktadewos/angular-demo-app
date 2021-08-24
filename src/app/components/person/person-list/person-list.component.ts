import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../services/person.service';
import {Person} from '../../../model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService:PersonService, private route:Router) { }

  ngOnInit(): void {
     this.personService.getPersons().subscribe(persons => {
       this.persons = persons;
     });
  }

  deletePerson(id:any) {
     this.personService.deletePerson(id).subscribe(person => {
       console.log('item deleted');
       location.reload();
     })
  }

  editPerson(person:Person){
    this.route.navigate(['/person/edit', person._id]);
  }

}
