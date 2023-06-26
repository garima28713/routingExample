import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = ([] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/:id',
    component: ProductListComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
