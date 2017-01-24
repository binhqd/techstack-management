'use strict';

module.exports = function(Ggusers) {
  Ggusers.disableRemoteMethodByName('replaceOrCreate', true);
  Ggusers.disableRemoteMethodByName('patchOrCreate', true);
  Ggusers.disableRemoteMethodByName('upsertWithWhere', true);
  Ggusers.disableRemoteMethodByName('update', true);
  Ggusers.disableRemoteMethodByName('count', true);
  Ggusers.disableRemoteMethodByName('change-stream', true);
  Ggusers.disableRemoteMethodByName('replaceById', true);
  Ggusers.disableRemoteMethodByName('createChangeStream', true);
};
