import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRegistroPage } from './tab-registro.page';

describe('TabRegistroPage', () => {
  let component: TabRegistroPage;
  let fixture: ComponentFixture<TabRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
