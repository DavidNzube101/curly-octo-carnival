if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/admin/.gradle/caches/8.10.2/transforms/2040dabf154a7f9c89ba2a95d69bd6af/transformed/jetified-hermes-android-0.77.1-release/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/admin/.gradle/caches/8.10.2/transforms/2040dabf154a7f9c89ba2a95d69bd6af/transformed/jetified-hermes-android-0.77.1-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

