# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

roger = Cat.create(name: 'Roger', age: 4)
marley = Cat.create(name: 'Marley', age: 4)

stretching = Hobby.create(description: 'stretching', cat_ids: [marley.id])
brawling = Hobby.create(description: 'brawling', cat_ids: [roger.id])
