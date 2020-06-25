import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierprofilPage } from './modifierprofil.page';

describe('ModifierprofilPage', () => {
  let component: ModifierprofilPage;
  let fixture: ComponentFixture<ModifierprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierprofilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
