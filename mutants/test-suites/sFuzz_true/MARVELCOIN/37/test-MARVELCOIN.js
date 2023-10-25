const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uint0XAevu = BigInt("553")
		const stringUcoalXM = "rbwOAnm"
		const stringsrkh3Ha = "UTbrmY31ayfWHleiy3wo3UVWip4mHVsP6XtUNOc1OYErHECzbXRWtUovzYgCOgQbgRQQqQylMQuqpUfiWWGS9L0Gk"
		const MARVELCOINv2IvZW = await MARVELCOIN.new(uint0XAevu, stringUcoalXM, stringsrkh3Ha, {from: "0x0000000000000000000000000000000000000001"});
		const uintkN4Qct = BigInt("1370")
		const uintfVlMllU = BigInt("157")
		const addressh60KtrT = accounts[0]
		const uintA6FQsg8 = BigInt("800")
		const boolIbZgwLt = await MARVELCOINv2IvZW.burn.call(uintkN4Qct, {from: accounts[2]});
		const boolPD6GMAS = await MARVELCOINv2IvZW.approve.call(addressh60KtrT, uintfVlMllU, {from: accounts[2]});
		const boolkqmRJLY = await MARVELCOINv2IvZW.burn.call(uintA6FQsg8, {from: accounts[1]});
	});

	it('test for MARVELCOIN', async () => {
		const uintk52hShV = BigInt("913")
		const stringqU7u3ti = "obXlAxeLcig9QboYUlGA6f52uBDwUBoAaeFu0qVdGuIKiUUtxKseRP8erzEPQsjeCOj8eGHYDKSqAJ4"
		const stringf1ZuhRR = "XRAUkRjtWWzFDP2k54Nsg3OSF"
		const MARVELCOINzBnD6H8 = await MARVELCOIN.new(uintk52hShV, stringqU7u3ti, stringf1ZuhRR, {from: accounts[0]});
		const uintBzqdtMd = BigInt("1133")
		const addressQ16bojU = accounts[5]
		const uintab59uC9 = BigInt("1201")
		const uintQpYBTng = BigInt("1932")
		const boolD8K6st6 = await MARVELCOINzBnD6H8.approve.call(addressQ16bojU, uintBzqdtMd, {from: accounts[0]});
//		const boolwUeVPD7 = await MARVELCOINzBnD6H8.burn.call(uintab59uC9, {from: accounts[2]});
//		const boolZdaMqpd = await MARVELCOINzBnD6H8.burn.call(uintQpYBTng, {from: accounts[1]});

		assert.equal(boolD8K6st6, true)
		await expect(MARVELCOINzBnD6H8.burn.call(uintab59uC9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintU3CqgLG = BigInt("1725")
		const stringVNUTjUV = "Wat6iILlU8qc1Tn6Gj4UWzCXq5ppwSN95oPS7k1fgLHci7zW3SijkFB8FlzCXWAbZWVOo6JfcElc5XVY73lZ3zkepw9Moas1k"
		const stringYWaJeXI = "ylSkHFWvlbG4lxjdCUvBFPzcWaJqZozp"
		const MARVELCOINj1ZMAS0 = await MARVELCOIN.new(uintU3CqgLG, stringVNUTjUV, stringYWaJeXI, {from: accounts[0]});
		const uintrkllVJY = BigInt("1444")
		const addressamaLPaC = accounts[0]
		const uintQ7R6D5E = BigInt("1779")
		const addressdliE0U5 = accounts[2]
		const boolby3fWmZ = await MARVELCOINj1ZMAS0.transfer.call(addressamaLPaC, uintrkllVJY, {from: accounts[0]});
		const booldNklFg = await MARVELCOINj1ZMAS0.approve.call(addressdliE0U5, uintQ7R6D5E, {from: accounts[5]});

		assert.equal(boolby3fWmZ, true)
		assert.equal(booldNklFg, true)
	});

	it('test for MARVELCOIN', async () => {
		const uintPftY3f6 = BigInt("506")
		const stringbpKfY6n = "rAScQAEx1vTgV5HKJclkvhgM4GsqmIDs4iiXWzsh3vACrUbIClDX2f6iKO8MKesr6IabE9Ni90zqB"
		const stringtv08pSV = "G1awVd76a6PWZA5GPpS"
		const MARVELCOINssLRhnN = await MARVELCOIN.new(uintPftY3f6, stringbpKfY6n, stringtv08pSV, {from: accounts[1]});
		const byteT3Arve9 = "0x1a1e181c0811080a07100a0d180004181f1e0813080a111f1d130b0e080a"
		const uintKoa13Vw = BigInt("1261")
		const addressoUTogHN = accounts[3]
		const byteIeaqteK = "0x16191a0711200b010e0305"
		const uintabveq3G = BigInt("847")
		const addressGdZgBF6 = accounts[0]
		const uintEhfp1Z = BigInt("320")
		const addressfQwS9NO = accounts[2]
		const uintF8FmyGM = BigInt("1298")
		const addressw2p7AVL = accounts[4]
//		const boolQo2yI4b = await MARVELCOINssLRhnN.approveAndCall.call(addressoUTogHN, uintKoa13Vw, byteT3Arve9, {from: accounts[1]});
//		const boolhVHa7L = await MARVELCOINssLRhnN.approveAndCall.call(addressGdZgBF6, uintabveq3G, byteIeaqteK, {from: accounts[0]});
//		const booljVBrchx = await MARVELCOINssLRhnN.approve.call(addressfQwS9NO, uintEhfp1Z, {from: accounts[1]});
//		const bool2l6dGP = await MARVELCOINssLRhnN.burnFrom.call(addressw2p7AVL, uintF8FmyGM, {from: accounts[5]});

		await expect(MARVELCOINssLRhnN.approveAndCall.call(addressoUTogHN, uintKoa13Vw, byteT3Arve9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintRkptW5m = BigInt("1402")
		const stringTfFrVKe = "bNCLAuOiwp26lJStnI4TwA686O5mc3bQlTqcZoDqjsuMgMWSI1auq1"
		const stringlQOP0sY = "reMBX3ImRLOgMMLXI3"
		const MARVELCOINYC5PstO = await MARVELCOIN.new(uintRkptW5m, stringTfFrVKe, stringlQOP0sY, {from: accounts[4]});
		const uintuemZoJ1 = BigInt("482")
		const addresssUB3wAz = accounts[5]
		const addressnzPXyYA = accounts[0]
		const uintilZCIq = BigInt("954")
		const addressttCJal = "0x0000000000000000000000000000000000000001"
		const addressCxS5tJb = accounts[2]
		const uintWcvAhRP = BigInt("984")
		const addressYSAmqOK = accounts[0]
		const addresskX9vkpR = accounts[1]
		const byteEDnfWVr = "0x0c10021b02080e02050414120e161a070603051613020b1f140a061e"
		const uintNw3B7LI = BigInt("1043")
		const addressppWQiTe = accounts[3]
		const uintxPCRloq = BigInt("265")
		const byteyUel4YK = "0x14110912171517050d1903151c0b170f15181f121b1f"
		const uintZyrV2Pm = BigInt("1986")
		const addresszV4n0DP = accounts[5]
//		const boolcGgqQUt = await MARVELCOINYC5PstO.transferFrom.call(addressnzPXyYA, addresssUB3wAz, uintuemZoJ1, {from: accounts[5]});
//		const boolvjV6S4U = await MARVELCOINYC5PstO.transferFrom.call(addressCxS5tJb, addressttCJal, uintilZCIq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBnnzS85 = await MARVELCOINYC5PstO.transferFrom.call(addresskX9vkpR, addressYSAmqOK, uintWcvAhRP, {from: accounts[1]});
//		const boolhIkODmN = await MARVELCOINYC5PstO.approveAndCall.call(addressppWQiTe, uintNw3B7LI, byteEDnfWVr, {from: accounts[3]});
//		const boolqiiI3WS = await MARVELCOINYC5PstO.burn.call(uintxPCRloq, {from: accounts[0]});
//		const boolZmKv3oj = await MARVELCOINYC5PstO.approveAndCall.call(addresszV4n0DP, uintZyrV2Pm, byteyUel4YK, {from: accounts[2]});

		await expect(MARVELCOINYC5PstO.transferFrom.call(addressnzPXyYA, addresssUB3wAz, uintuemZoJ1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintJPJfpJ2 = BigInt("1829")
		const stringLWRqlRx = "dST1xbs4dDGRHy1BRSFKDV4AuW"
		const stringR23XpFZ = "UWrNWwiIhMIe7MXIe4LsHqI42UrE5JeXmEmMxht5OsCLzsGji4fmVfCcnMssPIEgriF5lSP1QsSQjUBK7jTGr5DpmHHK"
		const MARVELCOINbW5GJYy = await MARVELCOIN.new(uintJPJfpJ2, stringLWRqlRx, stringR23XpFZ, {from: accounts[0]});
		const uinttwyoDbQ = BigInt("1995")
		const addressQVgpaTX = accounts[4]
		const uintMmbCiro = BigInt("339")
		const uinthq1JouF = BigInt("345")
		const addresskCQmPZX = accounts[0]
		const uintlFgRWsx = BigInt("1847")
		const addressOWF7UPh = accounts[2]
//		const boolqsozPvN = await MARVELCOINbW5GJYy.burnFrom.call(addressQVgpaTX, uinttwyoDbQ, {from: accounts[3]});
//		const boolU4BczwN = await MARVELCOINbW5GJYy.burn.call(uintMmbCiro, {from: "0x0000000000000000000000000000000000000001"});
//		const boolk6BCDzN = await MARVELCOINbW5GJYy.burnFrom.call(addresskCQmPZX, uinthq1JouF, {from: accounts[2]});
//		const boolZdJO8GY = await MARVELCOINbW5GJYy.approve.call(addressOWF7UPh, uintlFgRWsx, {from: accounts[1]});

		await expect(MARVELCOINbW5GJYy.burnFrom.call(addressQVgpaTX, uinttwyoDbQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintA0WCfcv = BigInt("18")
		const stringxuo66re = "P5Ld8dnqiYsIa1XRPDklnnxXfPaIZG1ornVEuRdm8bMSWAQmoBwpy7HDNhurkpDUPb15bqONuTNSH20pexOJcs14MQiyi"
		const stringeKhtzep = "s5ZUQY86zbwsMFuQwjDRhiH"
		const MARVELCOINgUjSMff = await MARVELCOIN.new(uintA0WCfcv, stringxuo66re, stringeKhtzep, {from: accounts[4]});
		const uintCSqbnNe = BigInt("508")
		const addressFnY9kC2 = accounts[4]
		const uintK3hAOTQ = BigInt("688")
//		const booldMbKkhQ = await MARVELCOINgUjSMff.burnFrom.call(addressFnY9kC2, uintCSqbnNe, {from: accounts[1]});
//		const boolaaPSWfT = await MARVELCOINgUjSMff.burn.call(uintK3hAOTQ, {from: accounts[5]});

		await expect(MARVELCOINgUjSMff.burnFrom.call(addressFnY9kC2, uintCSqbnNe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintF6VFzNf = BigInt("1402")
		const stringTfFrVKe = "bNCLAuOiwp26lJStnI4TwA686O5mc3bQlTqcZoDqjsuMgMWSI1auq1"
		const stringlQOP0sY = "reMBX3ImRLOgMMLXI3"
		const MARVELCOINYC5PstO = await MARVELCOIN.new(uintF6VFzNf, stringTfFrVKe, stringlQOP0sY, {from: accounts[4]});
		const uintpaOmSqt = BigInt("292")
		const uintPvYZ5I2 = BigInt("482")
		const addressG7rg29w = accounts[6]
		const addressDaugYC = accounts[0]
		const boolGOJUS4O = await MARVELCOINYC5PstO.burn.call(uintpaOmSqt, {from: accounts[4]});
//		const boolcGgqQUt = await MARVELCOINYC5PstO.transferFrom.call(addressDaugYC, addressG7rg29w, uintPvYZ5I2, {from: accounts[5]});

		assert.equal(boolGOJUS4O, true)
		await expect(MARVELCOINYC5PstO.transferFrom.call(addressDaugYC, addressG7rg29w, uintPvYZ5I2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})