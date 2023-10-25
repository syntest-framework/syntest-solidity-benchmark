const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracletzKrn07 = await BirdOracle.new({from: accounts[5]});
		const uintQMyosZ = BigInt("1436")
		const uintdGsdqxo = BigInt("1885")
		const stringc6sOzT3 = "1kcAc76FIXPgTfnzq7XUz3qrT6OXLIeJ7xD8fzQKJR9oLnPjIXuddnt1xEXODk338KH6rHVrJnaVp8R4KnoLOMqfM17zzlbo9uu"
		const uintkb3QUJi = BigInt("407")
		const uintUSV2nnX = BigInt("1593")
		const uintk6JrTXd = BigInt("192")
		const stringZCADqnj = "g6vHXuVRKiocFfcP8aEAo6i27TFfTtU28bNt3VswUybaNQ0kOQks31J8GyoFiLgTJWO4E0XuSi02MAjhqFGsDhHb6U"
		const 
TIFGcX8 = await BirdOracletzKrn07.updatedChainRequest.call(uintdGsdqxo, uintQMyosZ, {from: accounts[2]});
		const stringdzC5DCS = await BirdOracletzKrn07.extractAddress.call(stringc6sOzT3, {from: accounts[0]});
		const 
eWUoIm = await BirdOracletzKrn07.updatedChainRequest.call(uintUSV2nnX, uintkb3QUJi, {from: accounts[2]});
		const string97athL = await BirdOracletzKrn07.substring.call(stringZCADqnj, uintk6JrTXd, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePiMI4n = await BirdOracle.new({from: accounts[3]});
		const addressRa3Kijk = "0x0000000000000000000000000000000000000001"
		const uintuyNZueh = BigInt("1185")
		const uintuoG0xch = BigInt("784")
		const stringqsTXczE = "fv18J2ckTUNjlJlqvavXGGwfybxmhk0aPAUK9zep5dLA1nwD35pYWJur3WWN4hB2lxv7IqjmXg"
		const stringxYrrsT = "VwPoiVCiTytIAuSkmeowINpZfUCWxLg6NuE1CdXglPWlctVW3pMF6OvciKqUPzVtXXMwufMeNrLbBp8l0KwnBf"
		const uintmF3qUFm = await BirdOraclePiMI4n.getRatingByAddress.call(addressRa3Kijk, {from: accounts[0]});
		const stringFIynrxX = await BirdOraclePiMI4n.substring.call(stringqsTXczE, uintuoG0xch, uintuyNZueh, {from: accounts[5]});
		const uintLiOpupT = await BirdOraclePiMI4n.getRatingByAddressString.call(stringxYrrsT, {from: accounts[2]});
		const uintNjldrm7 = await BirdOraclePiMI4n.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle9S55FZ = await BirdOracle.new({from: accounts[0]});
		const stringWcuSTSm = "gEzxoROoxo9st4jWD7AGwy8ImiSJDVSVAn3iXecMt5sXdTPPLlUT249PK"
		const stringHQJ0we7 = "9R9Vmg75BeKfbPy5ya6pRXl2hj5wSImYLHy9iKNwvmPpIhpNYuw4TehNm"
		const stringhSMBKdL = "JRvhz6pDCRnDV6wCLYdhupgSOvf5YfF17S2mchWdamsDmfaPNi5U2v9lFDy7eUk3P8pFQR"
		const 
Sg3cfkg = await BirdOracle9S55FZ.newChainRequest.call(stringHQJ0we7, stringWcuSTSm, {from: accounts[1]});
		const addresssaab3C = await BirdOracle9S55FZ.parseAddr.call(stringhSMBKdL, {from: accounts[1]});
		const uintbpoRlYf = await BirdOracle9S55FZ.getRating.call({from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKwFffk = await BirdOracle.new({from: accounts[0]});
		const uintLwoHsh = BigInt("344")
		const stringpHlRfEj = "Qk2ODVC4nnksZ6BoBcMCS6iHwBU6iEcth"
		const addressJiUjTsK = accounts[3]
		const string0Q5sb5 = await BirdOracleKwFffk.substring.call(stringpHlRfEj, uintLwoHsh, {from: "0x0000000000000000000000000000000000000001"});
		const uintKhDddPJ = await BirdOracleKwFffk.getRatingByAddress.call(addressJiUjTsK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeKwTlNQ = await BirdOracle.new({from: accounts[3]});
		const stringfGwbuX = "5Eircl4UGhxLwgx2SxwraHqFNOP4fo5uUT"
		const uintvCd3SW9 = await BirdOracleeKwTlNQ.getRating.call({from: accounts[3]});
		const uintQPkzhR0 = await BirdOracleeKwTlNQ.getRating.call({from: accounts[4]});
		const stringT12cYCW = await BirdOracleeKwTlNQ.extractAddress.call(stringfGwbuX, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOkRlTkn = await BirdOracle.new({from: accounts[2]});
		const stringy99KNpz = "1M1zFHk"
		const stringrQDS7Cq = "J7W9ZCpbfkIvwyLKHmd1XG5gsJL"
		const stringCOCyML5 = "IOGd9hJFROpVEdbRdkBqybOUPiTUlRnT9YcMzFKiX4YRIOqnl"
		const uintWAGAXrs = await BirdOracleOkRlTkn.getRatingByAddressString.call(stringy99KNpz, {from: accounts[4]});
		const address8U6vqH = await BirdOracleOkRlTkn.parseAddr.call(stringrQDS7Cq, {from: accounts[0]});
		const uintKV6EXK4 = await BirdOracleOkRlTkn.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVUWlvU7 = await BirdOracleOkRlTkn.parseAddr.call(stringCOCyML5, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleCslyKlQ = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzxZKTJ = BigInt("1016")
		const stringLok3sbA = "yJHE12JlbvLKdSAfmrsbdRuQe3YL2UWPq4jNnepU"
		const stringFPvPr4F = "5auVrsPu5gKEdo39MQHSuiPtFnaSA0wHEKdHRuTE4heCdq7seoxzHQFGLaDryq4bAC34OdkUGx"
		const stringgISN3tX = "OgOjpubVyzuP1FxkiQvBSUFxwDwctbl"
		const stringjnnQTVo = await BirdOracleCslyKlQ.substring.call(stringLok3sbA, uintzxZKTJ, {from: accounts[4]});
		const uintAuao8K9 = await BirdOracleCslyKlQ.getRatingByAddressString.call(stringFPvPr4F, {from: accounts[3]});
		const uinttBCj2Op = await BirdOracleCslyKlQ.getRating.call({from: accounts[4]});
		const uintpkkxYA4 = await BirdOracleCslyKlQ.getRating.call({from: accounts[0]});
		const addressgvNUGT3 = await BirdOracleCslyKlQ.parseAddr.call(stringgISN3tX, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePiMI4n = await BirdOracle.new({from: accounts[3]});
		const addressdc0P8sa = "0x0000000000000000000000000000000000000001"
		const uintco3anld = BigInt("102")
		const uintlGqgEql = BigInt("1205")
		const stringrF6A8Uj = "UL7vBjXJxwpuDXblHjLjYj3VktXBOLllrI2vEnS26GriRuKSTIaFqBwht6iXT1xY9PL4"
		const uintvyTpQiB = BigInt("1185")
		const uintwsHa1xY = BigInt("1146")
		const stringqsTXczE = "fv18J2ckTUNjlJlqvavXGGwfybxmhk0aPAUK9zep5dLA1nwD35pYWJur3WWN4hB2lxv7IqjmXg"
		const stringxYrrsT = "VwPoiVCiTytIAuSkmeowINpZfUCWxLg6NuE1CdXglPWlctVW3pMF6OvciKqUPzVtXXMwufMeNrLbBp8l0KwnBf"
		const string13W0RP = "twJKoeQkUzKFpeFfgxjkP6v0wvD"
		const uintmF3qUFm = await BirdOraclePiMI4n.getRatingByAddress.call(addressdc0P8sa, {from: accounts[0]});
		const stringiS4sfHQ = await BirdOraclePiMI4n.substring.call(stringrF6A8Uj, uintlGqgEql, uintco3anld, {from: accounts[0]});
		const stringFIynrxX = await BirdOraclePiMI4n.substring.call(stringqsTXczE, uintwsHa1xY, uintvyTpQiB, {from: accounts[5]});
		const uintLiOpupT = await BirdOraclePiMI4n.getRatingByAddressString.call(stringxYrrsT, {from: accounts[2]});
		const uintZbmWpn2 = await BirdOraclePiMI4n.getRatingByAddressString.call(string13W0RP, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePiMI4n = await BirdOracle.new({from: accounts[3]});
		const addressralMrh8 = "0x0000000000000000000000000000000000000001"
		const stringBUoQmd1 = "o8SQ6QslTa0F16TWEQ6KmQVIA57Pxaa9cmVPdRplksJm9t7xJvF1SwCTIb2gvI"
		const uintOX4nLNa = BigInt("1185")
		const uintQXK7khz = BigInt("1159")
		const stringqsTXczE = "fv18J2ckTUNjlJlqvavXGGwfybxmhk0aPAUK9zep5dLA1nwD35pYWJur3WWN4hB2lxv7IqjmXg"
		const uint1z9M5d = BigInt("559")
		const uintjEKFzLv = BigInt("1382")
		const stringJUdI2Si = "nJmfAazGNDAzcEVlhHgwa6yo7TBP5nDx1Kyn02Ka1XN2WrMALLrC2zosFvECNxpjubHnVCk3K"
		const uintmF3qUFm = await BirdOraclePiMI4n.getRatingByAddress.call(addressralMrh8, {from: accounts[0]});
		const addressqJ7R8E3 = await BirdOraclePiMI4n.parseAddr.call(stringBUoQmd1, {from: accounts[4]});
		const stringFIynrxX = await BirdOraclePiMI4n.substring.call(stringqsTXczE, uintQXK7khz, uintOX4nLNa, {from: accounts[5]});
		const uintNjldrm7 = await BirdOraclePiMI4n.getRating.call({from: accounts[3]});
		const stringN7ixVi = await BirdOraclePiMI4n.substring.call(stringJUdI2Si, uintjEKFzLv, uint1z9M5d, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKwFffk = await BirdOracle.new({from: accounts[0]});
		const addressVA20Opl = accounts[4]
		const uintuatHtvi = BigInt("538")
		const stringN2yby34 = "7SeWOfGNrGe6pUvev6eDpFWANt0R28j5"
		const uintKhDddPJ = await BirdOracleKwFffk.getRatingByAddress.call(addressVA20Opl, {from: "0x0000000000000000000000000000000000000001"});
		const stringhtiHpgO = await BirdOracleKwFffk.substring.call(stringN2yby34, uintuatHtvi, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleIOrDfA6 = await BirdOracle.new({from: accounts[0]});
		const uintahycYxb = BigInt("118")
		const stringyZ0S3pH = "xznKXaMXxsMxd73whFe"
		const addresshOjRaIH = accounts[0]
		const stringvNQkHMZ = await BirdOracleIOrDfA6.substring.call(stringyZ0S3pH, uintahycYxb, {from: accounts[0]});
		const uintlSd4Gh1 = await BirdOracleIOrDfA6.getRating.call({from: accounts[1]});
		const uintCbBslcl = await BirdOracleIOrDfA6.getRatingByAddress.call(addresshOjRaIH, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePiMI4n = await BirdOracle.new({from: accounts[3]});
		const uinttU7U3xt = BigInt("519")
		const stringkTjXB0g = "yHKDl2o3iennYZJ50BRRqKAxEmBmc8fZ8N8hyUHw95OYipI7sQOtmLsdTkiH9e4b"
		const addressbsDDghE = "0x0000000000000000000000000000000000000002"
		const addressXYjDTAy = "0x0000000000000000000000000000000000000001"
		const stringcFywLIR = "XETVC6LiHz"
		const stringM656kZ = "d435YGfptVY4BARJcESrMoVjBTVgVMNDe6Gkd2KbiGsfw2vcObE"
		const uintnU487Yc = BigInt("1178")
		const uintO6gZ4y = BigInt("1159")
		const stringqsTXczE = "fv18J2ckTUNjlJlqvavXGGwfybxmhk0aPAUK9zep5dLA1nwD35pYWJur3WWN4hB2lxv7IqjmXg"
		const uintiLgstAH = BigInt("1779")
		const uintAZAzZpC = BigInt("1373")
		const stringHBYGxXQ = "rzx8ETt"
		const stringEINZ4he = await BirdOraclePiMI4n.substring.call(stringkTjXB0g, uinttU7U3xt, {from: accounts[4]});
		const uintmF3qUFm = await BirdOraclePiMI4n.getRatingByAddress.call(addressbsDDghE, {from: accounts[0]});
		const uintahLHiz4 = await BirdOraclePiMI4n.getRating.call({from: accounts[1]});
		const uintsQMwCSN = await BirdOraclePiMI4n.getRatingByAddress.call(addressXYjDTAy, {from: accounts[4]});
		const 
n6BIl0i = await BirdOraclePiMI4n.newChainRequest.call(stringM656kZ, stringcFywLIR, {from: accounts[1]});
		const stringFIynrxX = await BirdOraclePiMI4n.substring.call(stringqsTXczE, uintO6gZ4y, uintnU487Yc, {from: accounts[5]});
		const stringsUrXvW5 = await BirdOraclePiMI4n.substring.call(stringHBYGxXQ, uintAZAzZpC, uintiLgstAH, {from: accounts[3]});
		const uintNjldrm7 = await BirdOraclePiMI4n.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKwFffk = await BirdOracle.new({from: accounts[0]});
		const uintoEB2Llb = BigInt("1131")
		const stringT1qozM4 = "dnFSqEiBs6uR0Ie26rDhUbMbDINtg6WucjJJHDULwsolRYuMZUFlgsaDi5OWoUU"
		const stringYPjZQK0 = "1d0gOsR3hjrQQuaQQRjaUoBjQhRako2IvKDK98krSIuygY5V23CfzGXBBMVQNsQitf4d4GpCFZ"
		const stringg2HgGxQ = "vRYdjvukogJgDvNyS555dGYIINrERepMhu6NVIa8W42V3WP8XxTku2I6qAXuuY7pHDzcsgh6BK5IQ"
		const addresszV0UMAb = accounts[4]
		const stringfUMCuN6 = await BirdOracleKwFffk.substring.call(stringT1qozM4, uintoEB2Llb, {from: accounts[1]});
		const 
egl07YN = await BirdOracleKwFffk.newChainRequest.call(stringg2HgGxQ, stringYPjZQK0, {from: accounts[2]});
		const uintKhDddPJ = await BirdOracleKwFffk.getRatingByAddress.call(addresszV0UMAb, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKwFffk = await BirdOracle.new({from: accounts[0]});
		const stringdLFohLW = "fs0otGkxV95IGTZhFGc7fUJXoh4pwnYpLSF5M9jCn1EYu9szo14yVsQAAOmmYHXDAkKtf3EWax2SnKx"
		const addressRSlYlxK = accounts[5]
		const uintioMvDhH = BigInt("2001")
		const stringCLRGusQ = "6LBoOD26RBAfxpTPx1Ohg4lQNX2sle7dpSdzj53ZgsDc3hha5cx"
		const uintvl7HkNg = await BirdOracleKwFffk.getRatingByAddressString.call(stringdLFohLW, {from: accounts[3]});
		const uintKhDddPJ = await BirdOracleKwFffk.getRatingByAddress.call(addressRSlYlxK, {from: "0x0000000000000000000000000000000000000001"});
		const stringiuggg12 = await BirdOracleKwFffk.substring.call(stringCLRGusQ, uintioMvDhH, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLrG0vpu = await BirdOracle.new({from: accounts[3]});
		const uintphmi5Ym = BigInt("929")
		const stringSZcA9hr = "QF0RwTkW8hVcTRuSFgcY8dvQfrfTlBzC8Qc6vl3fUzod9SD"
		const stringrS3O6UV = "rXmA1qRfmcA82bOeTDcQxrsw5YYRroq5tgUdp"
		const uintAcEDqwF = BigInt("250")
		const stringFG3cEGg = "uj"
		const uintgiDzRif = BigInt("582")
		const stringzKb2sbu = "tBlzEjuKKAzfsu"
		const stringLpzqSeP = await BirdOracleLrG0vpu.substring.call(stringSZcA9hr, uintphmi5Ym, {from: accounts[5]});
		const uintmRYqGC = await BirdOracleLrG0vpu.getRatingByAddressString.call(stringrS3O6UV, {from: accounts[1]});
		const stringLZEEbsq = await BirdOracleLrG0vpu.substring.call(stringFG3cEGg, uintAcEDqwF, {from: accounts[3]});
		const stringsDzOEUE = await BirdOracleLrG0vpu.substring.call(stringzKb2sbu, uintgiDzRif, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePiMI4n = await BirdOracle.new({from: accounts[3]});
		const uintfQerZhj = BigInt("1176")
		const uintCZ1Au0 = BigInt("1176")
		const stringqsTXczE = "fv18J2ckTUNjlJlqvavXGGwfybxmhk0aPAUK9pep5dLA1nwD35pYWJur3WWN4hB2lxv7IqjmXg"
		const stringFIynrxX = await BirdOraclePiMI4n.substring.call(stringqsTXczE, uintCZ1Au0, uintfQerZhj, {from: accounts[5]});
	});
})