class CreateItemCauses < ActiveRecord::Migration[6.1]
  def change
    create_table :item_causes do |t|
      t.integer :item_id
      t.integer :cause_id

      t.timestamps
    end
  end
end
