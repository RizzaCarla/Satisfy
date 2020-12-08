class CreateOtherPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :other_playlists do |t|
      t.integer :total_count, null: false
      t.integer :playlist_name, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :other_playlists, :total_count
    add_index :other_playlists, :playlist_name
    add_index :other_playlists, :author_id, unique: true
  end
end
