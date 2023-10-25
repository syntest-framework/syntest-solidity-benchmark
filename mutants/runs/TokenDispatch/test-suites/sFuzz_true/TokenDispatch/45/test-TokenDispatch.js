const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchsaGz0Q6 = await TokenDispatch.new({from: accounts[0]});
		const uintxoIIk2T = BigInt("489")
		const uintIm87bRj = BigInt("54")
		const uintjHnMY9x = await TokenDispatchsaGz0Q6.signTransaction.call(uintxoIIk2T, {from: accounts[0]});
		const uint8Rort2RY = await TokenDispatchsaGz0Q6.claim.call(uintIm87bRj, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchaWDox90 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcFErAlN = BigInt("179")
		const uints3FWKJb = BigInt("232")
		const uintbIAANBE = BigInt("194")
		const uintN7HisW = await TokenDispatchaWDox90.signTransaction.call(uintcFErAlN, {from: accounts[3]});
		const 
AYCHbFM = await TokenDispatchaWDox90.teamOf.call(uints3FWKJb, {from: accounts[2]});
		const uint256mSwhuZ4 = await TokenDispatchaWDox90.claimedOf.call(uintbIAANBE, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchQ5zAsFX = await TokenDispatch.new({from: accounts[0]});
		const uintZD9Owid = BigInt("253")
		const uintDN81VWA = BigInt("109")
		const uint256v3SCsPq = await TokenDispatchQ5zAsFX.balanceOf.call(uintZD9Owid, {from: accounts[1]});
		const uint256ldU0qhT = await TokenDispatchQ5zAsFX.claimedOf.call(uintDN81VWA, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchTPxSVWP = await TokenDispatch.new({from: accounts[2]});
		const uintCq3AR7 = BigInt("236")
		const uintq8E35js = BigInt("26")
		const uintpPapmkz = BigInt("1192")
		const addressAm8KtQA = accounts[4]
		const addressMk17nfr = accounts[0]
		const uintPclOHtr = BigInt("1783")
		const addressHqjFbkB = accounts[5]
		const addressHVOCVk = accounts[4]
		const uint256t0tLY7 = await TokenDispatchTPxSVWP.claimedOf.call(uintCq3AR7, {from: accounts[0]});
		const uint256UCzjQlM = await TokenDispatchTPxSVWP.claimedOf.call(uintq8E35js, {from: accounts[2]});
		const addressOr5u9r = await TokenDispatchTPxSVWP.approve.call(addressMk17nfr, addressAm8KtQA, uintpPapmkz, {from: accounts[0]});
		const addressAKqnk6Z = await TokenDispatchTPxSVWP.approve.call(addressHVOCVk, addressHqjFbkB, uintPclOHtr, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchK2L0YSk = await TokenDispatch.new({from: accounts[3]});
		const uintIy2j0V5 = BigInt("55")
		const uintYmlvVnb = BigInt("463")
		const addressyNaRsir = accounts[2]
		const addressXdfdW4X = accounts[1]
		const uintfTpL55 = BigInt("50")
		const uinta4pZ7DE = BigInt("10")
		const uintSKnzCXc = BigInt("233")
		const uint256Q76xjGp = await TokenDispatchK2L0YSk.nextClaimHeightOf.call(uintIy2j0V5, {from: accounts[3]});
		const addressV3L2gwh = await TokenDispatchK2L0YSk.approve.call(addressXdfdW4X, addressyNaRsir, uintYmlvVnb, {from: "0x0000000000000000000000000000000000000001"});
		const 
DU4AgSF = await TokenDispatchK2L0YSk.teamOf.call(uintfTpL55, {from: accounts[1]});
		const 
h8esMw0 = await TokenDispatchK2L0YSk.teamOf.call(uinta4pZ7DE, {from: accounts[0]});
		const uint256xxALL9h = await TokenDispatchK2L0YSk.nextClaimHeightOf.call(uintSKnzCXc, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfwIkuq = await TokenDispatch.new({from: accounts[1]});
		const uintN56RbDs = BigInt("59")
		const uintkiRYLpi = BigInt("203")
		const uintzL1Pxo = BigInt("225")
		const uints5ZvlVq = BigInt("236")
		const uintlbIa6Kt = BigInt("25")
		const uint8e1IlBNf = await TokenDispatchfwIkuq.claim.call(uintN56RbDs, {from: accounts[4]});
		const uint256Pddt7Hg = await TokenDispatchfwIkuq.claimedOf.call(uintkiRYLpi, {from: accounts[5]});
		const 
FULLcXi = await TokenDispatchfwIkuq.teamOf.call(uintzL1Pxo, {from: accounts[3]});
		const uint256W9v4ke5 = await TokenDispatchfwIkuq.nextClaimHeightOf.call(uints5ZvlVq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rZggD4Q = await TokenDispatchfwIkuq.claimedOf.call(uintlbIa6Kt, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchy2XA8Cu = await TokenDispatch.new({from: accounts[3]});
		const uintUzo1wC2 = BigInt("56")
		const uintmy1AF48 = BigInt("177")
		const uintX5LEEmu = BigInt("61")
		const uintivfUNl9 = BigInt("109")
		const 
CaWs8lC = await TokenDispatchy2XA8Cu.teamOf.call(uintUzo1wC2, {from: accounts[4]});
		const uint256TAX2cfh = await TokenDispatchy2XA8Cu.claimedOf.call(uintmy1AF48, {from: accounts[2]});
		const uint256iRnCYd9 = await TokenDispatchy2XA8Cu.balanceOf.call(uintX5LEEmu, {from: accounts[2]});
		const uint256l24P8H1 = await TokenDispatchy2XA8Cu.claimedOf.call(uintivfUNl9, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchQ5zAsFX = await TokenDispatch.new({from: accounts[0]});
		const uintbrXvSd8 = BigInt("834")
		const addressDzpn96 = accounts[5]
		const addressAli2epV = accounts[4]
		const uintshG5scX = BigInt("228")
		const uinthAxiTp = BigInt("1")
		const addresswFsS6ER = await TokenDispatchQ5zAsFX.approve.call(addressAli2epV, addressDzpn96, uintbrXvSd8, {from: "0x0000000000000000000000000000000000000001"});
		const uint8GGK2pb2 = await TokenDispatchQ5zAsFX.claim.call(uintshG5scX, {from: accounts[2]});
		const uint256v3SCsPq = await TokenDispatchQ5zAsFX.balanceOf.call(uinthAxiTp, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchQ5zAsFX = await TokenDispatch.new({from: accounts[0]});
		const uintGxQK9KX = BigInt("2043")
		const address4I0EKJ = accounts[0]
		const addressRmFgjdC = accounts[0]
		const uinttMkDeHY = BigInt("150")
		const addressxJVgkts = await TokenDispatchQ5zAsFX.approve.call(addressRmFgjdC, address4I0EKJ, uintGxQK9KX, {from: accounts[0]});
		const uint256gGq9CK = await TokenDispatchQ5zAsFX.nextClaimHeightOf.call(uinttMkDeHY, {from: accounts[3]});
	});
})