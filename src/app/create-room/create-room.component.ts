import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submited = false;


  constructor(private roomService: RoomService, private router: Router) {

  }

  ngOnInit() {
  }

  newRoom(): void {
    this.submited = false;
    this.room = new Room();
  }

  save() {
    this.roomService.createRoom(this.room)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.room = new Room();
    this.goToList();
  }

  onSubmit() {
    this.submited = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/rooms'])
  }

}
