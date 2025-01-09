import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate{
    router= inject (Router);
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    //     let isLogged = localStorage.getItem('token') ? true : false
    //     if (!isLogged) {
    //         this.router.navigate(['/login']);
    //         return false;

    //     }
    //     return true;
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLogged = localStorage.getItem('token');
        if (!isLogged) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
}