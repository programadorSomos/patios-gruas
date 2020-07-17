import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabReportesPage } from './tab-reportes.page';

describe('TabReportesPage', () => {
  let component: TabReportesPage;
  let fixture: ComponentFixture<TabReportesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabReportesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabReportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
