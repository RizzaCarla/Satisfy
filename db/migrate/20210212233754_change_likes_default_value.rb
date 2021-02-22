class ChangeLikesDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:likes, :value, false)
  end
end
