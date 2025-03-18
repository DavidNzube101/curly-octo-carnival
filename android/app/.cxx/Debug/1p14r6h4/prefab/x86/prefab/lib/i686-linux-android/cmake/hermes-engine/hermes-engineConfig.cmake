if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/admin/.gradle/caches/8.10.2/transforms/e9ae6e2f7f660eeee044ed2a1ad41493/transformed/jetified-hermes-android-0.77.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/admin/.gradle/caches/8.10.2/transforms/e9ae6e2f7f660eeee044ed2a1ad41493/transformed/jetified-hermes-android-0.77.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

