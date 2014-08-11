Drupal Menu Hints
=================

If you use drupal contextual views you probably had the problem that your menu is pretty mutch useless,
because its not really possible to set a matching path for the view and the found nodes.

Drupal Menu Hints provides a per node specification of menu paths. Configure your wanted menu path
directly in the node form or use the provided hooks to create own rules for menu paths.

Provided Hooks
==============

Menu Hints provides two hooks for you to create own rules.

```php
  hook_preprocess_node_menu_hints_alter(&$variables);
```

and

```php
  hook_preprocess_node_NODE_TYPE_menu_hints_alter(&$variables);
```

The following data is provided:

```php
  $variables = array(
    'hints' => array(),
    'node' => $node,
  );
```

Menu Hint Entity
================

Menu Hints are stored as entities in the database. They can be accessed and manipulated via
drupal EntityFieldQuery. Data for an easy use with the drupal entity metadata wrapper is also provided.



