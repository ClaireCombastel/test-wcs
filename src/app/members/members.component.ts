import {Component, OnDestroy, OnInit} from '@angular/core';
import {MembersService} from "../services/members.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {

  title = 'argonautes';

  members = [];
  membersSubscription: Subscription;


  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.membersSubscription = this.membersService.membersSubject.subscribe(
      (data: any) => {
        this.members = data;
      }
    );
    this.membersService.emitMembers();
  }

  getTeamComplete() {
    if (this.members.length < 50) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnDestroy() {
    this.membersSubscription.unsubscribe();
  }
}
