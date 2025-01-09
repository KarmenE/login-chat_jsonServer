import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [

    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'chat', component: ChatComponent, canActivate: [AuthGuard]
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    },
];
