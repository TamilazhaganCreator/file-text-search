import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilecontentComponent } from './searchfilecontent.component';

describe('SearchfilecontentComponent', () => {
  let component: SearchfilecontentComponent;
  let fixture: ComponentFixture<SearchfilecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfilecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfilecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
