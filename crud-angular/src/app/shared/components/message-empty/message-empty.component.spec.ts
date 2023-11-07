import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEmptyComponent } from './message-empty.component';

describe('MessageEmptyComponent', () => {
  let component: MessageEmptyComponent;
  let fixture: ComponentFixture<MessageEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageEmptyComponent]
    });
    fixture = TestBed.createComponent(MessageEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
