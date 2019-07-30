import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fromCategory"
})
export class FromCategoryPipe implements PipeTransform {
  transform(
    value: Array<{ category: string }>,
    category: string | null
  ): Array<object> {
    return value.filter(element => element.category === category);
  }
}
