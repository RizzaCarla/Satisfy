class CreateMainPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :main_playlists do |t|
      t.integer :total_count, null: false
      t.integer :playlist_name, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :main_playlists, :total_count
    add_index :main_playlists, :playlist_name
    add_index :main_playlists, :author_id, unique: true
  end
end
