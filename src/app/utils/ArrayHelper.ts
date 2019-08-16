/**
 * @classdesc - ArrayHelper класс для
 */
export class ArrayHelper {

  /**
   *  @var SIZE: number -
   */
  private static SIZE = 3;

  /**
   * constructor - конструктор
   */
  constructor() {}

  /**
   * breakIntoPieces
   * @param arr -
   * @return []
   */
  public static breakIntoPieces( arr: any[] ) {

    const res = arr.reduce((p, c) => {
      if (p[p.length - 1].length === this.SIZE) {
        p.push([]);
      }

      p[p.length - 1].push(c);
      return p;
    }, [[]]);
    return res;
  }
}
