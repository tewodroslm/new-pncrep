import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControllComponent } from './user-controll.component';
import { Observable } from 'rxjs';
import { UserService } from '../user-service';

describe('UserControllComponent', () => {
  let component: UserControllComponent;
  let fixture: ComponentFixture<UserControllComponent>;

  const mockService = {

    getBasicUser:()=>{
       return new Observable((obs)=>{
        obs.next({
          response:{
            body:{
              id:'1',
              name:'samuel',
              lastName:'tesfay',
              roles:[
                {
                  'user': 'tederos',
                  'role':'USER'
                }
              ],
              email:'samuel@gmail.com',
            }
          }
          

        });
        obs.complete();
       })
    },
    getManagers(){
      return new Observable((obs)=>{
        obs.next({
          response:{
            body:{
              id:'1',
              name:'samuel',
              lastName:'tesfay',
              roles:[
                {
                  'user': 'samuel',
                  'role':'MANAGER'
                },
              ],
              email:'samuel@gmail.com',
            }
          }
            
        });
        obs.complete();
       })
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserControllComponent ],
      providers:[
        {provide:UserService,useValue:mockService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method tab changed ' , () => {
      let event = {
        index:1
      }
      component.onTabChanged(event);
      event.index = 0;
      component.onTabChanged(event);
      expect(component.dataSource[0]).toEqual(undefined);
  })


});
