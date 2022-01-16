class ProductsController < ApplicationController
    
    def index
        render json: Product.all.as_json(except: :reviews), status: :ok
    end
    def update
        p = Product.find_by(id: params[:id])
        if p
            p.update(update_params)
            render json: p, status: :ok
        else 
            render json: "Product not found", status: :unprocessable_entity
        end
    end
    def destroy
        p = Product.find_by(id: params[:id])
        if p 
            p.destroy
            render json: {}, status: :ok
        else
            render json: "Product not found", status: :unprocessable_entity
        end
    end
    def create
        
        Product.create(product_params)

    end

    def show 
        product = Product.find_by(id: params[:id])
        if product
            render json: product, status: :ok
        else
            render json: {error: "Product not found"}, status: :not_found
        end
    end
    private
    def update_params
        params.permit(:name, :image_url, :price, :description, :quantity, :id)
    end
    def product_params
        params.require(:product).permit(:name , :price, :description, :quantity, :store_id, image_url: [])
    end
end
