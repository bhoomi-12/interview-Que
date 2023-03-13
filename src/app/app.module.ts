import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjxComponent } from './rxjx/rxjx.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { DatashareComponent } from './datashare/datashare.component';
import { DependingComponent } from './depending/depending.component';
import { SmmapComponent } from './smmap/smmap.component';
import { HomeComponent } from './home/home.component';
import { ClosureComponent } from './closure/closure.component';
import { DirectivesComponent } from './directives/directives.component';
import { PromobservComponent } from './promobserv/promobserv.component';
import { AotjitComponent } from './aotjit/aotjit.component';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { ObjectdestructComponent } from './objectdestruct/objectdestruct.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { Es6Component } from './es6/es6.component';
import { BootstrapinangComponent } from './bootstrapinang/bootstrapinang.component';
import { CssscssComponent } from './cssscss/cssscss.component';
import { MonorepoComponent } from './monorepo/monorepo.component';
import { CostumepipeComponent } from './costumepipe/costumepipe.component';
import { HoistingComponent } from './hoisting/hoisting.component';
import { AngformComponent } from './angform/angform.component';
import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { HtmldiffComponent } from './htmldiff/htmldiff.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjxComponent,
    NavComponent,
    DatashareComponent,
    DependingComponent,
    SmmapComponent,
    HomeComponent,
    ClosureComponent,
    DirectivesComponent,
    PromobservComponent,
    AotjitComponent,
    LazyloadComponent,
    ObjectdestructComponent,
    AuthguardComponent,
    Es6Component,
    BootstrapinangComponent,
    CssscssComponent,
    MonorepoComponent,
    CostumepipeComponent,
    HoistingComponent,
    AngformComponent,
    TakeuntilComponent,
    HtmldiffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
