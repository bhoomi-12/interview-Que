import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngformComponent } from './angform/angform.component';
import { AotjitComponent } from './aotjit/aotjit.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { BootstrapinangComponent } from './bootstrapinang/bootstrapinang.component';
import { ClosureComponent } from './closure/closure.component';
import { CostumepipeComponent } from './costumepipe/costumepipe.component';
import { CssscssComponent } from './cssscss/cssscss.component';
import { DatashareComponent } from './datashare/datashare.component';
import { DependingComponent } from './depending/depending.component';
import { DirectivesComponent } from './directives/directives.component';
import { Es6Component } from './es6/es6.component';
import { HoistingComponent } from './hoisting/hoisting.component';
import { HomeComponent } from './home/home.component';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { MonorepoComponent } from './monorepo/monorepo.component';
import { ObjectdestructComponent } from './objectdestruct/objectdestruct.component';
import { PromobservComponent } from './promobserv/promobserv.component';
import { RxjxComponent } from './rxjx/rxjx.component';
import { SmmapComponent } from './smmap/smmap.component';
import { TakeuntilComponent } from './takeuntil/takeuntil.component';
const routes: Routes = [
    {
        path: "rxjx",
        component: RxjxComponent
    }, {
        path: "depending",
        component: DependingComponent
    }, {
        path: "datashare",
        component: DatashareComponent
    }, {
        path: "smmap",
        component: SmmapComponent
    }, {
        path: "home",
        component: HomeComponent
    }, {
        path: "cssscss",
        component: CssscssComponent
    }, {
        path: "closure",
        component: ClosureComponent
    }, {
        path: "authguard",
        component: AuthguardComponent
    }, {
        path: "bootstrapinang",
        component: BootstrapinangComponent
    }, {
        path: "costumepipe",
        component: CostumepipeComponent
    }, {
        path: "lazyload",
        component: LazyloadComponent
    }, {
        path: "hoisting",
        component: HoistingComponent
    },
    {
        path: "directives",
        component: DirectivesComponent
    },{
        path: "monorepo",
        component: MonorepoComponent
    },{
        path: "es6",
        component: Es6Component
    },{
        path: "promobserv",
        component: PromobservComponent
    },{
        path: "angform",
        component: AngformComponent
    },{
        path: "aotjit",
        component: AotjitComponent
    },{
        path: "objectdestruct",
        component: ObjectdestructComponent
    },{
        path: "takeuntil",
        component: TakeuntilComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }