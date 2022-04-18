puts "Seeding causes..."

Cause.create(name: "Vegan", description: "Fashion item that does not contain any animal materials and for which no animal by-products were used during the entire production process" )
Cause.create(name: "Low carbon footpring", description: "Company that makes a demonstrable impact on lowering the amount of greenhouse gas emitted from all of its activities" )
Cause.create(name: "Made with recycled materials", description: "Company that produces fashion items made from previously used materials" )
Cause.create(name: "Made in the USA", description: "Fashion item manufactured in the USA" )
Cause.create(name: "Fair labor practices", description: "Company that pays their employees 20% over the minimum wage, provides time-and-a-half overtime pay, prohibits the employment of minors, provides parental maternity leave of a minimum of three months, shares the cost of healthcare with its employees, and offers a minimum of 14 days of PTOs per year" )
Cause.create(name: "Charitable donations", description: "Company that donates part of its profits and/or products to charitable causes as part of its business model" )
Cause.create(name: "Women-owned", description: "Company that is at least 70% owned by women" )
Cause.create(name: "Minority-owned", description: "Company that is at least 70% owned by African-American, Asian-Indian, Asian-Pacific, Hispanic-Latin American, Native American people" )

puts "Seeding users..."

User.create(username: "elizabeth", password: "elizabethiscool", password_confirmation: "elizabethiscool", seller: true)
User.create(username: "molly", password: "mollylovespickle", password_confirmation: "mollylovespickle", seller: true)
User.create(username: "eve", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril", seller: true)
User.create(username: "dave", password: "daveisnotaseller", password_confirmation: "daveisnotaseller", seller: false)

puts "Seeding items..."

sellers = User.all.filter { |u| u.seller == true }
if sellers
    Item.create(name: "Leather chukka boot - dusk", price: 128, category: "Pants", image: "https://cdn.shopify.com/s/files/1/2728/6162/products/Mensblackleatherchukkaboot_1200x.jpg?v=1615561817", description: "this classic chukka will never go out of style. Featuring a hand welted sole, it'll last for years with proper care. Comfort and versatility were first in mind through the entire design process", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "Mid-top boot - black", price: 75, category: "Shoes", image: "https://cdn.shopify.com/s/files/1/0752/4221/products/KPGM027BLK_p_1200x.jpg?v=1512594013", description: "these mid-tops feature a non-slip rubber sole and a synthetic nubuck upper that is both water and oil resistant. The custom insole provides extra heel and arch support,", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "Flat - floral", price: 130, category: "Shoes", image: "https://cdn.shopify.com/s/files/1/2728/6162/products/GabyEmbroideredFloral_2048x.jpg?v=1586363428", description: "The intricate details of this shoe are all carefully embroidered. The incredibly fun, bright tones of this pattern will make it the perfect addition to your wardrobe. Due to the handmade nature of these shoes, the patterns will be unique on each shoe", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Leather bootie - brown", price: 140, category: "Shoes", image: "https://cdn.shopify.com/s/files/1/2728/6162/products/EspeSlateProduct_1200x.jpg?v=1579185684", description: "Our best selling boot, this ankle height statement piece has the perfect height heel. Just enough to add a little lift, while still being completely comfortable. The leather is soft enough to mold to your foot", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Flower pattern leather bag - brown", price: 175, category: "Bags", image: "https://cdn.shopify.com/s/files/1/1308/1595/products/TSSBagsInterior-21_1024x1024_2x_3a323878-6e8e-481d-bac6-9009df3c2581_1091x@2x.progressive.jpg?v=1618194846", description: "This genuine leather shopper is a carefully handcrafted classic accessory. With ample room for all your essentials, this design can be carried with an urban-chic attitude or it can simply be used to add subtle warmth to your everyday style", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Leather clutch wallet - dark brown", price: 62, category: "Bags", image: "https://cdn.shopify.com/s/files/1/1308/1595/products/TSS_bag_journal_product_shoot-223_1_1091x@2x.progressive.jpg?v=1559065153", description: "Handcrafted using genuine leather, this is a useful go-to accessory for every woman who wants to add a sun-kissed accent to her look. Rock this practicable wallet in style any time of day", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Leather messenger bag - brown", price: 175, category: "", image: "https://cdn.shopify.com/s/files/1/1308/1595/products/Final1_1091x@2x.progressive.PNG?v=1559575557", description: "17 inch Genuine leather satchel messenger bag, ideal for work, school or as a durable and stylish laptop bag! Genuine leather makes it durable and practical for daily use", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "Travel leather bag - dark brown", price: 263, category: "Bags", image: "https://cdn.shopify.com/s/files/1/1308/1595/products/DSC04285_1512x_55212081-4735-4abe-aa57-aac331d97172_1091x@2x.progressive.png?v=1573710481", description: "It is handmade from genuine leather that is soft and flexible yet strong and sturdy. This bag has plenty of room to fit in all your essentials and more. As pictured it fits over five outfits plus accessories and travel essentials and with room to spare", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "High-rise leggings - light green", price: 78, category: "Pants", image: "https://cdn.shopify.com/s/files/1/0019/2217/0943/products/4007_CompressiveHighRiseLegging_Lagoon_1022_StraightNeckCamiTop_Lagoon_0043.jpg?v=1645654501", description: "An extra high-rise with four-way stretch and compressive fabric made from recycled water bottles — basically everything you need to get through your favorite high-impact activities, like running, yoga, and binge watching true crime", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Denim bermida", price: 23, category: "Pants", image: "https://cdn.shopify.com/s/files/1/1287/6603/products/image_ad9ff612-c126-4ddf-9095-1c6cef022349_1080x.jpg?v=1649882893", description: "Vintage denim reworked into long line elastic waist shorts. Each one is unique and will come with a one of a kind acid wash denim color combination. ", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Flannel shorts", price: 15, category: "Pants", image: "https://cdn.shopify.com/s/files/1/1287/6603/products/image_804d192b-af6f-4e0c-af7b-1147de7dfc49_1080x.jpg?v=1647380946", description: "Vintage flannel shirts reimagined into a loungewear elastic waist short. Each one is unique and will come with a one of a kind plaid pattern combination and colorway", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Jogger - grey", price: 98, category: "Pants", image: "https://cdn.shopify.com/s/files/1/0492/8489/products/SUMMITMJOGGER-SIDE_1080x.jpg?v=1607736036", description: "With two zip pockets, an adjustable waistband and ankle cuffs, these joggers combine utility with style. Made using post-consumer recycled plastic", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "Shorts - black", price: 78, category: "Pants", image: "https://cdn.shopify.com/s/files/1/0492/8489/products/Men_sOnyxShort_1080x.jpg?v=1619578013", description: "Our moisture-wicking, anti-microbial, odor-resistant shorts are ready for any athletic activity. Featuring two zip pockets and a drawstring waistband, these shorts have you covered from warm up to post workout hangs", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "Blouse - white", price: 150, category: "Tops", image: "https://cdn.shopify.com/s/files/1/0086/9315/3858/products/Suit-You-Blouse-White-Detail_1400x.jpg?v=1649463470", description: "The classic women's dress shirt, reimagined with a slim fit and flattering v-neck. Crafted from our Technical Silk, this fabric is luxe, stretchy, and like everything we make... machine-washable", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Striped t-shirt - white", price: 90, category: "", image: "https://cdn.shopify.com/s/files/1/0086/9315/3858/products/Made-It-T-Shirt-Stripe-Half_1000x.jpg?v=1649303421", description: "Crafted from our Technical Silk this italian fabric is stretchy, soft, and machine-washable. Plus, it has built-in UV protection. Tuck it in, or don't — it'll always look sharp", gender: "Women", user: sellers.sample, condition: "New" )
    Item.create(name: "Sweatshirt - dark green", price: 60, category: "Tops", image: "https://cdn-images.farfetch-contents.com/17/57/38/29/17573829_36900549_1000.jpg", description: "organic-recycled cotton slogan sweatshirt", gender: "Men", user: sellers.sample, condition: "New" )
    Item.create(name: "Linen shirt - beige", price: 130, category: "Tops", image: "https://cdn-images.farfetch-contents.com/16/55/18/92/16551892_32255813_1000.jpg", description: "Malibu linen button-down shirt", gender: "Men", user: sellers.sample, condition: "New" )
end

puts "Seeding item_causes..."

50.times do
    ItemCause.create(cause: Cause.all.sample, item: Item.all.sample)
end

puts "Done seeding!"