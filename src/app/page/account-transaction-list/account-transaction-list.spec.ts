import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionListPage } from './account-transaction-list';

describe('AccountTransactionListPage', () => {
  let component: AccountTransactionListPage;
  let fixture: ComponentFixture<AccountTransactionListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountTransactionListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountTransactionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
