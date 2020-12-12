import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../services/coins-service/coins.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Currency } from '../../models/Currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  currencies: string[] = ['ILS', 'USD', 'EUR'];
  cryptoCoins: Currency[] = [];

  icon: string = `../../../assets/images/ILS.png`;
  cryptoCoin: string = 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4caf2b16a0174e26a3482cea69c34cba.png';

  converterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private coinsService: CoinsService) {}

  amountVal: number = 1;
  fromCoin: string = 'ILS';
  toCoin: string = 'BTC';
  result: string = '';

  ngOnInit(): void {
    this.initConverterForm();
    this.initCryptoCoins();
    this.convertValueCoins();
    this.getCoins();
  }

  initConverterForm(): void {
    this.converterForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      from: [''],
      to: [''],
    });

    this.converterForm.controls.amount.setValue(1);
    this.converterForm.controls.from.setValue(this.currencies[0]);
  }

  onChangeFrom(currency) {
    this.fromCoin = this.currencies[currency.target.value[0]];
    this.icon = `../../../assets/images/${this.currencies[currency.target.value[0]]}.png`;
    this.convertValueCoins();
  }

  onChangeTo(currency) {
    this.toCoin = this.cryptoCoins[currency.target.value[0]].asset_id;
    this.cryptoCoin = this.cryptoCoins.find((curr) => curr.asset_id === this.cryptoCoins[currency.target.value[0]].asset_id).url;
    this.convertValueCoins();
  }

  onKey(event) {
    this.amountVal = event.target.value;
    this.convertValueCoins();
  }

  initCryptoCoins() {
    this.coinsService.getAssetsIcons().subscribe((coins: Currency[]) => {
      this.cryptoCoins = coins;
      this.converterForm.controls.to.setValue(this.cryptoCoins.find((curr) => curr.asset_id === 'BTC'));
    });
  }

  convertValueCoins() {
    this.coinsService.getExchange(this.fromCoin, this.toCoin).subscribe((data: any) => {
      this.result = `${this.amountVal} (${this.fromCoin} = ${data.rate * this.amountVal} ${this.toCoin}`;
      console.log(this.toCoin);
    });
  }
  // 1 Bitcoin (BTC) = 18,069.51 United States Dollar "$" (USD)

  getCoins() {
    this.coinsService.getAssets().subscribe((data) => {
      console.log(data);
    });
  }

  swapValueCoins() {
    let tmp = this.fromCoin;
    this.fromCoin = this.toCoin;
    this.toCoin = tmp;
    this.convertValueCoins();
  }
}
