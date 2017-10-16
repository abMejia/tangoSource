import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';


/**
 * Route constant 
 */
let routes: Routes = [
    { path: '**', redirectTo: 'currency', pathMatch: 'full' },
    { path: 'currency', component: CurrencyComponent }
];

/**
 * App routing module
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
