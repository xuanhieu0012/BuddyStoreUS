class QuestionFromCustomersController < ApplicationController

    def index
        
        q = QuestionFromCustomer.all
        render json: q, status: :ok
    end
    def create
        
        q = QuestionFromCustomer.create(params_question)
       
        render json: q, status: :created
    end
    def destroy
        q= QuestionFromCustomer.find_by(id: params[:id])
        if q 
            q.destroy
            render json: {}, status: :ok
        else
            render json: "not found", status: :unprocessable_entity
        end
    end

    private 
    def params_question
        params.permit(:name, :description, :email)
    end
end
