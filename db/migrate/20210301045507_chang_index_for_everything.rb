class ChangIndexForEverything < ActiveRecord::Migration[5.2]
  def change
    remove_index(:songs, :album_id)
    add_index(:songs, :album_id)
  end
end
