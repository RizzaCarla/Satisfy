# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_08_023333) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "album_title", null: false
    t.integer "total_album_time", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_title"], name: "index_albums_on_album_title"
    t.index ["artist_id"], name: "index_albums_on_artist_id", unique: true
    t.index ["total_album_time"], name: "index_albums_on_total_album_time"
  end

  create_table "artists", force: :cascade do |t|
    t.string "artist_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_name"], name: "index_artists_on_artist_name", unique: true
  end

  create_table "main_playlist_likes", force: :cascade do |t|
    t.integer "main_liked_song_id", null: false
    t.integer "main_playlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["main_liked_song_id"], name: "index_main_playlist_likes_on_main_liked_song_id", unique: true
    t.index ["main_playlist_id"], name: "index_main_playlist_likes_on_main_playlist_id", unique: true
  end

  create_table "main_playlists", force: :cascade do |t|
    t.integer "total_count", null: false
    t.integer "playlist_name", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_main_playlists_on_author_id", unique: true
    t.index ["playlist_name"], name: "index_main_playlists_on_playlist_name"
    t.index ["total_count"], name: "index_main_playlists_on_total_count"
  end

  create_table "other_playlist_likes", force: :cascade do |t|
    t.integer "other_liked_song_id", null: false
    t.integer "other_playlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["other_liked_song_id"], name: "index_other_playlist_likes_on_other_liked_song_id", unique: true
    t.index ["other_playlist_id"], name: "index_other_playlist_likes_on_other_playlist_id", unique: true
  end

  create_table "other_playlists", force: :cascade do |t|
    t.integer "total_count", null: false
    t.integer "playlist_name", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_other_playlists_on_author_id", unique: true
    t.index ["playlist_name"], name: "index_other_playlists_on_playlist_name"
    t.index ["total_count"], name: "index_other_playlists_on_total_count"
  end

  create_table "songs", force: :cascade do |t|
    t.integer "album_id", null: false
    t.string "song_title", null: false
    t.integer "total_song_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_songs_on_album_id", unique: true
    t.index ["song_title"], name: "index_songs_on_song_title"
    t.index ["total_song_time"], name: "index_songs_on_total_song_time"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
