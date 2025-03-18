if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "D:/React-Native/New/rateit-mobile/node_modules/@react-native/gradle-plugin/caches/8.10.2/transforms/d3a4199ec0a9eb971c65b3c713fb1e13/transformed/hermes-android-0.77.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "D:/React-Native/New/rateit-mobile/node_modules/@react-native/gradle-plugin/caches/8.10.2/transforms/d3a4199ec0a9eb971c65b3c713fb1e13/transformed/hermes-android-0.77.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

