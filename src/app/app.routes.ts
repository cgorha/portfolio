import { Routes, provideRouter } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
{ path: '', component: HeroComponent},
{ path: 'about', component: AboutComponent},
{ path: 'projects', component: ProjectsComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', redirectTo: '' } 
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
})
    .catch(err => console.error(err));
