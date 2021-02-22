class RemoveUniqueValidationForLikerId < ActiveRecord::Migration[5.2]
  def change
    remove_index(:likes, :liker_id)
    add_index(:likes, :liker_id)
  end
end
