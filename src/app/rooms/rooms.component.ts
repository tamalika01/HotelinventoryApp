import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{
  hotelName = "ITC Royal Bengal";
  numberOfRooms = 10;
  constructor(){

  }
 ngOnInit(): void {
   
 }
 
}
