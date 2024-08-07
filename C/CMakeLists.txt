# CMake 프로그램 최소 버전
cmake_minimum_required(VERSION 3.10)

# 프로젝트 이름
project(C)

# 소스 파일들을 재귀적으로 검색
file(GLOB_RECURSE SOURCES "src/*.c")

# 실행 파일 생성
add_executable(C ${SOURCES})

# C 컴파일러 플래그 설정
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -fexec-charset=CP949")

# 헤더 파일 포함 디렉토리
#target_include_directories(C PUBLIC include)
