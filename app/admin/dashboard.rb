ActiveAdmin.register_page "Dashboard" do
	content :title => proc{ I18n.t("active_admin.dashboard") } do
		columns do
			column do
				panel "Recent Orders" do
					table_for Order.date.cart_status do
						column :user_id 
						column :campus
						column :cart_status
						column :date
					end
					strong { link_to "View All orders", admin_orders_path }
				end
			end
		end
	end
end
