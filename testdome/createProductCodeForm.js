/*


The createProductCodeForm function is used to create a new form that accepts a product code from a user.

The current version of the form contains the hint: 'The product code can be found on the label'. This hint is currently always visible to the user.

Improve the form so that the hint is only rendered when the input element is the focused element.
*/
function createProductCodeForm(parent) {
  var form = $("<form/>");

  form.append($("<label>").text('Product Code:'));
  form.append($("<input>").attr('name', 'productCode').attr('type', 'text').attr('onfocus','$("label[name]").show()').attr('onblur','$("label[name]").hide()'));
  form.append($("<label>").attr('name', 'hint').text('The product code can be found on the label.').attr('style','display:none'));

  form.append('<br>');

  form.append($("<input>").attr('type', 'submit'));

  parent.append(form);
}
