class AddImgurlToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :img_url, :string, null: false
  end
end
