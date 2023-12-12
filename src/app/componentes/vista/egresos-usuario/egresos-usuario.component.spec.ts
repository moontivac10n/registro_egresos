import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEgresosUsuarioComponent } from './egresos-usuario.component';

describe('EgresosUsuarioComponent', () => {
  let component: VerEgresosUsuarioComponent;
  let fixture: ComponentFixture<VerEgresosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerEgresosUsuarioComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerEgresosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
