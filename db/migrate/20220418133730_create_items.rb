class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.string :category
      t.string :image
      t.text :description
      t.string :gender
      t.integer :user_id
      t.string :condition 
      t.timestamps
    end
  end
end
