import { TestBed } from '@angular/core/testing';

import { ContatoFirebaseService } from './contato-firebase.service';

describe('ContatoFirebaseService', () => {
  let service: ContatoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
