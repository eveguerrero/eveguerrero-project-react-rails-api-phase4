class Item < ApplicationRecord
    has_many :item_causes
    has_many :items, through: :item_causes
    belongs_to :user
end
