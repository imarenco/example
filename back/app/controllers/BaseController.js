'use strict';

function getPage(page, limit) {
  return limit * page - limit;
}

exports.list = function(model, options = {}) {
  const limit = options.limit || 10;
  const page = getPage(options.page || 1, limit);

  let query = model.find(options.filter)
    .limit(parseInt(limit, 10)).skip(page).lean();

  const queryCount = options.paginate ? model.count(options.filter) : null;

  return Promise.all([query, queryCount])
    .then(function(data) {
      const count = data[1];

      return count ? {
        limit: limit,
        docs: data[0],
        pages: Math.ceil(count / limit),
        total: count,
      } : {limit: limit, docs: data[0] };
    });
};

exports.detail = function(model, id) {
  return model.findById(id).lean();
};

exports.create = function(model, body) {
  return model.create(body);
};

exports.update = function(model, id, payload) {
  return model.findOneAndUpdate({_id: id }, payload, {new: true})
    .lean();
};

exports.delete = function(model, id) {
  return model.remove({ _id: id }).lean();
};

exports.count = function(model, payload = {}) {
  return model.count(payload);
};
