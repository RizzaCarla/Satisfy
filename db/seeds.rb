# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Like.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

# ------------------------------------------------------------------------------------

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

# ------------------------------------------------------------------------------------

# Satisfy Artists

fkj = Artist.create!(
  artist_name: 'FKJ'
)

artistphotofile1 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/images/fkjartist.jpg')

fkj.artistPhotoUrl.attach(io: artistphotofile1, filename: 'fkjartist.jpg')

# ===

junemarieezy = Artist.create!(
  artist_name: '(((O)))'
)

artistphotofile2 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/images/junemarieezyartist.jpg')

junemarieezy.artistPhotoUrl.attach(io: artistphotofile2, filename: 'junemarieezyartist.jpg')

# ===

austinprince = Artist.create!(
  artist_name: 'Austin Prince'
)

artistphotofile3 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/AustinPrince.JPG')

austinprince.artistPhotoUrl.attach(io: artistphotofile3, filename: 'AustinPrince.JPG')

# ===

bubbs = Artist.create!(
  artist_name: 'Bubbs'
)

artistphotofile4 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Bubbs.JPG')

bubbs.artistPhotoUrl.attach(io: artistphotofile4, filename: 'Bubbs.JPG')

# ===

drees = Artist.create!(
  artist_name: "Dre'es"
)

artistphotofile5 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Drees.JPG')

drees.artistPhotoUrl.attach(io: artistphotofile5, filename: 'Drees.JPG')

# ===

chon = Artist.create!(
  artist_name: 'Chon'
)

artistphotofile6 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Chon.JPG')

chon.artistPhotoUrl.attach(io: artistphotofile6, filename: 'Chon.JPG')

# ===

eloise = Artist.create!(
  artist_name: 'Eloise'
)

artistphotofile7 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Eloise.JPG')

eloise.artistPhotoUrl.attach(io: artistphotofile7, filename: 'Eloise.JPG')

# ===

emotionaloranges = Artist.create!(
  artist_name: 'Emotional Oranges'
)

artistphotofile8 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/EmotionalOranges.JPG')

emotionaloranges.artistPhotoUrl.attach(io: artistphotofile8, filename: 'EmotionalOranges.JPG')

# ===

forrest = Artist.create!(
  artist_name: 'Forrest'
)

artistphotofile9 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Forrest.JPG')

forrest.artistPhotoUrl.attach(io: artistphotofile9, filename: 'Forrest.JPG')

# ===

galimatias = Artist.create!(
  artist_name: 'Galimatias'
)

artistphotofile10 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Galimatias.JPG')

galimatias.artistPhotoUrl.attach(io: artistphotofile10, filename: 'Galimatias.JPG')

# ===

homemadekazoku = Artist.create!(
  artist_name: 'Home Made Kazoku'
)

artistphotofile11 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/HomeMadeKazoku.jpg')

homemadekazoku.artistPhotoUrl.attach(io: artistphotofile11, filename: 'HomeMadeKazoku.jpg')

# ===

jaie = Artist.create!(
  artist_name: 'JAIE'
)

artistphotofile12 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/JAIE.JPG')

jaie.artistPhotoUrl.attach(io: artistphotofile12, filename: 'JAIE.JPG')

# ===

jcole = Artist.create!(
  artist_name: 'J. Cole'
)

artistphotofile13 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/JCole.JPG')

jcole.artistPhotoUrl.attach(io: artistphotofile13, filename: 'JCole.JPG')

# ===

jimmybrown = Artist.create!(
  artist_name: 'Jimmy Brown'
)

artistphotofile14 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/JimmyBrown.JPG')

jimmybrown.artistPhotoUrl.attach(io: artistphotofile14, filename: 'JimmyBrown.JPG')

# ===

kaliuchis = Artist.create!(
  artist_name: 'Kali Uchis'
)

artistphotofile15 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/KaliUchis.JPG')

kaliuchis.artistPhotoUrl.attach(io: artistphotofile15, filename: 'KaliUchis.JPG')

# ===

lucid = Artist.create!(
  artist_name: 'Lucid'
)

artistphotofile16 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Lucid.JPG')

lucid.artistPhotoUrl.attach(io: artistphotofile16, filename: 'Lucid.JPG')

# ===

masego = Artist.create!(
  artist_name: 'Masego'
)

artistphotofile17 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Masego.JPG')

masego.artistPhotoUrl.attach(io: artistphotofile17, filename: 'Masego.JPG')

# ===

sabrinaclaudio = Artist.create!(
  artist_name: 'Sabrina Claudio'
)

artistphotofile18 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/SabrinaClaudio.JPG')

sabrinaclaudio.artistPhotoUrl.attach(io: artistphotofile18, filename: 'SabrinaClaudio.JPG')

# ===

surfaces = Artist.create!(
  artist_name: 'Surfaces'
)

artistphotofile19 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/Surfaces.JPG')

surfaces.artistPhotoUrl.attach(io: artistphotofile19, filename: 'Surfaces.JPG')

# ===

tommisch = Artist.create!(
  artist_name: 'Tom Misch'
)

artistphotofile20 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/TomMisch.JPG')

tommisch.artistPhotoUrl.attach(io: artistphotofile20, filename: 'TomMisch.JPG')

# ===

vallisalps = Artist.create!(
  artist_name: 'Vallis Alps'
)

artistphotofile21 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/VallisAlps.jpg')

vallisalps.artistPhotoUrl.attach(io: artistphotofile21, filename: 'VallisAlps.JPG')

# ===

zolacourtney = Artist.create!(
  artist_name: 'Zola Courtney'
)

artistphotofile22 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Artist+Photos/ZolaCourtney.JPG')

zolacourtney.artistPhotoUrl.attach(io: artistphotofile22, filename: 'ZolaCourtney.JPG')

# ------------------------------------------------------------------------------------

# Satisfy Albums
ylangalbum = Album.create!(
  album_title: 'Ylang Ylang EP',
  artist_id: fkj.id
)

albumphotofile1 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/images/ylang_photo.JPG')

ylangalbum.albumPhotoUrl.attach(io: albumphotofile1, filename: 'ylang_photo.JPG')

# ===

junemarieezyalbum2 = Album.create!(
  album_title: '(((2)))',
  artist_id: junemarieezy.id
)

albumphotofile2 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/images/junemarieezy2_photo.JPG')

junemarieezyalbum2.albumPhotoUrl.attach(io: albumphotofile2, filename: 'junemarieezy2_photo.JPG')

# ===

beattape = Album.create!(
  album_title: 'Beat Tape',
  artist_id: tommisch.id
)

albumphotofile3 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/BeatTape.JPG')

beattape.albumPhotoUrl.attach(io: albumphotofile3, filename: 'BeatTape.JPG')

# ===

blowback = Album.create!(
  album_title: 'Blowback',
  artist_id: galimatias.id
)

albumphotofile4 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Blowback.jpg')

blowback.albumPhotoUrl.attach(io: albumphotofile4, filename: 'Blowback.jpg')

# ===

confidentlylost = Album.create!(
  album_title: 'Confidently Lost',
  artist_id: sabrinaclaudio.id
)

albumphotofile5 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/ConfidentlyLost.JPG')

confidentlylost.albumPhotoUrl.attach(io: albumphotofile5, filename: 'ConfidentlyLost.JPG')

# ===

december = Album.create!(
  album_title: 'December',
  artist_id: jaie.id
)

albumphotofile6 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/December.jpg')

december.albumPhotoUrl.attach(io: albumphotofile6, filename: 'December.jpg')

# ===

highforhours = Album.create!(
  album_title: 'High For Hours',
  artist_id: jcole.id
)

albumphotofile7 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/HighForHours.JPG')

highforhours.albumPhotoUrl.attach(io: albumphotofile7, filename: 'HighForHours.JPG')

# ===

homey = Album.create!(
  album_title: 'Homey',
  artist_id: chon.id
)

albumphotofile8 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Honey.jpg')

homey.albumPhotoUrl.attach(io: albumphotofile8, filename: 'Honey.jpg')

# ===

irene = Album.create!(
  album_title: 'Irene',
  artist_id: jimmybrown.id
)

albumphotofile9 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Irene.JPG')

irene.albumPhotoUrl.attach(io: albumphotofile9, filename: 'Irene.JPG')

# ===

isolation = Album.create!(
  album_title: 'Isolation',
  artist_id: kaliuchis.id
)

albumphotofile10 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Isolation.jpg')

isolation.albumPhotoUrl.attach(io: albumphotofile10, filename: 'Isolation.jpg')

# ===

ladylady = Album.create!(
  album_title: 'Lady Lady',
  artist_id: masego.id
)

albumphotofile11 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/LadyLady.jpg')

ladylady.albumPhotoUrl.attach(io: albumphotofile11, filename: 'LadyLady.jpg')

# ===

meditation = Album.create!(
  album_title: 'Meditation',
  artist_id: lucid.id
)

albumphotofile12 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Meditation.JPG')

meditation.albumPhotoUrl.attach(io: albumphotofile12, filename: 'Meditation.JPG')

# ===

newwaves = Album.create!(
  album_title: 'New Waves',
  artist_id: austinprince.id
)

albumphotofile13 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/NewWaves.jpg')

newwaves.albumPhotoUrl.attach(io: albumphotofile13, filename: 'NewWaves.jpg')

# ===

nothingtolose = Album.create!(
  album_title: 'Nothing To Lose',
  artist_id: zolacourtney.id
)

albumphotofile14 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/NothingToLose.jpg')

nothingtolose.albumPhotoUrl.attach(io: albumphotofile14, filename: 'NothingToLose.jpg')

# ===

surf = Album.create!(
  album_title: 'Surf',
  artist_id: surfaces.id
)

albumphotofile15 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Surf.JPG')

surf.albumPhotoUrl.attach(io: albumphotofile15, filename: 'Surf.JPG')

# ===

thankyou = Album.create!(
  album_title: 'Thank You',
  artist_id: homemadekazoku.id
)

albumphotofile16 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/ThankYou.jpg')

thankyou.albumPhotoUrl.attach(io: albumphotofile16, filename: 'ThankYou.jpg')

# ===

thejuice = Album.create!(
  album_title: 'The Juice',
  artist_id: emotionaloranges.id
)

albumphotofile17 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/theJuice.jpg')

thejuice.albumPhotoUrl.attach(io: albumphotofile17, filename: 'theJuice.jpg')

# ===

traffic = Album.create!(
  album_title: 'Traffic',
  artist_id: bubbs.id
)

albumphotofile18 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Traffic.jpg')

traffic.albumPhotoUrl.attach(io: albumphotofile18, filename: 'Traffic.jpg')

# ===

vallisalpsalbum = Album.create!(
  album_title: 'Vallis Alps',
  artist_id: vallisalps.id
)

albumphotofile19 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/VallisAlps.jpg')

vallisalpsalbum.albumPhotoUrl.attach(io: albumphotofile19, filename: 'VallisAlps.jpg')

# ===

warm = Album.create!(
  album_title: 'Warm',
  artist_id: drees.id
)

albumphotofile20 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/Warm.jpg')

warm.albumPhotoUrl.attach(io: albumphotofile20, filename: 'Warm.jpg')

# ===

yoursoul = Album.create!(
  album_title: 'Your Soul',
  artist_id: forrest.id
)

albumphotofile21 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/Album+Photos/YourSoul.jpg')

yoursoul.albumPhotoUrl.attach(io: albumphotofile21, filename: 'YourSoul.jpg')

# ===

geography = Album.create!(
  album_title: 'Geography',
  artist_id: tommisch.id
)

albumphotofile22 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/images/tommisch.JPG')

geography.albumPhotoUrl.attach(io: albumphotofile22, filename: 'tommisch.JPG')

# ===

thisthingcalledliving = Album.create!(
  album_title: 'This Thing Called Living',
  artist_id: eloise.id
)

albumphotofile23 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/images/Eloise.JPG')

thisthingcalledliving.albumPhotoUrl.attach(io: albumphotofile23, filename: 'Eloise.JPG')

# ------------------------------------------------------------------------------------

# Satisfy Songs
#===june===

iFeel = Song.create!(
  album_id: junemarieezyalbum2.id,
  song_title: 'iFeel',
  total_song_time: '4:32'
)

songfile1 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/iFeel.mp3')

iFeel.songUrl.attach(io: songfile1, filename: 'iFeel.mp3')

# ===

idgaf = Song.create!(
  album_id: junemarieezyalbum2.id,
  song_title: 'IDGAF',
  total_song_time: '4:09'
)

songfile2 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/IDGAF.mp3')

idgaf.songUrl.attach(io: songfile2, filename: 'IDGAF.mp3')

# ===

omw = Song.create!(
  album_id: junemarieezyalbum2.id,
  song_title: 'omw',
  total_song_time: '3:58'
)

songfile3 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/omw.mp3')

omw.songUrl.attach(io: songfile3, filename: 'omw.mp3')

# ===fkj===

ylang = Song.create!(
  album_id: ylangalbum.id,
  song_title: 'Ylang Ylang',
  total_song_time: '3:33'
)

songfile4 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Ylang_Ylang.mp3')

ylang.songUrl.attach(io: songfile4, filename: 'Ylang_Ylang.mp3')

# ===

risk = Song.create!(
  album_id: ylangalbum.id,
  song_title: 'Risk',
  total_song_time: '3:58'
)

songfile5 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Risk.mp3')

risk.songUrl.attach(io: songfile5, filename: 'Risk.mp3')

# ===

tenYearsAgo = Song.create!(
  album_id: ylangalbum.id,
  song_title: '10 Years Ago',
  total_song_time: '3:20'
)

songfile6 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/10YearsAgo.mp3')

tenYearsAgo.songUrl.attach(io: songfile6, filename: '10YearsAgo.mp3')

# ===

itrunsthroughme = Song.create!(
  album_id: geography.id,
  song_title: 'It Runs Through Me',
  total_song_time: '4:21'
)

songfile7 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/ItRunsThroughMe.mp3')

itrunsthroughme.songUrl.attach(io: songfile7, filename: 'ItRunsThroughMe.mp3')

# ===

thankyousong = Song.create!(
  album_id: thankyou.id,
  song_title: 'Thank You',
  total_song_time: '4:16'
)

songfile8 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/ThankYou.mp3')

thankyousong.songUrl.attach(io: songfile8, filename: 'ThankYou.mp3')

# ===

meditationsong = Song.create!(
  album_id: meditation.id,
  song_title: 'Meditation',
  total_song_time: '3:28'
)

songfile9 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Meditation.mp3')

meditationsong.songUrl.attach(io: songfile9, filename: 'Meditation.mp3')

# ===

highforhourssong = Song.create!(
  album_id: highforhours.id,
  song_title: 'High For Hours',
  total_song_time: '4:11'
)

songfile10 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/HighForHours.mp3')

highforhourssong.songUrl.attach(io: songfile10, filename: 'HighForHours.mp3')

# ===

bealright = Song.create!(
  album_id: surf.id,
  song_title: 'Be Alright',
  total_song_time: '3:22'
)

songfile11 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/BeAlright.mp3')

bealright.songUrl.attach(io: songfile11, filename: 'BeAlright.mp3')

# ===

betterdays = Song.create!(
  album_id: december.id,
  song_title: 'Better Days',
  total_song_time: '2:49'
)

songfile12 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/BetterDays.mp3')

betterdays.songUrl.attach(io: songfile12, filename: 'BetterDays.mp3')

# ===

confidentlylostsong = Song.create!(
  album_id: confidentlylost.id,
  song_title: 'Confidently Lost',
  total_song_time: '3:27'
)

songfile13 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/ConfidentlyLost.mp3')

confidentlylostsong.songUrl.attach(io: songfile13, filename: 'ConfidentlyLost.mp3')

# ===

tyrant = Song.create!(
  album_id: isolation.id,
  song_title: 'Tyrant',
  total_song_time: '3:23'
)

songfile14 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Tyrant.mp3')

tyrant.songUrl.attach(io: songfile14, filename: 'Tyrant.mp3')

# ===

nayhoo = Song.create!(
  album_id: homey.id,
  song_title: 'Nayhoo',
  total_song_time: '3:01'
)

songfile15 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Nayhoo.mp3')

nayhoo.songUrl.attach(io: songfile15, filename: 'Nayhoo.mp3')

# ===

young = Song.create!(
  album_id: vallisalpsalbum.id,
  song_title: 'Young',
  total_song_time: '5:24'
)

songfile16 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Young.mp3')

young.songUrl.attach(io: songfile16, filename: 'Young.mp3')

# ===

tadow = Song.create!(
  album_id: ladylady.id,
  song_title: 'Tadow',
  total_song_time: '5:01'
)

songfile17 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Tadow.mp3')

tadow.songUrl.attach(io: songfile17, filename: 'Tadow.mp3')

# ===

blowbacksong = Song.create!(
  album_id: blowback.id,
  song_title: 'Blowback',
  total_song_time: '4:04'
)

songfile18 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Blowback.mp3')

blowbacksong.songUrl.attach(io: songfile18, filename: 'Blowback.mp3')

# ===

yoursoulsong = Song.create!(
  album_id: yoursoul.id,
  song_title: 'Your Soul',
  total_song_time: '2:58'
)

songfile19 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/YourSoul.mp3')

yoursoulsong.songUrl.attach(io: songfile19, filename: 'YourSoul.mp3')

# ===

subside = Song.create!(
  album_id: thisthingcalledliving.id,
  song_title: 'Subside',
  total_song_time: '3:08'
)

songfile20 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Subside.mp3')

subside.songUrl.attach(io: songfile20, filename: 'Subside.mp3')

# ===

trafficsong = Song.create!(
  album_id: traffic.id,
  song_title: 'Traffic',
  total_song_time: '3:50'
)

songfile21 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Traffic.mp3')

trafficsong.songUrl.attach(io: songfile21, filename: 'Traffic.mp3')

# ===

warmsong = Song.create!(
  album_id: warm.id,
  song_title: 'Warm',
  total_song_time: '4:16'
)

songfile22 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Warm.mp3')

warmsong.songUrl.attach(io: songfile22, filename: 'Warm.mp3')

# ===

beautifulescape = Song.create!(
  album_id: beattape.id,
  song_title: 'Beautiful Escape',
  total_song_time: '4:36'
)

songfile23 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/BeautifulEscape.mp3')

beautifulescape.songUrl.attach(io: songfile23, filename: 'BeautifulEscape.mp3')

# ===

newwavessong = Song.create!(
  album_id: newwaves.id,
  song_title: 'New Waves',
  total_song_time: '2:44'
)

songfile24 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/NewWaves.mp3')

newwavessong.songUrl.attach(io: songfile24, filename: 'NewWaves.mp3')

# ===

nothingtolosesong = Song.create!(
  album_id: nothingtolose.id,
  song_title: 'Nothing To Lose',
  total_song_time: '3:37'
)

songfile25 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/NothingToLose.mp3')

nothingtolosesong.songUrl.attach(io: songfile25, filename: 'NothingToLose.mp3')

# ===

irenesong = Song.create!(
  album_id: irene.id,
  song_title: 'Irene',
  total_song_time: '3:19'
)

songfile26 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Irene.mp3')

irenesong.songUrl.attach(io: songfile26, filename: 'Irene.mp3')

# ===

motion = Song.create!(
  album_id: thejuice.id,
  song_title: 'Motion',
  total_song_time: '3:56'
)

songfile26 = open('https://satisfy-seed.s3-us-west-1.amazonaws.com/songs/Motion.mp3')

motion.songUrl.attach(io: songfile26, filename: 'Motion.mp3')