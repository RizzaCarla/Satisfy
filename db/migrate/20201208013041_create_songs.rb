class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false
      t.string :song_title, null: false
      t.integer :total_song_time, null: false
      t.timestamps
    end
    add_index :songs, :album_id, unique: true
    add_index :songs, :song_title
    add_index :songs, :total_song_time
  end
end
