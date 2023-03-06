import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestadorComponent } from './restador.component';

describe('RestadorComponent', () => {
  let component: RestadorComponent;
  let fixture: ComponentFixture<RestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
