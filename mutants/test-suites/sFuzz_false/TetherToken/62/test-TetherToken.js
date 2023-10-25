const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintwiIoqF0 = BigInt("37")
		const stringut7cCZ7 = "jHKV4K8gDESigNESSYFyCNmDcBWmU8eg8EIqgG1xcciB48si"
		const stringIGFfSFN = "hnGUi0WodBO9tM1tC44GGnN0DozA971EP3av3S3p7LcCDpTUa8TsjLoAZQ2m1lkfosluDxUQ"
		const uintimRMKX = BigInt("17")
		const TetherTokenoeWSYG2 = await TetherToken.new(uintwiIoqF0, stringut7cCZ7, stringIGFfSFN, uintimRMKX, {from: accounts[0]});
		const uintnmgV38 = BigInt("1704")
		const addresszmHM2sP = accounts[4]
		const uinte6FLOfU = BigInt("244")
		const uintPKNgtPR = BigInt("232")
		const addressxEtFN6 = accounts[4]
		const uintIHH8HGr = BigInt("1449")
		const addressiJJHP5I = accounts[2]
		const addresspuR3h7p = await TetherTokenoeWSYG2.approve.call(addresszmHM2sP, uintnmgV38, {from: accounts[2]});
//		const uint6MxFOs = await TetherTokenoeWSYG2.setParams.call(uintPKNgtPR, uinte6FLOfU, {from: accounts[0]});
//		const addresszIIlLwq = await TetherTokenoeWSYG2.deprecate.call(addressxEtFN6, {from: accounts[3]});
//		const addressTyHx0hU = await TetherTokenoeWSYG2.approve.call(addressiJJHP5I, uintIHH8HGr, {from: accounts[4]});

		await expect(TetherTokenoeWSYG2.setParams.call(uintPKNgtPR, uinte6FLOfU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintYNH8WQR = BigInt("1086")
		const stringSnETyWA = "nF99FOjbmTlQ1BdzFnPLH6d5"
		const stringMbmAJt1 = "90oiCEQpVTTCsdvKSGqdSpnGCyDrktjPpcuvxUrPx8ebwRrKA3UnkHKqwQcG3CBGbt9XXg19pbkryeyZk2KCSfIzgoO1SeXi6"
		const uintrYY5z1y = BigInt("657")
		const TetherTokenPbIWjOw = await TetherToken.new(uintYNH8WQR, stringSnETyWA, stringMbmAJt1, uintrYY5z1y, {from: accounts[3]});
		const addressOvxApw9 = accounts[4]
		const addressGlA5uA = accounts[3]
		const uintGuLAoAd = BigInt("1993")
		const uintrgFyc85 = BigInt("769")
		const uintk6klMU8 = await TetherTokenPbIWjOw.allowance.call(addressGlA5uA, addressOvxApw9, {from: accounts[1]});
//		const uintqMljM1g = await TetherTokenPbIWjOw.setParams.call(uintrgFyc85, uintGuLAoAd, {from: accounts[1]});

		assert.equal(uintk6klMU8, BigInt("0"))
		await expect(TetherTokenPbIWjOw.setParams.call(uintrgFyc85, uintGuLAoAd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqSn5MLB = BigInt("566")
		const stringxGu4P78 = "6Jhm7acG0gGBaVDgXYE1GRPEqfivszVI1skkud5e0I5OlR5NjU5ni1KTH"
		const stringGWAEWoe = "fxJ24ix41V5mkbcj4sRm"
		const uintE3cegDS = BigInt("147")
		const TetherToken1wWfNT = await TetherToken.new(uintqSn5MLB, stringxGu4P78, stringGWAEWoe, uintE3cegDS, {from: accounts[4]});
		const uintBoZ644Z = BigInt("392")
		const addressl6Rikas = accounts[1]
		const addressnxgTi8 = accounts[5]
		const uintnxorlDE = BigInt("1204")
		const addressK00ZyXd = accounts[4]
		const uintwdQy8oB = BigInt("749")
		const addresspWRLuRe = accounts[3]
		const addressANI7bAt = accounts[0]
//		const uintMxoC85v = await TetherToken1wWfNT.redeem.call(uintBoZ644Z, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvTGksjX = await TetherToken1wWfNT.deprecate.call(addressl6Rikas, {from: accounts[5]});
//		const uintd3hOtUk = await TetherToken1wWfNT.balanceOf.call(addressnxgTi8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressersjXss = await TetherToken1wWfNT.approve.call(addressK00ZyXd, uintnxorlDE, {from: accounts[3]});
//		const addressL4M0GIV = await TetherToken1wWfNT.transferFrom.call(addressANI7bAt, addresspWRLuRe, uintwdQy8oB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherToken1wWfNT.redeem.call(uintBoZ644Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintg9AMF9e = BigInt("318")
		const stringSRd7moR = "GoyMJ3bBsbYG2enRanpnLTKj1SW2gp"
		const stringUghwU7o = "ky5HRTq"
		const uintLDuJ5EZ = BigInt("1264")
		const TetherTokenh1uklTM = await TetherToken.new(uintg9AMF9e, stringSRd7moR, stringUghwU7o, uintLDuJ5EZ, {from: accounts[4]});
		const address539CQi = accounts[2]
		const addressuM6gjKK = accounts[1]
		const uintprL1TAU = BigInt("1673")
		const addressJrREMKC = accounts[1]
		const uintyIX1EwQ = BigInt("1718")
		const addresshOYuqwb = accounts[1]
		const addressQAocBeo = accounts[1]
		const addressrjPpeVZ = "0x0000000000000000000000000000000000000001"
		const addressKvDjeEN = accounts[2]
//		const addressj6wbO3w = await TetherTokenh1uklTM.deprecate.call(address539CQi, {from: "0x0000000000000000000000000000000000000001"});
//		const addressVZ5NYrZ = await TetherTokenh1uklTM.deprecate.call(addressuM6gjKK, {from: accounts[0]});
//		const addressPgohdf = await TetherTokenh1uklTM.approve.call(addressJrREMKC, uintprL1TAU, {from: accounts[0]});
//		const addressCxpZJ0a = await TetherTokenh1uklTM.transferFrom.call(addressQAocBeo, addresshOYuqwb, uintyIX1EwQ, {from: accounts[2]});
//		const uintaJKaPph = await TetherTokenh1uklTM.allowance.call(addressKvDjeEN, addressrjPpeVZ, {from: accounts[2]});

		await expect(TetherTokenh1uklTM.deprecate.call(address539CQi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintfzzdV1G = BigInt("1710")
		const stringKreibyX = "8yxkzXwbyUaxQxJnSJoAaT"
		const stringLb4rzcf = "stVXru71HReWc0oFENfug7vBwovSVQTd8B3tL8zOm9ZebYxiXcwN8bbDBd7UXjGk73tOkiUbB4q45RCi6h"
		const uintLKosIbx = BigInt("1856")
		const TetherTokenLDel3Hu = await TetherToken.new(uintfzzdV1G, stringKreibyX, stringLb4rzcf, uintLKosIbx, {from: accounts[3]});
		const uintaWvY0tl = BigInt("1754")
		const addressiVlSpl4 = accounts[4]
		const addressDI9mdOa = accounts[1]
		const addressq3H0FKQ = accounts[1]
		const uintgAc31M1 = BigInt("1200")
		const uintDTEZrip = BigInt("627")
		const addresswGxonsM = accounts[3]
		const addresskNt0f3w = await TetherTokenLDel3Hu.approve.call(addressiVlSpl4, uintaWvY0tl, {from: accounts[2]});
		const uintbfWgXUm = await TetherTokenLDel3Hu.allowance.call(addressq3H0FKQ, addressDI9mdOa, {from: accounts[2]});
		const uintfmtuXY2 = await TetherTokenLDel3Hu.totalSupply.call({from: accounts[4]});
//		const uintC2iMo4p = await TetherTokenLDel3Hu.redeem.call(uintgAc31M1, {from: accounts[5]});
//		const addressGzaRSeX = await TetherTokenLDel3Hu.transfer.call(addresswGxonsM, uintDTEZrip, {from: accounts[1]});

		assert.equal(uintbfWgXUm, BigInt("0"))
		assert.equal(uintfmtuXY2, BigInt("1710"))
		await expect(TetherTokenLDel3Hu.redeem.call(uintgAc31M1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpGMY0r1 = BigInt("685")
		const stringxGg6eI4 = "jO5a6O97fpYJwqeZ5NRD"
		const stringTIbQgTL = "Eg4P8TE2"
		const uints0Ba3ON = BigInt("537")
		const TetherTokenmK2ESL6 = await TetherToken.new(uintpGMY0r1, stringxGg6eI4, stringTIbQgTL, uints0Ba3ON, {from: accounts[0]});
		const uintjZcbVLR = BigInt("712")
		const addressBS74CPZ = accounts[4]
		const addressXvLvtYK = accounts[2]
		const addressW3IakLp = accounts[5]
		const addressBKEwJWR = accounts[3]
		const uints13qBBp = BigInt("369")
		const uintL0c97G = BigInt("951")
//		const addresseiRC1nc = await TetherTokenmK2ESL6.transferFrom.call(addressXvLvtYK, addressBS74CPZ, uintjZcbVLR, {from: accounts[0]});
//		const uintk3tXwSd = await TetherTokenmK2ESL6.allowance.call(addressBKEwJWR, addressW3IakLp, {from: accounts[3]});
//		const uintQCK71zU = await TetherTokenmK2ESL6.setParams.call(uintL0c97G, uints13qBBp, {from: accounts[1]});

		await expect(TetherTokenmK2ESL6.transferFrom.call(addressXvLvtYK, addressBS74CPZ, uintjZcbVLR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinthBLfOi0 = BigInt("1128")
		const stringX2SX0FZ = "kmJqjIH2jfCmD7PbfdKCBJPOUrGbwPhKWn5Ukhr6DrMrOja8ASs2hxq4UIetrXj5T4JdWZkwb"
		const stringNwVJXWG = "HEcLIOA9"
		const uintufDMDsC = BigInt("484")
		const TetherTokenEExS4pk = await TetherToken.new(uinthBLfOi0, stringX2SX0FZ, stringNwVJXWG, uintufDMDsC, {from: accounts[1]});
		const addressOwJxi83 = accounts[0]
		const addressAJsXCKu = accounts[4]
		const uintWKINTLi = BigInt("1752")
		const uintE5Xeot8 = BigInt("998")
		const addressicqWyB = accounts[3]
		const uintHU5GnxG = BigInt("1464")
		const addressASW6zZt = accounts[0]
		const addressl2Ps4RY = "0x0000000000000000000000000000000000000001"
		const uintfm7CW8 = BigInt("1897")
		const uintiGcBu4u = await TetherTokenEExS4pk.allowance.call(addressAJsXCKu, addressOwJxi83, {from: accounts[4]});
		const uintAFwaUNn = await TetherTokenEExS4pk.issue.call(uintWKINTLi, {from: accounts[1]});
//		const addressjxuQLzj = await TetherTokenEExS4pk.transfer.call(addressicqWyB, uintE5Xeot8, {from: accounts[4]});
//		const addressNFwVxT = await TetherTokenEExS4pk.transferFrom.call(addressl2Ps4RY, addressASW6zZt, uintHU5GnxG, {from: accounts[4]});
//		const uintAEcEjIM = await TetherTokenEExS4pk.redeem.call(uintfm7CW8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintiGcBu4u, BigInt("0"))
		await expect(TetherTokenEExS4pk.transfer.call(addressicqWyB, uintE5Xeot8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinttmrNA74 = BigInt("304")
		const stringxUL0MgV = "d1f0pDRtBpdxjHfymV8bhEfp4v8RazT4SFnaTqMi1G1U3fsF55zMA09IivZDX3Fk7ee279P2"
		const stringd5PG9Ud = "hnuwhbX5SDbVdK7t48RabsG1i0qV3I9OQTvukF0IG8q2y1MBtw95mz7ds"
		const uintz0AmRhf = BigInt("163")
		const TetherTokenmVTYGMV = await TetherToken.new(uinttmrNA74, stringxUL0MgV, stringd5PG9Ud, uintz0AmRhf, {from: accounts[3]});
		const addressj3Fkbpf = accounts[5]
		const addressjAoPIeb = accounts[3]
		const addressMd88uqd = accounts[0]
		const addressFju0V0h = accounts[0]
		const addressxh2ui8a = accounts[1]
		const addressfsds0PE = accounts[4]
		const uintr4CcR8E = BigInt("873")
		const uintivcw7X = await TetherTokenmVTYGMV.balanceOf.call(addressj3Fkbpf, {from: accounts[0]});
		const uintHhWDfwI = await TetherTokenmVTYGMV.allowance.call(addressMd88uqd, addressjAoPIeb, {from: accounts[1]});
//		const addressscJZuxV = await TetherTokenmVTYGMV.deprecate.call(addressFju0V0h, {from: accounts[0]});
//		const uintCXPCJe = await TetherTokenmVTYGMV.allowance.call(addressfsds0PE, addressxh2ui8a, {from: accounts[1]});
//		const uintGQIZRkL = await TetherTokenmVTYGMV.issue.call(uintr4CcR8E, {from: accounts[0]});

		assert.equal(uintHhWDfwI, BigInt("0"))
		assert.equal(uintivcw7X, BigInt("0"))
		await expect(TetherTokenmVTYGMV.deprecate.call(addressFju0V0h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJJZAgOg = BigInt("964")
		const stringHf7Ke6D = "JUXvt4ClLFa9IqXoroYc812byUaPJ5ie3qqMzqdRxpH9n8eOX48ZCF"
		const stringIUiR4mf = "ERQAwWQrAGuS1cDRiuEmnfFeSz2n2TpdOnMaaSbqhrH13lyIusQGkNwSKLGFJ5Qx6GV9SWf1GJr9b65"
		const uintq1jcb0S = BigInt("1822")
		const TetherTokenh4V0mnJ = await TetherToken.new(uintJJZAgOg, stringHf7Ke6D, stringIUiR4mf, uintq1jcb0S, {from: "0x0000000000000000000000000000000000000001"});
		const uintOZC5FRv = BigInt("569")
		const addressbEw9h9C = accounts[3]
		const uintwt2nBZE = BigInt("1619")
		const uintVJrY1KQ = BigInt("49")
		const uintSfhhjzn = BigInt("1531")
		const addressCN26kI3 = await TetherTokenh4V0mnJ.approve.call(addressbEw9h9C, uintOZC5FRv, {from: accounts[4]});
		const uintfRn1KYK = await TetherTokenh4V0mnJ.totalSupply.call({from: accounts[3]});
		const uinttFXxP8F = await TetherTokenh4V0mnJ.setParams.call(uintVJrY1KQ, uintwt2nBZE, {from: "0x0000000000000000000000000000000000000001"});
		const uinta8TLEAS = await TetherTokenh4V0mnJ.issue.call(uintSfhhjzn, {from: accounts[1]});
	});
})