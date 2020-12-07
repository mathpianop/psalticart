class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.member_id = current_member.id
    @comment.question_id = params[:question_id]
    @comment.save

    redirect_to question_path(@comment.question)
  end

  
def destroy
  @comment = Comment.find(params[:id])
  @comment.destroy

  redirect_to question_path(@comment.question)
end

  private
  
  def comment_params
    params.require(:comment).permit(:member_id, :question_id, :body, :rank)
  end
end
