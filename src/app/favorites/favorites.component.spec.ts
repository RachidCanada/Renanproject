import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { VerbService } from '../services/verb.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [VerbService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});
