import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../services/coins-service/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})
export class CoinsComponent implements OnInit {
  constructor(private coinsService: CoinsService) {}

  coins: any[];

  ngOnInit(): void {
    // this.coinsService.getCryptoCoins().subscribe((coins) => {
    //   this.coins = coins;
    //   this.coins.forEach((coin) => {
    //     console.log(coin.url);
    //   });
    // });
  }
}
