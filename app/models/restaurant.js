import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  address: DS.attr(),
  phone: DS.attr()
});
