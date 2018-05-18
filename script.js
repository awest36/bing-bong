function icount() {
    for (var i = 0; i < 101; i++) {
     if (i % 5 == 0 && i % 3 == 0) {
        console.log('bing bong');
      }
     if( i % 3 == 0) {
        console.log('bing');
      }
     if (i % 5 == 0 ) {
        console.log('bong');
      }
     if (i % 5 != 0 && i % 3 != 0) {
        console.log(i);
      }
    }
}
