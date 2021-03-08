class ChangeAlbumIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index(:albums, :artist_id)
    add_index(:albums, :artist_id)
  end
end
