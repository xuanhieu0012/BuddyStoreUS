class ReviewsController < ApplicationController


    def create
        if current_user
            
            render json: Review.create(review_params), status: :created
        else
            render json: "You need to login to perform this action", status: :forbidden
        end
    end
    
    def destroy
        if current_user
            r = Review.find_by(id: params[:id])
            r.destroy
            render json: {}, status: :ok
        else
            render json: "You need to login to perform this", status: :forbidden
        end
    end
    def update
        if current_user
            r= Review.find_by(id: params[:id])
            r.update(update_params)
            render json: r, status: :ok
        else
            render json: "You need to login to perform this", status: :forbidden
        end
    end

    private
    def review_params
        params.permit(:content_desc, :rating, :user_id, :product_id, :username, :id)
    end
    def update_params
        params.permit(:content_desc, :rating, :id)

    end
end
