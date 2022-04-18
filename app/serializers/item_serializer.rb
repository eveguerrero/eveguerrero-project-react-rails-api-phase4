class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category, :image, :description, :gender, :user_id, :condition

  has_many :causes
  
  belongs_to :user
end
