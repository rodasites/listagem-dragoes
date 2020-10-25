import { DragonsComponent } from './pages/dragons/dragons.component';
import { ListDragonsComponent } from './pages/list-dragons/list-dragons.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/core';

export const appRoutes: Routes = [
    { path: '', component: ListDragonsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dragon', component: DragonsComponent },
    { path: 'dragon/:id', component: DragonsComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);