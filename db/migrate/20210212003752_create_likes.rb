class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :song_id
      t.integer :album_id
      t.integer :artist_id

      t.timestamps
    end
    add_index :likes, :liker_id, unique: true
  end
end
