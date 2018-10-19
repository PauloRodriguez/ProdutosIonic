import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';

/**
 * Generated class for the ProdutodetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtodetalhe',
  templateUrl: 'produtodetalhe.html',
})
export class ProdutodetalhePage {

  produto : Produto;

  constructor(public navCtrl: NavController,public navParams: NavParams,) {
      this.produto = this.navParams.get('produto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutodetalhePage');
  }

}
