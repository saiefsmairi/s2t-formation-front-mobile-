import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessessionsPage } from './messessions.page';

describe('MessessionsPage', () => {
  let component: MessessionsPage;
  let fixture: ComponentFixture<MessessionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessessionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
