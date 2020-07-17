import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FechasComponent } from './fechas.component';

describe('FechasComponent', () => {
  let component: FechasComponent;
  let fixture: ComponentFixture<FechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
