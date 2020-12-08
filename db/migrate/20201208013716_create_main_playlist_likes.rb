class CreateMainPlaylistLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :main_playlist_likes do |t|
      t.integer :main_liked_song_id, null: false
      t.integer :main_playlist_id, null: false
      t.timestamps
    end
    add_index :main_playlist_likes, :main_liked_song_id, unique: true
    add_index :main_playlist_likes, :main_playlist_id, unique: true
  end
end
