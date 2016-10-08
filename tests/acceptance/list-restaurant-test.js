import { test } from 'qunit';
import moduleForAcceptance from 'restaurant-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list restaurant');

test('should list available restaurants.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 4, 'should see 4 listings');
  });
});
