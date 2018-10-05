import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutodetalhePage } from './produtodetalhe';

@NgModule({
  declarations: [
    ProdutodetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutodetalhePage),
  ],
})
export class ProdutodetalhePageModule {}
