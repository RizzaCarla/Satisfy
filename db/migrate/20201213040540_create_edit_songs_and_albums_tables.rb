class CreateEditSongsAndAlbumsTables < ActiveRecord::Migration[5.2]
  def change
    create_table :edit_songs_and_albums_tables do |t|
      remove_column :albums, :total_album_time
      change_column :songs, :total_song_time, :string, null: false
      t.timestamps
    end
  end
end
