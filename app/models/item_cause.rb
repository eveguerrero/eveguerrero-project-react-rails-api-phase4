class ItemCause < ApplicationRecord
    belongs_to :item
    belongs_to :cause

    validates :cause, presence: true, uniqueness: {scope: :item_id}

end
