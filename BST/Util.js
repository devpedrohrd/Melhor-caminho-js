// util.js

export const Compare = {
    LESS_THAN: -1,
    EQUALS: 0,
    GREATER_THAN: 1
  };
  
  export function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    } else if (a < b) {
      return Compare.LESS_THAN;
    } else {
      return Compare.GREATER_THAN;
    }
  }
  