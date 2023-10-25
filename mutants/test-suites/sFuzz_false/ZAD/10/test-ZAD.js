const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADiqkTCx7 = await ZAD.new({from: accounts[3]});
		const addressDWPSWF = accounts[2]
		const addressRArunlA = accounts[4]
		const uintT7H3hUx = BigInt("1342")
		const addressPLmBHmA = accounts[4]
		const addressKvkvIib = accounts[3]
		const uintw6r1K9T = BigInt("1164")
		const addressuTMzYHk = accounts[2]
		const addressaGajUQ = accounts[0]
		const addresswseGi7u = accounts[4]
		const uint256QQfLe0Y = await ZADiqkTCx7.totalSupply.call({from: accounts[2]});
		const stringtRrVzgy = await ZADiqkTCx7.symbol.call({from: accounts[3]});
		const uint256l3MEcZU = await ZADiqkTCx7.allowance.call(addressRArunlA, addressDWPSWF, {from: accounts[1]});
//		const boolddNHTke = await ZADiqkTCx7.transferFrom.call(addressKvkvIib, addressPLmBHmA, uintT7H3hUx, {from: accounts[2]});
//		const boolZWxVnjG = await ZADiqkTCx7.transferFrom.call(addressaGajUQ, addressuTMzYHk, uintw6r1K9T, {from: accounts[4]});
//		const uint256FuprPn = await ZADiqkTCx7.balanceOf.call(addresswseGi7u, {from: accounts[0]});

		assert.equal(stringtRrVzgy, "ZAD")
		assert.equal(uint256QQfLe0Y, BigInt("100000000000000000000000000"))
		assert.equal(uint256l3MEcZU, BigInt("0"))
		await expect(ZADiqkTCx7.transferFrom.call(addressKvkvIib, addressPLmBHmA, uintT7H3hUx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADuhGchV = await ZAD.new({from: accounts[4]});
		const uintgEsecpJ = BigInt("1391")
		const addresshtHzFt = accounts[4]
		const stringXwtQ2Iz = await ZADuhGchV.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolL6jAFj5 = await ZADuhGchV.increaseAllowance.call(addresshtHzFt, uintgEsecpJ, {from: accounts[3]});

		assert.equal(boolL6jAFj5, true)
		assert.equal(stringXwtQ2Iz, "Zadkiel")
	});

	it('test for ZAD', async () => {
		const ZADVurefPT = await ZAD.new({from: accounts[0]});
		const addressQLanSJh = accounts[4]
		const uint24vggL = BigInt("372")
		const addressSsMF69s = accounts[3]
		const addressBqvsZQb = accounts[0]
		const uint256iFwXg77 = await ZADVurefPT.balanceOf.call(addressQLanSJh, {from: accounts[2]});
//		const boolXFhrm3o = await ZADVurefPT.decreaseAllowance.call(addressSsMF69s, uint24vggL, {from: accounts[1]});
//		const uint8a7TW29W = await ZADVurefPT.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HgzDwuM = await ZADVurefPT.balanceOf.call(addressBqvsZQb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iFwXg77, BigInt("0"))
		await expect(ZADVurefPT.decreaseAllowance.call(addressSsMF69s, uint24vggL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADTn0zIsO = await ZAD.new({from: accounts[1]});
		const uintCv849Ul = BigInt("882")
		const addressbSWHURB = accounts[0]
		const addressQJDNE1 = accounts[0]
		const addressCafLEDu = accounts[0]
		const uintF5nLPiA = BigInt("1009")
		const addressbvlQmfw = accounts[2]
		const boolOGEqqQF = await ZADTn0zIsO.increaseAllowance.call(addressbSWHURB, uintCv849Ul, {from: accounts[1]});
		const uint256BzmRCXT = await ZADTn0zIsO.allowance.call(addressCafLEDu, addressQJDNE1, {from: accounts[0]});
		const booluBPNXdk = await ZADTn0zIsO.approve.call(addressbvlQmfw, uintF5nLPiA, {from: accounts[2]});

		assert.equal(boolOGEqqQF, true)
		assert.equal(booluBPNXdk, true)
		assert.equal(uint256BzmRCXT, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADLAc8Kn5 = await ZAD.new({from: accounts[0]});
		const uintnn1k2bf = BigInt("1280")
		const addressxpHrEgJ = accounts[3]
		const uintjQPXfNS = BigInt("949")
		const addressknj3dgW = accounts[1]
		const uintYxpf93 = BigInt("891")
		const addressMPWL7dr = accounts[3]
		const boolqWYp3ca = await ZADLAc8Kn5.increaseAllowance.call(addressxpHrEgJ, uintnn1k2bf, {from: accounts[0]});
//		const uint256XxoxWyG = await ZADLAc8Kn5._burn.call(uintjQPXfNS, {from: accounts[4]});
//		const uint8nbo4Qo = await ZADLAc8Kn5.decimals.call({from: accounts[1]});
//		const uint256TWmYIZ3 = await ZADLAc8Kn5.balanceOf.call(addressknj3dgW, {from: accounts[1]});
//		const boolxByNf4K = await ZADLAc8Kn5.transfer.call(addressMPWL7dr, uintYxpf93, {from: accounts[3]});

		assert.equal(boolqWYp3ca, true)
		await expect(ZADLAc8Kn5._burn.call(uintjQPXfNS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADX81Xnd2 = await ZAD.new({from: accounts[2]});
		const uintvZ93l69 = BigInt("1429")
		const addressQH0vWv3 = "0x0000000000000000000000000000000000000001"
		const uintdsMHqVr = BigInt("755")
		const addresshhyKoqx = accounts[1]
		const boolIZl4DWY = await ZADX81Xnd2.approve.call(addressQH0vWv3, uintvZ93l69, {from: accounts[3]});
		const uint256Hh8at9g = await ZADX81Xnd2.totalSupply.call({from: accounts[3]});
//		const boolqpJmxAa = await ZADX81Xnd2.transfer.call(addresshhyKoqx, uintdsMHqVr, {from: accounts[2]});

		assert.equal(boolIZl4DWY, true)
		assert.equal(uint256Hh8at9g, BigInt("100000000000000000000000000"))
		await expect(ZADX81Xnd2.transfer.call(addresshhyKoqx, uintdsMHqVr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADuhGchV = await ZAD.new({from: accounts[4]});
		const uintPOZrmKV = BigInt("1783")
		const addressKefWCCs = accounts[4]
		const addressmQlcRdj = accounts[4]
		const addressrKKsG2V = "0x0000000000000000000000000000000000000001"
		const boolL6jAFj5 = await ZADuhGchV.increaseAllowance.call(addressKefWCCs, uintPOZrmKV, {from: accounts[3]});
		const uint8icLxSaR = await ZADuhGchV.decimals.call({from: accounts[1]});
		const uint256TddZsvl = await ZADuhGchV.allowance.call(addressrKKsG2V, addressmQlcRdj, {from: accounts[3]});

		assert.equal(boolL6jAFj5, true)
		assert.equal(uint256TddZsvl, BigInt("0"))
		assert.equal(uint8icLxSaR, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADZGmL84K = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWS4P2ba = BigInt("411")
		const addressa7LkbV = accounts[1]
		const addressEZalkhy = accounts[4]
		const uintahqRSM = BigInt("290")
		const addressvr4fHC = accounts[4]
		const uintmhNaJGh = BigInt("1712")
		const uintZ9JNELV = BigInt("228")
		const addressJYOqbB = accounts[4]
		const uint256uKQmOFE = await ZADZGmL84K.totalSupply.call({from: accounts[1]});
		const boolZOvGZwF = await ZADZGmL84K.transferFrom.call(addressEZalkhy, addressa7LkbV, uintWS4P2ba, {from: "0x0000000000000000000000000000000000000001"});
		const boolBooCaHB = await ZADZGmL84K.approve.call(addressvr4fHC, uintahqRSM, {from: accounts[2]});
		const uint256lfFh4SO = await ZADZGmL84K._burn.call(uintmhNaJGh, {from: accounts[2]});
		const boolPiNVMeS = await ZADZGmL84K.transfer.call(addressJYOqbB, uintZ9JNELV, {from: accounts[5]});
	});
})