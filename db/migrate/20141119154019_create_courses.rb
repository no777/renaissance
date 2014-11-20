class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.text :description
      t.string :cover_image_url
      t.date :start_at
      t.date :end_at
      t.float :score
      t.string :difficulty
      t.float :price
      t.string :duration
      t.string :type
      t.integer :peoples
      t.integer :canvas_id

      t.timestamps
    end
  end
end
