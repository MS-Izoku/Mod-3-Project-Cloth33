# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user_1 = User.create(username: "molly" , password: "password")
user_3 = User.create(username: "mitch" , password: "wordpass")


# Tops

item_1 = Item.create(name: "Basic Blue Shirt", category: "Top", img_url: 'https://m.media-amazon.com/images/I/71soGD-jw0L._SR500,500_.jpg', user_id: 1)

item_2 = Item.create(name: "Basic Black Shirt", category: "Top", img_url: 'https://shirtsofcotton.com/en/media/catalog/product/cache/10/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/s/h/shirtsofcotton-t-shirt-soc-10-front-1200px_1.jpg', user_id: 1)

item_3 = Item.create(name: "Skim Milk Tshirt", category: "Top", img_url: 'https://cdn.shopify.com/s/files/1/1086/6554/products/Dont_be_Influenced_by_Influencers_t_product_1024x1024_b2ac6f6e-0198-49d6-ba77-86f8963bc2d5_1024x1024.jpg?v=1554170039', user_id: 1)

item_4 = Item.create(name: "Obey Tshirt", category: "Top", img_url: 'https://cdn.shopify.com/s/files/1/2205/4557/products/pray-obey-love-repeat-t-shirt-district-womens-navy-xs-christ-follower-life_476_400x.jpg?v=1564448597', user_id: 1)

item_5 = Item.create(name: "Alexander McQueen White Blouse", category: "Top", img_url: 'https://images.neimanmarcus.com/ca/2/product_assets/B/4/Z/E/C/NMB4ZEC_mu.jpg', user_id: 1)

item_6 = Item.create(name: "Rag & Bone Grey Tshirt", category: "Top", img_url: 'http://www.viva-la-veg.com/images/449/755471.jpg', user_id: 1)

item_7 = Item.create(name: "Black Lace Shirt", category: "Top", img_url: 'https://m.media-amazon.com/images/I/71VyWXCkKZL._SR500,500_.jpg', user_id: 1)

item_8 = Item.create(name: "Black Shirt", category: "Top", img_url: 'https://m.media-amazon.com/images/I/51E9OH3M-NL._SR500,500_.jpg', user_id: 1)

item_9 = Item.create(name: "Burberry Cardigan", category: "Top", img_url: 'https://cdn-images.farfetch-contents.com/14/23/77/03/14237703_20171818_1000.jpg', user_id: 1)

item_10 = Item.create(name: "Saint Laurent Jean Jacket", category: "Top", img_url: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/be/P00263782.jpg', user_id: 1)


# Bottoms

item_11 = Item.create(name: "Black Givenchy Pants", category: "Bottom", img_url: 'https://cdna.lystit.com/1200/630/tr/photos/2013/10/26/givenchy-black-womens-high-waisted-wide-leg-pants-product-1-14506016-400644937.jpeg', user_id: 1)

item_12 = Item.create(name: "Jeans", category: "Bottom", img_url: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dwa114bdae/product_images/0860445380252NEW_00_349.jpg?sw=690&sh=1070&sm=fit', user_id: 1)

item_13 = Item.create(name: "Khaki Pants", category: "Bottom", img_url: 'https://images-na.ssl-images-amazon.com/images/I/61gKcQvIq5L._UX385_.jpg', user_id: 1)

item_14 = Item.create(name: "Red Skirt", category: "Bottom", img_url: 'https://images-na.ssl-images-amazon.com/images/I/71Uv9FPgOmL._UL1500_.jpg', user_id: 1)



# Accessories

item_15 = Item.create(name: "Kate Spade Newspaper Clutch", category: "Accessory", img_url: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2014/09/19/541cd458dc6209055d006ad8/m_541cd45bdc6209055d006adb.jpg', user_id: 1)

item_16 = Item.create(name: "Black LV Purse", category: "Accessory", img_url: 'https://cdn.shopify.com/s/files/1/0384/0161/products/36976-01_Louis_Vuitton_City_Steamer_Handbag_Golden_2D_0002_480x480.jpg?v=1542700170', user_id: 1)

item_17 = Item.create(name: "Tom Ford Cuff Bracelet", category: "Accessory", img_url: 'https://i1.adis.ws/i/tom_ford/JW0811-PLSTO_BCD_APPENDGRID?$listing_grid$', user_id: 1)


item_18 = Item.create(name: "Vince Camuto Earrings", category: "Accessory", img_url: 'https://images-na.ssl-images-amazon.com/images/I/81ShHixXtaL._UY500_.jpg', user_id: 1)

item_19 = Item.create(name: "Gucci Belt", category: "Accessory", img_url: 'https://cdn-images.farfetch-contents.com/12/13/24/61/12132461_10136995_600.jpg', user_id: 1)


item_20 = Item.create(name: "Fascinator", category: "Accessory", img_url: 'https://i.etsystatic.com/8653643/r/il/0e0b8b/1688302639/il_794xN.1688302639_df6c.jpg', user_id: 1)

item_21 = Item.create(name: "Name Necklace", category: "Accessory", img_url: 'https://i.ebayimg.com/images/g/QAcAAOSwmudZ~B9O/s-l300.jpg', user_id: 1)

item_22 = Item.create(name: "Cartier Earrings", category: "Accessory", img_url: 'https://i.pinimg.com/474x/03/56/03/0356036391ae8e1f00b5f732d2f8ec57.jpg', user_id: 1)



# Shoes

item_23 = Item.create(name: "Off-White Heels", category: "Shoes", img_url: 'https://images.prod.meredith.com/product/1230112e1fb1161426542d723ed2e393/1556877686626/l/high-heel-shoes-women-black-off-white-c-o-virgil-abloh-heels', user_id: 1)


item_24 = Item.create(name: "Givenchy Pearl Oxfords", category: "Shoes", img_url: 'http://www.fincadelmoral.com/images/pic/pqvM4Xkm-119.jpg', user_id: 1)


item_25 = Item.create(name: "Breakfast Loafers", category: "Shoes", img_url: 'https://photorankmedia-a.akamaihd.net/media/k/p/z/kpzw4i4/normal.jpg', user_id: 1)

item_26 = Item.create(name: "Commes des Garcons x Converse Sneakers", category: "Shoes", img_url: 'https://cdn.shopify.com/s/files/1/0408/9909/products/Converse_x_Comme_Des_Garcons_PLAY_All_Star_Chuck_70_Ox_-_Off-White-AZ-K117-001-2-6678-March_11_2019_900x.jpg?v=1552346907', user_id: 1)

item_27 = Item.create(name: "Steve Madden Sandals", category: "Shoes", img_url: 'https://media3.s-nbcnews.com/j/newscms/2019_16/1426561/stevemadden-sandals_miller_black-suede_side_grande_f39b42c11aa2b5cfa21bd1b4b3a81ebb.fit-720w.jpg', user_id: 1)




# Dresses

item_28 = Item.create(name: "Maria Pinto Yellow Durga Dress", category: "Dress", img_url: 'https://cdn.shopify.com/s/files/1/0291/5965/products/Durga_blk_front_2.jpg?v=1558457763', user_id: 1)

item_29 = Item.create(name: "Van Gogh Dress", category: "Dress", img_url: 'http://coolstuffdude.com/wp-content/uploads/2015/09/van-gogh-starry-night-swing-dress.jpg', user_id: 1)

item_30 = Item.create(name: "Black Dress", category: "Dress", img_url: 'https://fastly.hautelookcdn.com/products/DR94939-003/large/8642255.jpg?height=350&width=228', user_id: 1)

item_31 = Item.create(name: "Shirt Dress", category: "Dress", img_url: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/9217186_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$', user_id: 1)

item_32 = Item.create(name: "Black Jumpsuit", category: "Dress", img_url: 'https://di2ponv0v5otw.cloudfront.net/posts/2019/04/02/5ca401fe969d1f7af1be8ebf/m_5ca402539d3b78a34f2973b7.jpg', user_id: 1)


outfit_1 = Outfit.create(user_id: 1)
outfit_2 = Outfit.create(user_id: 1)

outfitItem_1 = OutfitItem.create(item_id: 6, outfit_id: 1)
outfitItem_2 = OutfitItem.create(item_id: 11, outfit_id: 1)
outfitItem_3 = OutfitItem.create(item_id: 16, outfit_id: 1)
outfitItem_4 = OutfitItem.create(item_id: 27, outfit_id: 1)
outfitItem_5 = OutfitItem.create(item_id: 22, outfit_id: 1)
outfitItem_6 = OutfitItem.create(item_id: 28, outfit_id: 2)
outfitItem_7 = OutfitItem.create(item_id: 25, outfit_id: 2)


