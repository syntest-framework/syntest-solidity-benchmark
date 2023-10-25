const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADwAPhZLt = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWSdE0l4 = BigInt("556")
		const uintbheS3Dc = BigInt("268")
		const addressuen7SSk = accounts[3]
		const uintC9hlM1W = BigInt("183")
		const addressrHi3WrT = accounts[4]
		const uint256BBSgfzf = await ZADwAPhZLt._burn.call(uintWSdE0l4, {from: accounts[3]});
		const boolHYktqV0 = await ZADwAPhZLt.increaseAllowance.call(addressuen7SSk, uintbheS3Dc, {from: accounts[2]});
		const boolqqlZl3C = await ZADwAPhZLt.decreaseAllowance.call(addressrHi3WrT, uintC9hlM1W, {from: accounts[2]});
	});

	it('test for ZAD', async () => {
		const ZADidbi45t = await ZAD.new({from: accounts[4]});
		const addresslzIVGSj = accounts[1]
		const addressdgEaEp = "0x0000000000000000000000000000000000000001"
		const uintBPKOwUx = BigInt("671")
		const addressQmF1wI3 = accounts[3]
		const uint256V7dNZ3R = await ZADidbi45t.allowance.call(addressdgEaEp, addresslzIVGSj, {from: accounts[3]});
		const uint8KvM8cEE = await ZADidbi45t.decimals.call({from: accounts[5]});
		const stringL2hbBhN = await ZADidbi45t.symbol.call({from: accounts[1]});
//		const boolQvBMjWj = await ZADidbi45t.decreaseAllowance.call(addressQmF1wI3, uintBPKOwUx, {from: accounts[2]});

		assert.equal(stringL2hbBhN, "ZAD")
		assert.equal(uint256V7dNZ3R, BigInt("0"))
		assert.equal(uint8KvM8cEE, BigInt("18"))
		await expect(ZADidbi45t.decreaseAllowance.call(addressQmF1wI3, uintBPKOwUx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADa4kW6tA = await ZAD.new({from: accounts[0]});
		const uintrqm7exv = BigInt("1897")
		const addressDSQq6tc = accounts[0]
		const stringzPscJl6 = await ZADa4kW6tA.symbol.call({from: accounts[4]});
//		const uint256uU4ffLP = await ZADa4kW6tA._burn.call(uintrqm7exv, {from: accounts[0]});
//		const uint256e7pJRCA = await ZADa4kW6tA.balanceOf.call(addressDSQq6tc, {from: accounts[2]});

		assert.equal(stringzPscJl6, "ZAD")
		await expect(ZADa4kW6tA._burn.call(uintrqm7exv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADDmaN7L4 = await ZAD.new({from: accounts[4]});
		const uintWvi4dX = BigInt("1774")
		const addressliCOaqS = accounts[1]
		const addressWr7UD66 = accounts[1]
		const uint256S2O2ON1 = await ZADDmaN7L4.totalSupply.call({from: accounts[4]});
//		const boollM1LkF = await ZADDmaN7L4.transferFrom.call(addressWr7UD66, addressliCOaqS, uintWvi4dX, {from: accounts[0]});

		assert.equal(uint256S2O2ON1, BigInt("100000000000000000000000000"))
		await expect(ZADDmaN7L4.transferFrom.call(addressWr7UD66, addressliCOaqS, uintWvi4dX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADPG99wEy = await ZAD.new({from: accounts[5]});
		const uintO3RFDC = BigInt("1900")
		const addresspI8OPBN = accounts[5]
		const uintXZKb6IW = BigInt("1082")
		const addressLi9WFb8 = accounts[2]
		const uintqEFHmfe = BigInt("389")
		const addressdCYg3dm = accounts[4]
		const address1DCAMt = accounts[2]
		const boolmGIreLy = await ZADPG99wEy.approve.call(addresspI8OPBN, uintO3RFDC, {from: accounts[3]});
//		const boolAccTErx = await ZADPG99wEy.decreaseAllowance.call(addressLi9WFb8, uintXZKb6IW, {from: accounts[0]});
//		const boolGkIEH1e = await ZADPG99wEy.increaseAllowance.call(addressdCYg3dm, uintqEFHmfe, {from: accounts[4]});
//		const uint256WNgEQK7 = await ZADPG99wEy.balanceOf.call(address1DCAMt, {from: accounts[2]});

		assert.equal(boolmGIreLy, true)
		await expect(ZADPG99wEy.decreaseAllowance.call(addressLi9WFb8, uintXZKb6IW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADobAeh34 = await ZAD.new({from: accounts[4]});
		const uintiWRBJoR = BigInt("494")
		const addressoZOLN3u = accounts[4]
		const uintDijkqGW = BigInt("1939")
		const addressLXxHJ7n = accounts[1]
//		const boolu3CEUw2 = await ZADobAeh34.transfer.call(addressoZOLN3u, uintiWRBJoR, {from: accounts[2]});
//		const stringleYunEe = await ZADobAeh34.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringlgRlQoo = await ZADobAeh34.symbol.call({from: accounts[4]});
//		const boolkrLIrA7 = await ZADobAeh34.approve.call(addressLXxHJ7n, uintDijkqGW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ZADobAeh34.transfer.call(addressoZOLN3u, uintiWRBJoR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADHSy5k1D = await ZAD.new({from: accounts[4]});
		const uintaY5ZEUs = BigInt("1506")
		const addressIAv1rEQ = accounts[2]
		const addressDnoZIqw = "0x0000000000000000000000000000000000000001"
		const uintRuDMp4b = BigInt("781")
		const addressuT8UAEP = accounts[3]
		const boolt6HeTq5 = await ZADHSy5k1D.increaseAllowance.call(addressIAv1rEQ, uintaY5ZEUs, {from: accounts[2]});
		const uint256U44HcbT = await ZADHSy5k1D.balanceOf.call(addressDnoZIqw, {from: accounts[1]});
		const uint256l3DGtyn = await ZADHSy5k1D.totalSupply.call({from: accounts[1]});
		const uint256mYiD0Go = await ZADHSy5k1D.totalSupply.call({from: accounts[3]});
//		const bool3PiTis = await ZADHSy5k1D.decreaseAllowance.call(addressuT8UAEP, uintRuDMp4b, {from: accounts[5]});

		assert.equal(boolt6HeTq5, true)
		assert.equal(uint256U44HcbT, BigInt("0"))
		assert.equal(uint256l3DGtyn, BigInt("100000000000000000000000000"))
		assert.equal(uint256mYiD0Go, BigInt("100000000000000000000000000"))
		await expect(ZADHSy5k1D.decreaseAllowance.call(addressuT8UAEP, uintRuDMp4b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADDmaN7L4 = await ZAD.new({from: accounts[4]});
		const uintcyg8Tc3 = BigInt("1774")
		const addresstJoH6uQ = accounts[1]
		const addresso1IVr85 = accounts[1]
		const uint8TMKmn6H = await ZADDmaN7L4.decimals.call({from: accounts[5]});
		const uint256S2O2ON1 = await ZADDmaN7L4.totalSupply.call({from: accounts[4]});
		const stringmrtRPvh = await ZADDmaN7L4.name.call({from: accounts[3]});
//		const boollM1LkF = await ZADDmaN7L4.transferFrom.call(addresso1IVr85, addresstJoH6uQ, uintcyg8Tc3, {from: accounts[0]});

		assert.equal(stringmrtRPvh, "Zadkiel")
		assert.equal(uint256S2O2ON1, BigInt("100000000000000000000000000"))
		assert.equal(uint8TMKmn6H, BigInt("18"))
		await expect(ZADDmaN7L4.transferFrom.call(addresso1IVr85, addresstJoH6uQ, uintcyg8Tc3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})