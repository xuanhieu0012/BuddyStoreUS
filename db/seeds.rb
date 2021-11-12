# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Sedding Data"
o1=Owner.create(name: 'Hieu Nguyen', age: 25)
s1 =Store.create(name: 'BuddyStoreUs', owner_id: o1.id)
p1 =Product.create(name: "BLACK GARLIC", price: 30, description: "Black Garlic contains approximately 850 mg SAllyl Cysteine per bulb FULL 90 days in a special fermentation process
There's only one ingredient garlic. It's aged for FULL 90 days in a special fermentation process under high heat, where it develops its darker color, softer texture, and sweeter taste NOT just 30 days
Black garlic is sweet meets savory, a perfect mix of molasses-like richness and tangy garlic undertones, aged white garlic, can be enjoyed raw or in your favorite foods
Effects - To eliminate fatigue, improve physical strength, solve constipation, and improve the activity of the prostate, promoting sleep quality and also other functions
Storage - RioRand Black Garlic texture is soft, not suitable for vacuum package or packing too tight, otherwise you will squeeze the bad black garlic. Once opened, seal mouth after eating, and should be preserved in a cool, dry place", store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/130865098_263048148811897_3959658864474888042_n_600x.jpg?v=1611098281', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/131010742_263048158811896_1404883343604990463_n_600x.jpg?v=1611098292'])
p2 = Product.create(name: "Super Collagen Plus", price: 89, description: "COLLAGEN
Wild fish-higher availability of omega 3s, more bioavailable/absorption, speed up desired skin/bone
health
Fish collagen: 75% of our skin, Type 1: proline/glycine, Type 3: In our intestines, important for the gut lining
health and repair
-Skin Hydration
-Strengthen Hair/Nails Growth
-Minimize Fine Lines/Wrinkles
-Lean muscle gain &amp; workout recovery
-Alleviate scars/faster healing
-Reduce joint pain
Goji:
-protects eyes, support the immune system, protects against cancer, promotes healthy skin, stabilize blood sugar helps depression/anxiety, helps liver damage, great antioxidants, boost Energy, Anti-aging
Aloe Vera:
-healing powers, digestive health, clears acne, relieves anal fissure, weight loss, hair/skin moisture, good
source of Vitamin C&E
Chamomile:
-Helps sleep, reduce muscle spasm and period pain, treats cuts/wounds, reduce stress, lighten skin
Acerola (Cherry)-Superfruits
-Vitamin C, antioxidants, boost the immune system, diarrhea, liver problem", store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/9_600x.jpg?v=1603576133', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/122552120_697001267688754_3671002063524319602_n_600x.jpg?v=1603576408'])
p3 =Product.create(name: "DOUBLE WALL GLASS TOGO BOTTLE", price: 20, description:"Perfect design
✓ Made of toxic-free borosilicate glass,food-grade 304 stainless steel, which is extremely safe and BPA/lead-free.

✓Double-walled glass tea tumbler, keep your drinks cool or warm longer without sweating and leaking,three-pieces design

✓ This glass water bottle is resistant to thermal shock, preventing cracking in extreme hot or cold which can withstand the repaid temperature change of the water from -20℃ to 100℃. Resistant double-layer glass bottle, don't need to care the erosion anymore

✓Built-in sealed the silica gel ring, inverted shaking does not leak water

✓ Easy and convenient, comfortable and drink.Soft and light skin, portable tough, and durable

ONLY 4 COLORS AVAILABLE: Black, Gold, Rose, Silver",quantity: 20, store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/6_800x.jpg?v=1610157252', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/9_5d88e8de-d70f-4d38-a546-64d17cc9fa76_800x.jpg?v=1610157252'])
p4 =Product.create(name: "SUNSCREENS SKINSAVER SPF 30", price: 55, description: " Aloe barradensis leaf juice: smooth skin, anti-inflammatory, scar reducing and wounds healing properties, protect skin from UV damage. 2. Sea whip extract: a powerful healing ingredient as it neutralizes enzymes that are responsible for irritation evident in skin sensitivity, sunburn and aging, as well as pain and swelling from acne. 3. Glycerin: Anti-aging, anti-irritation, improve skin permeability, promotes cell maturation, smoother skin, improves skin elasticity, healing wound, control oil skin.
", store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/il_fullxfull.2477544222_eaz5_800x.jpg?v=1603841243'])
p5 =Product.create(name: "ONAKA LOSE STUBBORN BELLY FAT", price: 40, description:"This product helps to lose more belly fat than dieting and exercising alone.

How does Onaka Belly Fat Burner Work?

-Onaka is made with Kudzu Flower Extract. Kudzu Flower Extract increases the activity of fat-burning genes and reduces the activity of genes that cause the body to lay down fat.

-Kudzu flower also displays properties that influence energy expenditure and uncoupling protein expression. This can result in enhanced metabolism and fat burning Taking Kudzu Properly Kudzu root should be avoided by anyone with a blood clotting or bleeding disorder and by women who are pregnant and/or lactating. If you're currently being treated for a medical condition such as diabetes or cardiovascular disease, speak with your doctor before adding kudzu root to your routine.

-If you're being treated for cancer like breast cancer, which can be sensitive to hormones, you also shouldn't take kudzu root. Always consult with a certified physician before using this or any other dietary supplement with which you are not familiar.

Please fully research each ingredient, and consult with your physician to be sure that any possible allergic reactions are avoided, as well as any other sensitivities that may be particular to you and your physiology. If unsure, please do not use our product. If you are suffering from disease or taking any medication, please consult your doctor. If you experience any discomfort or feel unusual in your physical condition, please stop taking this product immediately and consult your doctor.",quantity: 40, store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/131511036_271016224681756_8536733140426733201_n_800x.jpg?v=1610157572', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/131673800_271016238015088_2891433470387746058_n_800x.jpg?v=1610157572', "https://cdn.shopify.com/s/files/1/0267/5772/6399/products/132525890_271016184681760_4684235241640819930_n_800x.jpg?v=1610157572"])
p6 =Product.create(name: "ORIHIRO NATTOKINASE 2000FU", price: 40, description:"Prevent Stroke",quantity: 25, store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/143067795_296600848789960_7783346221154977038_n_800x.jpg?v=1612727192', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/143379823_107929427969961_6276667385007396823_n_800x.jpg?v=1612727192'])
p7 =Product.create(name: "C-LESTER TOPICAL VITAMIN C20 SERUM", price: 155, description:"This is our best-seller anti-aging serum that lessens the look of dark spots while also lifting the skin of wrinkles. This serum works as a natural collagen starter in order to help the skin create collagen and prevent wrinkles. It also helps lighten and even skin tone. This lightweight serum truly helps restore youth and prevent aging happening too soon.",quantity: 50, store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/c-lester-topical-vitamin-c20-serum-simple-product-dermaesthetics-usa-231378_600x_1964c790-cbe2-4fa8-90cb-eec53a46d6ef_800x.jpg?v=1607801412'])
p8 =Product.create(name: "COCONUT OIL 100% ORGANIC", price: 30, description:"Help your skin moisture",quantity: 30, store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/153440457_150510963567731_6838923669471661807_n_800x.png?v=1614719926'])
p9 =Product.create(name: "FUCOIDAN UMI NO SHIZUKU", price: 320, description:"Pure Fucoidan Mix AG, in an easily ingested, vegetable-based capsule. The amount of intake can be easily regulated by taking several capsules throughout the day. (Fucoidan content: 212.5mg/capsule) As a general guideline, take three to five capsules per day with water without chewing.", quantity: 10,store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/129394555_999456357230805_422479241711690913_n_800x.jpg?v=1609360459', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/128552257_482567906040062_7725057846999391954_n_800x.jpg?v=1609360459','https://cdn.shopify.com/s/files/1/0267/5772/6399/products/128338458_222365712732441_8907642303283396314_n_800x.jpg?v=1609360459'])
p10 =Product.create(name: "NEUGLOW L PREMIUM WHITE – WHITENING SHINING FROM INSIDE", price: 120, description:"Neuglow L Premium White – Whitening Shining From Inside 28 Tablets

Manufactured under the objective of HEALTHY WHITE, safe, whitening boost while bringing countless health benefits, such as strengthen the immune system, prevent diseases, cancer, fight against free radicals, enhance the detoxifying function of the body as well as eliminate toxins from the environment.

Each Effervescent Tablet Contains:
Vitamin C 1000mg
L-Glutathione (Reduced) 500mg

HOW TO USE: Dissolve 1 effervescent tablet in about 200 ml of cold water. Wait for it to dissolve completely and drink immediately.

NOTE:

You can use less volume of water if you want a strong, juicy taste or you can also add some more water for the interested taste.
It will be delicious if used in cold. The product does not contain sugar, so it does not cause weight gain.
After dissolving, drink immediately. Do not leave in the air for long time in order to avoid the active substances to be oxidized and the effect reduces.
Take with meals, immediately after eating or 1-2 hours after eating. Do not drink with an empty stomach.
REGIMEN

First month:  Attack dose. 02 tablets (morning and at night before you go to bed) in 02 months. For dark skin, 3 tablets in the first month and 2 tablets in the next 1 month.
Third month: Stabilization dose. 02 tablets alternating with 01 tablet daily for 01 month.
Fourth month: Maintenance dose. 1 tablet per day in 1 month.
From fifth month onwards: Prevention dose. 2-3 tablets a week to lighten the skin, prevent melasma, hyperpigmentation, cancer as well as endogenously protect the skin from the sun, enhance immune system, anti-aging, scavenger radical and eliminate toxins from food and environment.
PRESERVATION

Store in a cool and dry place.
Keep out of reach of children.",quantity: 29,store_id: s1.id, image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/57_800x.jpg?v=1622607132', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/57_1_800x.jpg?v=1622607132'])
u1 = User.create(username: "xuanhieu", password: "xuanhieu")

Review.create(content_desc: "it's taste good", rating: 5,user_id: u1.id, product_id: p1.id)
puts "Done Seeding"