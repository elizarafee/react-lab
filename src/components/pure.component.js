// Pure component implements shouldUpdateMethod with a shallow props and state comparison
/*
shallow comparison: it has 2 types 
1 - primitive type:  a and b returns true if (a==b)

2 - complex type: a and b returns true if a & b reference the same object.
ex : 
a = [1, 3, 4]
b = [1, 3, 4]
c = a 
a == b (false) // because it doesn't reference the same object
a == c (true)
*/
// pure component does prevent unnecessary re-rendering and this give  you a performance boost
// if there is no difference in A & B then there is no re-render
/*
should not mutate object or arrays like: push, pop etc because the reference of the array never changes & pure component only checks for that so the component will not re-render ven if there is a difference
ex : 
arr = [1, 2, 3]
arr.push = 4
now we can say that the value of arr is not the same now but reference of the arr is still same so there will not happen any re-render
*/

import React, { PureComponent } from "react";

class PureCom extends PureComponent {
  render() {
    console.log("Pure component render");
    return <div>Pure component render {this.props.name}</div>;
  }
}

export default PureCom;
