import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  public text: string = ''
  public type: string = ''
  //@ts-ignore
  private aSub: Subscription
  @Injectable() delay = 5000

  constructor(private alert: AlertService) {
  }

  ngOnInit(): void {
    this.aSub = this.alert.alert$.subscribe(alert => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe()
  }

}
