import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  public labels1 : string[] = ['Ventas en Tienda', 'Ventas Con Retiro', 'Ventas con Envio'];
  public data1 = [[50, 45, 10]];

  public labels2 : string[] = ['Argentina', 'Brasil', 'Chile'];
  public data2 = [[80, 50, 100]];
  public color2 = [{backgroundColor: ['#00EEFF', '#FFFE00', '#FF2D00']}];
}
