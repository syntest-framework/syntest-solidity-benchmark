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
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const uintl3jmCLp = BigInt("500")
		const stringJEGfyaG = "hkGfB7qD2iY07qeWGlSSEIOy8RKodcMVwlfRT8byOw6GJqyNR"
		const uintJsa4MGl = BigInt("2021")
		const uintnuNfTij = BigInt("1906")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8KkJzmCXWgFESphYDUSrb2Ns6X"
		const uintCotzvAk = BigInt("1244")
		const stringQvO6Zs2 = "AEA7na1EuC93pN2QSYvfGWzNF1zdDf1wTyrSfQCmvQ6vCZ"
		const uintpdgxrOz = BigInt("1568")
		const uintnCoyALJ = BigInt("1102")
		const addressULYKyAe = accounts[0]
		const stringvtcQAl0 = await BirdOracleYPCOS8T.substring.call(stringJEGfyaG, uintl3jmCLp, {from: "0x0000000000000000000000000000000000000001"});
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uintnuNfTij, uintJsa4MGl, {from: accounts[2]});
		const stringh5A5Obu = await BirdOracleYPCOS8T.substring.call(stringQvO6Zs2, uintCotzvAk, {from: accounts[1]});
		const 
Ykq7KTL = await BirdOracleYPCOS8T.updatedChainRequest.call(uintnCoyALJ, uintpdgxrOz, {from: accounts[5]});
		const uintpqmtDIv = await BirdOracleYPCOS8T.getRatingByAddress.call(addressULYKyAe, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefKXkPko = await BirdOracle.new({from: accounts[5]});
		const uintQz70KCC = BigInt("634")
		const uintr8bmtfx = BigInt("1841")
		const stringDV6FUJ6 = "KyqyUXPRMZ1URWrcu2PmjLOmW8yfSQs7hYyYxP62SULdrb3NxHNunvx3ZFDCCtE9aDuvHs6BXD9VT6NdtdeqIlrTospyclF"
		const stringM8zTqp = "DyK424l5W5nzgUWN1kSuyf1yRRi51rgWWDzueVYWJeIpuOlemmDtTdVRJKfhZcTpCPCf61HPcMgijaXAOj9HKqiA0AX"
		const uintjDo8y0z = BigInt("1618")
		const uintFB30JK = BigInt("409")
		const stringWeHTs06 = "CkiC0Z2gNEi3ZDxnuhcE6aDbpFQLWnOGbC7YVYjIdfh3SN4iiSJFNeki3ebMmrztDMKr"
		const stringZFsX4oz = await BirdOraclefKXkPko.substring.call(stringDV6FUJ6, uintr8bmtfx, uintQz70KCC, {from: accounts[0]});
		const stringpUlV4Vb = await BirdOraclefKXkPko.extractAddress.call(stringM8zTqp, {from: accounts[3]});
		const 
VI5vXTT = await BirdOraclefKXkPko.updatedChainRequest.call(uintFB30JK, uintjDo8y0z, {from: accounts[4]});
		const stringoSBQuxG = await BirdOraclefKXkPko.extractAddress.call(stringWeHTs06, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const uint71AxIl = BigInt("888")
		const stringDp2LYqB = "tpOTYtlhtA4Db8B57zScmk9dHp12tEyukMqSJ13IELtkH"
		const uintauGbe4t = BigInt("2021")
		const uintW1UEj2N = BigInt("1906")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8KkJzmCXWgFESphYDUSrb2Ns6X"
		const uintVQbWrc = BigInt("1237")
		const stringQvO6Zs2 = "AEA7na1EuC93pN2QSYvfGWzNF1zdDf1wTyrSfQCmvQ6vCZ"
		const uintp75BDH2 = BigInt("1568")
		const uintxS0Spv9 = BigInt("1102")
		const stringxnfkMGF = await BirdOracleYPCOS8T.substring.call(stringDp2LYqB, uint71AxIl, {from: accounts[1]});
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uintW1UEj2N, uintauGbe4t, {from: accounts[2]});
		const stringh5A5Obu = await BirdOracleYPCOS8T.substring.call(stringQvO6Zs2, uintVQbWrc, {from: accounts[1]});
		const 
Ykq7KTL = await BirdOracleYPCOS8T.updatedChainRequest.call(uintxS0Spv9, uintp75BDH2, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleD2ibTtr = await BirdOracle.new({from: accounts[1]});
		const uintPLJqwTU = BigInt("732")
		const stringuJYakF9 = "VMB"
		const stringmIZpOi = "ozNTrsihFVqHg6ojsaJFrEYWTmvnIo68UFlaMlj8oTm4YZjJjCl7Qcq5RDcOy5xoVesRnPi"
		const stringVcffsdR = await BirdOracleD2ibTtr.substring.call(stringuJYakF9, uintPLJqwTU, {from: accounts[3]});
		const stringyLNGUR2 = await BirdOracleD2ibTtr.extractAddress.call(stringmIZpOi, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPvIZQ1 = await BirdOracle.new({from: accounts[3]});
		const uintm6avpmc = BigInt("1613")
		const stringCLcF4B7 = "j7obgq2Qx6BkBQQTFaSty1O1BhEAKrUDv8eLU6tUxnj4tHoyraMiZTqgdg3AayDV3jcfEp4"
		const uintzAiEq7X = BigInt("3")
		const uintkIOpdMq = BigInt("202")
		const uintMLpZvvj = BigInt("350")
		const stringR4yqs9 = "Y8LG6bkz2NtaLMXlgYHDdXkmFgjp22WneH6QnHguuvrSqHKYWe78c7"
		const uintbk41iO = await BirdOracleYPvIZQ1.getRating.call({from: accounts[2]});
		const stringTq5Cu2R = await BirdOracleYPvIZQ1.substring.call(stringCLcF4B7, uintm6avpmc, {from: accounts[0]});
		const 
yVf3oh = await BirdOracleYPvIZQ1.updatedChainRequest.call(uintkIOpdMq, uintzAiEq7X, {from: accounts[5]});
		const stringPzHGvwm = await BirdOracleYPvIZQ1.substring.call(stringR4yqs9, uintMLpZvvj, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const addressfoHxVPO = accounts[2]
		const uintGGJpeh0 = BigInt("2021")
		const uintnKzUSQ = BigInt("1906")
		const stringfaV5pjs = "NKP9MiZ4j9ZEo05qEEYYqBMVY8KkJzmCXWgFESphYDUSrb2Ns6X"
		const uintO1SyVAi = BigInt("1244")
		const stringQvO6Zs2 = "AEA7na1EuC93pN2QSYvfGWzNF1zdDf1wTyrSfQCmvQ6vCZ"
		const uintdPm0ZK4 = await BirdOracleYPCOS8T.getRatingByAddress.call(addressfoHxVPO, {from: accounts[4]});
		const stringfmhz0Ki = await BirdOracleYPCOS8T.substring.call(stringfaV5pjs, uintnKzUSQ, uintGGJpeh0, {from: accounts[2]});
		const stringh5A5Obu = await BirdOracleYPCOS8T.substring.call(stringQvO6Zs2, uintO1SyVAi, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclezhnr2VI = await BirdOracle.new({from: accounts[5]});
		const uintNiK7wMX = BigInt("1950")
		const stringmNakPK = "RyrrpSu9uVzKmNPwjRzcrQ7B6kqTGglkCWN59dL3adg2w8b2BGMITy1LMeSIUrr"
		const uintAJocPJh = BigInt("190")
		const uintSci5tM3 = BigInt("881")
		const stringXIjBAPr = "LgjtoBWJcoM"
		const uintakkqERv = BigInt("1659")
		const stringy3N1N3 = "Mb1n4d21Gz"
		const uintGgDMpul = BigInt("1585")
		const uintVF8V7FL = BigInt("1756")
		const string3yN6DE = "RKhskcWmczRRCbjHNpT4AAjEp2SQOG8juhlpm7LoYMqT1P8LMjhEABGDKXPPI87Aqa4G1PAWa1z4z6"
		const addressQjSLxBo = accounts[0]
		const stringe0c3eFc = await BirdOraclezhnr2VI.substring.call(stringmNakPK, uintNiK7wMX, {from: accounts[4]});
		const 
mv7ii02 = await BirdOraclezhnr2VI.updatedChainRequest.call(uintSci5tM3, uintAJocPJh, {from: accounts[3]});
		const addressZlX1kY = await BirdOraclezhnr2VI.parseAddr.call(stringXIjBAPr, {from: "0x0000000000000000000000000000000000000001"});
		const stringiPrwzqn = await BirdOraclezhnr2VI.substring.call(stringy3N1N3, uintakkqERv, {from: accounts[2]});
		const stringAw6fFMq = await BirdOraclezhnr2VI.substring.call(string3yN6DE, uintVF8V7FL, uintGgDMpul, {from: accounts[0]});
		const uintf8aidNr = await BirdOraclezhnr2VI.getRatingByAddress.call(addressQjSLxBo, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleIjoxZf4 = await BirdOracle.new({from: accounts[3]});
		const address2ryuoO = accounts[3]
		const uintJHlgCn = BigInt("1392")
		const stringzon782 = "X9sfatG643fQQjD2T9p6rv3nsLqYGQwmFOMKoxATP5BKdBfyvNyJ5nBGA2ls4whAx"
		const uintNEShQ9L = BigInt("225")
		const uintNSgpUaO = BigInt("1693")
		const uintZoW0yw3 = await BirdOracleIjoxZf4.getRatingByAddress.call(address2ryuoO, {from: accounts[4]});
		const stringSKl6OMf = await BirdOracleIjoxZf4.substring.call(stringzon782, uintJHlgCn, {from: accounts[2]});
		const 
rMonf6H = await BirdOracleIjoxZf4.updatedChainRequest.call(uintNSgpUaO, uintNEShQ9L, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLbKnp1E = await BirdOracle.new({from: accounts[0]});
		const uintX8QRYdk = BigInt("1611")
		const stringINoSmKl = "2ZdJdHXBzztWa4HSKNWcw6BrKukOAlUQVwHt4GJvf6q51IqnhHUCiaSpooPxj6CIq65bPVaTtE1ZPub3c8H4opLH8Sb"
		const stringQZlmE5T = "f2lfxpEGutwMMMwUfDEnyTPrm4Hv2McBvBq8425QOQj38wjGDbG"
		const uintqHtUhlv = BigInt("729")
		const uinteJJbcCZ = BigInt("994")
		const stringIVCalc = "yeUpaRh2KRjFguh9aV8a8szNGF4FLPNZls5uqH1NgEvBSTPjox5d4SePhlAhtpxM"
		const uintwOJObyg = BigInt("1377")
		const stringgbO8j3J = "wfQXdi77yW1hOLmqvfzhCwjJlVO2WSU"
		const stringhSaWVk = "PKlKQXUCMWHPXj6HHTd2Cvs5YuX93jbzptsMvTOo3SUiqLm8hq7G69WAeIyVe7TAUgNFgLnu9Oz9bbyCoah"
		const stringOtCj1kt = await BirdOracleLbKnp1E.substring.call(stringINoSmKl, uintX8QRYdk, {from: accounts[5]});
		const uintinMTxln = await BirdOracleLbKnp1E.getRatingByAddressString.call(stringQZlmE5T, {from: accounts[5]});
		const 
yHhx3XV = await BirdOracleLbKnp1E.updatedChainRequest.call(uinteJJbcCZ, uintqHtUhlv, {from: accounts[5]});
		const uintfaaDoD8 = await BirdOracleLbKnp1E.getRatingByAddressString.call(stringIVCalc, {from: accounts[2]});
		const stringIZZRSud = await BirdOracleLbKnp1E.substring.call(stringgbO8j3J, uintwOJObyg, {from: accounts[2]});
		const stringUViYFFP = await BirdOracleLbKnp1E.extractAddress.call(stringhSaWVk, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYPCOS8T = await BirdOracle.new({from: accounts[5]});
		const addressVIMgZvc = accounts[2]
		const uintL2H9Mch = BigInt("391")
		const uintMiRfmA = BigInt("391")
		const string1Uo7ez = "ggRuEkliYzrbXlBBzR7QiyMwBz6qTWQ5tBo8yNbDVZilGy0JMyPNpiU9"
		const uintiu1d5mR = await BirdOracleYPCOS8T.getRatingByAddress.call(addressVIMgZvc, {from: accounts[1]});
		const stringEnzp22 = await BirdOracleYPCOS8T.substring.call(string1Uo7ez, uintMiRfmA, uintL2H9Mch, {from: accounts[0]});
	});
})