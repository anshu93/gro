class Orderitemrelation < ActiveRecord::Base
	attr_accessible :order_id, :item_id, :quantity
	belongs_to :order
	belongs_to :item
end
