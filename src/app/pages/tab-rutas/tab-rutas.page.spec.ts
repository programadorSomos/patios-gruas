import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRutasPage } from './tab-rutas.page';

describe('TabRutasPage', () => {
  let component: TabRutasPage;
  let fixture: ComponentFixture<TabRutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRutasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
