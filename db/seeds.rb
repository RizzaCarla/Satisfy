# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

# Satisfy Users

demo = User.create!(
  username: 'LuckyDemoUser',
  email: 'LuckyDemoUser@gmail.com',
  password: '99999999'
)

rizza = User.create!(
  username: 'RizzaCarla12', 
  email: 'rizzacarla_12@satisfy.com', 
  password: 'satisfyowner'
)

dhiveshan = User.create!(
  username: 'Dave', 
  email: 'dc@gmail.com', 
  password: '1231234567812'
)
shane = User.create!(
  username: 'PunnyShane', 
  email: 'BestBoss@theoffice.com', 
  password: 'Sharrrrr'
)

izzi = User.create!(
  username: 'DizIzIzzie', 
  email: 'IzziIsTooCool@foryou.com', 
  password: 'Isabelle'
)

jae = User.create!(
  username: 'DaddyJae', 
  email: 'IamDaddy@tinder.com', 
  password: 'CallMeDaddy'
)

san = User.create!(
  username: 'SweetieSan', 
  email: 'SweetieSan@gmail.com', 
  password: 'ImAnAngelInDisguise'
)

# Satisfy Artists

fkj = Artist.create!(
  artist_name: 'FKJ'
)

junemarieezy = Artist.create!(
  artist_name: '(((O)))'
)

# Satisfy Albums

ylangalbum = Album.create!(
  album_title: 'Ylang Ylang EP',
  artist_id: fkj.id
)

junemarieezyalbum2 = Album.create!(
  album_title: '(((2)))',
  artist_id: junemarieezy.id
)

# Satisfy Songs

iFeel = Song.create!(
  album_id: junemarieezyalbum2.id,
  song_title: 'iFeel',
  total_song_time: '4:29'
)

file1 = open('https://satisfy-seed.us-west-1.amazonaws.com/songs/iFeel.mp3')

iFeel.songUrl.attach(io: file1, filename: 'iFeel.mp3')

ylang = Song.create!(
  album_id: ylangalbum.id,
  song_title: 'Ylang Ylang',
  total_song_time: '3:33'
)

file2 = open('https://satisfy-seed.us-west-1.amazonaws.com/songs/Ylang_Ylang.mp3')

ylang.songUrl.attach(io: file2, filename: 'Ylang_Ylang.mp3')
