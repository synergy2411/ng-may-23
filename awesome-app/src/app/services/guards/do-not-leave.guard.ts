import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from 'src/app/auth/registration/registration.component';

@Injectable({
  providedIn: 'root',
})
export class DoNotLeaveGuard implements CanDeactivate<RegistrationComponent> {
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.onRegistration();
    // return false;
  }
}
