import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionMenuPage } from './session-menu.page';

describe('SessionMenuPage', () => {
  let component: SessionMenuPage;
  let fixture: ComponentFixture<SessionMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
