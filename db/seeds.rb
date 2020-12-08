# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all!

# Satisfy Users

rizza = User.create!(username: 'RizzaCarla12', email: 'rizzacarla_12@satisfy.com', password: 'satisfyowner')
dhiveshan = User.create!(username: 'Dave', email: 'dc@gmail.com', password: '1231234567812')
shane = User.create!(username: 'PunnyShane', email: 'BestBoss@theoffice.com', password: 'Sharrrrr')
izzi = User.create!(username: 'DizIzIzzie', email: 'IzziIsTooCool@foryou.com', password: 'Isabelle')
jae = User.create!(username: 'DaddyJae', email: 'IamDaddy@tinder.com', password: 'CallMeDaddy')
san = User.create!(username: 'SanSoSweet', email: 'SanSugarCane@candy.com', password: 'ImAnAngelInDisguise')

# Satisfy Artists


