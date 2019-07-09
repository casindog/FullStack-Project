class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :original_price, null: false
      t.integer :transactions, null: false
      t.boolean :verified, null: false
      t.boolean :fast_shipping, null: false
      t.boolean :almost_gone, null: false
      t.boolean :just_shipping, null: false
      t.integer :seller_id, null: false
      t.timestamps
    end
    add_index :products, :seller_id, unique: true
  end
end
