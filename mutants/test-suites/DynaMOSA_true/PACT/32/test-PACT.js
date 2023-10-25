const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTADFUhp = await PACT.new({from: accounts[3]});
		const addressYYfygrs = accounts[4]
		const addressNOXgDu = accounts[2]
		const addressWipQ3nw = accounts[1]
		const uinti9esLgp = BigInt("884")
		const addresshUjVbKM = accounts[4]
		const addresspCAzTJe = accounts[0]
		const uintWwE85l = BigInt("729")
		const addressQt3v2ru = "0x0000000000000000000000000000000000000001"
		const addresszscJ9ku = accounts[3]
		const address3epOZK = accounts[2]
		const addressqV0TR0r = accounts[0]
//		const boolc2z9Cs1 = await PACTADFUhp.setupReserve.call(addressYYfygrs, {from: accounts[5]});
//		const uintcr1pNuF = await PACTADFUhp.allowance.call(addressWipQ3nw, addressNOXgDu, {from: accounts[5]});
//		const booltUSdO5 = await PACTADFUhp.transferFrom.call(addresspCAzTJe, addresshUjVbKM, uinti9esLgp, {from: accounts[4]});
//		const boolP03yCsG = await PACTADFUhp.transfer.call(addressQt3v2ru, uintWwE85l, {from: accounts[0]});
//		const booltibiHCO = await PACTADFUhp.setupRewards.call(addresszscJ9ku, {from: accounts[3]});
//		const uintXPZ51rC = await PACTADFUhp.allowance.call(addressqV0TR0r, address3epOZK, {from: accounts[4]});

		await expect(PACTADFUhp.setupReserve.call(addressYYfygrs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTB4aa5Us = await PACT.new({from: accounts[4]});
		const uint3Sdjny = BigInt("1840")
		const addressLKICy9N = accounts[4]
		const addressCx5B80u = accounts[1]
//		const boolACGhKow = await PACTB4aa5Us.burn.call(addressLKICy9N, uint3Sdjny, {from: accounts[3]});
//		const boolV6ELEGQ = await PACTB4aa5Us.setupBasePool.call(addressCx5B80u, {from: accounts[2]});

		await expect(PACTB4aa5Us.burn.call(addressLKICy9N, uint3Sdjny, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTFS3PfFL = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintm93Ozk5 = BigInt("1032")
		const addresssrdXdQ = accounts[0]
		const uinta4PATTe = BigInt("1589")
		const addressdohwigs = accounts[0]
		const boolD1lsFSK = await PACTFS3PfFL.transfer.call(addresssrdXdQ, uintm93Ozk5, {from: accounts[2]});
		const boola2sBeYA = await PACTFS3PfFL.transfer.call(addressdohwigs, uinta4PATTe, {from: accounts[0]});
		const stringcHdOfDA = await PACTFS3PfFL.name.call({from: accounts[3]});
	});

	it('test for PACT', async () => {
		const PACThNodDxn = await PACT.new({from: accounts[3]});
		const uintMKzB9Ly = BigInt("1771")
		const addressnaQeksh = accounts[1]
		const uinteaHrPz = BigInt("1211")
		const addressNbxa6tO = accounts[1]
		const addresspw2nLQ9 = accounts[5]
		const addressJqNWfFK = accounts[3]
		const addresshJH23uN = accounts[5]
//		const boolAvctgx = await PACThNodDxn.transfer.call(addressnaQeksh, uintMKzB9Ly, {from: "0x0000000000000000000000000000000000000001"});
//		const boolv9oWyOP = await PACThNodDxn.transfer.call(addressNbxa6tO, uinteaHrPz, {from: accounts[4]});
//		const uintArLkVam = await PACThNodDxn.balanceOf.call(addresspw2nLQ9, {from: accounts[2]});
//		const uintRyyWnFD = await PACThNodDxn.allowance.call(addresshJH23uN, addressJqNWfFK, {from: accounts[3]});

		await expect(PACThNodDxn.transfer.call(addressnaQeksh, uintMKzB9Ly, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTza4vmGd = await PACT.new({from: accounts[4]});
		const addressUDCLRi6 = accounts[1]
		const addresswBipHNQ = accounts[2]
		const addressdDgxFfc = accounts[5]
		const addressPJg8Y6q = accounts[4]
		const uintBQx9VZR = BigInt("1983")
		const addresscTiCIlF = accounts[4]
		const stringXUXqTo1 = await PACTza4vmGd.symbol.call({from: accounts[3]});
		const uintptX6GK9 = await PACTza4vmGd.balanceOf.call(addressUDCLRi6, {from: accounts[0]});
		const stringzNlfS88 = await PACTza4vmGd.name.call({from: accounts[1]});
//		const boolbjyJexE = await PACTza4vmGd.setupBasePool.call(addresswBipHNQ, {from: accounts[5]});
//		const uintJ3WOYZ = await PACTza4vmGd.allowance.call(addressPJg8Y6q, addressdDgxFfc, {from: accounts[1]});
//		const boollDCJteD = await PACTza4vmGd.approve.call(addresscTiCIlF, uintBQx9VZR, {from: accounts[2]});

		assert.equal(stringXUXqTo1, "PACT")
		assert.equal(stringzNlfS88, "P2PB2B community token")
		assert.equal(uintptX6GK9, BigInt("0"))
		await expect(PACTza4vmGd.setupBasePool.call(addresswBipHNQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt5Dqxj2 = await PACT.new({from: accounts[0]});
		const addressgW3YLOV = accounts[4]
		const addressRLybsv = accounts[1]
		const uinth0udW18 = BigInt("981")
		const addressWLnb4uT = accounts[5]
		const uintFoAqOC = BigInt("1467")
		const addresscDFYR0N = accounts[0]
//		const boolVvjiktL = await PACTt5Dqxj2.setupFarming.call(addressgW3YLOV, {from: accounts[0]});
//		const uint8LEDVZkO = await PACTt5Dqxj2.decimals.call({from: accounts[5]});
//		const uintYe1sWzi = await PACTt5Dqxj2.balanceOf.call(addressRLybsv, {from: accounts[1]});
//		const boolRvOaNI = await PACTt5Dqxj2.burn.call(addressWLnb4uT, uinth0udW18, {from: accounts[1]});
//		const boolGkVrBS1 = await PACTt5Dqxj2.transfer.call(addresscDFYR0N, uintFoAqOC, {from: accounts[0]});

		await expect(PACTt5Dqxj2.setupFarming.call(addressgW3YLOV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT9nccIP = await PACT.new({from: accounts[3]});
		const uintHLpaFFy = BigInt("1147")
		const addressO3CBbWW = accounts[2]
		const addressVQPCnXa = accounts[1]
		const addressJeIaaL = accounts[4]
//		const boollLv5dMQ = await PACT9nccIP.transferFrom.call(addressVQPCnXa, addressO3CBbWW, uintHLpaFFy, {from: accounts[3]});
//		const uintfvnB5u6 = await PACT9nccIP.balanceOf.call(addressJeIaaL, {from: accounts[3]});

		await expect(PACT9nccIP.transferFrom.call(addressVQPCnXa, addressO3CBbWW, uintHLpaFFy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTpKhLrJ6 = await PACT.new({from: accounts[3]});
		const addressNco3i5 = accounts[1]
		const addressXJA8A29 = accounts[1]
//		const boolOMrJDMv = await PACTpKhLrJ6.setupTeam.call(addressNco3i5, {from: "0x0000000000000000000000000000000000000001"});
//		const uintKArRmkF = await PACTpKhLrJ6.balanceOf.call(addressXJA8A29, {from: accounts[5]});

		await expect(PACTpKhLrJ6.setupTeam.call(addressNco3i5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTYwdYKmC = await PACT.new({from: accounts[2]});
		const addressOgXqWE1 = accounts[1]
		const uintyizcl5x = await PACTYwdYKmC.totalSupply.call({from: accounts[2]});
//		const boolrWEpsww = await PACTYwdYKmC.setupFarming.call(addressOgXqWE1, {from: accounts[2]});

		assert.equal(uintyizcl5x, BigInt("1000000000000000000000000000"))
		await expect(PACTYwdYKmC.setupFarming.call(addressOgXqWE1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTYwdYKmC = await PACT.new({from: accounts[2]});
		const addressW2eopea = accounts[1]
		const uintyizcl5x = await PACTYwdYKmC.totalSupply.call({from: accounts[2]});
		const uint8LnKt5t = await PACTYwdYKmC.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolrWEpsww = await PACTYwdYKmC.setupFarming.call(addressW2eopea, {from: accounts[2]});
//		const uintBSWK5Um = await PACTYwdYKmC.totalSupply.call({from: accounts[3]});

		assert.equal(uint8LnKt5t, BigInt("18"))
		assert.equal(uintyizcl5x, BigInt("1000000000000000000000000000"))
		await expect(PACTYwdYKmC.setupFarming.call(addressW2eopea, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTB4aa5Us = await PACT.new({from: accounts[4]});
		const uintTcrNXWk = BigInt("504")
		const addresswbDKHQ2 = accounts[4]
		const uintQqS2DQ9 = BigInt("1245")
		const address1AHW8G = accounts[4]
		const boolTQhSHVc = await PACTB4aa5Us.approve.call(addresswbDKHQ2, uintTcrNXWk, {from: accounts[4]});
//		const boolACGhKow = await PACTB4aa5Us.burn.call(address1AHW8G, uintQqS2DQ9, {from: accounts[3]});

		assert.equal(boolTQhSHVc, true)
		await expect(PACTB4aa5Us.burn.call(address1AHW8G, uintQqS2DQ9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTB4aa5Us = await PACT.new({from: accounts[4]});
		const addressBejmNs = accounts[0]
		const addressE8if4xP = accounts[1]
		const addressdfqRLqo = accounts[1]
		const uintrfxZ8N3 = BigInt("1840")
		const addressh8Lq81O = accounts[5]
		const addressUyurjR = accounts[1]
//		const boolNoygp1b = await PACTB4aa5Us.setupRewards.call(addressBejmNs, {from: accounts[0]});
//		const uintTsqqNPc = await PACTB4aa5Us.allowance.call(addressdfqRLqo, addressE8if4xP, {from: accounts[0]});
//		const boolACGhKow = await PACTB4aa5Us.burn.call(addressh8Lq81O, uintrfxZ8N3, {from: accounts[3]});
//		const boolo1ucshW = await PACTB4aa5Us.setupReserve.call(addressUyurjR, {from: accounts[1]});

		await expect(PACTB4aa5Us.setupRewards.call(addressBejmNs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzJttr8c = await PACT.new({from: accounts[5]});
		const uintMDunHz = BigInt("288")
		const addressB3JUgdC = accounts[1]
		const addressn4FJu0s = accounts[0]
		const addressLEUujP1 = accounts[5]
		const addressMYvtg8 = accounts[5]
		const boolrGE33fN = await PACTzJttr8c.approve.call(addressB3JUgdC, uintMDunHz, {from: accounts[2]});
		const uintOvN7C5 = await PACTzJttr8c.allowance.call(addressLEUujP1, addressn4FJu0s, {from: accounts[0]});
//		const booldu3UL36 = await PACTzJttr8c.setupRewards.call(addressMYvtg8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrGE33fN, true)
		assert.equal(uintOvN7C5, BigInt("0"))
		await expect(PACTzJttr8c.setupRewards.call(addressMYvtg8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTUkOb6o7 = await PACT.new({from: accounts[2]});
		const uintyQrIxgT = BigInt("1730")
		const addressPub4KsA = accounts[0]
		const uintJou3UCA = BigInt("1293")
		const addressKrnzOMk = "0x0000000000000000000000000000000000000001"
		const addressLzwIUT = "0x0000000000000000000000000000000000000000"
		const boolYkVHJW9 = await PACTUkOb6o7.approve.call(addressPub4KsA, uintyQrIxgT, {from: accounts[0]});
		const uint8zOOKCJl = await PACTUkOb6o7.decimals.call({from: accounts[1]});
//		const boold366PQ = await PACTUkOb6o7.transferFrom.call(addressLzwIUT, addressKrnzOMk, uintJou3UCA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8z2s0AbH = await PACTUkOb6o7.decimals.call({from: accounts[4]});

		assert.equal(boolYkVHJW9, true)
		assert.equal(uint8zOOKCJl, BigInt("18"))
		await expect(PACTUkOb6o7.transferFrom.call(addressLzwIUT, addressKrnzOMk, uintJou3UCA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})