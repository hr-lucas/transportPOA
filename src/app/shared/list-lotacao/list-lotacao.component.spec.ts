import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLotacaoComponent } from './list-lotacao.component';

describe('ListLotacaoComponent', () => {
  let component: ListLotacaoComponent;
  let fixture: ComponentFixture<ListLotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
