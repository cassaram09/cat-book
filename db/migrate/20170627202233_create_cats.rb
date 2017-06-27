class CreateCats < ActiveRecord::Migration[5.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :breed
      t.integer :weight
      t.string :temperament 
      t.timestamps
    end
  end
end
