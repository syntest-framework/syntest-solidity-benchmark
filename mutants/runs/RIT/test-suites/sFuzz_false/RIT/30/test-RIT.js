const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITQUqIJtC = await RIT.new({from: accounts[2]});
		const addressRXP5lM7 = accounts[3]
		const uintG14fHjn = BigInt("1897")
		const addressCjs6Uxo = accounts[0]
		const uintyvDvX4v = BigInt("1694")
		const addressJH6JTCi = accounts[4]
		const uint256A8sz1gr = await RITQUqIJtC.balanceOf.call(addressRXP5lM7, {from: accounts[2]});
		const boolnTuKru5 = await RITQUqIJtC.decreaseAllowance.call(addressCjs6Uxo, uintG14fHjn, {from: accounts[0]});
		const stringTywL4rO = await RITQUqIJtC.symbol.call({from: accounts[3]});
		const boolLC14ogO = await RITQUqIJtC.increaseAllowance.call(addressJH6JTCi, uintyvDvX4v, {from: accounts[0]});

		assert.equal(uint256A8sz1gr, BigInt("0"))
		await expect(RITQUqIJtC.decreaseAllowance.call(addressCjs6Uxo, uintG14fHjn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITEaSRtqV = await RIT.new({from: accounts[3]});
		const uintd3EuoBC = BigInt("2043")
		const addressO4csVY = accounts[0]
		const addressNdVBvbh = accounts[0]
		const uintqCsGKKP = BigInt("1056")
		const addressjE1GVAK = accounts[0]
		const uintTMpekXN = BigInt("740")
		const addressx2nSa8p = accounts[1]
		const addressOhBRt5t = accounts[3]
		const stringYkjrg5V = await RITEaSRtqV.name.call({from: accounts[3]});
		const boolXx9WE5E = await RITEaSRtqV.transferFrom.call(addressNdVBvbh, addressO4csVY, uintd3EuoBC, {from: accounts[1]});
		const boolNEwoyap = await RITEaSRtqV.approve.call(addressjE1GVAK, uintqCsGKKP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eahMsOD = await RITEaSRtqV._burn.call(uintTMpekXN, {from: accounts[0]});
		const uint256qkgXQWO = await RITEaSRtqV.allowance.call(addressOhBRt5t, addressx2nSa8p, {from: accounts[4]});

		assert.equal(stringYkjrg5V, "Real Estate Investment Token")
		await expect(RITEaSRtqV.transferFrom.call(addressNdVBvbh, addressO4csVY, uintd3EuoBC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITFbRXN3E = await RIT.new({from: accounts[4]});
		const uintm9Qm0Cq = BigInt("1477")
		const addressgjCnvDW = accounts[4]
		const uintqlutjxX = BigInt("341")
		const addressqMd0Ld = accounts[1]
		const boolItBWgcU = await RITFbRXN3E.transfer.call(addressgjCnvDW, uintm9Qm0Cq, {from: accounts[4]});
		const string9SB2Ko = await RITFbRXN3E.symbol.call({from: accounts[3]});
		const boolhkHVslz = await RITFbRXN3E.decreaseAllowance.call(addressqMd0Ld, uintqlutjxX, {from: accounts[1]});
		const stringohGh8E1 = await RITFbRXN3E.name.call({from: accounts[2]});

		await expect(RITFbRXN3E.transfer.call(addressgjCnvDW, uintm9Qm0Cq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfSdTmSw = await RIT.new({from: accounts[2]});
		const addresspdcQVe = accounts[5]
		const addresshwvSQA = accounts[3]
		const uintsha5GVa = BigInt("279")
		const addressIlfnsBA = accounts[5]
		const uint25657KCxW = await RITfSdTmSw.allowance.call(addresshwvSQA, addresspdcQVe, {from: accounts[1]});
		const stringlg7zrwd = await RITfSdTmSw.name.call({from: accounts[3]});
		const boolwRuv4kE = await RITfSdTmSw.approve.call(addressIlfnsBA, uintsha5GVa, {from: accounts[4]});

		assert.equal(boolwRuv4kE, true)
		assert.equal(stringlg7zrwd, "Real Estate Investment Token")
		assert.equal(uint25657KCxW, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITM5jZRxU = await RIT.new({from: accounts[2]});
		const addressNwodn15 = accounts[4]
		const stringKeMngVb = await RITM5jZRxU.symbol.call({from: accounts[0]});
		const uint256xtFtg9t = await RITM5jZRxU.balanceOf.call(addressNwodn15, {from: accounts[5]});
		const stringZKNapoI = await RITM5jZRxU.name.call({from: accounts[3]});

		assert.equal(stringKeMngVb, "RIT 2.0")
		assert.equal(stringZKNapoI, "Real Estate Investment Token")
		assert.equal(uint256xtFtg9t, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITzb5vvDF = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgsk7XAq = accounts[2]
		const addressKqaUNr3 = accounts[4]
		const addressjvlOLU = accounts[2]
		const uintVJUYwTl = BigInt("1481")
		const addressECJnhW8 = accounts[3]
		const uint256uuJPkDe = await RITzb5vvDF.allowance.call(addressKqaUNr3, addressgsk7XAq, {from: accounts[4]});
		const uint256bi3rsSk = await RITzb5vvDF.balanceOf.call(addressjvlOLU, {from: accounts[3]});
		const stringOwBFlst = await RITzb5vvDF.symbol.call({from: accounts[5]});
		const uint8Kd2Y5cB = await RITzb5vvDF.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhyULhd = await RITzb5vvDF.decreaseAllowance.call(addressECJnhW8, uintVJUYwTl, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITHsaSCDt = await RIT.new({from: accounts[4]});
		const addressbUqC9PI = accounts[3]
		const uintNU6it8o = BigInt("156")
		const addressuInLwhe = accounts[1]
		const addressa0SM4G2 = accounts[1]
		const uint256QinnLST = await RITHsaSCDt.totalSupply.call({from: accounts[1]});
		const uint256eRTP4Gq = await RITHsaSCDt.balanceOf.call(addressbUqC9PI, {from: accounts[0]});
		const string6AnhFU = await RITHsaSCDt.name.call({from: accounts[4]});
		const stringl0may0X = await RITHsaSCDt.symbol.call({from: accounts[2]});
		const booleOCHhMs = await RITHsaSCDt.transferFrom.call(addressa0SM4G2, addressuInLwhe, uintNU6it8o, {from: accounts[2]});

		assert.equal(string6AnhFU, "Real Estate Investment Token")
		assert.equal(stringl0may0X, "RIT 2.0")
		assert.equal(uint256QinnLST, BigInt("500000000000000000000000000"))
		assert.equal(uint256eRTP4Gq, BigInt("0"))
		await expect(RITHsaSCDt.transferFrom.call(addressa0SM4G2, addressuInLwhe, uintNU6it8o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfSdTmSw = await RIT.new({from: accounts[2]});
		const addressgzY7uwO = accounts[5]
		const addressjbjhhZA = accounts[3]
		const addressrvL9Nz1 = accounts[4]
		const address3Jrhgd = accounts[2]
		const uintT0sqPUW = BigInt("279")
		const addresseHVWs4y = accounts[5]
		const uint25657KCxW = await RITfSdTmSw.allowance.call(addressjbjhhZA, addressgzY7uwO, {from: accounts[1]});
		const uint256fKpYI8r = await RITfSdTmSw.allowance.call(address3Jrhgd, addressrvL9Nz1, {from: accounts[2]});
		const uint8JSljtT2 = await RITfSdTmSw.decimals.call({from: accounts[1]});
		const stringlg7zrwd = await RITfSdTmSw.name.call({from: accounts[3]});
		const boolwRuv4kE = await RITfSdTmSw.approve.call(addresseHVWs4y, uintT0sqPUW, {from: accounts[4]});

		assert.equal(boolwRuv4kE, true)
		assert.equal(stringlg7zrwd, "Real Estate Investment Token")
		assert.equal(uint25657KCxW, BigInt("0"))
		assert.equal(uint256fKpYI8r, BigInt("0"))
		assert.equal(uint8JSljtT2, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITfSdTmSw = await RIT.new({from: accounts[2]});
		const addressfvqngQf = accounts[5]
		const addresslb8eSIc = accounts[3]
		const uintiXXL1rP = BigInt("774")
		const address1GgN6V = accounts[2]
		const uintfHVYUK = BigInt("1035")
		const addressc8P3dnz = "0x0000000000000000000000000000000000000001"
		const addresslR2sxKe = accounts[0]
		const uint25657KCxW = await RITfSdTmSw.allowance.call(addresslb8eSIc, addressfvqngQf, {from: accounts[1]});
		const boolVFiwnyF = await RITfSdTmSw.increaseAllowance.call(address1GgN6V, uintiXXL1rP, {from: accounts[2]});
		const boolJjnwR7D = await RITfSdTmSw.transferFrom.call(addresslR2sxKe, addressc8P3dnz, uintfHVYUK, {from: "0x0000000000000000000000000000000000000001"});
		const stringlg7zrwd = await RITfSdTmSw.name.call({from: accounts[3]});

		assert.equal(boolVFiwnyF, true)
		assert.equal(uint25657KCxW, BigInt("0"))
		await expect(RITfSdTmSw.transferFrom.call(addresslR2sxKe, addressc8P3dnz, uintfHVYUK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfSdTmSw = await RIT.new({from: accounts[2]});
		const addressxD0Pm1g = accounts[5]
		const uintbplKY3 = BigInt("1800")
		const uintDy2t1Ns = BigInt("1761")
		const addresszVEaDas = accounts[3]
		const addressM1qzza = accounts[5]
		const addressbBYdaj1 = accounts[4]
		const uint256hDsMj4K = await RITfSdTmSw.balanceOf.call(addressxD0Pm1g, {from: accounts[1]});
		const uint256jdaRlfW = await RITfSdTmSw._burn.call(uintbplKY3, {from: accounts[0]});
		const boold8KEdmn = await RITfSdTmSw.approve.call(addresszVEaDas, uintDy2t1Ns, {from: accounts[1]});
		const uint25657KCxW = await RITfSdTmSw.allowance.call(addressbBYdaj1, addressM1qzza, {from: accounts[1]});

		assert.equal(uint256hDsMj4K, BigInt("0"))
		await expect(RITfSdTmSw._burn.call(uintbplKY3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})