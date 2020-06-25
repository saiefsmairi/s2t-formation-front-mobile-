import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListesessionsPage } from './listesessions.page';

describe('ListesessionsPage', () => {
  let component: ListesessionsPage;
  let fixture: ComponentFixture<ListesessionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesessionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListesessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
