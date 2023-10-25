const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITiqkTCx7 = await RIT.new({from: accounts[3]});
		const addressDWPSWF = accounts[2]
		const addressRArunlA = accounts[4]
		const uintT7H3hUx = BigInt("1342")
		const addressPLmBHmA = accounts[4]
		const addressKvkvIib = accounts[3]
		const uintw6r1K9T = BigInt("1164")
		const addressuTMzYHk = accounts[2]
		const addressaGajUQ = accounts[0]
		const addresswseGi7u = accounts[4]
		const uint256QQfLe0Y = await RITiqkTCx7.totalSupply.call({from: accounts[2]});
		const stringtRrVzgy = await RITiqkTCx7.symbol.call({from: accounts[3]});
		const uint256l3MEcZU = await RITiqkTCx7.allowance.call(addressRArunlA, addressDWPSWF, {from: accounts[1]});
//		const boolddNHTke = await RITiqkTCx7.transferFrom.call(addressKvkvIib, addressPLmBHmA, uintT7H3hUx, {from: accounts[2]});
//		const boolZWxVnjG = await RITiqkTCx7.transferFrom.call(addressaGajUQ, addressuTMzYHk, uintw6r1K9T, {from: accounts[4]});
//		const uint256FuprPn = await RITiqkTCx7.balanceOf.call(addresswseGi7u, {from: accounts[0]});

		assert.equal(stringtRrVzgy, "RIT 2.0")
		assert.equal(uint256QQfLe0Y, BigInt("500000000000000000000000000"))
		assert.equal(uint256l3MEcZU, BigInt("0"))
		await expect(RITiqkTCx7.transferFrom.call(addressKvkvIib, addressPLmBHmA, uintT7H3hUx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuhGchV = await RIT.new({from: accounts[4]});
		const uintgEsecpJ = BigInt("1391")
		const addresshtHzFt = accounts[4]
		const stringXwtQ2Iz = await RITuhGchV.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolL6jAFj5 = await RITuhGchV.increaseAllowance.call(addresshtHzFt, uintgEsecpJ, {from: accounts[3]});

		assert.equal(boolL6jAFj5, true)
		assert.equal(stringXwtQ2Iz, "Real Estate Investment Token")
	});

	it('test for RIT', async () => {
		const RITVurefPT = await RIT.new({from: accounts[0]});
		const addressQLanSJh = accounts[4]
		const uint24vggL = BigInt("372")
		const addressSsMF69s = accounts[3]
		const addressBqvsZQb = accounts[0]
		const uint256iFwXg77 = await RITVurefPT.balanceOf.call(addressQLanSJh, {from: accounts[2]});
//		const boolXFhrm3o = await RITVurefPT.decreaseAllowance.call(addressSsMF69s, uint24vggL, {from: accounts[1]});
//		const uint8a7TW29W = await RITVurefPT.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HgzDwuM = await RITVurefPT.balanceOf.call(addressBqvsZQb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iFwXg77, BigInt("0"))
		await expect(RITVurefPT.decreaseAllowance.call(addressSsMF69s, uint24vggL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITTn0zIsO = await RIT.new({from: accounts[1]});
		const uintCv849Ul = BigInt("882")
		const addressbSWHURB = accounts[0]
		const addressQJDNE1 = accounts[0]
		const addressCafLEDu = accounts[0]
		const uintF5nLPiA = BigInt("1009")
		const addressbvlQmfw = accounts[2]
		const boolOGEqqQF = await RITTn0zIsO.increaseAllowance.call(addressbSWHURB, uintCv849Ul, {from: accounts[1]});
		const uint256BzmRCXT = await RITTn0zIsO.allowance.call(addressCafLEDu, addressQJDNE1, {from: accounts[0]});
		const booluBPNXdk = await RITTn0zIsO.approve.call(addressbvlQmfw, uintF5nLPiA, {from: accounts[2]});

		assert.equal(boolOGEqqQF, true)
		assert.equal(booluBPNXdk, true)
		assert.equal(uint256BzmRCXT, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITLAc8Kn5 = await RIT.new({from: accounts[0]});
		const uintnn1k2bf = BigInt("1280")
		const addressxpHrEgJ = accounts[3]
		const uintjQPXfNS = BigInt("949")
		const addressknj3dgW = accounts[1]
		const uintYxpf93 = BigInt("891")
		const addressMPWL7dr = accounts[3]
		const boolqWYp3ca = await RITLAc8Kn5.increaseAllowance.call(addressxpHrEgJ, uintnn1k2bf, {from: accounts[0]});
//		const uint256XxoxWyG = await RITLAc8Kn5._burn.call(uintjQPXfNS, {from: accounts[4]});
//		const uint8nbo4Qo = await RITLAc8Kn5.decimals.call({from: accounts[1]});
//		const uint256TWmYIZ3 = await RITLAc8Kn5.balanceOf.call(addressknj3dgW, {from: accounts[1]});
//		const boolxByNf4K = await RITLAc8Kn5.transfer.call(addressMPWL7dr, uintYxpf93, {from: accounts[3]});

		assert.equal(boolqWYp3ca, true)
		await expect(RITLAc8Kn5._burn.call(uintjQPXfNS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITX81Xnd2 = await RIT.new({from: accounts[2]});
		const uintvZ93l69 = BigInt("1429")
		const addressQH0vWv3 = "0x0000000000000000000000000000000000000001"
		const uintdsMHqVr = BigInt("755")
		const addresshhyKoqx = accounts[1]
		const boolIZl4DWY = await RITX81Xnd2.approve.call(addressQH0vWv3, uintvZ93l69, {from: accounts[3]});
		const uint256Hh8at9g = await RITX81Xnd2.totalSupply.call({from: accounts[3]});
//		const boolqpJmxAa = await RITX81Xnd2.transfer.call(addresshhyKoqx, uintdsMHqVr, {from: accounts[2]});

		assert.equal(boolIZl4DWY, true)
		assert.equal(uint256Hh8at9g, BigInt("500000000000000000000000000"))
		await expect(RITX81Xnd2.transfer.call(addresshhyKoqx, uintdsMHqVr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITI63OXvZ = await RIT.new({from: accounts[1]});
		const addressTOixlz2 = accounts[1]
		const uintQQJWHVA = BigInt("1459")
		const addressiOhHRxu = accounts[0]
		const uintP4jkyEG = BigInt("868")
		const addressrA862vy = accounts[5]
		const addressuCbQWKy = accounts[1]
		const addressWXOE646 = accounts[2]
		const uint8zCttsFp = await RITI63OXvZ.decimals.call({from: accounts[1]});
		const uint256I8VLOgj = await RITI63OXvZ.balanceOf.call(addressTOixlz2, {from: accounts[2]});
		const boolrmeYOBf = await RITI63OXvZ.approve.call(addressiOhHRxu, uintQQJWHVA, {from: accounts[0]});
		const booliQIsjc7 = await RITI63OXvZ.increaseAllowance.call(addressrA862vy, uintP4jkyEG, {from: accounts[2]});
		const stringBA5v965 = await RITI63OXvZ.name.call({from: accounts[2]});
		const uint256rcqB6mN = await RITI63OXvZ.allowance.call(addressWXOE646, addressuCbQWKy, {from: accounts[3]});

		assert.equal(booliQIsjc7, true)
		assert.equal(boolrmeYOBf, true)
		assert.equal(stringBA5v965, "Real Estate Investment Token")
		assert.equal(uint256I8VLOgj, BigInt("0"))
		assert.equal(uint256rcqB6mN, BigInt("0"))
		assert.equal(uint8zCttsFp, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITqmFRxBu = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWUgQos = BigInt("1819")
		const addressU1BWRP = accounts[4]
		const uintNprsLpf = BigInt("1607")
		const addressKRse3wi = accounts[3]
		const uint256gFQeWjq = await RITqmFRxBu.totalSupply.call({from: accounts[1]});
		const boolWqF1BAr = await RITqmFRxBu.approve.call(addressU1BWRP, uintWUgQos, {from: accounts[0]});
		const uint256BmaofKP = await RITqmFRxBu.totalSupply.call({from: accounts[0]});
		const boolbRh8PpX = await RITqmFRxBu.increaseAllowance.call(addressKRse3wi, uintNprsLpf, {from: accounts[0]});
	});
})