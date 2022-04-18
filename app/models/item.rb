class Item < ApplicationRecord
    belongs_to :category
    has_many :item_causes
    has_many :items, through: :item_causes
end
