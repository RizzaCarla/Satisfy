# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_05_29_212040) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "albums", force: :cascade do |t|
    t.string "album_title", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_title"], name: "index_albums_on_album_title"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "artist_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_name"], name: "index_artists_on_artist_name", unique: true
  end

  create_table "edit_songs_and_albums_tables", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "likeable_id"
    t.string "likeable_type"
    t.integer "value", default: 0
    t.index ["liker_id"], name: "index_likes_on_liker_id"
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
    t.string "total_song_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
