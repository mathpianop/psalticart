class AddBodyToQuestion < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :body, :text
  end
end
