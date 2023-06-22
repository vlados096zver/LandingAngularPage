import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any {

    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item: any) => {
      const tableValues = Object.values(item);

      return tableValues.find((value: any) =>
        String(value).toLowerCase().match(searchText.toLowerCase())
      );
    });
  }

}
