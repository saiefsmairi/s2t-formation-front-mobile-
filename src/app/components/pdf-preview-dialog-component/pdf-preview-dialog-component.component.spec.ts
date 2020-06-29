import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfPreviewDialogComponentComponent } from './pdf-preview-dialog-component.component';

describe('PdfPreviewDialogComponentComponent', () => {
  let component: PdfPreviewDialogComponentComponent;
  let fixture: ComponentFixture<PdfPreviewDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPreviewDialogComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfPreviewDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
