import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendComponent } from './friend/friend.component';
import { StatusComponent } from './status/status.component';
import { TryOneComponent } from './try-one/try-one.component';
import { TryTwoComponent } from './try-two/try-two.component';
import { TryThreeComponent } from './try-three/try-three.component';


export const routes: Routes = [
  // {path:'hello-world', component:HelloWorldComponent},
  // {path:'profile' , component:ProfileComponent},
  // {path:'friend' , component:FriendComponent},
  // {path:'status' , component:StatusComponent},
  {path:'try-one' , component:TryOneComponent},
  {path:'try-two' , component:TryTwoComponent},
  {path:'try-three' , component:TryThreeComponent}
];
