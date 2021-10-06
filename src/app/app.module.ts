import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { WhoIAmComponent } from './components/who-i-am/who-i-am.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InfoContactComponent } from './components/info-contact/info-contact.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    MenuNavComponent,
    WhoIAmComponent,
    SocialNetworksComponent,
    InfoContactComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
