
import {Subject} from "rxjs";

export type alertType = 'success' | 'warning' | 'danger'

export interface Alert {
  text: string,
  type: alertType
}

export class AlertService {
  public alert$ = new Subject<Alert>()

  success(text: string) {
    this.alert$.next({type: 'success', text})
  }

  warning(text: string) {
    this.alert$.next({type: 'warning', text})
  }

  danger(text: string) {
    this.alert$.next({type: 'danger', text})
  }

}
