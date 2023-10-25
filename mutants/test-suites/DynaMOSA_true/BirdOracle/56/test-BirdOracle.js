const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleGQpa06 = await BirdOracle.new({from: accounts[1]});
		const stringTQoxfo0 = "niXRCYJIBrQBnOFVeVcqeqOco1LFaCPPcKk2Z7cNY8qhcjA0FqQEUsERBwavV1"
		const address0gISeX = accounts[2]
		const uintnGHM71y = BigInt("696")
		const uintdH0tanp = BigInt("1679")
		const stringBDvuUU0 = await BirdOracleGQpa06.extractAddress.call(stringTQoxfo0, {from: accounts[2]});
		const uintxiFvOQh = await BirdOracleGQpa06.getRatingByAddress.call(address0gISeX, {from: accounts[3]});
		const 
iNaaqGp = await BirdOracleGQpa06.updatedChainRequest.call(uintdH0tanp, uintnGHM71y, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJPOZ7Z6 = await BirdOracle.new({from: accounts[3]});
		const uintg5fuGL2 = BigInt("1725")
		const uintlfOBCQT = BigInt("1415")
		const stringXbM8Khc = "1UIGdXaP65wpd"
		const stringZGTqED8 = "5ydmJd4D9bqEDV1XgqCwVve33zeabj2yRu456AXnGQxzwaWNSjsbx0ho7mV2qfwbaB269JqC2rYKA4mOVfSLxABfE7B7D"
		const stringwfDwcjR = "Lm8aBYmDRNhlCGX7WT6FETpPJ31htLn3VwyE6ILLxV9uoyGOpsyjcGFp"
		const stringyxyp2JG = "LhtGjhfaI"
		const stringgycKREq = await BirdOracleJPOZ7Z6.substring.call(stringXbM8Khc, uintlfOBCQT, uintg5fuGL2, {from: accounts[1]});
		const addressFZ8msa4 = await BirdOracleJPOZ7Z6.parseAddr.call(stringZGTqED8, {from: accounts[2]});
		const uintVkM9ua6 = await BirdOracleJPOZ7Z6.getRatingByAddressString.call(stringwfDwcjR, {from: accounts[1]});
		const uinttAIQPB = await BirdOracleJPOZ7Z6.getRatingByAddressString.call(stringyxyp2JG, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclemHWgxwp = await BirdOracle.new({from: accounts[1]});
		const stringh3zPz2D = "39JvYZwtLqEdDqhkwo0cH33U6fbFLxPo2Q46ebhRtEtUcsHejg9jm3kI9xsfe4jBVlDVCENu6nbEBY1ML6AqDPduD2r1Kj"
		const stringR0H7Csa = "0aD8mu8pUiPE40EO1257gVRewOmfWW8E52LTcaSkgcU1855YE6bagMUcwKNYNHFAagVtzLoXZYCOTJMAkV"
		const uintij92r13 = await BirdOraclemHWgxwp.getRating.call({from: accounts[5]});
		const stringOyqWBOD = await BirdOraclemHWgxwp.extractAddress.call(stringh3zPz2D, {from: accounts[5]});
		const uintKrmPKWw = await BirdOraclemHWgxwp.getRatingByAddressString.call(stringR0H7Csa, {from: accounts[3]});
		const uintEMD9m8G = await BirdOraclemHWgxwp.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYK78lQY = await BirdOracle.new({from: accounts[5]});
		const uintwxy2KGr = BigInt("226")
		const uintzmn0unY = BigInt("836")
		const uintkfs8Dx = BigInt("1077")
		const uintfmq7aqk = BigInt("821")
		const stringrWxVjcE = "yQicRhCGghJYpnx1VPqNg76SROakTeVE47ITp8SnP6KjLGghYyvQNd3uuy4TftKYjEkvAmvPISKwleqfGGqTJJMQP7vJ4EqHY"
		const addressf1zTLZB = accounts[3]
		const uintwFCSOz = BigInt("247")
		const stringxLZN7o1 = "tIhx7OemgFvq2MeAmvsHQnMCXkxuHqreyUsfb6jTHecOEtmW38dj8aPHeqMNThzC1BbWrNuWmrPe2Iu9mbMm6J1YLr8p8fz947"
		const stringptluKj = "s"
		const uintgc6kCUX = BigInt("237")
		const uintsG5Cxn6 = BigInt("636")
		const 
JNtBAJJ = await BirdOracleYK78lQY.updatedChainRequest.call(uintzmn0unY, uintwxy2KGr, {from: accounts[0]});
		const stringWulosRh = await BirdOracleYK78lQY.substring.call(stringrWxVjcE, uintfmq7aqk, uintkfs8Dx, {from: accounts[3]});
		const uintHsmJowJ = await BirdOracleYK78lQY.getRatingByAddress.call(addressf1zTLZB, {from: accounts[0]});
		const stringRnR3Tu = await BirdOracleYK78lQY.substring.call(stringxLZN7o1, uintwFCSOz, {from: accounts[0]});
		const uintYLaNebM = await BirdOracleYK78lQY.getRatingByAddressString.call(stringptluKj, {from: accounts[0]});
		const 
Bz9iKGh = await BirdOracleYK78lQY.updatedChainRequest.call(uintsG5Cxn6, uintgc6kCUX, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleiFPmPRn = await BirdOracle.new({from: accounts[3]});
		const stringodxzBs = "aTU4ONxBp6wG8DgZ4qkcGoRfD88asnJdBkhlwCkE"
		const stringORDGl3p = "CD31yEheFK1sQLx1VPOjfpLaXiIVnJAWTVahIN1QbuHRzYX8by7DAs9b12xvnbSJaM13JCwnaHeL36Iym1FTSNBHIHB3vBZtBX"
		const uintUNRmjnh = await BirdOracleiFPmPRn.getRatingByAddressString.call(stringodxzBs, {from: accounts[0]});
		const uintM8wgyzF = await BirdOracleiFPmPRn.getRatingByAddressString.call(stringORDGl3p, {from: accounts[2]});
		const uintzrhfthB = await BirdOracleiFPmPRn.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJvppbCg = await BirdOracle.new({from: accounts[3]});
		const stringb4mR57g = "pdrABAMto1uWWMKwMkJEvzm1m2YDMagvTnYNRxJSxJImiYl89El4M7dRyuh74pInthn28mGlzP6eNGV"
		const stringXUQmqTe = "1YFWD7HIsZ6Qm0obXhPgcS4fL7"
		const stringSN2mm9 = "G6R9aZUxemTEAwvp2pmmv9P2Pxwqxumrv9NtdjgzpcjErv"
		const stringmBVrmdH = "bbBSMywzJ2GVcfhU8nb1c4Kne2PtQtVDF"
		const 
w28CZB = await BirdOracleJvppbCg.newChainRequest.call(stringXUQmqTe, stringb4mR57g, {from: "0x0000000000000000000000000000000000000001"});
		const uintrn3BHL = await BirdOracleJvppbCg.getRatingByAddressString.call(stringSN2mm9, {from: accounts[2]});
		const uintTmXNOsV = await BirdOracleJvppbCg.getRatingByAddressString.call(stringmBVrmdH, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLQMA5Of = await BirdOracle.new({from: accounts[3]});
		const stringQixM1pr = "Q5IsqlLLpTssTg65uZf3C4OXFosZIYg9NNE8z1TsYl3kF4KzYMovxmdUvZV3Oy4Rl88H8L3YnB"
		const uintxOWln9a = BigInt("1662")
		const uintZZz2Ch = BigInt("1628")
		const stringtz7K9A = "m2XrZI65SGKmXoQa5NYQ1uY4bEnv2z"
		const addresst7PjNwe = accounts[2]
		const addressofdd3xf = await BirdOracleLQMA5Of.parseAddr.call(stringQixM1pr, {from: accounts[0]});
		const 
wKVPQr4 = await BirdOracleLQMA5Of.updatedChainRequest.call(uintZZz2Ch, uintxOWln9a, {from: accounts[4]});
		const stringXFJmggr = await BirdOracleLQMA5Of.extractAddress.call(stringtz7K9A, {from: accounts[0]});
		const uinthFgRiA2 = await BirdOracleLQMA5Of.getRatingByAddress.call(addresst7PjNwe, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJPOZ7Z6 = await BirdOracle.new({from: accounts[3]});
		const addresszjJ2tHl = accounts[0]
		const uintA3u5SG = BigInt("1725")
		const uintW4k6saZ = BigInt("1415")
		const stringXbM8Khc = "1UIGdXaP65wpd"
		const stringwfDwcjR = "Lm8aBYmDRNhlCGX7WT6FETpPJ31htLn3VwyE6ILLxV9uoyGOpsyjcGFp"
		const stringyxyp2JG = "LhtGjhfaI"
		const uintQCTeOsX = await BirdOracleJPOZ7Z6.getRatingByAddress.call(addresszjJ2tHl, {from: "0x0000000000000000000000000000000000000001"});
		const stringgycKREq = await BirdOracleJPOZ7Z6.substring.call(stringXbM8Khc, uintW4k6saZ, uintA3u5SG, {from: accounts[1]});
		const uintVkM9ua6 = await BirdOracleJPOZ7Z6.getRatingByAddressString.call(stringwfDwcjR, {from: accounts[1]});
		const uintelLNF1P = await BirdOracleJPOZ7Z6.getRating.call({from: accounts[4]});
		const uinttAIQPB = await BirdOracleJPOZ7Z6.getRatingByAddressString.call(stringyxyp2JG, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGQpa06 = await BirdOracle.new({from: accounts[1]});
		const uintPthV7OK = BigInt("2013")
		const stringPfCEhKx = "MQZEtArHuYptP7W9XUyrjQqEFbtBzLQJUt5Jp1ZlY4Qxg9uSW6a4Ey6LM"
		const stringTQoxfo0 = "niXRCYJIBrQBnOFVeVcqeqOco1LFaCPPcKk2Z7cNY8qhcjA0FqQEUsERBwavV1"
		const stringTPVgRch = "Bnl3CNyeZqfJCAEjWtuhMCP1V"
		const addressokpECyp = accounts[3]
		const stringX6R9tsf = "Dg7YNH3STjGto"
		const uintlPlzbUf = BigInt("696")
		const uintoFvupTA = BigInt("1679")
		const stringRcQrOIE = await BirdOracleGQpa06.substring.call(stringPfCEhKx, uintPthV7OK, {from: accounts[3]});
		const stringBDvuUU0 = await BirdOracleGQpa06.extractAddress.call(stringTQoxfo0, {from: accounts[2]});
		const stringiZPiHj = await BirdOracleGQpa06.extractAddress.call(stringTPVgRch, {from: accounts[3]});
		const uintxiFvOQh = await BirdOracleGQpa06.getRatingByAddress.call(addressokpECyp, {from: accounts[3]});
		const stringqHr8sLl = await BirdOracleGQpa06.extractAddress.call(stringX6R9tsf, {from: accounts[1]});
		const 
iNaaqGp = await BirdOracleGQpa06.updatedChainRequest.call(uintoFvupTA, uintlPlzbUf, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLQMA5Of = await BirdOracle.new({from: accounts[3]});
		const uintHpqkdm8 = BigInt("1566")
		const stringvPZqPue = "GRAxFgdF9o5Nx4MUKDiyUm3uiTElMwDvZUrlq"
		const stringQixM1pr = "Q5IsqlLLpTssTg65uZf3C4OXFosZIYf9NNE8z1TsYl3kF4KzYMovxmdUvZV3Oy4Rl88H8L3YnB"
		const addressYxYCQRN = accounts[0]
		const uintbIBmTZG = BigInt("1660")
		const uintX4EpZyQ = BigInt("1628")
		const uintIirZIWW = BigInt("1861")
		const uintmv08Nx0 = BigInt("1883")
		const stringtz7K9A = "m2XrZI65SGKmXoQa5NYQ1uY4bEnv2z"
		const stringWC8XKE2 = await BirdOracleLQMA5Of.substring.call(stringvPZqPue, uintHpqkdm8, {from: accounts[2]});
		const addressofdd3xf = await BirdOracleLQMA5Of.parseAddr.call(stringQixM1pr, {from: accounts[0]});
		const uintKerOQfW = await BirdOracleLQMA5Of.getRatingByAddress.call(addressYxYCQRN, {from: accounts[0]});
		const 
wKVPQr4 = await BirdOracleLQMA5Of.updatedChainRequest.call(uintX4EpZyQ, uintbIBmTZG, {from: accounts[4]});
		const 
ZWJ04ut = await BirdOracleLQMA5Of.updatedChainRequest.call(uintmv08Nx0, uintIirZIWW, {from: accounts[3]});
		const stringXFJmggr = await BirdOracleLQMA5Of.extractAddress.call(stringtz7K9A, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJPOZ7Z6 = await BirdOracle.new({from: accounts[3]});
		const uintH6LBGlQ = BigInt("18")
		const stringTBun87J = "hpjcnQ4h8WUdd5eAQA5pPU7jcNWalHIcUnlCT6u1smJsURaSG4ELpAyVpkJmzoSc4h7W"
		const uintnLyW05D = BigInt("1691")
		const uintS8gd1W2 = BigInt("1415")
		const stringXbM8Khc = "1UIGdXaP65wpd"
		const stringZGTqED8 = "5ydmJd4D9bqEDV1XgqCwVve33zeabj2yRu456AXnGQxzwaWNSjsbx0ho7mV2qfwbaB269JqC2rYKA4mOVfSLxABfE7B7D"
		const stringwfDwcjR = "Lm8aBYmDRNhlCGX7WT6FETpPJ31htLn3VwyE6ILLxV9uoyGOpsyjcHFp"
		const stringPsDE2V8 = "nHyJXnzqyNrjYIEE9uvjJi7KB"
		const stringyxyp2JG = "LhtGjhfaI"
		const stringRAAKTOn = await BirdOracleJPOZ7Z6.substring.call(stringTBun87J, uintH6LBGlQ, {from: accounts[4]});
		const stringgycKREq = await BirdOracleJPOZ7Z6.substring.call(stringXbM8Khc, uintS8gd1W2, uintnLyW05D, {from: accounts[1]});
		const addressFZ8msa4 = await BirdOracleJPOZ7Z6.parseAddr.call(stringZGTqED8, {from: accounts[2]});
		const uintVkM9ua6 = await BirdOracleJPOZ7Z6.getRatingByAddressString.call(stringwfDwcjR, {from: accounts[1]});
		const stringTXcfHCw = await BirdOracleJPOZ7Z6.extractAddress.call(stringPsDE2V8, {from: accounts[3]});
		const uinttAIQPB = await BirdOracleJPOZ7Z6.getRatingByAddressString.call(stringyxyp2JG, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclezhqjatf = await BirdOracle.new({from: accounts[1]});
		const uintdtQn7Tu = BigInt("1236")
		const stringSqRnBRB = "BArNqIgsl0j3NiIXYIDCbAhVVmt4Qs0rx6tayTktFfd2FU6HfB3mh9YkdRXRlC4U8Fa5KVx2dsnpb85L2OxN"
		const stringwofB9S8 = "ywAG3i31D5ucpJfB6uSLc2BlSCcxgp3Mdl6alBqM4"
		const stringNfsfHcH = await BirdOraclezhqjatf.substring.call(stringSqRnBRB, uintdtQn7Tu, {from: accounts[0]});
		const uintzCWIw20 = await BirdOraclezhqjatf.getRating.call({from: accounts[0]});
		const uintrG9Fu1q = await BirdOraclezhqjatf.getRating.call({from: accounts[3]});
		const uintRkqzKHT = await BirdOraclezhqjatf.getRating.call({from: accounts[4]});
		const stringVprCxtW = await BirdOraclezhqjatf.extractAddress.call(stringwofB9S8, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYRLaQSX = await BirdOracle.new({from: accounts[0]});
		const uinteYnD5GC = BigInt("881")
		const stringD1XAAEJ = "nj"
		const uintCzOp2BB = BigInt("838")
		const uintxE5GQCu = BigInt("767")
		const stringtxfqpAc = "xbs6RMcozfqzejRiWzeHbkOpE9CU0"
		const uintmjR9sAT = BigInt("1142")
		const uintCWeAjF = BigInt("1665")
		const stringXHYkc3p = "aGq7qtWg4l55qd8"
		const uintV5qpFcy = BigInt("898")
		const uintoSjncIZ = BigInt("1072")
		const stringwVlmqnK = await BirdOracleYRLaQSX.substring.call(stringD1XAAEJ, uinteYnD5GC, {from: accounts[1]});
		const stringcCkcyMS = await BirdOracleYRLaQSX.substring.call(stringtxfqpAc, uintxE5GQCu, uintCzOp2BB, {from: accounts[1]});
		const 
h5Hm0rY = await BirdOracleYRLaQSX.updatedChainRequest.call(uintCWeAjF, uintmjR9sAT, {from: accounts[1]});
		const stringggR5dAb = await BirdOracleYRLaQSX.extractAddress.call(stringXHYkc3p, {from: accounts[4]});
		const 
wbnDgyJ = await BirdOracleYRLaQSX.updatedChainRequest.call(uintoSjncIZ, uintV5qpFcy, {from: accounts[4]});
		const uintgaeXbxs = await BirdOracleYRLaQSX.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePAj5fCj = await BirdOracle.new({from: accounts[1]});
		const uintocPJmlx = BigInt("989")
		const uintFAy9lre = BigInt("1814")
		const stringUCggRWV = "mgCVDkaCeNXLjdQ4oDHzkQxN9mDSBixpPvhhNh8DlUA7cpzPtxJ4ffgxzOhPf9s8QyRo9uP7JOqtNLYCSvkeHkR"
		const addressl0hQyO8 = accounts[2]
		const stringRLcw8ox = await BirdOraclePAj5fCj.substring.call(stringUCggRWV, uintFAy9lre, uintocPJmlx, {from: accounts[2]});
		const uintrs8Y9OL = await BirdOraclePAj5fCj.getRatingByAddress.call(addressl0hQyO8, {from: accounts[3]});
		const uintbYZhp88 = await BirdOraclePAj5fCj.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1ZXNNb = await BirdOracle.new({from: accounts[3]});
		const uintmTudGQO = BigInt("1023")
		const stringAyiPMg = "P7hsTiIJkhTT9fRqhQ4a9DBwIvyt4cD1WxUTsBMHoF2KFeDyeCxMIvuuH5AocwrlMRrYap9MgCEilqnW1VjRNiUX23"
		const uintnsKftfU = BigInt("1655")
		const stringHfVXGOb = "VEi5LUj3Mmwpsw1CdbnQpPsF3YGKZn9lpTjM3u6dQ1lg51L1bki9NEWiAZGtiQ7IBSgnE5YBL8peNWs47sS1aPbnD"
		const uintYeyk5P = BigInt("1860")
		const stringLGMWdYR = "NRJS2hPqP323Bk"
		const addressSEg1pk2 = accounts[1]
		const stringwBxORi = await BirdOracle1ZXNNb.substring.call(stringAyiPMg, uintmTudGQO, {from: accounts[5]});
		const stringR971RHb = await BirdOracle1ZXNNb.substring.call(stringHfVXGOb, uintnsKftfU, {from: accounts[4]});
		const stringYFzSxBJ = await BirdOracle1ZXNNb.substring.call(stringLGMWdYR, uintYeyk5P, {from: accounts[1]});
		const uintBBd8q5 = await BirdOracle1ZXNNb.getRatingByAddress.call(addressSEg1pk2, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePAj5fCj = await BirdOracle.new({from: accounts[1]});
		const uintYwUYe0e = BigInt("204")
		const stringw93iV5r = "dgPNWba"
		const stringp5wcX9 = "JLrZefPCvj1yGTOsWSIFBCU1W4z7Ihk9Nn7nM8Y3LHiEDnCC5PzbDHG18P8qThFbQ3eQ8zDr8DWhPZuXe6eD8ZzwlDrGy2XBYF"
		const stringoTKsmLi = await BirdOraclePAj5fCj.substring.call(stringw93iV5r, uintYwUYe0e, {from: "0x0000000000000000000000000000000000000001"});
		const stringvZo69m = await BirdOraclePAj5fCj.extractAddress.call(stringp5wcX9, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyAJSNFz = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbifsQTB = accounts[3]
		const stringG4RN09 = "ki0kElWkgddfQvGKcOgDo6XHBnjANmwph1co4WiNtrgv88edl3zQBnIlYjdVSRp"
		const stringqZgaaLd = "5otovhKhAR9y827VHAj1FiearKnPnWw7v0H8NJ61e755kgm8XwBOO38vQGxALDz49jbndystU2XdOI3IschzshOz6"
		const uintBXs73z = await BirdOracleyAJSNFz.getRatingByAddress.call(addressbifsQTB, {from: accounts[0]});
		const uinth9bF6Az = await BirdOracleyAJSNFz.getRating.call({from: accounts[2]});
		const stringB9Os7O4 = await BirdOracleyAJSNFz.extractAddress.call(stringG4RN09, {from: accounts[0]});
		const stringbA6ierB = await BirdOracleyAJSNFz.extractAddress.call(stringqZgaaLd, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleag4rhRW = await BirdOracle.new({from: accounts[0]});
		const uintODPPMDl = BigInt("441")
		const uintFXTHqZI = BigInt("441")
		const stringCgGXS3M = "8fvPl2rQdNb1QIYxLM59BE7oNEllXJYdFO1NOS37jvK9tTSS"
		const stringimBp86N = "Gd4P2ickngJ79f4XmanRXvoMC6FfhHzRswMHr1yQNBvBeq54SLJfCcQvKhTWBfaOPOiNOMH9g6opdX6yJ"
		const stringCiYlSTl = await BirdOracleag4rhRW.substring.call(stringCgGXS3M, uintFXTHqZI, uintODPPMDl, {from: accounts[0]});
		const stringXOAi6Le = await BirdOracleag4rhRW.extractAddress.call(stringimBp86N, {from: accounts[0]});
	});
})