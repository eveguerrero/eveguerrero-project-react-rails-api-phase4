class CauseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :item_causes
  has_many :items
end
