import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  activeTab: string='parameters';
  selectedIndex: number=0;

  constructor() { }
  ngOnInit(): void {
  }
// update active tab groupe && selected index
  handleTabChange(data:{selectedIndex:number,section:string}) {
    this.activeTab = data.section;
    this.selectedIndex=data.selectedIndex
  }

}
