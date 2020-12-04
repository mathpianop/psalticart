class AddJurisdictionToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :jurisdiction, :string
  end
end
