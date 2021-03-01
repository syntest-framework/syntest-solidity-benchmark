FROM node:12.20

# Install truffle
RUN npm install -g truffle

WORKDIR /app/syntest-framework
COPY ./syntest-framework .
RUN npm install
RUN npm run tsc

WORKDIR /app/syntest-solidity
COPY ./syntest-solidity .
RUN npm install
RUN npm run tsc

WORKDIR /app/syntest-solidity-benchmark
COPY ./syntest-solidity-benchmark .
RUN npm install

CMD [ "truffle", "run", "syntest-solidity" ]
