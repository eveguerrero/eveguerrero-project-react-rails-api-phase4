class ItemCause < ApplicationRecord
    belongs_to :item
    belongs_to :cause
end
