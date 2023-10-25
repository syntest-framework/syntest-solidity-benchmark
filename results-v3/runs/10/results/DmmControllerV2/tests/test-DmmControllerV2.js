const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2bcWFL72 = await DmmControllerV2.new({from: accounts[4]});
		const addressDJ3gYW = accounts[1]
		const addressw5NfScb = accounts[0]
		const addressOP1eUn3 = accounts[0]
		const 
qEalLJl = await DmmControllerV2bcWFL72.transferOwnershipToNewController.call(addressDJ3gYW, {from: accounts[4]});
		const boolWn22yfn = await DmmControllerV2bcWFL72.paused.call({from: accounts[0]});
		const addressllsKSGJ = await DmmControllerV2bcWFL72.getDmmTokenForUnderlying.call(addressw5NfScb, {from: accounts[0]});
		const uintIDH5QVH = await DmmControllerV2bcWFL72.getInterestRateByUnderlyingTokenAddress.call(addressOP1eUn3, {from: accounts[3]});
		await DmmControllerV2bcWFL72.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresscUwu9BV = accounts[2]
		const addresspYSNsz = accounts[4]
		const addressLUVkZet = accounts[0]
		const addressYWXI8xT = "0x0000000000000000000000000000000000000001"
		const addresspQGKPdr = accounts[1]
		const addressYMks69g = accounts[4]
		const addressphjwYnQ = accounts[2]
		const addressN7qKcWP = accounts[0]
		const addresscD9jKGr = "0x0000000000000000000000000000000000000001"
		const uintIDZZwGQ = BigInt("897")
		const uintTNBKbbv = BigInt("1626")
		const addressp2MBNYB = accounts[5]
		const DmmControllerV2oTR9f4f = await DmmControllerV2.new(addresscUwu9BV, addresspYSNsz, addressLUVkZet, addressYWXI8xT, addresspQGKPdr, addressYMks69g, addressphjwYnQ, addressN7qKcWP, addresscD9jKGr, uintIDZZwGQ, uintTNBKbbv, addressp2MBNYB, {from: accounts[2]});
		await DmmControllerV2oTR9f4f.requireIsStakingPurchaser.call({from: accounts[4]});
		const addressR0fp0Rq = await DmmControllerV2oTR9f4f.owner.call({from: accounts[0]});
		await DmmControllerV2oTR9f4f.pause.call({from: accounts[3]});
		await DmmControllerV2oTR9f4f.onlyOwnerOrGuardian.call({from: accounts[5]});
		const uintPxUWzA9 = await DmmControllerV2oTR9f4f.getTotalCollateralization.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressew36BJq = accounts[1]
		const addressgkb3sCm = "0x0000000000000000000000000000000000000001"
		const addressiaeZGJz = accounts[0]
		const addressRq9ICCn = accounts[0]
		const address69Wais = accounts[5]
		const addressuen3r3c = accounts[3]
		const addressNcKAfiF = accounts[5]
		const addressHZwjlY = accounts[3]
		const addressJaf9GAr = accounts[1]
		const uintcF33mCb = BigInt("599")
		const uintRWUKZTn = BigInt("862")
		const addresskDxdJr = accounts[4]
		const DmmControllerV2AkDkRAa = await DmmControllerV2.new(addressew36BJq, addressgkb3sCm, addressiaeZGJz, addressRq9ICCn, address69Wais, addressuen3r3c, addressNcKAfiF, addressHZwjlY, addressJaf9GAr, uintcF33mCb, uintRWUKZTn, addresskDxdJr, {from: accounts[1]});
		const addresslmHxZNG = accounts[5]
		const addressV4xkqIK = await DmmControllerV2AkDkRAa.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresseM8fy7v = await DmmControllerV2AkDkRAa.setDmmTokenFactory.call(addresslmHxZNG, {from: accounts[2]});
		await DmmControllerV2AkDkRAa.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresstN021h = accounts[4]
		const addressRURqO9k = accounts[1]
		const addresspxP526b = accounts[5]
		const address8ILphL = accounts[0]
		const addressMDF46kY = accounts[4]
		const addressWvAU4n = accounts[3]
		const addressvklPH5t = accounts[1]
		const addressW8WRScR = "0x0000000000000000000000000000000000000001"
		const addressHw87OS6 = accounts[1]
		const uintEHOtdPn = BigInt("1836")
		const uinthA62ECz = BigInt("2017")
		const addressWzKceQ9 = accounts[2]
		const DmmControllerV2rtzzMfe = await DmmControllerV2.new(addresstN021h, addressRURqO9k, addresspxP526b, address8ILphL, addressMDF46kY, addressWvAU4n, addressvklPH5t, addressW8WRScR, addressHw87OS6, uintEHOtdPn, uinthA62ECz, addressWzKceQ9, {from: accounts[1]});
		const uintGdi4m7k = BigInt("1416")
		const uintJtJlr8G = BigInt("750")
		const uintDyMEH9g = BigInt("1055")
		const 
UN6XyD4 = await DmmControllerV2rtzzMfe.increaseTotalSupply.call(uintJtJlr8G, uintGdi4m7k, {from: accounts[4]});
		const addressFUFOhS = await DmmControllerV2rtzzMfe.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintdnW93MU = await DmmControllerV2rtzzMfe.requireIsNftOwner.call(uintDyMEH9g, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressS240yXm = accounts[2]
		const addresswyE1Cif = accounts[4]
		const addresszuj5XlJ = accounts[5]
		const addressL8yKdR4 = accounts[5]
		const addresstlyYVbr = accounts[0]
		const addressEDEsZaA = accounts[4]
		const addressJksXbQS = accounts[3]
		const addressazpiP9c = accounts[2]
		const addressU6WTuK7 = accounts[2]
		const uintD9sWAgF = BigInt("1947")
		const uintgYCXvxh = BigInt("399")
		const addressOt4EqvP = accounts[2]
		const DmmControllerV2eG0Xv1W = await DmmControllerV2.new(addressS240yXm, addresswyE1Cif, addresszuj5XlJ, addressL8yKdR4, addresstlyYVbr, addressEDEsZaA, addressJksXbQS, addressazpiP9c, addressU6WTuK7, uintD9sWAgF, uintgYCXvxh, addressOt4EqvP, {from: accounts[1]});
		const uintmo6Zgg5 = BigInt("573")
		const uintZ7tbt0 = BigInt("438")
		const uintucId8G = BigInt("389")
		const uintvRvcrsF = BigInt("145")
		const stringZoCElv5 = "tQyBtDLne4l8Wsioqu2W14jT1g2dE1"
		const stringj3rAVVv = "jUMgmPzVUFm7JKnWxB32drY0SwsV45nHTjEURZqw2RQaFdaeSWyJo7xSZULtOIgoRn6b07URndYBLZ3f"
		const addressTyhDYLT = accounts[0]
		const addressDoAIuQJ = accounts[5]
		const 
u4YZ7E4 = await DmmControllerV2eG0Xv1W.addMarket.call(addressTyhDYLT, stringj3rAVVv, stringZoCElv5, uintvRvcrsF, uintucId8G, uintZ7tbt0, uintmo6Zgg5, {from: accounts[1]});
		const boolBMCH5iC = await DmmControllerV2eG0Xv1W.paused.call({from: accounts[2]});
		const addressdTynnLX = await DmmControllerV2eG0Xv1W.setUnderlyingTokenValuator.call(addressDoAIuQJ, {from: accounts[2]});
		await DmmControllerV2eG0Xv1W.whenNotPaused.call({from: accounts[4]});
	});
})