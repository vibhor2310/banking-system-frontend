import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { DetailsComponent } from './pages/details/details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { OpenBankAccountComponent } from './pages/open-bank-account/open-bank-account.component';

export const routes: Routes = [
    {
        path:'', component:AuthPageComponent, children:[
            {
                path:'',component:HomePageComponent
            },
            {
                path:'sign-up',component:SignupPageComponent
            },
            {
                path:'login',component:LoginPageComponent
            }
        ]
    },
    {
        path:'customer',component:CustomerPageComponent,children:[
            {
                path:'open-bank-account',component:OpenBankAccountComponent
            }
        ]
    },
    // {
    //     path:'details',component:DetailsComponent
    // },
    {
        path:'about-page',component:AboutPageComponent     
    },
    {
        path:'**', component:PageNotFoundComponent
    }
];
