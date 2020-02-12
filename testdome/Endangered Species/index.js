function endangeredSpecies(continent, species) {
    var companyElements = $("ul[data-continent='"+continent+"'] li[data-species='"+species+"']");
    return (companyElements.text());
}

/* HTML code for testing purposes (do not submit uncommented):
<div>
  <ul data-continent="North America">
    <li data-species="California condor">Critically Endangered</li>
    <li data-species="American bison">Near Threatened</li>
  </ul>
  <ul data-continent="Europe">
    <li data-species="Cave bear">Extinct</li>
  </ul>
</div>
*/
