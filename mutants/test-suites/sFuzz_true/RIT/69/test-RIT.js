const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITujE2X74 = await RIT.new({from: accounts[1]});
		const uintHaecF40 = BigInt("441")
		const addressEWQmQJ5 = accounts[1]
		const uint4TSnb2 = BigInt("1648")
		const addressS97YYTa = accounts[1]
		const addressykvc495 = accounts[3]
		const boolseJI3Tx = await RITujE2X74.increaseAllowance.call(addressEWQmQJ5, uintHaecF40, {from: accounts[4]});
//		const boolfzcjAcd = await RITujE2X74.transferFrom.call(addressykvc495, addressS97YYTa, uint4TSnb2, {from: accounts[0]});
//		const uint8n1dmwfi = await RITujE2X74.decimals.call({from: accounts[0]});

		assert.equal(boolseJI3Tx, true)
		await expect(RITujE2X74.transferFrom.call(addressykvc495, addressS97YYTa, uint4TSnb2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITqwPp9Vr = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintd9c9r5r = BigInt("515")
		const addressSfa7Opu = accounts[0]
		const uintP1EWMQZ = BigInt("1173")
		const addressS0fJfmG = accounts[2]
		const addressEod2ZZ = accounts[0]
		const uint8BnCRlFb = await RITqwPp9Vr.decimals.call({from: accounts[0]});
		const stringUTo3fFe = await RITqwPp9Vr.name.call({from: accounts[5]});
		const boolreVPBKU = await RITqwPp9Vr.increaseAllowance.call(addressSfa7Opu, uintd9c9r5r, {from: accounts[2]});
		const boolx6VuYP = await RITqwPp9Vr.increaseAllowance.call(addressS0fJfmG, uintP1EWMQZ, {from: accounts[2]});
		const uint256Lx6UNxU = await RITqwPp9Vr.balanceOf.call(addressEod2ZZ, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITuWmmuTk = await RIT.new({from: accounts[4]});
		const addressEjHLunt = accounts[4]
		const addressozD2XBB = accounts[2]
		const stringMtttSR7 = await RITuWmmuTk.symbol.call({from: accounts[5]});
		const uint256GRJP2zA = await RITuWmmuTk.allowance.call(addressozD2XBB, addressEjHLunt, {from: accounts[2]});
		const stringcpxJLoR = await RITuWmmuTk.name.call({from: accounts[4]});

		assert.equal(stringMtttSR7, "RIT 2.0")
		assert.equal(stringcpxJLoR, "Real Estate Investment Token")
		assert.equal(uint256GRJP2zA, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITqOAIC80 = await RIT.new({from: accounts[0]});
		const uintqAKYGfl = BigInt("507")
		const addressXVJkrv7 = accounts[3]
		const addressQjjPUan = accounts[1]
		const uintVkYWoVH = BigInt("574")
		const addressi0iJZXW = accounts[2]
		const addressYrmJUSV = "0x0000000000000000000000000000000000000001"
		const boolhoJXrEe = await RITqOAIC80.approve.call(addressXVJkrv7, uintqAKYGfl, {from: accounts[2]});
		const uint256cdARBb6 = await RITqOAIC80.balanceOf.call(addressQjjPUan, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uDl8nfl = await RITqOAIC80._burn.call(uintVkYWoVH, {from: accounts[5]});
//		const uint256KhyLQBT = await RITqOAIC80.allowance.call(addressYrmJUSV, addressi0iJZXW, {from: accounts[4]});
//		const stringCbsopVQ = await RITqOAIC80.symbol.call({from: accounts[2]});

		assert.equal(boolhoJXrEe, true)
		assert.equal(uint256cdARBb6, BigInt("0"))
		await expect(RITqOAIC80._burn.call(uintVkYWoVH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITujE2X74 = await RIT.new({from: accounts[1]});
		const uintwvDAwTr = BigInt("441")
		const addressfhuNjzu = accounts[1]
		const boolseJI3Tx = await RITujE2X74.increaseAllowance.call(addressfhuNjzu, uintwvDAwTr, {from: accounts[4]});
		const uint8n1dmwfi = await RITujE2X74.decimals.call({from: accounts[0]});

		assert.equal(boolseJI3Tx, true)
		assert.equal(uint8n1dmwfi, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITdNGkVi3 = await RIT.new({from: accounts[3]});
		const addresshKVWSWz = accounts[0]
		const uintNe3CjuD = BigInt("740")
		const addressrBZ2KZZ = accounts[1]
		const uintvyLqmtV = BigInt("838")
		const addressXQ5HfVB = accounts[0]
		const uintR2wmmJu = BigInt("1910")
		const addressvu78pk = accounts[1]
		const addressnbndz4J = "0x0000000000000000000000000000000000000001"
		const uintwy2wVb = BigInt("1459")
		const addressRbQmekS = accounts[5]
		const uint256icweNy0 = await RITdNGkVi3.balanceOf.call(addresshKVWSWz, {from: accounts[3]});
//		const boolKePt29Y = await RITdNGkVi3.decreaseAllowance.call(addressrBZ2KZZ, uintNe3CjuD, {from: "0x0000000000000000000000000000000000000001"});
//		const booluhX9Km = await RITdNGkVi3.transfer.call(addressXQ5HfVB, uintvyLqmtV, {from: accounts[0]});
//		const boolRbVxqYf = await RITdNGkVi3.transferFrom.call(addressnbndz4J, addressvu78pk, uintR2wmmJu, {from: accounts[4]});
//		const boolUFc4FUG = await RITdNGkVi3.increaseAllowance.call(addressRbQmekS, uintwy2wVb, {from: accounts[2]});
//		const stringLvrXQI3 = await RITdNGkVi3.name.call({from: accounts[0]});

		assert.equal(uint256icweNy0, BigInt("0"))
		await expect(RITdNGkVi3.decreaseAllowance.call(addressrBZ2KZZ, uintNe3CjuD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITVbucVOA = await RIT.new({from: accounts[4]});
		const uintQWT0xh = BigInt("1896")
		const addressU9NOZsJ = accounts[0]
		const uintsj0xS1a = BigInt("1773")
		const addressBl0tsUP = accounts[0]
		const addressnqUqg2z = accounts[2]
		const uint8tTaUBgJ = await RITVbucVOA.decimals.call({from: accounts[0]});
//		const boolQGQbihB = await RITVbucVOA.transfer.call(addressU9NOZsJ, uintQWT0xh, {from: "0x0000000000000000000000000000000000000001"});
//		const booluxzaEiF = await RITVbucVOA.approve.call(addressBl0tsUP, uintsj0xS1a, {from: accounts[0]});
//		const uint256Hbt4m4c = await RITVbucVOA.balanceOf.call(addressnqUqg2z, {from: accounts[0]});

		assert.equal(uint8tTaUBgJ, BigInt("18"))
		await expect(RITVbucVOA.transfer.call(addressU9NOZsJ, uintQWT0xh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITeGP1FYp = await RIT.new({from: accounts[3]});
		const uintuvKnqTW = BigInt("1013")
		const addressjQCRie = accounts[0]
		const stringXist88d = await RITeGP1FYp.symbol.call({from: accounts[2]});
		const boolODBQ1lw = await RITeGP1FYp.approve.call(addressjQCRie, uintuvKnqTW, {from: accounts[1]});
		const uint256QI8ftKs = await RITeGP1FYp.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolODBQ1lw, true)
		assert.equal(stringXist88d, "RIT 2.0")
		assert.equal(uint256QI8ftKs, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITujE2X74 = await RIT.new({from: accounts[1]});
		const uintjpUjnS2 = BigInt("441")
		const addressEjlifE7 = accounts[2]
		const uintbtyttG = BigInt("1656")
		const addressRo99Zx9 = "0x0000000000000000000000000000000000000000"
		const uintnXqopfD = BigInt("730")
		const addresshnFr7il = accounts[1]
		const addresscznfzSK = accounts[1]
		const addressTqzMC1y = accounts[4]
		const boolseJI3Tx = await RITujE2X74.increaseAllowance.call(addressEjlifE7, uintjpUjnS2, {from: accounts[4]});
//		const boolAjXd4MO = await RITujE2X74.transfer.call(addressRo99Zx9, uintbtyttG, {from: accounts[2]});
//		const boolpXrtb91 = await RITujE2X74.transfer.call(addresshnFr7il, uintnXqopfD, {from: accounts[4]});
//		const uint256bZtZZ4M = await RITujE2X74.allowance.call(addressTqzMC1y, addresscznfzSK, {from: accounts[3]});

		assert.equal(boolseJI3Tx, true)
		await expect(RITujE2X74.transfer.call(addressRo99Zx9, uintbtyttG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})