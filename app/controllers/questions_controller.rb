class QuestionsController < ApplicationController
  def new
    @question = Question.new
  end

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
    @comment = Comment.new
    @comment.question_id = @question.id
  
  end

  def create
    @question = Question.new(question_params)
    @question.save

    redirect_to question_path(@question)
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    redirect_to questions_path
  end
  private

  def question_params
    params.require(:question).permit(:body)
  end
end
