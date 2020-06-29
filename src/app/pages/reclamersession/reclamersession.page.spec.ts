import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamersessionPage } from './reclamersession.page';

describe('ReclamersessionPage', () => {
  let component: ReclamersessionPage;
  let fixture: ComponentFixture<ReclamersessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamersessionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamersessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
