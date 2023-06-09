import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupChatComponent } from './components/group-chat/group-chat.component';

@NgModule({
  declarations: [LobbyComponent, NavbarComponent, MainComponent, GroupChatComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CoreModule {}
