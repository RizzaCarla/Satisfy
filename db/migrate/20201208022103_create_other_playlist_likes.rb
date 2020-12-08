class CreateOtherPlaylistLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :other_playlist_likes do |t|
      t.integer :other_liked_song_id, null: false
      t.integer :other_playlist_id, null: false
      t.timestamps
    end
    add_index :other_playlist_likes, :other_liked_song_id, unique: true
    add_index :other_playlist_likes, :other_playlist_id, unique: true
  end
end
