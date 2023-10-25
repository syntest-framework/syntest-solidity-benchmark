const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractZimErca = await HTDD_contract.new({from: accounts[5]});
		const uintroeufUB = BigInt("69")
		const address9zwdwu = accounts[3]
		const addressaydJGZm = accounts[4]
		const uintnipTBMk = BigInt("617")
		const addressWZnEYp = accounts[1]
		const uintgtkXxWY = BigInt("931")
		const addressBir5GL5 = accounts[2]
		const uintO96z8SQ = BigInt("1504")
		const addressuW5yauf = accounts[0]
		const uintszJEwl6 = BigInt("1826")
		const addressDSuCb9E = accounts[0]
		const boolBid81Cw = await HTDD_contractZimErca.transferFrom.call(addressaydJGZm, address9zwdwu, uintroeufUB, {from: accounts[4]});
		const boolBIj6YpR = await HTDD_contractZimErca.approve.call(addressWZnEYp, uintnipTBMk, {from: accounts[5]});
		const boolxZi3O4N = await HTDD_contractZimErca.approve.call(addressBir5GL5, uintgtkXxWY, {from: accounts[1]});
		const boolyuPCLhY = await HTDD_contractZimErca.approve.call(addressuW5yauf, uintO96z8SQ, {from: accounts[4]});
		const booltgtt4Gz = await HTDD_contractZimErca.transfer.call(addressDSuCb9E, uintszJEwl6, {from: accounts[5]});

		await expect(HTDD_contractZimErca.transferFrom.call(addressaydJGZm, address9zwdwu, uintroeufUB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractbAvc6iL = await HTDD_contract.new({from: accounts[1]});
		const uintkvVJmy1 = BigInt("582")
		const addresseyfFe93 = accounts[0]
		const uintqiIcEn1 = BigInt("50")
		const addressj8ObEoc = accounts[1]
		const uintSPEY4s9 = BigInt("359")
		const addressh4youa = accounts[3]
		const uintm0xNjsx = BigInt("1641")
		const addressyCobFp9 = accounts[0]
		const uintNGN5nr4 = BigInt("1666")
		const addressHHD2owm = accounts[0]
		const uintqToDiO = BigInt("14")
		const addressnbdbkBZ = "0x0000000000000000000000000000000000000001"
		const booluaTHdAs = await HTDD_contractbAvc6iL.approve.call(addresseyfFe93, uintkvVJmy1, {from: accounts[0]});
		const boolm9ndsHh = await HTDD_contractbAvc6iL.approve.call(addressj8ObEoc, uintqiIcEn1, {from: accounts[1]});
		const booloP69bDz = await HTDD_contractbAvc6iL.approve.call(addressh4youa, uintSPEY4s9, {from: accounts[0]});
		const boolmq3BWo = await HTDD_contractbAvc6iL.approve.call(addressyCobFp9, uintm0xNjsx, {from: accounts[2]});
		const boolAs4zx1m = await HTDD_contractbAvc6iL.transfer.call(addressHHD2owm, uintNGN5nr4, {from: accounts[5]});
		const boolSmta7ih = await HTDD_contractbAvc6iL.approve.call(addressnbdbkBZ, uintqToDiO, {from: accounts[1]});

		assert.equal(boolm9ndsHh, true)
		assert.equal(boolmq3BWo, true)
		assert.equal(booloP69bDz, true)
		assert.equal(booluaTHdAs, true)
		await expect(HTDD_contractbAvc6iL.transfer.call(addressHHD2owm, uintNGN5nr4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractqltlkcq = await HTDD_contract.new({from: accounts[5]});
		const addressxPvt8hM = "0x0000000000000000000000000000000000000001"
		const addressF1AcEfI = "0x0000000000000000000000000000000000000001"
		const uintc48mAVP = BigInt("1453")
		const addressPvKhNot = accounts[2]
		const uint256LNTq3Tt = await HTDD_contractqltlkcq.allowance.call(addressF1AcEfI, addressxPvt8hM, {from: accounts[4]});
		const boolMmspWVx = await HTDD_contractqltlkcq.approve.call(addressPvKhNot, uintc48mAVP, {from: accounts[1]});

		assert.equal(boolMmspWVx, true)
		assert.equal(uint256LNTq3Tt, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractH5cng23 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsnRAg16 = BigInt("1405")
		const addressmnNyXAq = accounts[1]
		const uintOWKv0WA = BigInt("609")
		const addresszJkq2DD = accounts[3]
		const addressZuXZ2l6 = accounts[1]
		const uintDwB2BUk = BigInt("1082")
		const addressG0cDxyc = accounts[2]
		const boolwg0yAgc = await HTDD_contractH5cng23.transfer.call(addressmnNyXAq, uintsnRAg16, {from: accounts[3]});
		const boolrZGSI8h = await HTDD_contractH5cng23.transferFrom.call(addressZuXZ2l6, addresszJkq2DD, uintOWKv0WA, {from: accounts[2]});
		const boolJ2txG9 = await HTDD_contractH5cng23.approve.call(addressG0cDxyc, uintDwB2BUk, {from: accounts[4]});
	});
})