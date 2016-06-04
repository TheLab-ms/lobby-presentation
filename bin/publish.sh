#! /bin/bash

# https://github.com/byteclubfr/prez

prez --title='TheLab.ms Lobby Presentation' --theme=moon 

rsync -av build/ thelab@patshead.com:pelican/lobby
