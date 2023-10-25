const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinK89WVYP = await EdenCoin.new({from: accounts[3]});
		const uintS4Htfnn = BigInt("1819")
		const addressvbSkogx = "0x0000000000000000000000000000000000000001"
		const uintjGYEPhS = BigInt("19")
		const addressTm3KGTw = accounts[1]
		const addressMehu9Dm = accounts[0]
		const uintVzc6ST5 = BigInt("786")
		const addressGRwgYSr = accounts[2]
		const addressw2VJ0W = accounts[1]
		const addressjFJp7xz = accounts[0]
		const uintr69SMKE = BigInt("1815")
		const addressjHPKXTA = accounts[5]
		const uintYvQivq7 = BigInt("553")
		const addressYPPlaFk = accounts[0]
		const boolahjgAyH = await EdenCoinK89WVYP.decreaseApproval.call(addressvbSkogx, uintS4Htfnn, {from: accounts[1]});
		const booltBavSda = await EdenCoinK89WVYP.transferFrom.call(addressMehu9Dm, addressTm3KGTw, uintjGYEPhS, {from: accounts[0]});
		const boolQrxGKKt = await EdenCoinK89WVYP.increaseApproval.call(addressGRwgYSr, uintVzc6ST5, {from: accounts[1]});
		const uint256jXgmO9O = await EdenCoinK89WVYP.allowance.call(addressjFJp7xz, addressw2VJ0W, {from: accounts[3]});
		const boolgo4c0hl = await EdenCoinK89WVYP.approve.call(addressjHPKXTA, uintr69SMKE, {from: accounts[5]});
		const booltIRMieZ = await EdenCoinK89WVYP.approve.call(addressYPPlaFk, uintYvQivq7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolahjgAyH, true)
		await expect(EdenCoinK89WVYP.transferFrom.call(addressMehu9Dm, addressTm3KGTw, uintjGYEPhS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinA9ra5vJ = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressT6lRVXk = accounts[1]
		const addressFpWJBwH = accounts[2]
		const uintipOybn = BigInt("2031")
		const addressQRq4BYB = "0x0000000000000000000000000000000000000001"
		const uintHh1kSe6 = BigInt("1006")
		const addresstcupX95 = accounts[3]
		const uintBfkwXCJ = BigInt("630")
		const addressAhtif87 = accounts[2]
		const addressZUKvcbQ = accounts[3]
		const addressYDKLSHk = accounts[2]
		const addressMQdAh9V = accounts[3]
		const addressQlNBeT9 = accounts[3]
		const addressbdne1xP = accounts[4]
		const uint256SdqXHVT = await EdenCoinA9ra5vJ.allowance.call(addressFpWJBwH, addressT6lRVXk, {from: "0x0000000000000000000000000000000000000001"});
		const boolbuZaJG = await EdenCoinA9ra5vJ.approve.call(addressQRq4BYB, uintipOybn, {from: accounts[1]});
		const boolqFfGEjF = await EdenCoinA9ra5vJ.transfer.call(addresstcupX95, uintHh1kSe6, {from: accounts[4]});
		const bool1gBbEa = await EdenCoinA9ra5vJ.transferFrom.call(addressZUKvcbQ, addressAhtif87, uintBfkwXCJ, {from: accounts[3]});
		const uint256s8iK17z = await EdenCoinA9ra5vJ.allowance.call(addressMQdAh9V, addressYDKLSHk, {from: accounts[0]});
		const uint256b2y1bV7 = await EdenCoinA9ra5vJ.allowance.call(addressbdne1xP, addressQlNBeT9, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinVRli4RT = await EdenCoin.new({from: accounts[1]});
		const addressxEfDBlE = accounts[5]
		const addresslNlkgLw = accounts[2]
		const uintg3kEfdp = BigInt("97")
		const addressLQ5qHo = accounts[4]
		const uintpaYtGIj = BigInt("964")
		const addresst7EOV5A = accounts[5]
		const addresswVepIH = "0x0000000000000000000000000000000000000001"
		const uint256dxklMpV = await EdenCoinVRli4RT.allowance.call(addresslNlkgLw, addressxEfDBlE, {from: accounts[4]});
		const booldwfnglH = await EdenCoinVRli4RT.approve.call(addressLQ5qHo, uintg3kEfdp, {from: accounts[0]});
		const boolRueVquX = await EdenCoinVRli4RT.transferFrom.call(addresswVepIH, addresst7EOV5A, uintpaYtGIj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldwfnglH, true)
		assert.equal(uint256dxklMpV, BigInt("0"))
		await expect(EdenCoinVRli4RT.transferFrom.call(addresswVepIH, addresst7EOV5A, uintpaYtGIj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZyLyrZb = await EdenCoin.new({from: accounts[1]});
		const uintw2AyanJ = BigInt("635")
		const addressXNeVJ5e = accounts[1]
		const uintoB948JL = BigInt("339")
		const addressYdkWG7m = accounts[0]
		const uintKPcgKMQ = BigInt("1167")
		const addressbfYzWCA = accounts[0]
		const uintCKHn79U = BigInt("1099")
		const addressDF5WLr6 = accounts[0]
		const boola572bSR = await EdenCoinZyLyrZb.approve.call(addressXNeVJ5e, uintw2AyanJ, {from: accounts[3]});
		const boolEJ1Xozb = await EdenCoinZyLyrZb.transfer.call(addressYdkWG7m, uintoB948JL, {from: accounts[3]});
		const boolnFj6rTz = await EdenCoinZyLyrZb.approve.call(addressbfYzWCA, uintKPcgKMQ, {from: accounts[0]});
		const boolgtzNHHw = await EdenCoinZyLyrZb.approve.call(addressDF5WLr6, uintCKHn79U, {from: accounts[4]});

		assert.equal(boola572bSR, true)
		await expect(EdenCoinZyLyrZb.transfer.call(addressYdkWG7m, uintoB948JL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin9osb4b = await EdenCoin.new({from: accounts[1]});
		const uintTMJiZ5x = BigInt("1893")
		const addresszFs9m3f = accounts[4]
		const uintfI68XE9 = BigInt("2015")
		const addressYxiLqov = accounts[1]
		const uintVn7pms = BigInt("1846")
		const addressxALorn8 = accounts[0]
		const addresszLRFRvy = accounts[4]
		const addressfmPv0Tv = accounts[4]
		const addressD0FwDUS = "0x0000000000000000000000000000000000000001"
		const boolWxVH2w6 = await EdenCoin9osb4b.approve.call(addresszFs9m3f, uintTMJiZ5x, {from: "0x0000000000000000000000000000000000000001"});
		const boolypxLuoB = await EdenCoin9osb4b.increaseApproval.call(addressYxiLqov, uintfI68XE9, {from: accounts[4]});
		const boolEypczfk = await EdenCoin9osb4b.decreaseApproval.call(addressxALorn8, uintVn7pms, {from: accounts[0]});
		const uint256P7wv84f = await EdenCoin9osb4b.allowance.call(addressfmPv0Tv, addresszLRFRvy, {from: accounts[1]});
		const uint2566iRH39 = await EdenCoin9osb4b.balanceOf.call(addressD0FwDUS, {from: accounts[4]});

		assert.equal(boolEypczfk, true)
		assert.equal(boolWxVH2w6, true)
		assert.equal(boolypxLuoB, true)
		assert.equal(uint2566iRH39, BigInt("0"))
		assert.equal(uint256P7wv84f, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZXIiiDZ = await EdenCoin.new({from: accounts[3]});
		const addressMoOlFvA = accounts[4]
		const addressxpWfyh = accounts[3]
		const uintYRuTcVv = BigInt("0")
		const addressuQezRvL = "0x0000000000000000000000000000000000000001"
		const uintXl8p7Gb = BigInt("1407")
		const addressYrRH8Y4 = accounts[0]
		const uintAsjR28P = BigInt("11")
		const address81NauL = "0x0000000000000000000000000000000000000001"
		const addressSFwLp7U = accounts[3]
		const uint256EyiAmpi = await EdenCoinZXIiiDZ.allowance.call(addressxpWfyh, addressMoOlFvA, {from: accounts[2]});
		const boolsgNIDzl = await EdenCoinZXIiiDZ.decreaseApproval.call(addressuQezRvL, uintYRuTcVv, {from: accounts[0]});
		const boolIVIzsRK = await EdenCoinZXIiiDZ.transfer.call(addressYrRH8Y4, uintXl8p7Gb, {from: accounts[2]});
		const boolMvJMtXt = await EdenCoinZXIiiDZ.transferFrom.call(addressSFwLp7U, address81NauL, uintAsjR28P, {from: accounts[0]});

		assert.equal(boolsgNIDzl, true)
		assert.equal(uint256EyiAmpi, BigInt("0"))
		await expect(EdenCoinZXIiiDZ.transfer.call(addressYrRH8Y4, uintXl8p7Gb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})