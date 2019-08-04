import { TestBed, inject } from '@angular/core/testing';

import { StockPredictionService } from './stock-prediction.service';

describe('StockPredictionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockPredictionService]
    });
  });

  it('should be created', inject([StockPredictionService], (service: StockPredictionService) => {
    expect(service).toBeTruthy();
  }));
});
