class AddMembersIdToQuestion < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :member_id, :integer, foreign_key: true, null: false
  end
end
