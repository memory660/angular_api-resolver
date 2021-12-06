import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWithoutResolverComponent } from './data-without-resolver.component';

describe('DataWithoutResolverComponent', () => {
  let component: DataWithoutResolverComponent;
  let fixture: ComponentFixture<DataWithoutResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWithoutResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWithoutResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
