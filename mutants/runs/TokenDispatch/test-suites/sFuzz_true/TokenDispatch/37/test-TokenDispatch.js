const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchccQzn6f = await TokenDispatch.new({from: accounts[1]});
		const uintvUdh1in = BigInt("92")
		const addressqxFERot = accounts[1]
		const addressc9cRuBR = accounts[2]
		const uintyIIiUbn = BigInt("145")
		const uintJ9KyJO = BigInt("152")
		const uintHZH2Hd = BigInt("160")
		const uintVLsrobo = BigInt("749")
		const uint256wlDpPjb = await TokenDispatchccQzn6f.claimedOf.call(uintvUdh1in, {from: accounts[0]});
		const uint256RIDmRL = await TokenDispatchccQzn6f.updateTeam.call(uintyIIiUbn, addressc9cRuBR, addressqxFERot, {from: accounts[2]});
		const uint256Y8ZrUfa = await TokenDispatchccQzn6f.claimedOf.call(uintJ9KyJO, {from: accounts[2]});
		const uint256MFpd9ot = await TokenDispatchccQzn6f.claimedOf.call(uintHZH2Hd, {from: accounts[4]});
		const uintopo27X = await TokenDispatchccQzn6f.signTransaction.call(uintVLsrobo, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatch1ArsDz = await TokenDispatch.new({from: accounts[2]});
		const uintis5z7Iu = BigInt("295")
		const addressYoGT1fp = accounts[1]
		const addressBmuhT8B = accounts[2]
		const uintYXqlMhD = BigInt("670")
		const addressKjTKLNL = accounts[5]
		const addressYeDVrCp = accounts[5]
		const uintgM0nGip = BigInt("26")
		const uintx9TXJ7k = BigInt("36")
		const addresshSfwi7O = await TokenDispatch1ArsDz.approve.call(addressBmuhT8B, addressYoGT1fp, uintis5z7Iu, {from: accounts[0]});
		const addressqZCzIv2 = await TokenDispatch1ArsDz.approve.call(addressYeDVrCp, addressKjTKLNL, uintYXqlMhD, {from: accounts[1]});
		const uint256IEtuoqM = await TokenDispatch1ArsDz.claimedOf.call(uintgM0nGip, {from: accounts[3]});
		const uint256EDY9d2h = await TokenDispatch1ArsDz.nextClaimHeightOf.call(uintx9TXJ7k, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchZp7FOn = await TokenDispatch.new({from: accounts[3]});
		const uintyhZO3f = BigInt("1632")
		const uintONiBApU = BigInt("234")
		const uintLYybIa = BigInt("21")
		const uintynrUFl9 = BigInt("50")
		const uintZih9y10 = await TokenDispatchZp7FOn.signTransaction.call(uintyhZO3f, {from: accounts[1]});
		const 
VWUdfA5 = await TokenDispatchZp7FOn.teamOf.call(uintONiBApU, {from: accounts[4]});
		const uint8w11KMFl = await TokenDispatchZp7FOn.claim.call(uintLYybIa, {from: accounts[3]});
		const uint8xdnVJFn = await TokenDispatchZp7FOn.claim.call(uintynrUFl9, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchpXhIGcm = await TokenDispatch.new({from: accounts[4]});
		const uintTBjiGiW = BigInt("38")
		const uintlb8mC6r = BigInt("21")
		const uintNs4tPhE = BigInt("218")
		const uintilmybF4 = BigInt("226")
		const addressmSOJgVD = accounts[3]
		const addressesVxIZe = accounts[1]
		const uintUmdEPjF = BigInt("254")
		const 
JvAzg0X = await TokenDispatchpXhIGcm.teamOf.call(uintTBjiGiW, {from: accounts[4]});
		const uint256n63Bebw = await TokenDispatchpXhIGcm.nextClaimHeightOf.call(uintlb8mC6r, {from: accounts[2]});
		const uint256JMWV8yQ = await TokenDispatchpXhIGcm.nextClaimHeightOf.call(uintNs4tPhE, {from: accounts[2]});
		const uint256MlHuSns = await TokenDispatchpXhIGcm.claimedOf.call(uintilmybF4, {from: accounts[0]});
		const uint256WoeFBjn = await TokenDispatchpXhIGcm.updateTeam.call(uintUmdEPjF, addressesVxIZe, addressmSOJgVD, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchXF7TV6a = await TokenDispatch.new({from: accounts[5]});
		const uintsOF8qxq = BigInt("58")
		const uintieLV3Bz = BigInt("71")
		const addressHDLynhd = accounts[0]
		const addressxYPgoSA = accounts[4]
		const uintNQM4Gn = BigInt("144")
		const uintPbAyuod = BigInt("93")
		const uint8AtYW4yW = await TokenDispatchXF7TV6a.claim.call(uintsOF8qxq, {from: accounts[4]});
		const uint8TlefEbp = await TokenDispatchXF7TV6a.claim.call(uintieLV3Bz, {from: accounts[0]});
		const uint256EGaCXk = await TokenDispatchXF7TV6a.updateTeam.call(uintNQM4Gn, addressxYPgoSA, addressHDLynhd, {from: accounts[4]});
		const uint256IJC2l7T = await TokenDispatchXF7TV6a.balanceOf.call(uintPbAyuod, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchpXhIGcm = await TokenDispatch.new({from: accounts[4]});
		const uintDOVWXT9 = BigInt("126")
		const uintzRLVvHV = BigInt("38")
		const uintfmzoxyH = BigInt("21")
		const uintwlOcAiB = BigInt("218")
		const uinthIjy8Oc = BigInt("226")
		const addressx3xLL94 = accounts[3]
		const addressKwJiRdv = accounts[1]
		const uintsNLMOGg = BigInt("254")
		const uint256woMHRYI = await TokenDispatchpXhIGcm.nextClaimHeightOf.call(uintDOVWXT9, {from: "0x0000000000000000000000000000000000000001"});
		const 
JvAzg0X = await TokenDispatchpXhIGcm.teamOf.call(uintzRLVvHV, {from: accounts[4]});
		const uint256n63Bebw = await TokenDispatchpXhIGcm.nextClaimHeightOf.call(uintfmzoxyH, {from: accounts[2]});
		const uint256JMWV8yQ = await TokenDispatchpXhIGcm.nextClaimHeightOf.call(uintwlOcAiB, {from: accounts[2]});
		const uint256MlHuSns = await TokenDispatchpXhIGcm.claimedOf.call(uinthIjy8Oc, {from: accounts[0]});
		const uint256WoeFBjn = await TokenDispatchpXhIGcm.updateTeam.call(uintsNLMOGg, addressKwJiRdv, addressx3xLL94, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchXF7TV6a = await TokenDispatch.new({from: accounts[5]});
		const uintuUOLpYB = BigInt("225")
		const uint256IJC2l7T = await TokenDispatchXF7TV6a.balanceOf.call(uintuUOLpYB, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchVhR7zW6 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintW18QWHu = BigInt("150")
		const uintZT2AdjA = BigInt("45")
		const uinthCE3JAu = BigInt("180")
		const 
mwMAz5e = await TokenDispatchVhR7zW6.teamOf.call(uintW18QWHu, {from: accounts[4]});
		const uint256txbyJgS = await TokenDispatchVhR7zW6.claimedOf.call(uintZT2AdjA, {from: accounts[3]});
		const 
PvRW8Cl = await TokenDispatchVhR7zW6.teamOf.call(uinthCE3JAu, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchpXhIGcm = await TokenDispatch.new({from: accounts[4]});
		const uint2RRLH5 = BigInt("546")
		const addressXpvleFO = accounts[4]
		const addressdIUJcxu = "0x0000000000000000000000000000000000000001"
		const uintCDdpCwi = BigInt("0")
		const addressj1ZHN0F = await TokenDispatchpXhIGcm.approve.call(addressdIUJcxu, addressXpvleFO, uint2RRLH5, {from: accounts[4]});
		const 
JvAzg0X = await TokenDispatchpXhIGcm.teamOf.call(uintCDdpCwi, {from: accounts[4]});
	});
})