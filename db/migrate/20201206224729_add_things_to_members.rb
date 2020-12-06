class AddThingsToMembers < ActiveRecord::Migration[6.0]
  def change
    add_column :members, :name, :string
    add_column :members, :jurisdiction, :string
    add_column :members, :background, :text
  end
end
