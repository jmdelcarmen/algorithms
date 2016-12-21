function phoneCall(min1, min2_10, min11, s) {
    var balance = s;
    var maxminutes = 0;
    if (balance >= min1) {
        balance -= min1;
        maxminutes++;

        while(maxminutes <= 10 && balance >= min2_10) {
          maxminutes++;
          balance -= min2_10;
        }

        while(maxminutes > 10 && balance >= min11) {
            maxminutes++;
            balance -= min11;
        }
    }
    return maxminutes;
}

console.log(phoneCall(10, 1, 2, 22));
