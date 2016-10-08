import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://restaurant-node.herokuapp.com/api/restaurants'
  //namespace: 'api'
});
