import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabMapaPage } from './tab-mapa.page';

describe('TabMapaPage', () => {
  let component: TabMapaPage;
  let fixture: ComponentFixture<TabMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMapaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
