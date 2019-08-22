class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.integer :product_id, null: false
      t.string :discount_price, null: false
      t.timestamps
    end

    add_index :discounts, :product_id
  end
end
