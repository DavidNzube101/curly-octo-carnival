if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "D:/React-Native/New/rateit-mobile/node_modules/@react-native/gradle-plugin/caches/8.10.2/transforms/70859756a23d9369ba2f1d3d9df6e3e4/transformed/fbjni-0.7.0/prefab/modules/fbjni/libs/android.x86/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "D:/React-Native/New/rateit-mobile/node_modules/@react-native/gradle-plugin/caches/8.10.2/transforms/70859756a23d9369ba2f1d3d9df6e3e4/transformed/fbjni-0.7.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

