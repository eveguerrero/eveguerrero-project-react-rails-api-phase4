class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :type, :image, :description, :gender, :user_id, :condition
  has_many :item_causes
    has_many :items
    belongs_to :user
end
