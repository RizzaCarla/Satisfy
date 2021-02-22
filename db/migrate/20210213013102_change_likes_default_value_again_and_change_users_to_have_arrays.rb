class ChangeLikesDefaultValueAgainAndChangeUsersToHaveArrays < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:likes, :value, 0)
  end
end
