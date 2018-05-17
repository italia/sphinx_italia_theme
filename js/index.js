var ThemeMarkupModifier = require('./markup_modifier.js');
var ThemeToolTip = require('./tooltip.js');
var ThemeChapterNav = require('./section_navigation.js');
var ThemeNote = require('./note.js');

// Init all 
$(document).ready(function() {
  ThemeMarkupModifier.init();
  ThemeToolTip.init();
  ThemeChapterNav.init();
  ThemeNote.init();
});