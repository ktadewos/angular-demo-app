import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  {
    path:'',
    component: ShellComponent,
    children: [
      {
        path:'book/list',
        component: BookListComponent
      },
      {
        path:'book/add',
        component: AddBookComponent
      },
      {
        path:'book/detail',
        component: BookDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
