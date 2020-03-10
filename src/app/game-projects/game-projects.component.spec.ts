import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProjectsComponent } from './game-projects.component';

describe('GameProjectsComponent', () => {
  let component: GameProjectsComponent;
  let fixture: ComponentFixture<GameProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
