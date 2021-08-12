import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../services/person.service';
import {Person} from '../../../model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
     this.personService.getUsers().subscribe(persons => {
       console.log(persons)
       this.persons = persons;
     });
  }

}