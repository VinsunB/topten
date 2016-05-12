class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title
      t.string :body
      t.string :image
      t.integer :post_id

      t.timestamps
    end
  end
end
