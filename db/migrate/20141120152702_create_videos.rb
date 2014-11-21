class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name
      t.integer :course_id
      t.string :url
      t.text :description
      t.date :create_at
      t.integer :duration
      t.string :format

      t.timestamps
    end
  end
end
