import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkillsCardsComponent } from './skills-cards/skills-cards.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { PortfolioCardsComponent } from './portfolio-cards/portfolio-cards.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsCardsComponent,
    SkillsListComponent,
    PortfolioCardsComponent,
    PortfolioListComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
