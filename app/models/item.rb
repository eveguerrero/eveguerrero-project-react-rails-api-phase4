class Item < ApplicationRecord
    has_many :item_causes
    has_many :causes, through: :item_causes
    belongs_to :user

    validates :name, :price, :category, :image, :description, :gender, :user_id, :condition, presence: true

end
