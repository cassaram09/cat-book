class HobbySerializer < ActiveModel::Serializer
  attributes :id, :description, :cat_ids
end
