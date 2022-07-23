/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

import StaticImplements from '../Anotations/StaticImplements';

@StaticImplements()
export class CaseSerializer {
  public static ToSnake = (s : string) : string => s.replace(/[A-Z]/g, (letter : string) => `_${letter.toLowerCase()}`);

  public static ToCamel = (s : string) : string => s.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase()
    .replace('-', '')
    .replace('_', ''));
}
