import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  name: DS.attr(),
  city: DS.attr(),
  address: DS.attr(),
  phone: DS.attr()
});
