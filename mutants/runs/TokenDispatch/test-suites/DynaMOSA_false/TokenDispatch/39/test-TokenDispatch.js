const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchWlUj7s7 = await TokenDispatch.new({from: accounts[0]});
		const uintrPaSxt = BigInt("99")
		const uinttV8LO8 = BigInt("1415")
		const addressOzIZTii = "0x0000000000000000000000000000000000000001"
		const addressZaQUe0C = accounts[1]
		const uint256aybErM = await TokenDispatchWlUj7s7.balanceOf.call(uintrPaSxt, {from: accounts[4]});
		const addressqV1NWi = await TokenDispatchWlUj7s7.approve.call(addressZaQUe0C, addressOzIZTii, uinttV8LO8, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchvpKuLWK = await TokenDispatch.new({from: accounts[4]});
		const uintlbJEzME = BigInt("67")
		const uintypmEgrK = BigInt("154")
		const uintw4KBWT6 = BigInt("253")
		const uint256Hr8yyM = await TokenDispatchvpKuLWK.claimedOf.call(uintlbJEzME, {from: accounts[0]});
		const 
yznWStz = await TokenDispatchvpKuLWK.teamOf.call(uintypmEgrK, {from: accounts[0]});
		const uint256RZbSznj = await TokenDispatchvpKuLWK.claimedOf.call(uintw4KBWT6, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchbhK3Lcv = await TokenDispatch.new({from: accounts[5]});
		const uintqKjSmH2 = BigInt("199")
		const uintqzqPelt = BigInt("92")
		const uintUzZGmhJ = BigInt("186")
		const uintWNA7y3P = BigInt("55")
		const uintVPsyEyx = BigInt("15")
		const uint8CKvZFEQ = await TokenDispatchbhK3Lcv.claim.call(uintqKjSmH2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gVeiHdB = await TokenDispatchbhK3Lcv.claimedOf.call(uintqzqPelt, {from: accounts[1]});
		const 
ehTohNS = await TokenDispatchbhK3Lcv.teamOf.call(uintUzZGmhJ, {from: accounts[2]});
		const 
fQUdgTl = await TokenDispatchbhK3Lcv.teamOf.call(uintWNA7y3P, {from: accounts[0]});
		const uint256qoPTs8A = await TokenDispatchbhK3Lcv.claimedOf.call(uintVPsyEyx, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchbccYLOY = await TokenDispatch.new({from: accounts[1]});
		const uintSBrQTf7 = BigInt("94")
		const uintJ6W1EgE = BigInt("1647")
		const addressMONj3a = accounts[5]
		const addresszCvy7UO = accounts[5]
		const uint256RUObmXX = await TokenDispatchbccYLOY.nextClaimHeightOf.call(uintSBrQTf7, {from: accounts[2]});
		const addressSEucyXo = await TokenDispatchbccYLOY.approve.call(addresszCvy7UO, addressMONj3a, uintJ6W1EgE, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchdqL0mRE = await TokenDispatch.new({from: accounts[0]});
		const addresspAhI6Zz = "0x0000000000000000000000000000000000000001"
		const addresshpHi6Pt = accounts[2]
		const uint2tg4J2 = BigInt("225")
		const uintlF2aP5r = BigInt("1965")
		const addressiBc1Xna = accounts[5]
		const addressNPlRFE = accounts[3]
		const uintpgLgbo5 = BigInt("175")
		const uinthzlZU0v = BigInt("234")
		const uint256xIe8XgE = await TokenDispatchdqL0mRE.updateTeam.call(uint2tg4J2, addresshpHi6Pt, addresspAhI6Zz, {from: "0x0000000000000000000000000000000000000001"});
		const uintOXWQYWJ = await TokenDispatchdqL0mRE.signTransaction.call(uintlF2aP5r, {from: accounts[3]});
		const uint256n1jcFEy = await TokenDispatchdqL0mRE.updateTeam.call(uintpgLgbo5, addressNPlRFE, addressiBc1Xna, {from: accounts[4]});
		const uint256cvlcx6 = await TokenDispatchdqL0mRE.nextClaimHeightOf.call(uinthzlZU0v, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchTArvoPp = await TokenDispatch.new({from: accounts[0]});
		const uintSRFj5yT = BigInt("998")
		const addressDeam6cQ = accounts[1]
		const addressCJI79Wv = accounts[2]
		const uintFd1skFM = BigInt("198")
		const uintfrEA45Z = BigInt("202")
		const uintIG6cgUU = BigInt("113")
		const addressQLl4ePQ = accounts[2]
		const addressOkaQidt = accounts[0]
		const uint5YNdwv = BigInt("200")
		const addressw4pJAqb = await TokenDispatchTArvoPp.approve.call(addressCJI79Wv, addressDeam6cQ, uintSRFj5yT, {from: accounts[3]});
		const 
Nxux1Rn = await TokenDispatchTArvoPp.teamOf.call(uintFd1skFM, {from: accounts[2]});
		const 
gelCfvC = await TokenDispatchTArvoPp.teamOf.call(uintfrEA45Z, {from: accounts[0]});
		const uint8Ax40mQF = await TokenDispatchTArvoPp.claim.call(uintIG6cgUU, {from: accounts[4]});
		const uint256m5ShDrR = await TokenDispatchTArvoPp.updateTeam.call(uint5YNdwv, addressOkaQidt, addressQLl4ePQ, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchcs2GSVw = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlchkKa7 = BigInt("190")
		const addressQ2SOPP = accounts[5]
		const addressvpeAQ6L = accounts[2]
		const uintPkVflCq = BigInt("121")
		const uintlGxMl8 = BigInt("85")
		const uint256FT6Xh0 = await TokenDispatchcs2GSVw.balanceOf.call(uintlchkKa7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256htumbgx = await TokenDispatchcs2GSVw.updateTeam.call(uintPkVflCq, addressvpeAQ6L, addressQ2SOPP, {from: accounts[2]});
		const uint8gKJ7iIh = await TokenDispatchcs2GSVw.claim.call(uintlGxMl8, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchw1N3ghk = await TokenDispatch.new({from: accounts[2]});
		const uintY2XWMfG = BigInt("248")
		const uintbRW03B5 = BigInt("238")
		const uintapdki7a = BigInt("195")
		const uintMalwrRy = BigInt("117")
		const uintFtpsAqw = BigInt("1565")
		const 
V3XJuDs = await TokenDispatchw1N3ghk.teamOf.call(uintY2XWMfG, {from: accounts[0]});
		const uint256dho6VnA = await TokenDispatchw1N3ghk.balanceOf.call(uintbRW03B5, {from: accounts[1]});
		const uint256YCQyx47 = await TokenDispatchw1N3ghk.balanceOf.call(uintapdki7a, {from: accounts[1]});
		const 
E0NDnbI = await TokenDispatchw1N3ghk.teamOf.call(uintMalwrRy, {from: accounts[0]});
		const uintevB3SD7 = await TokenDispatchw1N3ghk.signTransaction.call(uintFtpsAqw, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchbccYLOY = await TokenDispatch.new({from: accounts[1]});
		const uintfcyYr5P = BigInt("241")
		const addressv2WngU = accounts[4]
		const addressr2HakV1 = accounts[4]
		const uintZw3OWAf = BigInt("103")
		const addressUe6eMKt = await TokenDispatchbccYLOY.approve.call(addressr2HakV1, addressv2WngU, uintfcyYr5P, {from: accounts[1]});
		const uint8G7yXXsx = await TokenDispatchbccYLOY.claim.call(uintZw3OWAf, {from: accounts[2]});
	});
})