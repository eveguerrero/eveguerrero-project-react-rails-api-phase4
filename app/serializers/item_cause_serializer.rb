class ItemCauseSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :cause_id
  belongs_to :item
  belongs_to :cause
end
