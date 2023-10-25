const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTCGbK4aU = await PACT.new({from: accounts[0]});
		const addressE73kVfU = accounts[5]
		const uint8C9z2wls = await PACTCGbK4aU.decimals.call({from: accounts[5]});
		const stringWd9RhB = await PACTCGbK4aU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolkI9DbSY = await PACTCGbK4aU.setupBasePool.call(addressE73kVfU, {from: accounts[3]});

		assert.equal(stringWd9RhB, "PACT")
		assert.equal(uint8C9z2wls, BigInt("18"))
		await expect(PACTCGbK4aU.setupBasePool.call(addressE73kVfU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTbJBgwZ = await PACT.new({from: accounts[5]});
		const addressaU3TZI0 = accounts[1]
		const addressiRihzI6 = accounts[3]
		const addressXoFM3iN = accounts[1]
		const uintXseQTvT = await PACTbJBgwZ.totalSupply.call({from: accounts[5]});
		const boolBdMmPtV = await PACTbJBgwZ.setupRewards.call(addressaU3TZI0, {from: accounts[4]});
		const boolKGR5h4X = await PACTbJBgwZ.setupBasePool.call(addressiRihzI6, {from: accounts[3]});
		const stringOhCuI5N = await PACTbJBgwZ.symbol.call({from: accounts[1]});
		const stringnCyP0vx = await PACTbJBgwZ.name.call({from: accounts[0]});
		const boolUXec6Up = await PACTbJBgwZ.setupRewards.call(addressXoFM3iN, {from: accounts[0]});

		assert.equal(uintXseQTvT, BigInt("1000000000000000000000000000"))
		await expect(PACTbJBgwZ.setupRewards.call(addressaU3TZI0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTFWziotk = await PACT.new({from: accounts[4]});
		const addressV1fLkNc = accounts[4]
		const uint8GQk3mHN = await PACTFWziotk.decimals.call({from: accounts[2]});
		const stringnGA0Qs = await PACTFWziotk.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolAa00aDD = await PACTFWziotk.setupReserve.call(addressV1fLkNc, {from: accounts[5]});

		assert.equal(stringnGA0Qs, "P2PB2B community token")
		assert.equal(uint8GQk3mHN, BigInt("18"))
		await expect(PACTFWziotk.setupReserve.call(addressV1fLkNc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTxAba3q = await PACT.new({from: accounts[3]});
		const addressf0STsC = accounts[1]
		const addressZe5AFrp = accounts[3]
		const addressRybq1zT = accounts[0]
		const uintSjiLbhb = BigInt("315")
		const addressELmoGk8 = accounts[0]
		const boolKBfZ6c = await PACTxAba3q.setupTeam.call(addressf0STsC, {from: accounts[3]});
		const boolZSJkIGe = await PACTxAba3q.setupBasePool.call(addressZe5AFrp, {from: accounts[1]});
		const boolPwnyYNq = await PACTxAba3q.setupFarming.call(addressRybq1zT, {from: accounts[1]});
		const boolJLw8XB = await PACTxAba3q.transfer.call(addressELmoGk8, uintSjiLbhb, {from: accounts[1]});

		await expect(PACTxAba3q.setupTeam.call(addressf0STsC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTB32c5hs = await PACT.new({from: accounts[4]});
		const addressTZ5EWuM = accounts[0]
		const addressAxOjjFe = accounts[3]
		const uintqiR5vNF = BigInt("775")
		const addresseU8DZL = accounts[3]
		const uint8bPVs8xO = await PACTB32c5hs.decimals.call({from: accounts[0]});
		const uintVrotHcH = await PACTB32c5hs.allowance.call(addressAxOjjFe, addressTZ5EWuM, {from: accounts[1]});
		const boolmsRohS = await PACTB32c5hs.transfer.call(addresseU8DZL, uintqiR5vNF, {from: accounts[4]});

		assert.equal(uint8bPVs8xO, BigInt("18"))
		assert.equal(uintVrotHcH, BigInt("0"))
		await expect(PACTB32c5hs.transfer.call(addresseU8DZL, uintqiR5vNF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTObsrmb = await PACT.new({from: accounts[0]});
		const uint1rltnu = BigInt("388")
		const addressf3uo2fU = accounts[4]
		const addressxG8yEBb = accounts[3]
		const addressKDqHjp = accounts[4]
		const uintLqqYMe = BigInt("1284")
		const addressUTd6b6L = accounts[1]
		const addressGVQhRPk = "0x0000000000000000000000000000000000000001"
		const boolm1FdYD0 = await PACTObsrmb.approve.call(addressf3uo2fU, uint1rltnu, {from: accounts[2]});
		const uintv5r3hRW = await PACTObsrmb.allowance.call(addressKDqHjp, addressxG8yEBb, {from: accounts[4]});
		const uint8EkRS1aO = await PACTObsrmb.decimals.call({from: accounts[3]});
		const uintqbqjof1 = await PACTObsrmb.totalSupply.call({from: accounts[3]});
		const boolFdJGEF = await PACTObsrmb.transferFrom.call(addressGVQhRPk, addressUTd6b6L, uintLqqYMe, {from: accounts[4]});

		assert.equal(boolm1FdYD0, true)
		assert.equal(uint8EkRS1aO, BigInt("18"))
		assert.equal(uintqbqjof1, BigInt("1000000000000000000000000000"))
		assert.equal(uintv5r3hRW, BigInt("0"))
		await expect(PACTObsrmb.transferFrom.call(addressGVQhRPk, addressUTd6b6L, uintLqqYMe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTIEvcwyv = await PACT.new({from: accounts[5]});
		const addressD6N6Bsf = accounts[4]
		const uints3HzLOD = BigInt("792")
		const addressFqUduYi = accounts[3]
		const addressub2Cgxh = accounts[4]
		const uintiftaUvj = await PACTIEvcwyv.balanceOf.call(addressD6N6Bsf, {from: accounts[0]});
		const boolqDQJNSK = await PACTIEvcwyv.transfer.call(addressFqUduYi, uints3HzLOD, {from: accounts[0]});
		const boolfJv0yi2 = await PACTIEvcwyv.setupTeam.call(addressub2Cgxh, {from: accounts[1]});
		const stringAZrscr9 = await PACTIEvcwyv.symbol.call({from: accounts[3]});

		assert.equal(uintiftaUvj, BigInt("0"))
		await expect(PACTIEvcwyv.transfer.call(addressFqUduYi, uints3HzLOD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTFz1hfJY = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbU8FHJX = accounts[1]
		const uintGQjUzja = BigInt("1365")
		const addressSt96yHm = accounts[4]
		const addressBK03ZWU = accounts[2]
		const uintw7CiSo7 = BigInt("939")
		const addresskmhU4nm = accounts[2]
		const boolV52y1GE = await PACTFz1hfJY.setupReserve.call(addressbU8FHJX, {from: accounts[1]});
		const boolfHOitz7 = await PACTFz1hfJY.transferFrom.call(addressBK03ZWU, addressSt96yHm, uintGQjUzja, {from: "0x0000000000000000000000000000000000000001"});
		const stringiYOe2A9 = await PACTFz1hfJY.name.call({from: accounts[2]});
		const boolSTyBdbj = await PACTFz1hfJY.transfer.call(addresskmhU4nm, uintw7CiSo7, {from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTCGbK4aU = await PACT.new({from: accounts[0]});
		const uintH5Rrjk = BigInt("608")
		const addressxYs579x = accounts[3]
		const addressNbwW0Cr = accounts[5]
		const uint8C9z2wls = await PACTCGbK4aU.decimals.call({from: accounts[5]});
		const uint8je1ot4 = await PACTCGbK4aU.decimals.call({from: accounts[5]});
		const boolyzZ8cnf = await PACTCGbK4aU.burn.call(addressxYs579x, uintH5Rrjk, {from: accounts[5]});
		const boolkI9DbSY = await PACTCGbK4aU.setupBasePool.call(addressNbwW0Cr, {from: accounts[3]});

		assert.equal(uint8C9z2wls, BigInt("18"))
		assert.equal(uint8je1ot4, BigInt("18"))
		await expect(PACTCGbK4aU.burn.call(addressxYs579x, uintH5Rrjk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTu3RX41o = await PACT.new({from: accounts[2]});
		const addressC5PePR9 = "0x0000000000000000000000000000000000000001"
		const uintrn6YhDq = BigInt("1720")
		const addressHeF1PJl = accounts[5]
		const addressIQhqLXK = accounts[4]
		const boolxEYRRwU = await PACTu3RX41o.setupFarming.call(addressC5PePR9, {from: accounts[3]});
		const boolMv0vap = await PACTu3RX41o.transfer.call(addressHeF1PJl, uintrn6YhDq, {from: accounts[4]});
		const uint9mNELn = await PACTu3RX41o.balanceOf.call(addressIQhqLXK, {from: accounts[0]});
		const uint8J8whON = await PACTu3RX41o.decimals.call({from: accounts[2]});

		await expect(PACTu3RX41o.setupFarming.call(addressC5PePR9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})