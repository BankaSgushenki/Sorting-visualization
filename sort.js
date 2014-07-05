Array.prototype.bubbleSort = function () {
    var time = 0;
    for (var i = 0; i < this.length; i++)
        for (var j = 0; j < this.length-i; j++) {
            if (this[j]> this[j+1]) {
                var max = this[j];
                this[j] = this[j+1];
                this[j+1] = max;
                var temp = new Array(this);
                setTimeout(callback(JSON.stringify(temp)), 50*(time++));
            }
    }
    return time;
}

Array.prototype.shakerSort = function() {
    var A = this; 
    var time = 0;                           
    var i = 0, j = A.length-1, s = true, t;
    while (i < j && s)
    { s = false;
      for (var k = i; k < j; k++)
       { if (A[k] > A[k+1]){ t = A[k]; A[k] = A[k+1]; A[k+1] = t; s = true;
        var temp = new Array(this);
        setTimeout(callback(JSON.stringify(temp)), 50*(time++));
        } }
      j--;
      if (s)
       { s = false;
         for (var k = j; k > i; k--)
          { if (A[k] < A[k-1]){ t = A[k]; A[k] = A[k-1]; A[k-1] = t; s = true; 
            var temp = new Array(this);
            setTimeout(callback(JSON.stringify(temp)), 50*(time++));
          } }
       }
      i++;
    }
    return time;
}

Array.prototype.selectionSort = function() { 
    var A = this; 
    var time = 0;                           
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; } 
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
        var temp = new Array(this);
        setTimeout(callback(JSON.stringify(temp)), 50*(time++));
     }   
     return time;                 
}

Array.prototype.insertionSort = function() {  
    var A = this; 
    var time = 0;                                
    var n = A.length;
    for (var i = 0; i < n; i++)
     { var v = A[ i ], j = i-1;
       while (j >= 0 && A[j] > v)
        { A[j+1] = A[j]; j--; 
        var temp = new Array(this);
        setTimeout(callback(JSON.stringify(temp)), 50*(time++));}
        A[j+1] = v;
        var temp = new Array(this);
        setTimeout(callback(JSON.stringify(temp)), 50*(time++));
     }
     return time;                    
}

Array.prototype.shellSort = function() {
    var A = this;
    var time = 0;       
    var n = A.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = A[j];
          while (k >= i && A[k-i] > t)
           { A[k] = A[k-i]; k -= i; 
          var temp = new Array(this);
          setTimeout(callback(JSON.stringify(temp)), 50*(time++));}
          A[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return time;
}

Array.prototype.gnomeSort = function () {
    var A = this;
    var time = 0;       
    var n = A.length, i = 1, j = 2;
    while (i < n)
     { if (A[i-1] < A[ i ]){ i = j; j++; }
       else
         { var t = A[i-1]; A[i-1] = A[ i ]; A[ i ] = t;
            var temp = new Array(this);
           setTimeout(callback(JSON.stringify(temp)), 50*(time++));
           i--;
           if (i == 0){ i = j; j++; }
         }
     }
    return time;
}