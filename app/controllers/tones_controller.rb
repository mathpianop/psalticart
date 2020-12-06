class TonesController < ApplicationController
  def index
  end

  def show
    render "#{params[:id]}.html.erb"
  end
end
