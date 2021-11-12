class ProductsController < ApplicationController
    
    def index
        render json: Product.all, status: :ok
    end

    def show 
        product = Product.find_by(id: params[:id])
        if product
            render json: product, status: :ok
        else
            render json: {error: "Product not found"}, status: :not_found
        end
    end
end
