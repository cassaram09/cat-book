class CreateCatHobbies < ActiveRecord::Migration[5.0]
  def change
    create_table :cat_hobbies do |t|
      t.belongs_to :cat
      t.belongs_to :hobby
      t.timestamps
    end
  end
end
