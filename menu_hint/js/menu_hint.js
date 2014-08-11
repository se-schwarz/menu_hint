(function ($) {

Drupal.behaviors.menuhitFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.menu-hint-form', context).drupalSetSummary(function (context) {
      if ($('.form-item-menu-hint-enabled input', context).is(':checked')) {
        return Drupal.t('Enabled');
      }
      else {
        return Drupal.t('Disabled');
      }
    });
  }
};

})(jQuery);
