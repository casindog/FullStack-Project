class RemoveColumnOnProductsTbl < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, name: "index_products_on_seller_id"
  end
end
