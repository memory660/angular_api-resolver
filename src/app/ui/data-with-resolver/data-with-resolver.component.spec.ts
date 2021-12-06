import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWithResolverComponent } from './data-with-resolver.component';

describe('DataWithResolverComponent', () => {
  let component: DataWithResolverComponent;
  let fixture: ComponentFixture<DataWithResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWithResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
