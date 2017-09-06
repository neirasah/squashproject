import { Routes } from '@angular/router'
import {
  ClubsListComponent,
  EventDetailsComponent,
// CreateEventComponent,
  EventRouteActivator,
//  EventListResolver
} from './details/index'
//import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
  //{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  //{ path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  { path: '/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  //{ path: '404', component: Error404Component },
  //{ path: '', redirectTo: '/events', pathMatch: 'full'},
  //{ path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]