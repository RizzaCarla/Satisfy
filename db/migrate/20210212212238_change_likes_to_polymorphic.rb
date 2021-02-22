class ChangeLikesToPolymorphic < ActiveRecord::Migration[5.2]
  def change
    remove_column(:likes, :song_id)
    remove_column(:likes, :album_id)
    remove_column(:likes, :artist_id)
    add_column(:likes, :likeable_id, :bigint)
    add_column(:likes, :likeable_type, :string)
    add_column(:likes, :value, :integer)
    change_column_default(:likes, :value, 0)
  end
end
