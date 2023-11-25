#!/bin/bash

project_name="web-effects"
image_name=${project_name}:0.9
server_implementation="none"


#
# Run a development container with the source worktree mounted
#
run_development_container() {
      docker run -it --rm --name ${project_name}-dev-container \
      -v $(pwd):/src \
      -p 3000:3000 \
      -p 443:443 \
      -p 80:80 \
      -e ADMIN_USERNAME=admin \
      -e ADMIN_PASSWORD=admin \
      -e OFFLINE_MODE=false \
      -e SERVER_IMPLEMENTATION=${server_implementation} \
      alpine:latest sh -c 'apk update && apk add bash && cd /src && $0 setup_development_container && cd /src && $0 start_development_container_services && echo "Connect to http://localhost:3000 to run the desktop, or run \"$0 test_dev_container\" to validate the UI server" && sh'
}


#
# Build a development image, to speed up launches of a development container
# and enable a developer to work offline
#
development_image() {
  docker build -f ./etc/Dockerfile_dev -t ${project_name}-develop:0.9 .
}



#
# Run a development container, in offline mode, with any React/Maven/Python packages
# pre-installed (run ./builder development_image while online to create the image)
#
run_offline_development_container() {
  check_docker
  check_image ${project_name}-develop 0.9
  image_missing=$?
  if [ $image_missing -ne 0 ]; then
    echo "Docker is not available and/or did not find an image named ${project_name}-develop:1.0.  Launch Docker and run $0 development_image to create it, or run $0 run_development_container."
    exit 1
  fi
  docker run -it --rm --name ${project_name}-develop \
      -v $(pwd):/src \
      -p 3000:3000 \
      -p 443:443 \
      -p 80:80 \
      -e ADMIN_USERNAME=admin \
      -e ADMIN_PASSWORD=admin \
      -e OFFLINE_MODE=true \
      ${project_name}-develop:0.9 sh -c "cd /src && rm -rf /src/node_modules && ln -s /node_modules /src/node_modules && $0 start_development_container_services && sh"
}



#
# Start the API (Java) server and the React dev server
#
start_development_container_services() {
  echo "Starting UI dev server..."
  cd /src && nohup yarn start &
  echo "The UI server log is available in ./ui/nohup.out"
  echo "Waiting for server to start (10 seconds)...."
  sleep 10
  tail -f nohup.out &
  echo ""
}


#
# Setup a dev container.  Note that this is called from etc/Dockerfile_dev
#
setup_development_container() {
      cd /src
      mkdir /node_modules
      ln -s /node_modules /src/node_modules 2>/dev/null
      apk update
      apk add bash jq curl git yarn
      yarn install
}

check_image() {
  if [ $# -lt 2 ]; then
    echo -e "\nUsage: ./build check_image <image-name> <tag>\n"
    exit 1
  fi
  image=$1
  image_tag=$2
  if [ `docker images | grep $image | grep " $image_tag" | wc -l` -lt 1 ]; then
    return 1
  fi
  return 0
}

#
# Check to see if Docker is installed and running
#
check_docker() { ##
  if [ `docker --version | grep Docker | grep -v grep | wc -l` -ne 1 ]; then
    echo -e "\n Could not run 'docker --version'.  This program requires Docker to be installed and running on the local host\n"
    exit 1
  fi
}


#
# Show available commands
#
help() {
  echo ""
  echo "Usage: "
  echo ""
  echo "  $0 <command>"
  echo ""
  echo "Suggestion: "
  echo ""
  echo "  $0 run_development_container"
  echo ""
  echo "Commands:"
  echo ""
  cat $0 | grep -v '##' | grep '()' | grep -v cat | cut -f1 -d'(' | sed 's/^/  /g'
  echo ""
}

#
# Start of program
#
if [ $# -eq 0 ]; then
  help ""
else
  $@
fi







