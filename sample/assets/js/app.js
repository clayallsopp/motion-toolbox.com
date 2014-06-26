$(function () {

  var tags = [];
  var tagContainer = $('select.tag-search');

  $('div.wrapper-tag').each( function() {
    var txt = $(this).text().trim();

    if ( $.inArray( txt, tags ) === -1 ) {
      // Addit to an internal array
      tags.push(txt);
    }
  });

  tags = tags.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }); // Sort 'em!

  // Append them to the dom
  for (var tag in tags) {
    tagContainer.append('<option value="' + tags[tag] + '">' + tags[tag] + '</option>');
  }

  tagContainer.chosen({allow_single_deselect: true});

  tagContainer.on('change', function(e){
    var selected = $(this);
    var selectedText = selected.val();

    if(selected.hasClass('active')) {
      selected.removeClass('active');
      filter(null);
    } else {
      // Set the active class on the selected
      $('div.wrapper-tag').removeClass('active');
      selected.addClass('active');
      filter(selectedText);
    }
  });

});

function filter(tag){
  if(tag === null){
    $('div.wrapper-info, div.clear').show();
    return;
  }
  filtered = $('div.wrapper-info').filter(function(){
    show = false;
    $(this).find('div.wrapper-tag').each(function(){
      if($(this).text().trim() == tag) {
        show = true;
        return;
      }
    });
    return show;
  });

  // Show all sections:
  $('div.category-info').show();

  // Show the wrappers and then immediately hide the ones that contain the filter tag
  $('div.wrapper-info').show().not(filtered).hide();
  $('div.clear').hide();

  //Hide the sections that have no visible elements
  // COmmenting out till I can get it working.
  // $('div.category-info').each(function(){
  //   console.log($(this).text());

  //   console.log($('div :not(category-info)', this).next(':visible').children(':visible'));
  // });
}
