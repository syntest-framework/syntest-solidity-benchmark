const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleTBSo0M = await BirdOracle.new({from: accounts[2]});
		const stringOmieMX1 = "kY8vkMFYPauG8q0EYY3ZqRYuJy2SnhGmPyJChMP4NqHSg7LUYfxeO2HDuHU7Sv8n8I6Twuz8lAiJ2ydCsu6AWV7"
		const stringoSJr7dh = "VIyaCgBSWooBxbP08GYo7VHyW"
		const addressStbcImw = accounts[5]
		const stringtAyQN0M = "ulCY6OKADS5bf1DGf8PJrBHAzWxIC1cAy3tnyeJHmj2mgB4pGZ2MMTC7mUC"
		const stringFUNGUwv = "22n66K4b31yHx2l48aWMpOmb1H9cmMRk2V5CKJW7XTLg"
		const 
ln1ivW = await BirdOracleTBSo0M.newChainRequest.call(stringoSJr7dh, stringOmieMX1, {from: accounts[3]});
		const uintGFcc4h = await BirdOracleTBSo0M.getRatingByAddress.call(addressStbcImw, {from: accounts[1]});
		const stringSj3Yk2e = await BirdOracleTBSo0M.extractAddress.call(stringtAyQN0M, {from: "0x0000000000000000000000000000000000000001"});
		const stringLBN7l0r = await BirdOracleTBSo0M.extractAddress.call(stringFUNGUwv, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeYJL8dp = await BirdOracle.new({from: accounts[2]});
		const stringqGBxvLk = "ejHlwNP5QjQ4ZJmsBNsIDUpXj7mtDXDk62B8byds2pEhV8kn4mP1gthJ6JQxmlqekOJn7WJh4A5"
		const addressRbSTLnf = accounts[0]
		const stringJijT8XM = "9iFz2g8MJteu689PAJ7hRiO5aAbALnpD4ULgiFkrRhrne6azfWDH0ItclSchQiNNbr9YZmiso2sRJ"
		const stringYhnWzT9 = "IQQgBNmn1aa6youePFLaCD"
		const uint0hCGaa = await BirdOracleeYJL8dp.getRatingByAddressString.call(stringqGBxvLk, {from: accounts[1]});
		const uintEMDo623 = await BirdOracleeYJL8dp.getRatingByAddress.call(addressRbSTLnf, {from: accounts[4]});
		const uintbTC6DNe = await BirdOracleeYJL8dp.getRatingByAddressString.call(stringJijT8XM, {from: accounts[4]});
		const stringYIjMHRM = await BirdOracleeYJL8dp.extractAddress.call(stringYhnWzT9, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle3qNG5r = await BirdOracle.new({from: accounts[3]});
		const addressshlRFb1 = "0x0000000000000000000000000000000000000001"
		const uintEvHY8g = BigInt("1462")
		const stringcN6s9AN = "G4hB0CYfSYNTuifpldKrB7uxa81LkN9Ql4sNJlVxbEMb1hjOOJDQyB2oFrCgGzE7FaSWElAHswCSrTm144yy"
		const stringGfWzGIn = "3Zw3C1v5KnHS2gjbk4TeOPRPME9KO4JBSgJc8KLHEYkm7s3NqgcXi29HgSHfFL9oYLNLqqOEmX4azGtGJkQ4piETuJKI"
		const stringdV1icS = "Fmrr1wf22tYV7CkjeH3NfVA9OR7LfncWkrODMRNa9BrdfyOHlmt2G4RgpdqxpzhS7b4nptXd0kKrXhqDc8sClR4SVPWSQ"
		const uintdtNdra = await BirdOracle3qNG5r.getRatingByAddress.call(addressshlRFb1, {from: "0x0000000000000000000000000000000000000001"});
		const stringx5iP92A = await BirdOracle3qNG5r.substring.call(stringcN6s9AN, uintEvHY8g, {from: accounts[2]});
		const stringNwQgjaV = await BirdOracle3qNG5r.extractAddress.call(stringGfWzGIn, {from: accounts[2]});
		const stringO5zGchd = await BirdOracle3qNG5r.extractAddress.call(stringdV1icS, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNqDG06y = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintiNsnet4 = BigInt("831")
		const uintQJ09j5H = BigInt("747")
		const stringYys7jTM = "TFk99ulKpQpxVbF2GGiaNMXqzFfVEpaKU7ZFF8kWMOmlWM4hRebBERMGCEX4CcOtglTH4Z"
		const uint8Zuu7k = BigInt("1418")
		const stringjkpuPJI = "fv"
		const stringFVLfkYt = "dgRQ0RKr1if5mcyFO2uouj6FqCTJ"
		const stringqy2EoFG = "w0LCWCYeUh7vVNHQsb6DdwT0PY04sNkbBhJXH9jzbe8cDNPgp9yGoegrqYHZwFTvoGv19IipPkaBZcHCqmENF"
		const uintFcDavPE = BigInt("919")
		const stringo0vIZG = "WB080SUCZ8FZIeERh4uLmYyVY5SDM7tuRgT2WDV4"
		const uintQCKCXq = BigInt("1114")
		const uintnqqS5vt = BigInt("187")
		const stringEDAwqJ = "q97aekLD2f"
		const stringXuDiogc = await BirdOracleNqDG06y.substring.call(stringYys7jTM, uintQJ09j5H, uintiNsnet4, {from: accounts[1]});
		const stringaE3P3te = await BirdOracleNqDG06y.substring.call(stringjkpuPJI, uint8Zuu7k, {from: accounts[1]});
		const addressTBLm7M5 = await BirdOracleNqDG06y.parseAddr.call(stringFVLfkYt, {from: accounts[1]});
		const stringrlLwoIc = await BirdOracleNqDG06y.extractAddress.call(stringqy2EoFG, {from: accounts[2]});
		const stringXdEjLAo = await BirdOracleNqDG06y.substring.call(stringo0vIZG, uintFcDavPE, {from: "0x0000000000000000000000000000000000000001"});
		const stringlNf5KVo = await BirdOracleNqDG06y.substring.call(stringEDAwqJ, uintnqqS5vt, uintQCKCXq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVQ1LdxZ = await BirdOracle.new({from: accounts[3]});
		const uintKXcPKLP = BigInt("137")
		const uintg2kxvos = BigInt("1720")
		const uintcMd9VAW = BigInt("1755")
		const uintoMZ3Jh = BigInt("628")
		const stringThdve6Z = "YGypuHDUvt3znRNYGbKnZvt3AyzvzOp1FRBL2oRUrTm6XExCTyivzPRGQpcHAi4iZM0970qBHyXBn1ic0Cj9LOyaU"
		const uintX4FbPpN = BigInt("1431")
		const uintvk9phf5 = BigInt("317")
		const stringTEvKWFP = "bQGYM"
		const stringtAi8CZw = "qjWdaLMYijoUxWdpCRqJc0lQdzjWqP0lFmpsxBgM3aHQE"
		const stringId83K9A = "7HUpyA1THMbKe96dBPdIa"
		const stringvgVtaTv = "qQzg4VGnssMKszbSzQUuyXBtPUkKcMMBhSAh55KwArizR42H9y5N7QtBVzV8RbreWOUCZWTe7LMp4uAWELEBvvTb5VhiwyRk"
		const uintA2co8EG = await BirdOracleVQ1LdxZ.getRating.call({from: accounts[3]});
		const 
WpIHGgm = await BirdOracleVQ1LdxZ.updatedChainRequest.call(uintg2kxvos, uintKXcPKLP, {from: "0x0000000000000000000000000000000000000001"});
		const stringkivhNBa = await BirdOracleVQ1LdxZ.substring.call(stringThdve6Z, uintoMZ3Jh, uintcMd9VAW, {from: accounts[1]});
		const 
CKrigwu = await BirdOracleVQ1LdxZ.updatedChainRequest.call(uintvk9phf5, uintX4FbPpN, {from: accounts[2]});
		const 
kJfhM4g = await BirdOracleVQ1LdxZ.newChainRequest.call(stringtAi8CZw, stringTEvKWFP, {from: accounts[5]});
		const 
YPXDBKM = await BirdOracleVQ1LdxZ.newChainRequest.call(stringvgVtaTv, stringId83K9A, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEDXTcTK = await BirdOracle.new({from: accounts[4]});
		const uintIx8OpGQ = BigInt("376")
		const uintbw9Omw = BigInt("1647")
		const stringPbXPu1f = "3V2JDUbROHOyJ6Fcqa"
		const uintnYT9g2v = BigInt("347")
		const uintqPGzwxu = BigInt("165")
		const stringeTrSKEw = "5Ofm65wg43HyLN1C59NHB3VorOLc"
		const stringiD4rXjh = "qAsXvaGldz8wqzuZ"
		const stringS6ISsS = "87sKCTEdOJyen5WJY31JlW3FvVmGqxOG"
		const addressDwnb9A = accounts[3]
		const stringX9tI78g = "5QDDPQYqyBpi1Hxz4vdt6ejpKUK8DJxtmMCILrFxRw7KVzsX52gbE3EeapYGyYHsqkFP8b"
		const stringsXC9c4S = "psnnARvnoa3J29d54LaezDWCusbpS6geeu3TLptQzg2oYMQ611yiQSNEcELNYelLGaS9jUP"
		const addressLDu4cpp = accounts[4]
		const stringrG8xcMu = await BirdOracleEDXTcTK.substring.call(stringPbXPu1f, uintbw9Omw, uintIx8OpGQ, {from: accounts[5]});
		const stringwVPWJch = await BirdOracleEDXTcTK.substring.call(stringeTrSKEw, uintqPGzwxu, uintnYT9g2v, {from: accounts[2]});
		const 
E8gJdDJ = await BirdOracleEDXTcTK.newChainRequest.call(stringS6ISsS, stringiD4rXjh, {from: "0x0000000000000000000000000000000000000001"});
		const uintXxbbYl = await BirdOracleEDXTcTK.getRatingByAddress.call(addressDwnb9A, {from: accounts[3]});
		const 
MNd1uYz = await BirdOracleEDXTcTK.newChainRequest.call(stringsXC9c4S, stringX9tI78g, {from: accounts[4]});
		const uintz4wnZHi = await BirdOracleEDXTcTK.getRatingByAddress.call(addressLDu4cpp, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const uintBw0SnA9 = BigInt("1093")
		const stringHyzT5Yi = "DNC4Q4iD2q6tsE1LvU1BugkPF1xtqcqn3ZvrkU122"
		const uintVp1xtds = BigInt("102")
		const uint7DIXKk = BigInt("1472")
		const uintWYefiC9 = BigInt("252")
		const uinttYiuKnO = BigInt("1269")
		const stringmUCyGb = "cA12iITt0hdNvOiKjsN6Kvdqd0CuyasW16lygL0RI7Zjs7BvE89G"
		const uinthJwo0TM = BigInt("2002")
		const uintQGv4Jo0 = BigInt("2033")
		const stringsvKe6wg = await BirdOracle1LoQpJ.substring.call(stringHyzT5Yi, uintBw0SnA9, {from: accounts[4]});
		const 
KKPZshT = await BirdOracle1LoQpJ.updatedChainRequest.call(uint7DIXKk, uintVp1xtds, {from: accounts[3]});
		const stringlPOxj9q = await BirdOracle1LoQpJ.substring.call(stringmUCyGb, uinttYiuKnO, uintWYefiC9, {from: accounts[0]});
		const 
Zye98UO = await BirdOracle1LoQpJ.updatedChainRequest.call(uintQGv4Jo0, uinthJwo0TM, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const uintudorET = BigInt("997")
		const uintsVRGiSP = BigInt("813")
		const stringXMQqqrQ = "hx"
		const uintVlyTfFw = BigInt("2002")
		const uintRrvIEl = BigInt("2033")
		const stringBL1BmjD = await BirdOracle1LoQpJ.substring.call(stringXMQqqrQ, uintsVRGiSP, uintudorET, {from: accounts[4]});
		const 
Zye98UO = await BirdOracle1LoQpJ.updatedChainRequest.call(uintRrvIEl, uintVlyTfFw, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const addressGDnyn7 = accounts[4]
		const uintEFyPDFZ = BigInt("911")
		const stringyInGiSN = "eXMsaSN5679DnjYAzsIBJoUIqTdnc1xqX8UWhTGDsO3lzQK4LSTFs0ZRso5CTRXGR2iJskqZy9wJgt4qxfHQp6xebDCTljTHJ0M"
		const uintZqIrHn = BigInt("202")
		const uinteIGo4L = BigInt("2033")
		const uintD3v7Vbk = await BirdOracle1LoQpJ.getRatingByAddress.call(addressGDnyn7, {from: accounts[3]});
		const stringV0iumhz = await BirdOracle1LoQpJ.substring.call(stringyInGiSN, uintEFyPDFZ, {from: accounts[1]});
		const 
Zye98UO = await BirdOracle1LoQpJ.updatedChainRequest.call(uinteIGo4L, uintZqIrHn, {from: accounts[0]});
		const uintE6BkS4X = await BirdOracle1LoQpJ.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const uintqbyywcz = BigInt("848")
		const stringNgUCB9H = "c8D7ph2t22p5V21Wn2dE2D1NhLJxOCwAzBA9XkDGEdeL4jx3"
		const uintw9MPGHr = BigInt("1991")
		const uintdszNNGp = BigInt("2033")
		const stringCIsYNMc = "y5nPRwQQzvFq85GG98q1qDLFzj1xkJ5pWVFFWedELIDeGb5m5YwAzII3vHVcj4YryM5oCkB5Q"
		const stringVlqxfE = "XM9T2WqKkwBfaYsRM2WytzZp"
		const stringYLs4UeR = await BirdOracle1LoQpJ.substring.call(stringNgUCB9H, uintqbyywcz, {from: accounts[5]});
		const 
Zye98UO = await BirdOracle1LoQpJ.updatedChainRequest.call(uintdszNNGp, uintw9MPGHr, {from: accounts[0]});
		const stringkm4Prtb = await BirdOracle1LoQpJ.extractAddress.call(stringCIsYNMc, {from: accounts[0]});
		const uintgp94t2 = await BirdOracle1LoQpJ.getRatingByAddressString.call(stringVlqxfE, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const uintYnNc67x = BigInt("1652")
		const stringIqvrirS = "nvrdT8ME3J6gcaI81mLuOpELk0mAlmKQXeaQGn"
		const stringTji5MlX = "tWXCaMzTytBXAIAKNcOKCrzqiIfMDNuwMR977IIZ1Kmix0ToflYOqNBwzb8"
		const uintBPtIlqS = BigInt("2002")
		const uintZ3R7Syr = BigInt("2033")
		const stringQsBUeAA = await BirdOracle1LoQpJ.substring.call(stringIqvrirS, uintYnNc67x, {from: accounts[0]});
		const stringE9GcjU0 = await BirdOracle1LoQpJ.extractAddress.call(stringTji5MlX, {from: accounts[2]});
		const 
Zye98UO = await BirdOracle1LoQpJ.updatedChainRequest.call(uintZ3R7Syr, uintBPtIlqS, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEeeUAh2 = await BirdOracle.new({from: accounts[0]});
		const uintunYMdf9 = BigInt("1535")
		const stringyrT9uik = "mEHaAUFHfzGCR2T"
		const stringrthrim = "Xncyrts8asuczibnrKtAoPIXQmIeVrLEogOj8"
		const stringBbx4bAi = "9apHUOKXshVHFALKtP72ucHaodzs5Tn4jIgzMrxopo1pmiSqAgXzxcbWRgpAo1H9xXmftrh1xYZxKWt24"
		const stringlf9f9VD = "VgPV3R3VR77QjxTtwEKP9d7piC7JQJCrlpPyNQEUyCL7RihQq86MbLu1yQqvsnrgHc1N4RKFHX5cfOsm2nIf0r5S"
		const stringh5Lb7YB = "T8kMd2OPTOYV3bB3yJgo3Hw"
		const uintzOdHNG = BigInt("1091")
		const uintVAtkdw = BigInt("340")
		const stringQP07RQL = await BirdOracleEeeUAh2.substring.call(stringyrT9uik, uintunYMdf9, {from: accounts[3]});
		const 
IXdfAOQ = await BirdOracleEeeUAh2.newChainRequest.call(stringBbx4bAi, stringrthrim, {from: accounts[2]});
		const uintt8ZrVir = await BirdOracleEeeUAh2.getRatingByAddressString.call(stringlf9f9VD, {from: accounts[1]});
		const uintVbcaNTy = await BirdOracleEeeUAh2.getRatingByAddressString.call(stringh5Lb7YB, {from: accounts[0]});
		const 
cYYg3uP = await BirdOracleEeeUAh2.updatedChainRequest.call(uintVAtkdw, uintzOdHNG, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const uintYwT6T0F = BigInt("1670")
		const stringGwVhn1g = "gCUCIx7wyMEf2vmDyGjmzD0b2WOJltxYSzojqip8SVfrROss67Mjn0pxRcMzrKn4tZ5QOFKtqSlvBJXtOkKKbgn4LG"
		const uintNQoqgi = BigInt("2002")
		const uintydNgg1I = BigInt("2033")
		const uintaeD1TO = BigInt("891")
		const uintoKOZsrx = BigInt("932")
		const stringEaSMKsX = await BirdOracle1LoQpJ.substring.call(stringGwVhn1g, uintYwT6T0F, {from: "0x0000000000000000000000000000000000000001"});
		const 
Zye98UO = await BirdOracle1LoQpJ.updatedChainRequest.call(uintydNgg1I, uintNQoqgi, {from: accounts[0]});
		const 
UIM2vgq = await BirdOracle1LoQpJ.updatedChainRequest.call(uintoKOZsrx, uintaeD1TO, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1LoQpJ = await BirdOracle.new({from: accounts[1]});
		const addressrV2NN6e = accounts[4]
		const uintcnA7u0 = BigInt("911")
		const uintLVAtq5Z = BigInt("911")
		const stringXMQqqrQ = "x"
		const uintXjD55os = await BirdOracle1LoQpJ.getRatingByAddress.call(addressrV2NN6e, {from: accounts[1]});
		const stringBL1BmjD = await BirdOracle1LoQpJ.substring.call(stringXMQqqrQ, uintLVAtq5Z, uintcnA7u0, {from: accounts[4]});
	});
})