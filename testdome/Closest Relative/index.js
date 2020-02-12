function closestRelative(parent, relativeName) {
   result = $(parent).find(relativeName);
   if (result.length === 1) {
      return result;
  } else if(result.length > 1) {
      //identify the lowest element by getting the node level index
      // difference between the parent and the child, Use the lowest of that 
      // to return the response  
      var lowest = 0;
      var lowestidx = 0;
      $(result).each(function(idx, item) {
        if(idx===0) {
          lowest = $(item).parents().index(parent);
        }
        else {
             if ($(item).parents().index(parent) < lowest) {
                lowestidx = idx;
               lowest = $(item).parents().index(parent);
             }
           }
      });
      return $([result[lowestidx]]);
  }
  else {
    return $([]);
  }
}

/* HTML code for testing purposes (do not submit uncommented):
<James>
  <Dave></Dave>
  <Mike></Mike>
  <Sarah></Sarah>
</James>
*/
