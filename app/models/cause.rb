class Cause < ApplicationRecord
    has_many :item_causes
    has_many :items, through: :item_causes

    validates :name, :description, presence: true
end
