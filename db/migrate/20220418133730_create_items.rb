class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.string :type
      t.integer :category_id
      t.string :image
      t.text :description
      t.string :gender
      t.integer :seller_id

      t.timestamps
    end
  end
end
