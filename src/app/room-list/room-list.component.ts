import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { RoomDetailsComponent } from 'src/app/room-details/room-details.component';
import { RoomService } from 'src/app/room.service';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms!: Observable<Room[]>;


  constructor(public roomService: RoomService,
    public router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomList();
  }

  deleteRoom(id: number) {

    this.roomService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data)
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id])
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }

}
