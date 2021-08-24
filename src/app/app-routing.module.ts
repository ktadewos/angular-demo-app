import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './components/auth/authGuard.guard';
import { LoginComponent } from './components/login/login.component';
import { PersonAddComponent } from './components/person/person-add/person-add.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    component: ShellComponent,
    children: [
      {
        path:'person/list',
        canActivate: [AuthGuardGuard],
        component: PersonListComponent
      },
      {
        path:'person/add',
        canActivate: [AuthGuardGuard],
        component: PersonAddComponent
      },
      {
        path:'person/edit/:id',
        canActivate: [AuthGuardGuard],
        component: PersonEditComponent
      },
      {
        path:'',
        canActivate: [AuthGuardGuard],
        component: PersonListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
