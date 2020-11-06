import { Component, OnInit } from '@angular/core';


import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popover-finish-to-do',
  templateUrl: './popover-finish-to-do.page.html',
  styleUrls: ['./popover-finish-to-do.page.scss'],
})
export class PopoverFinishToDoPage implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
