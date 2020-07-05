import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriSessionPage } from './inscri-session.page';

describe('InscriSessionPage', () => {
  let component: InscriSessionPage;
  let fixture: ComponentFixture<InscriSessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriSessionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
