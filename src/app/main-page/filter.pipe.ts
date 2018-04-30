import { Pipe, PipeTransform } from '@angular/core';
import {Widget} from './widget';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(widgets: Widget[], filterValue: string): Widget[] {
    const regExp : RegExp = new RegExp(filterValue, "i");
    const filteredWidgets= widgets.filter((widget)=> {
      return widget.name.search(regExp) === -1 ? false : true
    })
    return filteredWidgets
  }
}
