import {Input, Output, EventEmitter} from '@angular/core'

export class UserService {
    // @Input() users: string[];
    // @Output() userSetToInactive = new EventEmitter<number>();
  
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
  
    setToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    }
  
    setToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
    }
}