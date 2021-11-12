class QuestionFromCustomersController < ApplicationController


    def create
        
        q = QuestionFromCustomer.create(params_question)
       
        render json: q, status: :created
    end

    private 
    def params_question
        params.permit(:name, :description, :email)
    end
end
