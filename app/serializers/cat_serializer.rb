class CatSerializer < ActiveModel::Serializer
  attributes :id, :age, :name, :weight, :breed, :temperament, :hobby_ids
end
