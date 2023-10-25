const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleWvll48s = await BirdOracle.new({from: accounts[0]});
		const stringy2yf2Fb = "lD5WhMckKodgkhX1NQLswuiU1"
		const uintlykphH = await BirdOracleWvll48s.getRating.call({from: accounts[4]});
		const uintcI6YBEV = await BirdOracleWvll48s.getRatingByAddressString.call(stringy2yf2Fb, {from: accounts[1]});
		const uintH38jLHr = await BirdOracleWvll48s.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehAvMrvZ = await BirdOracle.new({from: accounts[0]});
		const uintSMIZdev = BigInt("1415")
		const uintPXjuqr7 = BigInt("42")
		const stringI5lNSB = "sJA8zFKivTbuS8I1VRoIq3XVrp3Fva7x7UJXj9jIiFzExXcfKKYRXqQQH6XzFWOGMy1eNHjni"
		const stringbKjrOH3 = "EBp6fqywe3J0AF8CAgHSeABcnV1o6nqil04Cj4jzZRewNP4UTBVL6Fj6MzSBiUVpYKq4NtdSKrBzBE7liHf1fIIog"
		const stringlxNwnaZ = "kHkXro9jylV9Kch2BIaCsc"
		const uintQg5hTd1 = BigInt("1508")
		const stringMbMdFnc = "gA6nXFmsIxfye3Yfy8uM7acaxWVMVWjSPjfIlA1UqKxjYuGtbrdTBRmXc3jrnzF9wbcCWa3Y9O5AavhXfjlpkqjiLHZ6y"
		const stringLlwULZ1 = await BirdOraclehAvMrvZ.substring.call(stringI5lNSB, uintPXjuqr7, uintSMIZdev, {from: accounts[0]});
		const 
pXmV1O = await BirdOraclehAvMrvZ.newChainRequest.call(stringlxNwnaZ, stringbKjrOH3, {from: accounts[2]});
		const stringZstJZrh = await BirdOraclehAvMrvZ.substring.call(stringMbMdFnc, uintQg5hTd1, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGuzlzZ1 = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringNnXuwGQ = "cCAMawlScmx4bfzDSqCKKjzPXF39h"
		const stringr9vKeVw = "b40lny7ts22upLn3K"
		const uintTMBGd5 = await BirdOracleGuzlzZ1.getRatingByAddressString.call(stringNnXuwGQ, {from: accounts[4]});
		const stringtDH1v82 = await BirdOracleGuzlzZ1.extractAddress.call(stringr9vKeVw, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejgaGolf = await BirdOracle.new({from: accounts[4]});
		const stringxE5Xxmj = "6zFnwbqO"
		const stringF4Dl9iI = "EgxHPElksyykNlWo31OC3xZNHG"
		const stringft0koph = "srPGWTowrsWzWAhCAuZBEsS19rYYkBEwyFAsrx2npUlv6KKnBWhTUdoPniPFFFNSwSZb1y7cisqbp6l"
		const uintH4Xk7w = BigInt("819")
		const uintVcSFUXb = BigInt("823")
		const 
QX7zM9j = await BirdOraclejgaGolf.newChainRequest.call(stringF4Dl9iI, stringxE5Xxmj, {from: accounts[4]});
		const uintTuZBduY = await BirdOraclejgaGolf.getRatingByAddressString.call(stringft0koph, {from: accounts[0]});
		const uintZm9lbpc = await BirdOraclejgaGolf.getRating.call({from: accounts[0]});
		const 
xu6v7PI = await BirdOraclejgaGolf.updatedChainRequest.call(uintVcSFUXb, uintH4Xk7w, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPvIZQ1 = await BirdOracle.new({from: accounts[3]});
		const stringfUwVHnL = "TCWJuxRaghCuzyfPqeUAVDz3maBdpMI0fL7dAPFnOXJo7m"
		const uintZCdw4eq = BigInt("37")
		const uintv6o08f1 = BigInt("202")
		const uintPdbLM8h = BigInt("92")
		const uintNsOBoLY = BigInt("1545")
		const uintbk41iO = await BirdOracleYPvIZQ1.getRating.call({from: accounts[2]});
		const uintvR4qJhs = await BirdOracleYPvIZQ1.getRatingByAddressString.call(stringfUwVHnL, {from: accounts[2]});
		const 
yVf3oh = await BirdOracleYPvIZQ1.updatedChainRequest.call(uintv6o08f1, uintZCdw4eq, {from: accounts[5]});
		const 
RiK5vD = await BirdOracleYPvIZQ1.updatedChainRequest.call(uintNsOBoLY, uintPdbLM8h, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleD2ibTtr = await BirdOracle.new({from: accounts[1]});
		const uint22HELH = BigInt("1406")
		const stringl9z75BD = "QKPlGX2jScWiQiF"
		const stringmIZpOi = "ozNTrsihFVqHg6ojsaJFrEYWTmvnIo68UFlaMlj8oTm4YZjJjCl7Qcq58DcOy5xoVesRnPi"
		const stringozKRwF = await BirdOracleD2ibTtr.substring.call(stringl9z75BD, uint22HELH, {from: accounts[4]});
		const uintjYPaTtJ = await BirdOracleD2ibTtr.getRating.call({from: accounts[2]});
		const stringyLNGUR2 = await BirdOracleD2ibTtr.extractAddress.call(stringmIZpOi, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleXLC2qW3 = await BirdOracle.new({from: accounts[4]});
		const uintLvRQYhH = BigInt("865")
		const uintpvjyZP = BigInt("1957")
		const stringP9OUzgK = "XIF32mNYhJDF6bazpEh7Ae0dQG4CRBLKJpJQwQwHzvHzHGumSfurbHqJ3"
		const stringbjOYWh = "qpIOu5xNHnr2RU03rML6TUTt8z0IiMDxFeeASjP"
		const stringfo1Gucy = "KeSotwPqyihafDiHgwPgijYGc2rsE0c28vmBesODNzRRqdgQFGzOfUNZqnvjYh3ofRj35nIDP"
		const uintO19z8GN = await BirdOracleXLC2qW3.getRating.call({from: accounts[3]});
		const stringgL9FVeU = await BirdOracleXLC2qW3.substring.call(stringP9OUzgK, uintpvjyZP, uintLvRQYhH, {from: accounts[3]});
		const 
aXCiiaV = await BirdOracleXLC2qW3.newChainRequest.call(stringfo1Gucy, stringbjOYWh, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const uintGHjR6WB = BigInt("1758")
		const stringcnkp2ly = "NEqyRGsGvP6Ehl4KuLRxRHjfdGfiiS5KumscmsdGFtdCLt"
		const uintwsvNIem = BigInt("207")
		const uintMi7QfHg = BigInt("2004")
		const stringeFZyf74 = "IdkutIiwIz6OV6LaTWHTyV62d2a7Fh9UgsREF6Ru"
		const stringWwABlcn = await BirdOracleYPCOS8T.substring.call(stringcnkp2ly, uintGHjR6WB, {from: accounts[2]});
		const 
Ipe8L2W = await BirdOracleYPCOS8T.updatedChainRequest.call(uintMi7QfHg, uintwsvNIem, {from: accounts[0]});
		const stringUGcPM4 = await BirdOracleYPCOS8T.extractAddress.call(stringeFZyf74, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleycceezr = await BirdOracle.new({from: accounts[0]});
		const uintlmfR8WA = BigInt("217")
		const stringeZDHUp5 = "fD3oy6QTaU9iY6Pdn6nvX2vcMyiu6YNODiQBirapvlkE6dVWmfEedq78MsjAfCFsFjChFaFwLSAXO8"
		const stringpKiq6Vs = "RklPcUjTZmlkpfTIrEydTp3sIYMN7KBHCr87y6A1AOp5R6AmrDOOSyQ3xui3KGp5s336gpkjplrcqGhtd"
		const stringitAbabr = "tLyolG2U8z8Zl6f6ViZBINrVTw8nYTU760mLmLNe7lzyCSwv7ctWHfm8e6m9jEhoFWE"
		const uintyLcDlhH = BigInt("981")
		const stringPmEwxhv = "oN"
		const stringkGLjZag = await BirdOracleycceezr.substring.call(stringeZDHUp5, uintlmfR8WA, {from: accounts[1]});
		const uintkSiMluz = await BirdOracleycceezr.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const uintneV79HY = await BirdOracleycceezr.getRatingByAddressString.call(stringpKiq6Vs, {from: accounts[5]});
		const uintdMGpgM = await BirdOracleycceezr.getRatingByAddressString.call(stringitAbabr, {from: accounts[1]});
		const stringrWzVudd = await BirdOracleycceezr.substring.call(stringPmEwxhv, uintyLcDlhH, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const addressakCH27X = accounts[5]
		const uintmIXY0Jz = BigInt("1855")
		const uintEwdzg3 = BigInt("1104")
		const uintlbwRD9z = BigInt("1978")
		const uintTaqmMMl = BigInt("1906")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8KkJzmCXWgFESphYDUSrb2Ns6X"
		const uintZaTdqO = await BirdOracleYPCOS8T.getRatingByAddress.call(addressakCH27X, {from: accounts[1]});
		const 
QZBZgEf = await BirdOracleYPCOS8T.updatedChainRequest.call(uintEwdzg3, uintmIXY0Jz, {from: accounts[5]});
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uintTaqmMMl, uintlbwRD9z, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleD2ibTtr = await BirdOracle.new({from: accounts[1]});
		const uint8V7FL1 = BigInt("531")
		const stringtyN6DEf = "YMqT1P8LMjhEABGDKXPPI87Aqa4G1PAWa1z4z65"
		const stringmIZpOi = "ozNTrsihFVqHg6ojsaJFrEYWTmvnIo68UFlaMlj8oTm4YZjJjCl7Qcq5RDcOyRxoVesRnPi"
		const stringWDMpulv = await BirdOracleD2ibTtr.substring.call(stringtyN6DEf, uint8V7FL1, {from: accounts[0]});
		const stringyLNGUR2 = await BirdOracleD2ibTtr.extractAddress.call(stringmIZpOi, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const uintDtypjU = BigInt("500")
		const stringQyhK7Sb = "GJwU7Vk4uvwhLRruS4Ze56rmjBTyKH1H8DN3koS13SqTH7"
		const uintyNJbZGe = BigInt("1991")
		const uintIrAiCT = BigInt("1925")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8KkJzmCXWgFESphYDUSrb2Ns6X"
		const uintaHwMbbH = BigInt("1704")
		const uintniCZjMn = BigInt("1697")
		const stringeM7b3bQ = "Yov160Jl"
		const stringyokSYg0 = await BirdOracleYPCOS8T.substring.call(stringQyhK7Sb, uintDtypjU, {from: accounts[5]});
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uintIrAiCT, uintyNJbZGe, {from: accounts[2]});
		const stringcUseLOv = await BirdOracleYPCOS8T.substring.call(stringeM7b3bQ, uintniCZjMn, uintaHwMbbH, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclexvH9EWY = await BirdOracle.new({from: accounts[2]});
		const uintoN3MeUF = BigInt("298")
		const stringr0zd0zE = "W4De"
		const address7k3eAE = accounts[4]
		const stringv7dYGjK = "2UDuLH1ffBnBrCo3AJhemM1YHjzH5XbY8YhGCwvt2"
		const addressE2vXOUu = accounts[3]
		const stringAjj5HRH = await BirdOraclexvH9EWY.substring.call(stringr0zd0zE, uintoN3MeUF, {from: "0x0000000000000000000000000000000000000001"});
		const uintsb7yEWc = await BirdOraclexvH9EWY.getRatingByAddress.call(address7k3eAE, {from: accounts[4]});
		const stringj5REM30 = await BirdOraclexvH9EWY.extractAddress.call(stringv7dYGjK, {from: accounts[0]});
		const uintdjFHJYi = await BirdOraclexvH9EWY.getRatingByAddress.call(addressE2vXOUu, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const uintqhaJp9e = BigInt("1272")
		const string1zVtci = "erx0RvGjBjvxjsfR12p18WmEK1eIvrzEzgdpXv55suDt"
		const uintVZWhPO = BigInt("1991")
		const uint5zHVeL = BigInt("1986")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8kJzmCXWgFESphYDUSrb2Ns6X"
		const uintxiRo1pz = BigInt("460")
		const uintYchAoN7 = BigInt("1978")
		const stringECq5x3H = "xlGiYX4rpkQg5hJ9BnG9fH3jut7tFTqkbyXTnPaL6qIA5LifL5Tx6LoeDNfxlOpJYNKEaSW56QgAWhX24IYNbQ8w7JEX"
		const uinthPFNwmY = BigInt("1707")
		const uintSse0qDZ = BigInt("191")
		const stringndwNvCF = await BirdOracleYPCOS8T.substring.call(string1zVtci, uintqhaJp9e, {from: accounts[3]});
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uint5zHVeL, uintVZWhPO, {from: accounts[2]});
		const stringg2bizHk = await BirdOracleYPCOS8T.substring.call(stringECq5x3H, uintYchAoN7, uintxiRo1pz, {from: accounts[5]});
		const uintbrsWRIc = await BirdOracleYPCOS8T.getRating.call({from: accounts[0]});
		const 
qKRRCeb = await BirdOracleYPCOS8T.updatedChainRequest.call(uintSse0qDZ, uinthPFNwmY, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const uintyXhyMJ5 = BigInt("1991")
		const uintemubWf5 = BigInt("1991")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8KkJzmCXWgFESphYDUSrb2Ns6X"
		const uintojqsC3K = BigInt("953")
		const stringpSPOWe8 = "r6FnfiPeCPf26ykSBQ4L7EkjtdRBY3q"
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uintemubWf5, uintyXhyMJ5, {from: accounts[2]});
		const stringaI1Kvjy = await BirdOracleYPCOS8T.substring.call(stringpSPOWe8, uintojqsC3K, {from: accounts[0]});
	});
})