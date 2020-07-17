import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFechaPage } from './tab-fecha.page';

describe('TabFechaPage', () => {
  let component: TabFechaPage;
  let fixture: ComponentFixture<TabFechaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFechaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
