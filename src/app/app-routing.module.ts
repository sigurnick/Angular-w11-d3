import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileGuard } from './pages/auth/auth.guard';
import { UsersComponent } from './pages/users/users.component';



const routes: Routes = [
  { path: '', redirectTo: '/login',  pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'singin', component:RegisterComponent},
  { path: 'users', component:UsersComponent},
  { path: 'profile/:id', component: ProfileComponent, canActivate: [ProfileGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
