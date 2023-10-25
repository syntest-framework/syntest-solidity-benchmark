const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenK89WVYP = await ThriftToken.new({from: accounts[3]});
		const uintHT0zM8Q = BigInt("1880")
		const addressavSdaK = accounts[4]
		const addressYEPhSA = accounts[3]
		const addresscAReIzi = accounts[3]
		const addressGRwgYSr = accounts[2]
		const addressw2VJ0W = accounts[1]
		const uintgo4c0hl = BigInt("1952")
		const addressw9SMKE2 = accounts[4]
		const addressjHPKXTA = accounts[5]
		const uintYvQivq7 = BigInt("553")
		const addressYPPlaFk = accounts[0]
//		const bool5bSkog = await ThriftTokenK89WVYP.transferFrom.call(addressYEPhSA, addressavSdaK, uintHT0zM8Q, {from: accounts[4]});
//		const uint256AWehu9D = await ThriftTokenK89WVYP.balanceOf.call(addresscAReIzi, {from: accounts[3]});
//		const addressVzc6ST5 = await ThriftTokenK89WVYP.transferOwnership.call(addressGRwgYSr, {from: accounts[1]});
//		const addressjXgmO9O = await ThriftTokenK89WVYP.transferOwnership.call(addressw2VJ0W, {from: accounts[3]});
//		const boolQkyiYo1 = await ThriftTokenK89WVYP.transferFrom.call(addressjHPKXTA, addressw9SMKE2, uintgo4c0hl, {from: accounts[0]});
//		const booltIRMieZ = await ThriftTokenK89WVYP.transfer.call(addressYPPlaFk, uintYvQivq7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokenK89WVYP.transferFrom.call(addressYEPhSA, addressavSdaK, uintHT0zM8Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenFzrNegi = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHh1kSe6 = BigInt("1006")
		const addresstcupX95 = accounts[3]
		const addressNTc07eS = "0x0000000000000000000000000000000000000001"
		const addressAhtif87 = accounts[2]
		const uints8iK17z = BigInt("251")
		const addressYDKLSHk = accounts[2]
		const addresssy1bV7R = accounts[3]
		const uintQiBqvi3 = BigInt("204")
		const addressha5vJD1 = accounts[5]
		const boolqFfGEjF = await ThriftTokenFzrNegi.transferFrom.call(addressNTc07eS, addresstcupX95, uintHh1kSe6, {from: accounts[4]});
		const uint256BfkwXCJ = await ThriftTokenFzrNegi.balanceOf.call(addressAhtif87, {from: accounts[1]});
		const boolnN1Fxc = await ThriftTokenFzrNegi.decreaseApproval.call(addressYDKLSHk, uints8iK17z, {from: accounts[2]});
		const uint2568N9KtV = await ThriftTokenFzrNegi.transferableTokens.call(addresssy1bV7R, {from: accounts[0]});
		const boololdne1x = await ThriftTokenFzrNegi.approve.call(addressha5vJD1, uintQiBqvi3, {from: accounts[0]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenQJGSVf9 = await ThriftToken.new({from: accounts[1]});
		const uintJwVepI = BigInt("236")
		const addressielGbMa = accounts[4]
		const addresswiiyhw = accounts[0]
		const uintLXkcdqX = BigInt("253")
		const addressmHVd6lR = "0x0000000000000000000000000000000000000001"
		const boolz37EOV5 = await ThriftTokenQJGSVf9.increaseApproval.call(addressielGbMa, uintJwVepI, {from: "0x0000000000000000000000000000000000000001"});
//		const addressMR1KlNP = await ThriftTokenQJGSVf9.transferOwnership.call(addresswiiyhw, {from: accounts[2]});
//		const boolLTE5ffU = await ThriftTokenQJGSVf9.approve.call(addressmHVd6lR, uintLXkcdqX, {from: accounts[3]});

		assert.equal(boolz37EOV5, true)
		await expect(ThriftTokenQJGSVf9.transferOwnership.call(addresswiiyhw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenfQDKiLk = await ThriftToken.new({from: accounts[5]});
		const uintmoe2Np1 = BigInt("324")
		const addressqnsLazv = accounts[0]
		const uintVxXk3N8 = BigInt("1083")
		const addressraZOGB = accounts[0]
		const addressxn7GG0z = accounts[3]
		const addressnjk9sac = accounts[2]
		const uintWilSYmA = BigInt("449")
		const addressZYoVbLT = accounts[2]
		const boolOzi3DV = await ThriftTokenfQDKiLk.increaseApproval.call(addressqnsLazv, uintmoe2Np1, {from: accounts[5]});
//		const boolO6Q1kEX = await ThriftTokenfQDKiLk.transfer.call(addressraZOGB, uintVxXk3N8, {from: accounts[0]});
//		const uint256Ty1p6Le = await ThriftTokenfQDKiLk.balanceOf.call(addressxn7GG0z, {from: accounts[1]});
//		const uint256WoSnfzZ = await ThriftTokenfQDKiLk.balanceOf.call(addressnjk9sac, {from: "0x0000000000000000000000000000000000000001"});
//		const boolubOxu2p = await ThriftTokenfQDKiLk.approve.call(addressZYoVbLT, uintWilSYmA, {from: accounts[3]});

		assert.equal(boolOzi3DV, true)
		await expect(ThriftTokenfQDKiLk.transfer.call(addressraZOGB, uintVxXk3N8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenoCjyLy = await ThriftToken.new({from: accounts[3]});
		const uintdJTk572 = BigInt("907")
		const addressve62Aya = accounts[0]
		const uintLKOJ1X = BigInt("1323")
		const addressxmyB948 = accounts[0]
		const addressrVFidkW = accounts[1]
		const uintMCAUPcg = BigInt("337")
		const addressMtHlfYz = accounts[0]
		const addressh6MKHn7 = accounts[0]
		const addressYrLNF5W = accounts[0]
//		const boolIRkbCKY = await ThriftTokenoCjyLy.decreaseApproval.call(addressve62Aya, uintdJTk572, {from: accounts[0]});
//		const boolpbrKO1h = await ThriftTokenoCjyLy.transferFrom.call(addressrVFidkW, addressxmyB948, uintLKOJ1X, {from: accounts[2]});
//		const boolCQjxFj6 = await ThriftTokenoCjyLy.transfer.call(addressMtHlfYz, uintMCAUPcg, {from: accounts[3]});
//		const uint256zUhqtzN = await ThriftTokenoCjyLy.allowance.call(addressYrLNF5W, addressh6MKHn7, {from: accounts[0]});

		await expect(ThriftTokenoCjyLy.decreaseApproval.call(addressve62Aya, uintdJTk572, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokengkeegyC = await ThriftToken.new({from: accounts[2]});
		const addressRFdASRT = accounts[0]
		const addressnazE1Ew = accounts[4]
		const uintFF5g0l = BigInt("1323")
		const addressaSBLReE = "0x0000000000000000000000000000000000000001"
		const address9rNalE = accounts[3]
		const uint256VFPgpyw = await ThriftTokengkeegyC.allowance.call(addressnazE1Ew, addressRFdASRT, {from: accounts[1]});
//		const booltuATCqd = await ThriftTokengkeegyC.transferFrom.call(address9rNalE, addressaSBLReE, uintFF5g0l, {from: accounts[1]});

		assert.equal(uint256VFPgpyw, BigInt("0"))
		await expect(ThriftTokengkeegyC.transferFrom.call(address9rNalE, addressaSBLReE, uintFF5g0l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeng1n24PX = await ThriftToken.new({from: accounts[1]});
		const uintcdFZuEu = BigInt("882")
		const addressir0pn4x = accounts[2]
		const addresseqjRp8E = accounts[3]
		const addressfVgIlk = accounts[2]
		const uintpnVzuJR = BigInt("1594")
		const addresswoJbV2v = accounts[4]
		const addresstZ2A6Y = accounts[0]
//		const boolGRnu06J = await ThriftTokeng1n24PX.approve.call(addressir0pn4x, uintcdFZuEu, {from: accounts[2]});
//		const uint256T4gz2YK = await ThriftTokeng1n24PX.balanceOf.call(addresseqjRp8E, {from: accounts[3]});
//		const addressG0SYp7B = await ThriftTokeng1n24PX.transferOwnership.call(addressfVgIlk, {from: accounts[3]});
//		const boolyQHpCRR = await ThriftTokeng1n24PX.transferFrom.call(addresstZ2A6Y, addresswoJbV2v, uintpnVzuJR, {from: accounts[4]});

		await expect(ThriftTokeng1n24PX.approve.call(addressir0pn4x, uintcdFZuEu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeng1n24PX = await ThriftToken.new({from: accounts[1]});
		const uinta4xaCRy = BigInt("777")
		const addressJpllyNV = accounts[2]
		const addressb8nZbtt = accounts[4]
		const uintCZU9pj3 = BigInt("898")
		const addresscBKUbua = accounts[2]
		const addresszk1VLRP = accounts[0]
		const boola7jHaCC = await ThriftTokeng1n24PX.decreaseApproval.call(addressJpllyNV, uinta4xaCRy, {from: accounts[1]});
		const uint256T4gz2YK = await ThriftTokeng1n24PX.balanceOf.call(addressb8nZbtt, {from: accounts[3]});
//		const boolHSo41c = await ThriftTokeng1n24PX.transferFrom.call(addresszk1VLRP, addresscBKUbua, uintCZU9pj3, {from: accounts[0]});

		assert.equal(boola7jHaCC, true)
		assert.equal(uint256T4gz2YK, BigInt("0"))
		await expect(ThriftTokeng1n24PX.transferFrom.call(addresszk1VLRP, addresscBKUbua, uintCZU9pj3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})