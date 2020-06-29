import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvaluersessionPage } from './evaluersession.page';

describe('EvaluersessionPage', () => {
  let component: EvaluersessionPage;
  let fixture: ComponentFixture<EvaluersessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluersessionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluersessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
